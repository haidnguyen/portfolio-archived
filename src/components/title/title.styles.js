import styled, { keyframes, css } from 'styled-components';

const slideInLeft = keyframes`
  0%{
    transform: translateX(-300px);
    opacity: 0;
  }

  80% {
    transform: translateX(40px);
    opacity: 1;
  }

  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  font-size: 2.5rem;
  color: ${props => (props.contract ? 'var(--white)' : 'var(--gray-dark)')};
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.5rem;
  opacity: 0;

  ${props =>
    props.visible &&
    css`
      animation: ${slideInLeft} 0.5s ease forwards;
    `};
`;

const Bar = styled.div`
  height: 4px;
  width: 80px;
  background-color: ${props =>
    props.contract ? 'var(--white)' : 'var(--gray-dark)'};
  opacity: 0;
  ${props =>
    props.visible &&
    css`
      animation: ${slideInLeft} 0.7s 0.35s ease forwards;
    `};
`;

export { Wrapper, Text, Bar };
