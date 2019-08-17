import styled, { css } from 'styled-components';
import { ReactComponent as MeterIcon } from '../assets/speedometer.svg';
import { ReactComponent as ResponsiveIcon } from '../assets/responsive.svg';
import { ReactComponent as AutoFixIcon } from '../assets/auto-fix.svg';
import { ReactComponent as DevelopIcon } from '../assets/develop.svg';
import { ReactComponent as CloseIcon } from '../assets/close.svg';
import { ReactComponent as TabIcon } from '../assets/tab.svg';
import { ReactComponent as DChevronUp } from '../assets/chevron-double-up.svg';
import { ReactComponent as TagIcon } from '../assets/tag.svg';
import { ReactComponent as TagMultiIcon } from '../assets/tag-multiple.svg';
import { ReactComponent as FileDocIcon } from '../assets/file-document-outline.svg';
import { ReactComponent as TranslateIcon } from '../assets/translate.svg';
import { ReactComponent as RocketIcon } from '../assets/rocket.svg';
import { ReactComponent as GraduationCapIcon } from '../assets/graduation-cap-solid.svg';
import { ReactComponent as PuzzleIcon } from '../assets/puzzle-piece-solid.svg';
import { ReactComponent as WorkingIcon } from '../assets/briefcase-solid.svg';

const Hightlight = styled.span`
  color: var(--highlight);
  font-weight: 600;
`;

const Section = styled.div`
  background-color: var(--white);
  padding: 4rem 0 8rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${props => props.height};
  position: relative;
  ${props =>
    props.cleartop &&
    css`
      padding-top: 0;
    `};

  :nth-of-type(even) {
    background-color: var(--background-gray);
  }
  ${props =>
    props.dark &&
    css`
      background-color: var(--background-dark) !important;
    `};
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

const ChevronDoubleUp = styled(DChevronUp)`
  width: ${props => props.size || 24}px;
  height: ${props => props.size || 24}px;
  fill: ${props => props.color};
`;

const Tag = styled(TagIcon)`
  width: ${props => props.size || 24}px;
  height: ${props => props.size || 24}px;
  fill: ${props => props.color};
`;

const TagMulti = styled(TagMultiIcon)`
  width: ${props => props.size || 24}px;
  height: ${props => props.size || 24}px;
  fill: ${props => props.color};
`;

const FileDocument = styled(FileDocIcon)`
  width: ${props => props.size || 24}px;
  height: ${props => props.size || 24}px;
  fill: ${props => props.color};
`;

const Translate = styled(TranslateIcon)`
  width: ${props => props.size || 24}px;
  height: ${props => props.size || 24}px;
  fill: ${props => props.color};
`;

const Skill = styled(RocketIcon)`
  width: ${props => props.size || 24}px;
  height: ${props => props.size || 24}px;
  fill: ${props => props.color};
`;

const Project = styled(PuzzleIcon)`
  width: ${props => props.size || 24}px;
  height: ${props => props.size || 24}px;
  fill: ${props => props.color};
`;

const GraduationCap = styled(GraduationCapIcon)`
  width: ${props => props.size || 24}px;
  height: ${props => props.size || 24}px;
  fill: ${props => props.color};
`;

const Working = styled(WorkingIcon)`
  width: ${props => props.size || 24}px;
  height: ${props => props.size || 24}px;
  fill: ${props => props.color};
`;

export {
  Hightlight,
  Section,
  Meter,
  Responsive,
  AutoFix,
  Develop,
  Close,
  Tab,
  ChevronDoubleUp,
  Tag,
  TagMulti,
  FileDocument,
  Translate,
  Skill,
  Project,
  GraduationCap,
  Working,
};
