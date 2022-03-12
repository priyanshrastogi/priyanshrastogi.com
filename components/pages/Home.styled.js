import styled from '@emotion/styled';

export const HomeWrapper = styled.div``;

export const Divider = styled.hr`
  margin: 36px 0px;
`;

export const ShortBio = styled.div`
  margin: 24px 0px;
`;

export const BioText = styled.div`
  color: ${props => props.theme.colors.secondary};
  font-size: 1.2em;
  line-height: 1.4em;
  margin-bottom: 18px;

  @media only screen and (max-width: 812px) {
    font-size: 1em;
    line-height: 1.3em;
  }
`;

export const ProfileLink = styled.a`
  color: ${props => props.theme.colors.primary};
  font-size: 1.2em;
  line-height: 1.4em;
  text-decoration: none;

  @media only screen and (max-width: 812px) {
    font-size: 1em;
    line-height: 1.3em;
  }
`;

export const PageLinks = styled.div`
  margin: 36px 0px;
`;

export const PageLink = styled.a`
  display: block;
  width: fit-content;
  font-size: 1.2em;
  line-height: 1.4em;
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  padding: 8px 24px;
  border-radius: 4px;
  background: linear-gradient(90deg, ${props => props.theme.gradients[props.variant].start + ', ' + props.theme.gradients[props.variant].end});

  @media only screen and (max-width: 812px) {
    font-size: 1em;
    line-height: 1.3em;
  }
`;

export const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`;