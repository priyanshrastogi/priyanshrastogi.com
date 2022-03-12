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
