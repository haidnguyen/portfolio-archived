import styled, { keyframes, css } from 'styled-components';
import { Affix as AntAffix } from 'antd';
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
  ${props =>
    props.fixed &&
    css`
      animation: ${slide} 0.75s ease;
    `};
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
`;

const Item = styled(HashLink)`
  color: ${props => (props.active ? 'var(--highlight)' : 'var(--white)')};
  text-decoration: none;
  font-size: 1rem;
  text-transform: uppercase;
  margin: 0 20px;
  cursor: pointer;
  transition: color 0.4s ease;

  @media (min-width: 576px) {
    &:hover {
      color: var(--highlight);
    }
  }
`;

const Affix = styled(AntAffix)`
  .ant-affix {
    z-index: 99;
  }
`;

export { Wrapper, Container, Item, Affix };
