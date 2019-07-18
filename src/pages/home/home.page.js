import React from 'react';
import { Header, Navbar, Section } from '../../components';
import { useChangeTitle } from '../../hooks';
import { Wrapper } from './home.styles';

const HomePage = () => {
  useChangeTitle('Home Page');

  return (
    <Wrapper>
      <Header id='home'/>
      <Navbar/>
      <Section backgroundColor='red' id='about'/>
      <Section backgroundColor='blue'id='portfolio'/>
      <Section backgroundColor='green' id='contact'/>
    </Wrapper>
  );
};

export default HomePage;
