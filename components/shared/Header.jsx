import { useRouter } from "next/router";
import { useContext } from "react";
import { ToggleThemeContext } from "../extra/ToggleThemeContext";
import { Description, Divider, HeaderLeft, HeaderRight, HeaderWrapper, Link, MenuLinks, MenuWrapper, Name, ProfilePicture, ThemeMode } from "./Header.styled"

const Header = () => {

  const router = useRouter();

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
          <ThemeMode src={state.darkMode ? "/sun.svg" : "/moon.svg"} onClick={toggleMode} />
        </MenuWrapper>
      <Divider />
    </>
  );
}

export default Header;