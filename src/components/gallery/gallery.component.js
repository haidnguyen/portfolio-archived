import React, { useState } from 'react';
import hgb from '../../assets/hgb.PNG';
import { drop } from 'ramda';
import { Tab } from '..';
import { ChevronRight, ChevronLeft } from 'react-feather';
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
import { Close } from '..';

const Gallery = ({ animate, ...rest }) => {
  const [hgbVisible, setHgbVisible] = useState(false);
  const [slideLeft, setSlideLeft] = useState(false);
  const [slideRight, setSlideRight] = useState(false);
  const [slides, setSlides] = useState(['red', 'green', 'blue']);

  const handleShow = proj => _ => {
    if (proj === 'hgb') {
      setHgbVisible(true);
    }
  };

  const handleClose = proj => _ => {
    if (proj === 'hgb') {
      setHgbVisible(false);
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
        <Card image={hgb} delay='0.75s' revert>
          <Container>
            <Title>Hotel Group Booking</Title>
            <Hightlight>React + Node.js</Hightlight>
            <Button>Learn more</Button>
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
              <Slide bg={slide} key={i}/>
            ))}
            <SlideButton onClick={handleSlide('left')}>
              <ChevronLeft
                size={32}
                color='white'
              />
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
    </Wrapper>
  );
};

export default Gallery;
