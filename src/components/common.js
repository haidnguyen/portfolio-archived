import styled from 'styled-components';

const Hightlight = styled.span`
  color: var(--hightlight);
  font-weight: 600;
`;

const Section = styled.div`
  height: 1100px;
  background-color: ${props => props.backgroundColor};
`;

export {
  Hightlight,
  Section
}