import styled from 'styled-components';
import { Row, Col } from 'antd';

const Wrapper = styled.div``;

const Container = styled(Row).attrs(props => ({
  gutter: 0
}))`
  margin-top: 5rem;
`;

const HexagonSection = styled(Col).attrs(props => ({
  xs: 12,
  md: 6
}))`
  display: flex !important;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Label = styled.span`
  font-size: 1.5rem;
  color: var(--primary);
  margin-top: .5rem;
  font-weight: 700;
`;

const Text = styled.span`
  font-size: 1rem;
  color: var(--primary);
  width: 280px;
  text-align: center;
`;

export {
  Wrapper,
  Container,
  HexagonSection,
  Label,
  Text
};