import styled from '@emotion/styled';

export const Title = styled.p`
  font-size: 1.5em;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 12px;
`;

export const Description = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: 1em;
  line-height: 1.5em;
  margin-bottom: 24px;

  @media only screen and (max-width: 812px) {
    font-size: 1em;
    line-height: 1.5em;
  }
  
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }
`;

export const WorkWrapper = styled.div`
  margin: 24px 0px;
`;

export const WorkItem = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

export const WorkLogo = styled.img`
  border-radius: 8px;
  height: 64px;
  width: 64px;

  @media only screen and (max-width: 812px) {
    height: 48px;
    width: 48px;
  }
`

export const WorkDetails = styled.div`
  margin-left: 12px;
`;

export const WorkCompany = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-weight: 600;
  font-size: 1.2em;
  margin-bottom: 4px;
`;

export const WorkDate = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: 0.8em;
  margin-top: 12px;
`;

export const WorkPosition = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: 1em;
`;

export const WorkDescription = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: 0.8em;
  margin: 12px 0px;
`;