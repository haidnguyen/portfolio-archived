import styled, { keyframes, css } from 'styled-components';

const zoomIn = keyframes`
  0% {
    transform: scale(0, 0);
  }

  65% {
    transform: scale(1.1, 1.1);
  }

  90% {
    transform: scale(.9, .9);
  }

  100% {
    transform: scale(1, 1);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
`;

const Button = styled.span`
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--white);
  border: 2px solid var(--white);
  background-color: transparent;
  padding: 0.35rem 1.75rem;
  width: fit-content;
  margin-top: 0.75rem;
  margin-left: auto;
  font-family: 'Raleway';
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    background-color: var(--light-cyan);
    border-color: var(--light-cyan);
  }
`;

const Form = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  transform: scale(0, 0);

  input {
    background-color: var(--dark);
    border: 1px solid transparent;
    height: 40px;
    line-height: 40px;
    padding: 1rem;
    font-size: 0.9rem;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 0.25rem;
    outline: none;
    color: var(--white);
  }

  textarea {
    background-color: var(--dark);
    border: 1px solid transparent;
    padding: 0.5rem 1rem;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9rem;
    outline: none;
    color: var(--white);
  }
  ${props =>
    props.animate &&
    css`
      animation: ${zoomIn} 0.8s ease-in forwards;
    `}
`;

const Label = styled.span`
  font-size: 1rem;
  color: var(--light-cyan);
  margin-top: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;

export { Wrapper, Form, Label, Button };
