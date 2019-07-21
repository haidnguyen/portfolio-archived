import styled, { keyframes } from 'styled-components';

const rollDown = keyframes`
  0% {
    transform: translateY(-50px);
  }

  100% {
    transform: translateY(0);
  }
`;

const zoomOut = keyframes`
  0% {
    transform: scale(1, 1);
  }

  100% {
    transform: scale(.9, .9);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  background-color: var(--dark);
  position: relative;
`;

const UpButton = styled.span`
  position: absolute;
  height: 50px;
  width: 50px;
  background-color: var(--highlight);
  top: -25px;
  left: calc(50% - 25px);
  right: calc(50% -25px);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    animation: ${zoomOut} .2s ease forwards;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
`;

const LinkContainer = styled.a`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #262f38;
  cursor: pointer;
  transition: background-color 0.3s ease;
  overflow: hidden;

  :hover {
    background-color: var(--light-cyan);
    animation: ${zoomOut} 0.2s ease forwards;
    svg {
      animation: ${rollDown} 0.2s ease forwards;
    }
  }
`;

const Text = styled.div`
    font-family: Arial, Helvetica, sans-serif;

  color: #8f9aa7;
  text-transform: uppercase;
  text-align: center;
  font-size: .7rem;
  margin-top: 2rem;

  span {
    color: var(--highlight);
  }
`;

export { Wrapper, UpButton, Container, LinkContainer, Text };
