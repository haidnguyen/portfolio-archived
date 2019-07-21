import React from 'react';
import { ChevronDoubleUp } from '../../components';
import { Facebook, GitHub, Gitlab, Linkedin } from 'react-feather';
import { Wrapper, UpButton, Container, LinkContainer, Text } from './footer.styles';

const Footer = props => {

  const handleTop = _ => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <Wrapper>
      <UpButton onClick={handleTop}>
        <ChevronDoubleUp color='#ffffff' size={40} />
      </UpButton>
      <Container>
        <LinkContainer>
          <Facebook color='white' size={24} />
        </LinkContainer>
        <LinkContainer>
          <Linkedin color='white' size={24}/>
        </LinkContainer>
        <LinkContainer>
          <GitHub color='white' size={24}/>
        </LinkContainer>
        <LinkContainer>
          <Gitlab color='white' size={24}/>
        </LinkContainer>
      </Container>

      <Text>
        Nguyễn Đình Hải <span>&copy; 2019</span> <br/>
        Design by <span>Matthew Williams</span>
      </Text>
    </Wrapper>
  );
};

export default Footer;
