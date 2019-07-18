import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextSection = styled.div`
  color: var(--white);
  font-size: 1.5rem;
  margin-bottom: 0.75rem;

  @media (min-width: 576px) {
    font-size: 2.5rem;
  }
`;

const Button = styled.button`
  color: var(--white);
  font-size: 1rem;
  border: 2px solid var(--white);
  background-color: transparent;
  padding: 0.5rem 0.75rem 0.5rem 1.25rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;

  svg {
    margin-left: 0.75rem;
    transition: all 0.3s ease;
  }

  @media (min-width: 576px) {
    font-size: 1.25rem;
    padding: 0.75rem 1rem 0.75rem 1.5rem;
    &:hover {
      background-color: var(--light-cyan);
      border-color: var(--light-cyan);
      svg {
        transform: rotate(90deg);
      }
    }
  }
`;

export { Wrapper, Container, Canvas, TextSection, Button };
