import { Description, Divider, HeaderLeft, HeaderRight, HeaderWrapper, Name, ProfilePicture } from "./Header.styled"

const Header = () => {
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
    </>
  );
}

export default Header;