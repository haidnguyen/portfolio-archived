import React from 'react';
import { connect } from 'react-redux';
import { getActive, doSelectItem } from '../../reducers/navigation';
import { Wrapper, Container, Item } from './navbar.styles';

const Navbar = ({ active, selectItem, ...rest }) => {
  const renderItem = value => {
    const handleClick = _ => {
      selectItem(value);
    };

    return (
      <Item active={value === active} onClick={handleClick} key={value}>
        {value}
      </Item>
    );
  };

  return (
    <Wrapper {...rest}>
      <Container>
        {['home', 'about', 'portfolio', 'contact'].map(item =>
          renderItem(item)
        )}
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  active: getActive(state)
});

const mapDispatchToProps = dispatch => ({
  selectItem: item => dispatch(doSelectItem(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
