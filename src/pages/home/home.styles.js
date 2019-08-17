import styled, { keyframes, css } from 'styled-components';
import { Row, Col } from 'antd';
import { ReactComponent as DecorationIcon } from '../../assets/top-decore.svg';

const flipX = keyframes`
  0% {
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }

  40% {
    opacity: 0.2;
  }

  70% {
    transform: perspective(400px) rotateY(-20deg);
  }

  80% {
    opacity: 0.6;
  }

  100% {
    transform: perspective(400px) rotateY(0deg);
    opacity: 1;
  }
`;

const slideInLeft = keyframes`
  0% {
    transform: translateX(-400px);
    opacity: 0;
  }

  50% {
    opacity: .3;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  0% {
    transform: translateX(400px);
    opacity: 0;
  }

  50% {
    opacity: .3;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const Wrapper = styled.div``;

const Container = styled(Row).attrs(props => ({
  gutter: 0,
}))`
  margin-top: 5rem;
`;

const HexagonSection = styled(Col).attrs(props => ({
  xs: 12,
  md: 6,
}))`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  opacity: 0;
  ${props =>
    props.animate &&
    css`
      animation: ${flipX} 0.3s ${props => props.delay} ease-in-out forwards;
    `};

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Label = styled.span`
  font-size: 1.5rem;
  color: var(--primary);
  margin-top: 0.5rem;
  font-weight: 700;
`;

const Text = styled.span`
  font-size: 0.9rem;
  color: var(--primary);
  width: 180px;
  text-align: center;

  @media (min-width: 576px) {
    width: 90%;
    max-width: 280px;
    font-size: 1rem;
  }
`;

const InformationSection = styled(Col).attrs(props => ({
  xs: 24,
  md: 12,
}))`
  padding: 1rem;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  &:nth-of-type(2) {
    padding: 0 1.5rem;
  }

  &:nth-of-type(1) {
    margin-bottom: 2rem;
  }

  ${Text} {
    margin-top: 1rem;
    width: 370px;
  }

  ${props =>
    props.animate &&
    props.slideLeft &&
    css`
      animation: ${slideInLeft} 0.8s 0.75s ease forwards;
    `};

  ${props =>
    props.animate &&
    props.slideRight &&
    css`
      animation: ${slideInRight} 0.8s 0.75s ease forwards;
    `}
`;

const Box = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: ${props => props.pt};
`;

const Decoration = styled(DecorationIcon)`
  margin-bottom: 4rem;
  path {
    fill: ${props => props.color};
    stroke: ${props => props.color};
  }
`;

const Mask = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export {
  Wrapper,
  Container,
  HexagonSection,
  Label,
  Text,
  InformationSection,
  Box,
  Mask,
  Decoration,
};
