import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.secondary};
`;

export const HeaderRight = styled.div`
  display: flex;
`;

export const HeaderLeft = styled.div`
  display: flex;
`;

export const ProfilePicture = styled.img`
  width: 72px;
  height: 72px;

  @media only screen and (max-width: 812px) {
    width: 48px;
    height: 48px;
  }
`;

export const Name = styled.h1`
  margin: 0px 0px 0px 12px;
  color: ${props => props.theme.colors.secondary};

  @media only screen and (max-width: 812px) {
    font-size: 1.25em;
  }
`;

export const Description = styled.p`
  margin: 6px 0px 0px 12px;
  color: ${props => props.theme.colors.secondary};

  @media only screen and (max-width: 812px) {
    font-size: 0.8em;
    margin: 2px 0px 0px 12px;
  }
`;

export const Divider = styled.hr`
  margin: 24px 0px 36px;
`;

export const MenuWrapper = styled.div`
  margin: -24px 0px -18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Link = styled.a`
  color: ${props => props.active ? props.theme.colors.secondary : props.theme.colors.primary };
  font-size: 1.2em;
  line-height: 1.8em;
  text-decoration: none;
  margin-right: 16px;
  margin-bottom: 8px;
  font-weight: ${props => props.active ? '600' : '400'};

  @media only screen and (max-width: 812px) {
    font-size: 1em;
    line-height: 1.5em;
  }
`;

export const ThemeMode = styled.div`
  cursor: pointer;

  svg {
    margin: 0px;
  }
`