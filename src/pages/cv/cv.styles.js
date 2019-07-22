import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: var(--background-cv);
  ${props => props.isPrint ? 'padding: 0' : 'padding: 3rem 0'};
  font-family: 'Roboto';
`;

const Container = styled.div`
  background-color: var(--white);
  width: 920px;
  height: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2b3033;
  font-size: 2.5rem;
  color: var(--white);
`;

const PositionSection = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  color: #aeaeae;
  font-size: 1.25rem;
`;

const BodySection = styled.div`
  display: flex;
  padding: 2.5rem 1rem;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;

  span {
    margin: 1rem;
  }
`;

const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0da89f;
  border-radius: 50%;
`;

const Line = styled.div`
  flex-grow: 1;
  background-color: #cccccc;
  height: 1px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem 0 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  font-size: 0.9rem;
  color: #545e6c;
  line-height: 24px;
  margin-bottom: 0.75rem;

  div {
    width: 15%;
    height: 24px;
    display: flex;
    align-items: center;

    svg {
      color: #0da89f;
    }
  }

  span {
    flex-grow: 1;
  }
`;

const TextContent = styled.div`
  font-size: 0.9rem;
  color: #545e6c;
  padding: 0 0.5rem 0 1rem;
`;

const SkillItem = styled.span`
  font-size: 0.9rem;

  ::before {
    content: '-';
    margin-right: 0.5rem;
    font-size: 1rem;
  }
`;

const TimeSpanItem = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 20px;

  h1 {
    display: flex;
    flex-direction: row;
    font-size: 0.9rem;
    margin-bottom: 0;

    h2 {
      font-size: 0.8rem;
      color: #444444;
      font-weight: 700;
      position: relative;
      padding-left: 12px;
      width: 30%;
      margin-bottom: 0;

      ::before {
        content: '\u25A0';
        position: absolute;
        top: -1.5px;
        left: 0;
      }
    }

    h3 {
      font-size: 0.9rem;
      color: #0da89f;
      flex-grow: 1;
      font-weight: 800;
      margin-bottom: 0;
    }
  }

  & > div {
    border-left: 1px solid #cccccc;
    margin-left: 3px;
  }
`;

const ListContent = styled.div`
  padding: .75rem 0 0 0;
  padding-left: 30%;

  h1 {
    font-size: .9rem;
    font-weight: 700;
    color: #3f4655;
    font-style: italic;
    margin-bottom: .5rem;
  }

  h2 {
    font-size: .9rem;
    color: #545e6c;
  }

  h3 {
    font-size: .9rem;
    color: #545e6c;
    ::before {
      content: '\u25CF';
      margin-right: .5rem;
    }
  }
`;

const Button = styled.span`
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--highlight);
  color: var(--white);
  padding: .5rem 1rem;
  display: flex;
  flex-direction: column;
`;

const LngButton = styled(Button)`
  top: 40px;
  left: 0;
  background-color: var(--light-cyan);
  text-transform: uppercase;
`;

export {
  Wrapper,
  Container,
  Header,
  PositionSection,
  BodySection,
  LeftSection,
  RightSection,
  Block,
  Title,
  Line,
  IconContainer,
  Content,
  ContactItem,
  TextContent,
  SkillItem,
  TimeSpanItem,
  ListContent,
  Button,
  LngButton
};
