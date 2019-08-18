import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  margin-top: 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PostContainer = styled.div`
  width: 100%;
  max-width: 270px;
  margin: 0 auto;
  margin-bottom: 2rem;
  cursor: pointer;
  opacity: 0;
  ${props =>
    props.animate &&
    css`
      animation: ${fadeIn} 0.5s ${props.delay} ease-in forwards;
    `}
`;

const ImageSection = styled.div`
  height: 200px;
  width: 100%;
  img {
    width: 100%;
  }
`;

const PostTitle = styled.div`
  color: var(--primary);
  font-size: 1.35rem;
  font-weight: 600;
  font-family: 'Raleway';
  margin-top: 0.75rem;
`;

const Date = styled.div`
  text-transform: uppercase;
  font-size: 0.7rem;
  font-family: 'Open Sans', sans-serif;
  color: var(--primary);
  margin-top: 0.5rem;
  position: relative;
  margin-bottom: 2.5rem;

  ::after {
    content: '';
    height: 3px;
    width: 70px;
    display: block;
    background-color: var(--light-cyan);
    position: absolute;
    top: 2rem;
  }
`;

const SummaryContent = styled.div`
  font-size: 0.9rem;
  color: var(--primary);
  height: 60px;
`;

export {
  Wrapper,
  PostContainer,
  ImageSection,
  PostTitle,
  Date,
  SummaryContent,
};
