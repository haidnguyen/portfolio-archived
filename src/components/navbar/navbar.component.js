import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getActive, doSelectItem } from '../../reducers/navigation';
import { Wrapper, Container, Item, Affix } from './navbar.styles';

const Navbar = ({ active, selectItem, ...rest }) => {
  const [fixed, setFixed] = useState(false);

  const renderItem = value => {
    return (
      <Item active={value === active} key={value} to={`#${value}`} smooth>
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
        <Wrapper {...rest} fixed={fixed}>
          <Container>
            {['home', 'about', 'portfolio', 'blog', 'contact'].map(item =>
              renderItem(item)
            )}
          </Container>
        </Wrapper>
      </Affix>
    </>
  );
};

const mapStateToProps = state => ({
  active: getActive(state),
});

const mapDispatchToProps = dispatch => ({
  selectItem: item => dispatch(doSelectItem(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
