import styled, { keyframes, css } from 'styled-components';
import { Row, Col, Modal as AntModal } from 'antd';

const movingBg = keyframes`
  0% {
    background-position: 0 0;
  }

  30% {
    background-position: -50px -30px;
  }

  75% {
    background-position: -25px -150px;
  }

  100% {
    background-position: 0 0;
  }
`;

const movingBgRevert = keyframes`
  0% {
    background-position: 100% 100%;
  }

  30% {
    background-position: 90% -30px;
  }

  55% {
    background-position: 0 0;
  }

  80% {
    background-position: 0 80%;
  }

  100% {
    background-position: 100% 100%;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0px);
    opacity: 0;
  }

  to {
    transform: translateY(80px);
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(210px);
    opacity: 0;
  }

  to {
    transform: translateY(140px);
    opacity: 1;
  }
`;

const slideInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(150px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled(Row).attrs(props => ({
  type: 'flex',
  align: 'middle',
  justify: 'center'
}))`
  padding: 5rem 0;

  @media (min-width: 768px) {
    padding: 5rem 2rem;
  }
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: var(--dark);
  opacity: 0;
`;

const Hightlight = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: var(--highlight);
  opacity: 0;
`;

const Button = styled.button`
  outline: none;
  background-color: transparent;
  border: 2px solid var(--highlight);
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--dark);
  padding: 0.25rem 1.5rem;
  opacity: 0;
  cursor: pointer;
  transition: color, background-color 0.25s ease;

  :hover {
    color: var(--white);
    background-color: var(--highlight);
  }
`;

const Card = styled.div`
  height: 100%;
  width: 100%;
  max-width: 390px;
  background-image: url(${props => props.image});
  background-size: 550px auto;
  background-position: 0 0;
  background-repeat: no-repeat;
  animation: ${props => (props.revert ? movingBgRevert : movingBg)} 25s
    ${props => props.delay} ease both infinite;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    transition: background-color 0.45s ease;
  }

  &:hover {
    ${Title} {
      animation: ${slideDown} 0.3s ease-in forwards;
    }

    ${Hightlight} {
      animation: ${slideDown} 0.3s ease-in forwards;
    }

    ${Button} {
      animation: ${slideUp} 0.3s ease-in forwards;
    }

    ::before {
      background-color: var(--background-gray);
    }
  }
`;

const moveLeft = keyframes`
  from {
    transform: translateX(-700px);
  }

  to {
    transform: translateX(-1400px);
  }
`;

const moveRight = keyframes`
  from {
    transform: translateX(-700px);
  }

  to {
    transform: translateX(0px);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
`;

const AniWrapper = styled(Col).attrs(props => ({
  xs: 24,
  md: 12,
  lg: 8
}))`
  height: 300px;
  opacity: 0;
  display: flex !important;
  justify-content: center;
  ${props =>
    props.animate &&
    css`
      animation: ${slideInBottom} 0.5s ${props => props.delay} ease forwards;
    `};
`;

const Modal = styled(AntModal)`
  width: 100% !important;
  max-width: 700px;

  .ant-modal-body {
    padding: 0;
  }

  .ant-modal-content {
    border-radius: 0;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 1rem 1.5rem;
  position: relative;
  border-top: 4px solid var(--dark);

  h1 {
    font-size: 1.75rem;
    color: #444444;
    font-family: 'Raleway';
    font-weight: 700;
    margin-top: 1.25rem;
    margin-bottom: 0;
    line-height: 30px;
  }

  h2 {
    text-transform: uppercase;
    font-size: 1rem;
    color: #c0c0c0;
    font-family: 'Raleway';
    font-weight: 700;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  div {
    font-size: 0.9rem;
    color: #444444;
    font-family: 'Raleway';
  }
`;

const CloseButton = styled.span`
  color: #bbbbbb;
  position: absolute;
  bottom: 24px;
  right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    transition: all 0.2s ease;
  }

  :hover {
    svg {
      fill: var(--gray-dark);
    }
  }
`;

const ViewButton = styled.a`
  text-decoration: none;
  position: absolute;
  color: var(--white);
  background-color: var(--highlight);
  transition: color, background-color 0.3s ease;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  bottom: 24px;
  left: 24px;

  svg {
    margin-right: 0.75rem;
    fill: var(--white);
    transition: all 0.2s ease;
  }

  :hover {
    color: var(--highlight);
    background-color: transparent;

    svg {
      fill: var(--highlight);
    }
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 450px;
  display: inline-block;
  transform: translateX(-700px);
  background-image: url(${props => props.image});
  background-size: cover;
`;

const SlideButton = styled.span`
  width: 60px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  color: var(--dark);
  position: absolute;
  bottom: 0;
  cursor: pointer;
`;

const SlideShow = styled.div`
  height: 450px;
  white-space: nowrap;
  overflow: hidden;
  position: relative;

  ${Slide} {
    ${props => {
      if (props.slideLeft) {
        return css`
          animation: ${moveLeft} .5s ease backwards;
        `;
      }

      if (props.slideRight) {
        return css`
          animation: ${moveRight} .5s ease backwards
        `;
      }
    }}
  }

  ${SlideButton}:nth-of-type(1) {
    left: 0;
  }
  ${SlideButton}:nth-of-type(2) {
    right: 0;
  }
`;

export {
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
};
