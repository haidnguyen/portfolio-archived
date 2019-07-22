import React, { useRef, useEffect, useState } from 'react';
import { useChangeTitle } from '../../hooks';
import { includes } from 'ramda';
import {
  doSelectItem,
  getActive,
  doAnimate,
  getAnimation
} from '../../reducers/navigation';
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
  Develop,
  SkillBar,
  Gallery,
  ContactForm,
  Footer
} from '../../components';
import {
  Wrapper,
  Container,
  HexagonSection,
  Label,
  Text,
  InformationSection,
  Box,
  Decoration,
} from './home.styles';

const HomePage = ({ active, selectItem, animate, animation }) => {
  const aboutRef = useRef();
  const homeRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  const [aboutAnimate, setAboutAnimate] = useState(false);
  const [portfolioAnimate, setPortfolioAnimate] = useState(false);
  const [formAnimate, setFormAnimate] = useState(false);

  useChangeTitle('Nguyễn Đình Hải');

  useEffect(() => {
    setAboutAnimate(includes('about', animation));
    setPortfolioAnimate(includes('portfolio', animation));
    setFormAnimate(includes('contact', animation));
  }, [animation]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        aboutRef &&
        aboutRef.current &&
        aboutRef.current.getBoundingClientRect().top < 400 &&
        aboutRef.current.getBoundingClientRect().top > -10 &&
        active !== 'about'
      ) {
        selectItem('about');
        animate('about');
      }

      if (
        homeRef &&
        homeRef.current &&
        homeRef.current.getBoundingClientRect().top > -500 &&
        active !== 'home'
      ) {
        selectItem('home');
      }

      if (
        portfolioRef && 
        portfolioRef.current &&
        portfolioRef.current.getBoundingClientRect().top < 400 &&
        portfolioRef.current.getBoundingClientRect().top > -10 &&
        active !== 'portfolio'
      ) {
        selectItem('portfolio');
        animate('portfolio');
      }

      if (
        contactRef &&
        contactRef.current &&
        contactRef.current.getBoundingClientRect().top < 300 &&
        contactRef.current.getBoundingClientRect().top > -10 &&
        active !== 'contact'
      ) {
        selectItem('contact');
        animate('contact');
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
        <Box>
          <Title animationName='about'>About</Title>
          <Container>
            <HexagonSection animate={aboutAnimate}>
              <Hexagon>
                <Meter size={64} color='white' />
              </Hexagon>
              <Label>Performance</Label>
              <Text>
                Fast load times and smooth animations is my highest priority.
              </Text>
            </HexagonSection>
            <HexagonSection delay='.2s' animate={aboutAnimate}>
              <Hexagon>
                <Responsive size={64} color='white' />
              </Hexagon>
              <Label>Responsive</Label>
              <Text>
                Big or small, mobile or desktop? It doesn't matter I can handle
                all.
              </Text>
            </HexagonSection>
            <HexagonSection delay='.4s' animate={aboutAnimate}>
              <Hexagon>
                <AutoFix size={64} color='white' />
              </Hexagon>
              <Label>Animation</Label>
              <Text>
                I like do "something" cool and always looking for more.
              </Text>
            </HexagonSection>
            <HexagonSection delay='.6s' animate={aboutAnimate}>
              <Hexagon>
                <Develop size={64} color='white' />
              </Hexagon>
              <Label>Technology</Label>
              <Text>
                Technologies are my friends and I am never scrared of making new
                one.
              </Text>
            </HexagonSection>
          </Container>

          <Container>
            <InformationSection animate={aboutAnimate} slideLeft>
              <Label>Who Am I?</Label>
              <Text>
                I'm a Front-End Developer. I studied at University of Science Ho
                Chi Minh City. I have been started make web application with
                Node.js, Angular, React for 2 years.
              </Text>
            </InformationSection>
            <InformationSection slideRight animate={aboutAnimate}>
              <SkillBar fill={80} delay='1.65s' animate={aboutAnimate}>
                JavaScript
              </SkillBar>
              <SkillBar fill={70} delay='1.75s' animate={aboutAnimate}>
                HTML
              </SkillBar>
              <SkillBar fill={80} delay='1.85s' animate={aboutAnimate}>
                CSS
              </SkillBar>
              <SkillBar fill={70} delay='1.95s' animate={aboutAnimate}>
                React
              </SkillBar>
              <SkillBar fill={50} delay='2.05s' animate={aboutAnimate}>
                Node.js
              </SkillBar>
              <SkillBar fill={40} delay='2.2s' animate={aboutAnimate}>
                MongoDB
              </SkillBar>
            </InformationSection>
          </Container>
        </Box>
      </Section>
      <Section id='portfolio' ref={portfolioRef}>
        <Box>
          <Title animationName='portfolio'>Projects</Title>
          <Gallery animate={portfolioAnimate} />
        </Box>
      </Section>

      <Section id='contact' ref={contactRef} dark cleartop>
        <Decoration />
        <Box>
          <Title animationName='contact' contract>
            Contact
          </Title>
          <ContactForm animate={formAnimate}/>
        </Box>
      </Section>

      <Footer/>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  active: getActive(state),
  animation: getAnimation(state)
});

const mapDispatchToProps = dispatch => ({
  selectItem: item => dispatch(doSelectItem(item)),
  animate: animation => dispatch(doAnimate(animation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
