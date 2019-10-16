import React, { useContext } from "react";
import { ThemeContext } from "../Context/context";

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ color: theme.syntax, background: theme.ui }}>
      <h1>Context App</h1>
      <ul>
        <li style={{ background: theme.ui }}>Home</li>
        <li style={{ background: theme.ui }}>About</li>
        <li style={{ background: theme.ui }}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
