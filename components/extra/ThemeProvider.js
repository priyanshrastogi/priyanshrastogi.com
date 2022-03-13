import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { useContext, useEffect } from "react";
import theme from '../../styles/theme';
import { ToggleThemeContext } from "./ToggleThemeContext";

const ThemeProvider = ({ children }) => {

  const { state, dispatch } = useContext(ToggleThemeContext);

  useEffect(() => {
    const preference = localStorage.getItem('mode');
    const darkMode = window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (preference === 'light') {
      dispatch({ type: "LIGHTMODE" });
    } else if(darkMode || preference === 'dark') {
      dispatch({ type: "DARKMODE" });
    }else {
      dispatch({ type: "LIGHTMODE" });
    }
  }, []);

  return (
    <EmotionThemeProvider theme={state.darkMode ? theme.dark : theme.light}>
      {children}
    </EmotionThemeProvider>
  );
}

export default ThemeProvider;