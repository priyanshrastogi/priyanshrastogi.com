import styled from '@emotion/styled';

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