import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { useContext } from "react";
import theme from '../../styles/theme';
import { ToggleThemeContext } from "./ToggleThemeContext";

const ThemeProvider = ({ children }) => {

  const { state } = useContext(ToggleThemeContext);

  return (
    <EmotionThemeProvider theme={state.darkMode ? theme.dark : theme.light}>
      {children}
    </EmotionThemeProvider>
  );
}

export default ThemeProvider;