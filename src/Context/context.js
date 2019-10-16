import React, { createContext, useState } from "react";
export const ThemeContext = createContext();
const Context = props => {
  const [isLightTheme, setisLightTheme] = useState(true);
  const [light] = useState({
    syntax: "#555",
    ui: "#ddd",
    bg: "#eee"
  });
  const [dark] = useState({
    syntax: "#ddd",
    ui: "#333",
    bg: "#555"
  });
  const toggle = () => {
    setisLightTheme(!isLightTheme);
  };
  return (
    <ThemeContext.Provider
      value={{
        isLightTheme: isLightTheme,
        light: light,
        dark: dark,
        toggle: toggle
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default Context;
