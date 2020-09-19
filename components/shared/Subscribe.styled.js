import styled from '@emotion/styled';

export const SubscribeWrapper = styled.div`
  margin-top: 100px;
  padding: 50px 20px;
  text-align: center;
  background: linear-gradient(90deg, ${props => props.theme.gradients[props.index].start + ', ' + props.theme.gradients[props.index].end});
`;

export const InputWrapper = styled.div`
  @media only screen and (max-width: 812px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const SubscribeText = styled.p`
  font-size: 28px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 20px;

  @media only screen and (max-width: 812px) {
    font-size: 16px;
    width: 100%;
    margin-bottom: 20px;
  }

`;

export const Input = styled.input`
  height: 50px;
  min-width: 50%;
  font-size: 28px;
  background: ${props => props.theme.backgrounds.primary};
  color: ${props => props.theme.colors.primary};
  border-image-source: linear-gradient(90deg, ${props => props.theme.gradients[props.index].start + ', ' + props.theme.gradients[props.index].end});
  border-width: 5px;
  border-image-slice: 1;
  padding: 0 10px;

  :focus {
    border-image-source: linear-gradient(90deg, ${props => props.theme.gradients[props.index].start + ', ' + props.theme.gradients[props.index].end});
    border-width: 5px;
    border-image-slice: 1;
  }

  @media only screen and (max-width: 812px) {
    font-size: 16px;
    width: 100%;
  }
`;

export const Submit = styled.button`
  height: 60px;
  font-size: 28px;
  color: ${props => props.theme.colors.primary};
  padding: 0px 40px; 
  background: linear-gradient(90deg, ${props => props.theme.gradients[props.index].start + ', ' + props.theme.gradients[props.index].end});
  border: none;
  cursor: pointer;

  @media only screen and (max-width: 812px) {
    font-size: 16px;
    padding: 0px 20px;
  }
`;

export const SubscribeMessage = styled.p`
  font-size: 28px;
  color: ${props => props.theme.colors.primary};
  margin-top: 20px;

  @media only screen and (max-width: 812px) {
    font-size: 16px;
    width: 100%;
    margin-top: 20px;
  }
`;