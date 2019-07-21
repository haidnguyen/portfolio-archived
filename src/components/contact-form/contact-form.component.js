import React from 'react';
import { Wrapper, Form, Label, Button } from './contact-form.styles';

const ContactForm = ({animate}) => {
  return (
    <Wrapper>
      <Form animate={animate}>
        <Label>Want to work together?</Label>
        <input placeholder='Name'/>
        <input placeholder='Your Email'/>
        <textarea placeholder='Message' rows={5}/>
        <Button>submit</Button>
      </Form>
    </Wrapper>
  );
};

export default ContactForm;
