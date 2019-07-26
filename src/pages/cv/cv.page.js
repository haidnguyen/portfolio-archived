import React, { useState, useEffect } from 'react';
import {
  TagMulti,
  FileDocument,
  Skill,
  Translate,
  GraduationCap,
  Working,
  Project
} from '../../components';
import { useChangeTitle } from '../../hooks';
import { Home, Mail, Phone, User } from 'react-feather';
import html2canvas from 'html2canvas';
import {
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
} from './cv.styles';
import { useTranslation } from 'react-i18next';
window.html2canvas = html2canvas;

const CV = props => {
  useChangeTitle('Nguyễn Đình Hải - CV');
  const [t, i18n] = useTranslation();
  const [isPrint, setPrint] = useState(false);
  const [lng, setLng] = useState('en');

  useEffect(() => {
    i18n.changeLanguage(lng);
  }, [lng, i18n]);

  const handleDownload = _ => {
    setPrint(true);
    setTimeout(() => {
      window.print();
      setPrint(false);
    });
  };

  const handleLng = _ => {
    setLng(lng === 'en' ? 'vi' : 'en');
  };

  return (
    <Wrapper isPrint={isPrint}>
      <Container id='cv'>
        <Header>Nguyễn Đình Hải</Header>
        <PositionSection>Front-End Web Developer</PositionSection>
        <BodySection>
          <LeftSection>
            <Block>
              <Title>
                <IconContainer>
                  <TagMulti color='#fff' size={16} />
                </IconContainer>
                <span>{t('contact')}</span>
                <Line />
              </Title>
              <Content>
                <ContactItem>
                  <div>
                    <Home size={16} />
                  </div>
                  <span>23/38 Nơ Trang Long, Bình Thạnh</span>
                </ContactItem>

                <ContactItem>
                  <div>
                    <Mail size={16} />
                  </div>
                  <span>dinhhai281@gmail.com</span>
                </ContactItem>

                <ContactItem>
                  <div>
                    <Phone size={16} />
                  </div>
                  <span>(+84) 0886 511 763</span>
                </ContactItem>

                {/* <ContactItem>
                  <div>
                    <Linkedin size={16} />
                  </div>
                  <span>www.linkedin.com/in/ndhai</span>
                </ContactItem>

                <ContactItem>
                  <div>
                    <GitHub size={16} />
                  </div>
                  <span>https://github.com/dinhhai281</span>
                </ContactItem> */}

                <ContactItem>
                  <div>
                    <User size={16} />
                  </div>
                  <span>https://dinhhai281.github.io</span>
                </ContactItem>
              </Content>
            </Block>

            <Block>
              <Title>
                <IconContainer>
                  <FileDocument color='#fff' size={20} />
                </IconContainer>
                <span>{t('profile')}</span>
                <Line />
              </Title>

              <TextContent>{t('profile content')}</TextContent>
            </Block>

            <Block>
              <Title>
                <IconContainer>
                  <Skill color='#fff' size={20} />
                </IconContainer>
                <span>{t('skills')}</span>
                <Line />
              </Title>
              <Content>
                <SkillItem>JavaScript</SkillItem>
                <SkillItem>HTML</SkillItem>
                <SkillItem>CSS/SCSS</SkillItem>
                <SkillItem>React</SkillItem>
                <SkillItem>Redux/Redux-saga</SkillItem>
                <SkillItem>TypeScript</SkillItem>
                <SkillItem>Angular 2+</SkillItem>
                <SkillItem>Node.js</SkillItem>
                <SkillItem>NoSQL/MongoDB</SkillItem>
              </Content>
            </Block>

            <Block>
              <Title>
                <IconContainer>
                  <Translate color='#fff' size={20} />
                </IconContainer>
                <span>{t('language')}</span>
                <Line />
              </Title>
              <Content>
                <SkillItem>{t('english')}</SkillItem>
              </Content>
            </Block>
          </LeftSection>

          <RightSection>
            <Block>
              <Title>
                <IconContainer>
                  <GraduationCap color='#fff' size={20} />
                </IconContainer>
                <span>{t('education')}</span>
                <Line />
              </Title>
              <Content>
                <TimeSpanItem>
                  <h1>
                    <h2>9/2015 - 9/2019</h2>
                    <h3>{t('hcmus')}</h3>
                  </h1>

                  <div>
                    <ListContent>
                      <h1>{t('professional')}</h1>
                      <h2>GPA: 8.02</h2>
                    </ListContent>
                  </div>
                </TimeSpanItem>
              </Content>
            </Block>

            <Block>
              <Title>
                <IconContainer>
                  <Working color='#fff' size={20} />
                </IconContainer>
                <span>{t('work experience')}</span>
                <Line />
              </Title>
              <Content>
                <TimeSpanItem>
                  <h1>
                    <h2>6/2018 - 9/2018</h2>
                    <h3>Front-End Developer Intern</h3>
                  </h1>

                  <div>
                    <ListContent>
                      <h1>Ant-Tech</h1>
                      <h2>{t('job')}</h2>
                    </ListContent>
                  </div>
                </TimeSpanItem>
              </Content>
            </Block>

            <Block>
              <Title>
                <IconContainer>
                  <Project color='#fff' size={20} />
                </IconContainer>
                <span>{t('projects')}</span>
                <Line />
              </Title>
              <Content>
                <TimeSpanItem>
                  <h1>
                    <h2>{t('graduation project')}</h2>
                    <h3>{t('proj.1.name')}</h3>
                  </h1>

                  <div>
                    <ListContent>
                      <h1>{t('proj.1.role')}</h1>
                      <h2>{t('proj.1.tech')}</h2>
                      <h3>{t('proj.1.list.1')}</h3>
                      <h3>{t('proj.1.list.2')}</h3>
                      <h3>{t('proj.1.list.3')}</h3>
                      <h3>{t('proj.1.list.4')}</h3>
                    </ListContent>
                  </div>
                </TimeSpanItem>

                <TimeSpanItem>
                  <h1>
                    <h2>{t('school project')}</h2>
                    <h3>{t('proj.2.name')}</h3>
                  </h1>

                  <div>
                    <ListContent>
                      <h1>{t('proj.2.role')}</h1>
                      <h2>{t('proj.2.tech')}</h2>
                      <h3>{t('proj.2.list.1')}</h3>
                      <h3>{t('proj.2.list.2')}</h3>
                      <h3>{t('proj.2.list.3')}</h3>
                    </ListContent>
                  </div>
                </TimeSpanItem>

                <TimeSpanItem>
                  <h1>
                    <h2>{t('real project')}</h2>
                    <h3>{t('proj.3.name')}</h3>
                  </h1>

                  <div>
                    <ListContent>
                      <h1>{t('proj.3.role')}</h1>
                      <h2>{t('proj.3.tech')}</h2>
                      <h3>{t('proj.3.list.1')}</h3>
                    </ListContent>
                  </div>
                </TimeSpanItem>
              </Content>
            </Block>
          </RightSection>
        </BodySection>
      </Container>
      {!isPrint && (
        <>
          <Button onClick={handleDownload}>
            Print CV
          </Button>
          <LngButton onClick={handleLng}>
            {lng}
          </LngButton>
        </>
      )}
    </Wrapper>
  );
};

export default CV;
