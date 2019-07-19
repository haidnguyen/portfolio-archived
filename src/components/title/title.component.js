import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { includes } from 'ramda';
import { Wrapper, Text, Bar } from './title.styles';
import { getAnimation } from '../../reducers/navigation';

const Title = ({ children, animation, animationName, ...rest }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(includes(animationName, animation));
  }, [animation, animationName]);
  return (
    <Wrapper {...rest}>
      <Text visible={visible}>{children}</Text>
      <Bar visible={visible}/>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  animation: getAnimation(state)
});

export default connect(mapStateToProps)(Title);
