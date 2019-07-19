import styled from 'styled-components';

const Wrapper = styled.div`
  width: 120px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ::before {
    content: '';
    width: 120px;
    height: 0;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 50px solid var(--light-cyan);
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
  }

  ::after {
    content: "";
      width: 120px;
      height: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      border-top: 50px solid var(--light-cyan);
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
  }
`;

const Container = styled.div`
  position: absolute;
  width: 120px;
  height: 100px;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export { Wrapper, Container };
