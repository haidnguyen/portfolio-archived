import React from 'react';
import { Header, Navbar } from '../../components';
import { useChangeTitle } from '../../hooks';
import { Wrapper } from './home.styles';

const HomePage = () => {
  useChangeTitle('Home Page');

  return (
    <Wrapper>
      <Header/>
      <Navbar/>
    </Wrapper>
  );
};

export default HomePage;
