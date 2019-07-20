import React from 'react';
import { Wrapper, Label, Bar } from './skill-bar.styles';

const SkillBar = ({children, fill, delay, animate,...rest}) => {
  return (
    <Wrapper {...rest}>
      <Label>{children}</Label>
      <Bar fill={fill} animate={animate} delay={delay}/>
    </Wrapper>
  );
};

export default SkillBar;
