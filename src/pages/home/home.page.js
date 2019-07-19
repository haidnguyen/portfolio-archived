import React, { useRef, useEffect } from 'react';
import { useChangeTitle } from '../../hooks';
import { doSelectItem, getActive, doAnimate } from '../../reducers/navigation';
import { connect } from 'react-redux';
import {
  Header,
  Navbar,
  Section,
  Title,
  Hexagon,
  Meter,
  Responsive,
  AutoFix,
  Develop
} from '../../components';
import { Wrapper, Container, HexagonSection, Label, Text } from './home.styles';

const HomePage = ({ active, selectItem, animate }) => {
  const aboutRef = useRef();
  const homeRef = useRef();

  useChangeTitle('Home Page');

  useEffect(() => {
    const handleScroll = () => {
      if (
        aboutRef.current.getBoundingClientRect().top < 400 &&
        active !== 'about'
      ) {
        selectItem('about');
        animate('about');
      }

      if (
        homeRef.current.getBoundingClientRect().top > -500 &&
        active !== 'home'
      ) {
        selectItem('home');
      }
    };
    handleScroll();
    window.onscroll = handleScroll;

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Wrapper>
      <Header id='home' ref={homeRef} />
      <Navbar />

      <Section id='about' ref={aboutRef}>
        <Title animationName='about'>About</Title>
        <Container>
          <HexagonSection>
            <Hexagon>
              <Meter size={64} color='white' />
            </Hexagon>
            <Label>Performance</Label>
            <Text>
              Fast load times and smooth animations is my highest priority.
            </Text>
          </HexagonSection>
          <HexagonSection>
            <Hexagon>
              <Responsive size={64} color='white' />
            </Hexagon>
            <Label>
              Responsive
            </Label>
            <Text>
              Big or small, mobile or desktop? It doesn't matter.
            </Text>
          </HexagonSection>
          <HexagonSection>
            <Hexagon>
              <AutoFix size={64} color='white' />
            </Hexagon>
            <Label>
              Animation
            </Label>
            <Text>
              I like do "something" cool and always looking for more.
            </Text>
          </HexagonSection>
          <HexagonSection>
            <Hexagon>
              <Develop size={64} color='white' />
            </Hexagon>
            <Label>
              Technology
            </Label>
            <Text>
              Technologies are my friends and I am never scrared of making new one. 
            </Text>
          </HexagonSection>
        </Container>
      </Section>
      <Section backgroundColor='blue' id='portfolio' />
      <Section backgroundColor='green' id='contact' />
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  active: getActive(state)
});

const mapDispatchToProps = dispatch => ({
  selectItem: item => dispatch(doSelectItem(item)),
  animate: animation => dispatch(doAnimate(animation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
