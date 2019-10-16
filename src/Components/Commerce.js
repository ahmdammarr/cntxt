import React, { Component } from "react";
import { CartProvider } from "../Context/CartContext";
import Product from "./product";
export default class Commerce extends Component {
  displyProducts() {
    this.context.products.map(product => {
      return <li key={product.id}>{product.title}</li>;
    });
  }
  static contextType = CartProvider;
  render() {
    console.log(this.context);
    return (
      <div>
        <h1>The Market</h1>
        <div>{this.displyProducts()}</div>
        <Product />
      </div>
    );
  }
}
