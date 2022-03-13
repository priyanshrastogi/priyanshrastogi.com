import styled from '@emotion/styled';

export const Divider = styled.hr`
  margin-bottom: 36px;
`;

export const FooterWrapper = styled.div`
  padding-bottom: 36px;
`;

export const FooterText = styled.p`
  font-size: 1em;
  line-height: 1.2em;
  color: ${props => props.theme.colors.secondary};
  margin-top: 36px;

  @media only screen and (max-width: 812px) {
    font-size: 0.8em;
    line-height: 1em;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Link = styled.a`
  color: ${props => props.theme.colors.primary};
  font-size: 1em;
  line-height: 1.2em;
  text-decoration: none;
  margin-right: 16px;
  margin-bottom: 8px;

  @media only screen and (max-width: 812px) {
    font-size: 0.8em;
    line-height: 1em;
  }
`;
