import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { useContext, useEffect } from "react";
import theme from '../../styles/theme';
import { ToggleThemeContext } from "./ToggleThemeContext";

const ThemeProvider = ({ children }) => {

  const { state, dispatch } = useContext(ToggleThemeContext);

  useEffect(() => {
    const mode = localStorage.getItem('mode');
    if (mode === 'light') {
      dispatch({ type: "LIGHTMODE" });
    } else {
      dispatch({ type: "DARKMODE" });
    }
  }, []);

  return (
    <EmotionThemeProvider theme={state.darkMode ? theme.dark : theme.light}>
      {children}
    </EmotionThemeProvider>
  );
}

export default ThemeProvider;