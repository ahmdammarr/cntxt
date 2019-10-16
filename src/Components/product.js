import React, { Component } from "react";
import { CartProvider } from "../Context/CartContext";
//import logo from "./logo.svg";
export default class Product extends Component {
  static contextType = CartProvider;
  displyProducts = () => {
    this.context.products.map(product => {
      return <li>{product.title}</li>;
    });
  };
  render() {
    console.log(
      this.context.products.map(product => {
        return product.title;
      })
    );
    return (
      <div>
        <h1>Helloo from product</h1>
        {this.displyProducts()}
      </div>
    );
  }
}
