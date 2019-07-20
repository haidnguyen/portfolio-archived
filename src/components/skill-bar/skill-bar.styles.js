import styled, { keyframes, css } from 'styled-components';

const fillLeft = fill => keyframes`
  from {
    width: 0;
  }

  to {
    width: ${fill}%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: var(--light-cyan);
  width: 100%;
  margin-bottom: 1rem;
`;

const Label = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--white);
  width: 110px;
  padding: 4px 0;
  text-align: center;
`;

const Bar = styled.div`
  flex-grow: 1;
  background-color: var(--gray);
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 0;
    background-color: var(--dark-cyan);

    ${props => props.animate && css`
      animation: ${fillLeft(props.fill)} .7s ${props.delay} ease forwards;
    `};
  };

  ::after {
    content: '${props => props.fill}%';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 10%;
    min-width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .9rem;
    color: var(--primary);
  }
`;

export { Wrapper, Label, Bar };
