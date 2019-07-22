import React from 'react';
import { ChevronDoubleUp } from '../../components';
import { withRouter } from 'react-router-dom';
import { Facebook, GitHub, Gitlab, Linkedin } from 'react-feather';
import {
  Wrapper,
  UpButton,
  Container,
  LinkContainer,
  Text
} from './footer.styles';

const Footer = ({history}) => {
  const handleTop = _ => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Wrapper>
      <UpButton onClick={handleTop}>
        <ChevronDoubleUp color='#ffffff' size={40} />
      </UpButton>
      <Container>
        <LinkContainer
          href='https://www.facebook.com/hainguyen28197'
          target='_blank'
        >
          <Facebook color='white' size={24} />
        </LinkContainer>
        <LinkContainer href='https://www.linkedin.com/in/ndhai' target='_blank'>
          <Linkedin color='white' size={24} />
        </LinkContainer>
        <LinkContainer href='https://github.com/dinhhai281' target='_blank'>
          <GitHub color='white' size={24} />
        </LinkContainer>
        <LinkContainer href='https://gitlab.com/ngdhai' target='_blank'>
          <Gitlab color='white' size={24} />
        </LinkContainer>
      </Container>

      <Text>
        Nguyễn Đình Hải <span>&copy; 2019</span> <br />
        Design by <span>Matthew Williams</span>
      </Text>
    </Wrapper>
  );
};

export default withRouter(Footer);
