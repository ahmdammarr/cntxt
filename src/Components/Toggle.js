import React, { Component } from "react";
import { ThemeContext } from "../Context/context";

class Toggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggle } = this.context;
    return (
      <div>
        <button onClick={toggle}>Change Theme</button>
      </div>
    );
  }
}
export default Toggle;
