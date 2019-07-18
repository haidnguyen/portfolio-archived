import styled, { keyframes } from 'styled-components';
import { HashLink } from 'react-router-hash-link';

const slide = keyframes`
  from {
    transform: translateY(-40px);
  }

  to {
    transform: translateY(0px);
  }
`;

const Wrapper = styled.div`
  background-color: var(--dark);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border-bottom: 3px solid var(--light-cyan);
  &.fixed {
    animation: ${slide} .75s ease;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
`;

const Item = styled(HashLink)`
  color: ${props => props.active ? 'var(--hightlight)' : 'var(--white)'};
  text-decoration: none;
  font-size: 1rem;
  text-transform: uppercase;
  margin: 0 20px;
  cursor: pointer;
  transition: color .4s ease;

  @media (min-width: 576px) {
    &:hover {
      color: var(--hightlight);
    }
  }
`;

export { Wrapper, Container, Item };
