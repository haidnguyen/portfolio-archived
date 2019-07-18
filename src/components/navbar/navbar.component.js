import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Affix } from 'antd';
import { getActive, doSelectItem } from '../../reducers/navigation';
import { Wrapper, Container, Item } from './navbar.styles';

const Navbar = ({ active, selectItem, ...rest }) => {

  const [fixed, setFixed] = useState(false);

  const renderItem = value => {
    const handleClick = _ => {
      selectItem(value);
    };

    return (
      <Item
        active={value === active}
        onClick={handleClick}
        key={value}
        to={`#${value}`}
        smooth
      >
        {value}
      </Item>
    );
  };

  const handleFixed = value => {
    setFixed(value);
  };

  return (
    <>
      <Affix onChange={handleFixed}>
        <Wrapper {...rest} className={fixed && 'fixed'}>
          <Container>
            {['home', 'about', 'portfolio', 'contact'].map(item =>
              renderItem(item)
            )}
          </Container>
        </Wrapper>
      </Affix>
    </>
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
