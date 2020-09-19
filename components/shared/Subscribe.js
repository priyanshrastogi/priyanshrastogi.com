import React from 'react';
import { Input, InputWrapper, Submit, SubscribeText, SubscribeWrapper } from './Subscribe.styled';

const Subscribe = () => {
  return (
    <SubscribeWrapper index={4}>
      <SubscribeText>Get latest blog posts, reviews right into your inbox.</SubscribeText>
      <InputWrapper>
        <Input index={5}/>
        <Submit index={6} disabled>Subscribe</Submit>
      </InputWrapper>
    </SubscribeWrapper>
  )  
}

export default Subscribe;