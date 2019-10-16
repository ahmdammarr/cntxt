import React, { Component, createContext } from "react";

export const CartProvider = createContext();
const Inventory = [
  {
    id: "1",
    title: "Fruit",
    products: [
      { id: 1, title: "Apple" },
      { id: 2, title: "Orange" },
      { id: 3, title: "Pear" }
    ]
  },
  {
    id: "2",
    title: "Vege",
    products: [
      { id: 4, title: "Capsicum" },
      { id: 5, title: "Carrot" },
      { id: 6, title: "Mushroom" },
      { id: 7, title: "Potato" }
    ]
  }
];

class CartContext extends Component {
  state = {
    products: Inventory
  };

  render() {
    return (
      <CartProvider.Provider value={{ ...this.state }}>
        {this.props.children}
      </CartProvider.Provider>
    );
  }
}
export default CartContext;
