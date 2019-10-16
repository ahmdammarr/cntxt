import React from "react";
import Navbar from "./Components/Navbar";
import Booklist from "./Components/Booklist";
import "./App.css";
import Context from "./Context/context";
import Toggle from "./Components/Toggle";
import Commerce from "./Components/Commerce";
import CartContext from "./Context/CartContext";
//import Songs from "./Components/Hooks/Songs";
function App() {
  return (
    <Context>
      <div className="App">
        <Navbar />
        <Booklist />
        <Toggle />
        <CartContext>
          <Commerce />
        </CartContext>
      </div>
    </Context>
  );
}

export default App;
