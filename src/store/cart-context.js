import React from "react";

const CartContext = React.createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    getItems: () => {},
});

export default CartContext;