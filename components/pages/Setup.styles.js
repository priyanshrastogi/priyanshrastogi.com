import styled from '@emotion/styled';

export const SetupWrapper = styled.div`
  margin-bottom: 36px;
`;

export const Item = styled.p`
  font-size: 1em;
  line-height: 1.5em;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 12px;
`;

export const Title = styled.span`
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
`;
