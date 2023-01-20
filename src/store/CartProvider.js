import { useEffect, useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      console.log(action.payload);
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload._id),
      };
    case "FETCH_DATA":
      return {
        ...state,
        items: action.payload,
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

  const email = localStorage.getItem("email") || "";
  const processedEmail = email.replace("@", "").replace(".", "") || "";

  const getData = async () => {
    try {
      const response = await fetch(
        `https://crudcrud.com/api/025a0b5f5cd348279a355ed9bfc85b80/${processedEmail}`,
        {
          headers: {
            "Content-Type": "application/JSON",
          },
        }
      );
      const data = await response.json();
      dispatchCartAction({ type: "FETCH_DATA", payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const addItemToCart = async (item) => {
    let existingItemIndex = cartState.items.findIndex(
      (Item) => Item.id === item.id
    );
    let existingItem = cartState.items[existingItemIndex];

    if (existingItem) {
      const newQuantity = existingItem.quantity + item.quantity;
      try {

        const response = await fetch(
          `https://crudcrud.com/api/025a0b5f5cd348279a355ed9bfc85b80/${processedEmail}/${existingItem._id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              title: existingItem.title,
              price: existingItem.price,
              imageUrl: existingItem.imageUrl,
              id: existingItem.id,
              quantity: newQuantity,
            }),
            headers: {
              "Content-Type": "application/JSON",
            },
          }
        );
        if (response.ok) console.log("success");
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const response = await fetch(
          `https://crudcrud.com/api/025a0b5f5cd348279a355ed9bfc85b80/${processedEmail}`,
          {
            method: "POST",
            body: JSON.stringify({
              title: item.title,
              price: item.price,
              imageUrl: item.imageUrl,
              id: item.id,
              quantity: item.quantity,
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
    }
  };

  const removeItemFromCart = async (item) => {
    if (item.quantity !== 1) {
      try {
        const response = await fetch(
          `https://crudcrud.com/api/025a0b5f5cd348279a355ed9bfc85b80/${processedEmail}/${item._id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              title: item.title,
              price: item.price,
              imageUrl: item.imageUrl,
              id: item.id,
              quantity: item.quantity - 1,
            }),
            headers: {
              "Content-Type": "application/JSON",
            },
          }
        );
        if (response.ok) {
          getData();
          console.log("success");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const response = await fetch(
          `https://crudcrud.com/api/025a0b5f5cd348279a355ed9bfc85b80/${processedEmail}/${item._id}`,
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
    }
  };

  const cartContext = {
    items: cartState.items,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    getItems: getData,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
