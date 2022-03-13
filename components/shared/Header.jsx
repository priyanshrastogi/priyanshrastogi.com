import { useRouter } from "next/router";
import { useContext } from "react";
import { ToggleThemeContext } from "../extra/ToggleThemeContext";
import { Description, Divider, HeaderLeft, HeaderRight, HeaderWrapper, Link, MenuLinks, MenuWrapper, Name, ProfilePicture, ThemeMode } from "./Header.styled"
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from "@emotion/react";

const Header = () => {

  const router = useRouter();
  const theme = useTheme();
  const { state, dispatch } = useContext(ToggleThemeContext);

  const toggleMode = () => {
    if (state.darkMode) {
      dispatch({ type: "LIGHTMODE" });
    } else {
      dispatch({ type: "DARKMODE" });
    }
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderLeft>
          <ProfilePicture src="memoji.png" />
          <div>
            <Name>Priyansh Rastogi</Name>
            <Description>Musings on Tech, Finance and Life.</Description>
          </div>
        </HeaderLeft>
        <HeaderRight>
        </HeaderRight>
      </HeaderWrapper>
      <Divider />
        <MenuWrapper>
          <MenuLinks>
            <Link href="/" active={router.pathname === '/'}>Home</Link>
            <Link href="/blog" active={router.pathname === '/blog'}>Blog</Link>
            <Link href="/about" active={router.pathname === '/about'}>About</Link>
            <Link href="/setup" active={router.pathname === '/setup'}>Setup</Link>
          </MenuLinks>
          <ThemeMode>
            {state.darkMode ? <FiSun color={theme.colors.secondary} size={20} onClick={toggleMode} /> : <FiMoon color={theme.colors.secondary} size={20} onClick={toggleMode} />}
          </ThemeMode>
        </MenuWrapper>
      <Divider />
    </>
  );
}

export default Header;