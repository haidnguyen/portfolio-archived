import React from 'react';
import { Wrapper, Container } from './hexagon.styles';

const Hexagon = ({children, ...rest}) => {
  return (
    <Wrapper {...rest}>
      <Container>
        {children}
      </Container>
    </Wrapper>
  );
};

export default Hexagon;
