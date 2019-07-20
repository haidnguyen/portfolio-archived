import React, { useState } from 'react';
import hgb from '../../assets/hgb.PNG';
import { drop } from 'ramda';
import { Tab } from '..';
import { ChevronRight, ChevronLeft } from 'react-feather';
import { Close } from '..';
import hgb1 from '../../assets/hgb1.PNG';
import hgb2 from '../../assets/hgb2.PNG';
import hgb3 from '../../assets/hgb3.PNG';
import vtn1 from '../../assets/vtn1.PNG';
import vtn2 from '../../assets/vtn2.PNG';
import {
  Wrapper,
  Card,
  Title,
  Container,
  Hightlight,
  Button,
  AniWrapper,
  Modal,
  ModalContainer,
  SlideShow,
  Content,
  CloseButton,
  ViewButton,
  Slide,
  SlideButton
} from './gallery.styles';

const Gallery = ({ animate, ...rest }) => {
  const [hgbVisible, setHgbVisible] = useState(false);
  const [vtnVisible, setVtnVisible] = useState(false);
  const [slideLeft, setSlideLeft] = useState(false);
  const [slideRight, setSlideRight] = useState(false);
  const [slides, setSlides] = useState([]);

  const handleShow = proj => _ => {
    if (proj === 'hgb') {
      setSlides([hgb1, hgb2, hgb3]);
      setHgbVisible(true);
    }

    if (proj === 'vtn') {
      setSlides([vtn1, vtn2]);
      setVtnVisible(true);
    }
  };

  const handleClose = proj => _ => {
    if (proj === 'hgb') {
      setHgbVisible(false);
    }

    if (proj === 'vtn') {
      setVtnVisible(false);
    }
  };

  const handleSlide = direction => _ => {
    if (direction === 'left') {
      setSlideLeft(true);
      setTimeout(() => {
        setSlides([...drop(1, slides), slides[0]]);
        setSlideLeft(false);
      }, 500);
    }

    if (direction === 'right') {
      setSlideRight(true);
      setTimeout(() => {
        setSlides([slides.pop(), ...slides]);
        setSlideRight(false);
      }, 500);
    }
  };

  return (
    <Wrapper {...rest}>
      <AniWrapper delay='.3s' animate={animate}>
        <Card image={hgb}>
          <Container>
            <Title>Hotel Group Booking</Title>
            <Hightlight>React + Node.js</Hightlight>
            <Button onClick={handleShow('hgb')}>Learn more</Button>
          </Container>
        </Card>
      </AniWrapper>

      <AniWrapper delay='.4s' animate={animate}>
        <Card image={vtn2} delay='0.75s' revert>
          <Container>
            <Title>Vortex Network</Title>
            <Hightlight>React + Node.js</Hightlight>
            <Button onClick={handleShow('vtn')}>Learn more</Button>
          </Container>
        </Card>
      </AniWrapper>

      <Modal
        visible={hgbVisible}
        onCancel={() => setHgbVisible(false)}
        footer={null}
        closable={false}
      >
        <ModalContainer>
          <SlideShow slideLeft={slideLeft} slideRight={slideRight}>
            {slides.map((slide, i) => (
              <Slide image={slide} key={i} />
            ))}
            <SlideButton onClick={handleSlide('left')}>
              <ChevronLeft size={32} color='white' />
            </SlideButton>
            <SlideButton onClick={handleSlide('right')}>
              <ChevronRight size={32} color='white' />
            </SlideButton>
          </SlideShow>

          <Content>
            <h1>Hotel Group Booking</h1>
            <h2>Hotel Service Application</h2>

            <div>
              Hotel Group Booking help hotel to sell empty room and help user
              find good hotels base on their requirement. It was built with
              Express, MongoDB, Socket.io, React. 
            </div>

            <CloseButton onClick={handleClose('hgb')}>
              <Close size={32} color='#bbb' />
            </CloseButton>
            <ViewButton target='_blank' href='https://client-hgb.web.app/'>
              <Tab size={16} /> View Site
            </ViewButton>
          </Content>
        </ModalContainer>
      </Modal>

      <Modal
        visible={vtnVisible}
        onCancel={() => setVtnVisible(false)}
        footer={null}
        closable={false}
      >
        <ModalContainer>
          <SlideShow slideLeft={slideLeft} slideRight={slideRight}>
            {slides.map((slide, i) => (
              <Slide image={slide} key={i} />
            ))}
            <SlideButton onClick={handleSlide('left')}>
              <ChevronLeft size={32} color='white' />
            </SlideButton>
            <SlideButton onClick={handleSlide('right')}>
              <ChevronRight size={32} color='white' />
            </SlideButton>
          </SlideShow>

          <Content>
            <h1>Vortex Network</h1>
            <h2>Distributed Social Network</h2>
            <div>
              A project in third year in university which is powered by
              Blockchain (provided by teacher) to manage distributed database across all students' private node. It was built with Node.js, React, Material UI.
            </div>
            <CloseButton onClick={handleClose('vtn')}>
              <Close size={32} color='#bbb' />
            </CloseButton>
            <ViewButton target='_blank' href=''>
              <Tab size={16} /> View Site
            </ViewButton>
          </Content>
        </ModalContainer>
      </Modal>
    </Wrapper>
  );
};

export default Gallery;
