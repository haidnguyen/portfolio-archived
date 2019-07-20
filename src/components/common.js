import styled from 'styled-components';
import { ReactComponent as MeterIcon } from '../assets/speedometer.svg';
import { ReactComponent as ResponsiveIcon } from '../assets/responsive.svg';
import { ReactComponent as AutoFixIcon } from '../assets/auto-fix.svg';
import { ReactComponent as DevelopIcon } from '../assets/develop.svg';
import { ReactComponent as CloseIcon } from '../assets/close.svg';
import { ReactComponent as TabIcon } from '../assets/tab.svg';

const Hightlight = styled.span`
  color: var(--hightlight);
  font-weight: 600;
`;

const Section = styled.div`
  background-color: var(--white);
  padding: 4rem 0 8rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${props => props.height};

  :nth-of-type(even) {
    background-color: var(--background-gray);
  }
`;

const Meter = styled(MeterIcon)`
  width: ${props => props.size || 24}px;
  height: ${props => props.size || 24}px;
  fill: ${props => props.color};
`;

const Responsive = styled(ResponsiveIcon)`
  width: ${props => props.size || 24}px;
  height: ${props => props.size || 24}px;
  fill: ${props => props.color};
`;

const AutoFix = styled(AutoFixIcon)`
  width: ${props => props.size || 24}px;
  height: ${props => props.size || 24}px;
  fill: ${props => props.color};
`;

const Develop = styled(DevelopIcon)`
  width: ${props => props.size || 24}px;
  height: ${props => props.size || 24}px;
  fill: ${props => props.color};
`;

const Close = styled(CloseIcon)`
  width: ${props => props.size || 24}px;
  height: ${props => props.size || 24}px;
  fill: ${props => props.color};
`;

const Tab = styled(TabIcon)`
  width: ${props => props.size || 24}px;
  height: ${props => props.size || 24}px;
  fill: ${props => props.color};
`;

export { Hightlight, Section, Meter, Responsive, AutoFix, Develop, Close, Tab };
