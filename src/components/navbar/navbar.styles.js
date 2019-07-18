import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: var(--dark);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border-bottom: 3px solid var(--light-cyan);
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
`;

const Item = styled.span`
  color: ${props => props.active ? 'var(--hightlight)' : 'var(--white)'};
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
