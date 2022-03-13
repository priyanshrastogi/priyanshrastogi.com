import { createContext, useReducer } from "react";

export const ToggleThemeContext = createContext();

const initialState = {
  darkMode: true,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      localStorage.setItem('mode', 'light');
      return { darkMode: false };
    case "DARKMODE":
      localStorage.setItem('mode', 'dark');
      return { darkMode: true };
    default:
      return state;
  }
};

export function ToggleThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return <ToggleThemeContext.Provider value={{ state, dispatch }}>{props.children}</ToggleThemeContext.Provider>;
}