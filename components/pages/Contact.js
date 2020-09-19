import React from 'react';
import { ContactWrapper, ContactHeaderText, ContactText, ContactHeader, ContactLink } from './Contact.styled';

const Contact = () => {
  
  return (
    <ContactWrapper>
      <ContactHeader>
        <ContactHeaderText index={5}>Reach Me Out</ContactHeaderText>
      </ContactHeader>
      <ContactText>You can drop me a message or get to know me more on&nbsp;
        <ContactLink href='https://twitter.com/priyanshx7' target='_blank'>Twitter</ContactLink>,&nbsp;
        <ContactLink href='https://github.com/priyanshrastogi' target='_blank'>GitHub</ContactLink>,&nbsp;
        <ContactLink href='https://linkedin.com/in/priyanshrastogi' target='_blank'>LinkedIn</ContactLink>,&nbsp;
        <ContactLink href='https://instagram.com/priyanshrastogix' target='_blank'>Instagram</ContactLink>,&nbsp;
        <ContactLink href='https://medium.com/@priyanshrastogi' target='_blank'>Medium</ContactLink>,
        or&nbsp;
        <ContactLink href='mailto:hello@priyanshrastogi.com' target='_blank'>Email</ContactLink>.
        </ContactText>
    </ContactWrapper>
  );
}

export default Contact;