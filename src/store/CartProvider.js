import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  total: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log(state.total);
      const itemWithId = {...action.payload.item, _id: action.payload._id};
      return {
        ...state,
        items: [...state.items, itemWithId],
        total: state.total + action.payload.item.price,
      };
    case "REMOVE_ITEM":
      console.log(action.payload)
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload._id),
        total: state.total - action.payload.price,
      };
    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
        total: state.total + action.payload.price,
      };
    case "CLEAR_CART":
      return {
        items: [],
        total: 0,
      };
    default:
      return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  console.log(cartState)

  const email = localStorage.getItem("email");
  const processedEmail = email.replace("@", "").replace(".", "");

  const addItemToCart = async (item) => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/4d30a91f8dd2468da7a270094631f5d9/${processedEmail}`,
        {
          method: "POST",
          body: JSON.stringify({
            item: item,
          }),
          headers: {
            "Content-Type": "application/JSON",
          },
        }
      );
      const addedData = await response.json();
      dispatchCartAction({ type: "ADD_ITEM", payload: addedData });
    } catch (err) {
      console.log(err);
    }
  };

  const removeItemFromCart = async (item) => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/4d30a91f8dd2468da7a270094631f5d9/${processedEmail}/${item._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/JSON",
          },
        }
      );
      if (response.ok) {
        dispatchCartAction({ type: "REMOVE_ITEM", payload: item });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const cartContext = {
    items: cartState.items,
    total: cartState.total,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
