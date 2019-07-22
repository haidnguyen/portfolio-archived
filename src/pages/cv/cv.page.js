import React from 'react';
import {
  TagMulti,
  FileDocument,
  Skill,
  Translate,
  GraduationCap,
  Working,
  Project
} from '../../components';
import { Home, Mail, Phone, GitHub, Linkedin, User } from 'react-feather';
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
  ListContent
} from './cv.styles';
import { useChangeTitle } from '../../hooks';

const CV = props => {
  useChangeTitle('Nguyễn Đình Hải - CV');

  return (
    <Wrapper>
      <Container>
        <Header>Nguyễn Đình Hải</Header>
        <PositionSection>Front-End Web Developer</PositionSection>
        <BodySection>
          <LeftSection>
            <Block>
              <Title>
                <IconContainer>
                  <TagMulti color='#fff' size={16} />
                </IconContainer>
                <span>Liên Lạc</span>
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

                <ContactItem>
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
                </ContactItem>

                <ContactItem>
                  <div>
                    <User size={16} />
                  </div>
                  <span>https://dinhhai281.github.io/#/</span>
                </ContactItem>
              </Content>
            </Block>

            <Block>
              <Title>
                <IconContainer>
                  <FileDocument color='#fff' size={20} />
                </IconContainer>
                <span>Thông Tin</span>
                <Line />
              </Title>

              <TextContent>
                Tôi là Nguyễn Đình Hải, 22 tuổi. Tôi theo học ngành công nghệ
                phần mềm tại trường Đại học Khoa học Tự nhiên với mong muốn trở
                thành một kỹ sư phần mềm. Định hướng của tôi là Web Front-End và
                muốn phát triển theo con đường chuyên sâu về kỹ thuật vì tôi
                thích tìm hiểu và áp dụng các công nghệ mới vào công việc.
              </TextContent>
            </Block>

            <Block>
              <Title>
                <IconContainer>
                  <Skill color='#fff' size={20} />
                </IconContainer>
                <span>Kỹ Năng</span>
                <Line />
              </Title>
              <Content>
                <SkillItem>JavaScript</SkillItem>
                <SkillItem>HTML</SkillItem>
                <SkillItem>CSS</SkillItem>
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
                <span>Ngoại ngữ</span>
                <Line />
              </Title>
              <Content>
                <SkillItem>Tiếng Anh: TOEIC 730</SkillItem>
              </Content>
            </Block>
          </LeftSection>

          <RightSection>
            <Block>
              <Title>
                <IconContainer>
                  <GraduationCap color='#fff' size={20} />
                </IconContainer>
                <span>Học Vấn</span>
                <Line />
              </Title>
              <Content>
                <TimeSpanItem>
                  <h1>
                    <h2>9/2015 - 9/2019</h2>
                    <h3>Trường Đại học Khoa học Tự nhiên - ĐHQG HCM</h3>
                  </h1>

                  <div>
                    <ListContent>
                      <h1>Chuyên ngành: Công nghệ phần mềm</h1>
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
                <span>Kinh Nghiệm làm việc</span>
                <Line />
              </Title>
              <Content>
                <TimeSpanItem>
                  <h1>
                    <h2>6/2018 - 9/2018</h2>
                    <h3>Front-End Developer</h3>
                  </h1>

                  <div>
                    <ListContent>
                      <h1>Ant-Tech</h1>
                      <h2>Công việc: Sử dụng Angular để xây dựng front-end cho các project</h2>
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
                <span>Các Dự Án</span>
                <Line />
              </Title>
              <Content>
                <TimeSpanItem>
                  <h1>
                    <h2>Đồ án tốt nghiệp</h2>
                    <h3>Hệ thống đặt phòng khách sạn theo nhóm</h3>
                  </h1>

                  <div>
                    <ListContent>
                      <h1>Vai trò: Project Manager, Fullstack Developer</h1>
                      <h2>React, Node.js, Websocket, MongoDB</h2>
                      <h3>Phân tích và thiết kế hệ thống</h3>
                      <h3>Triển khai Front-End và Back-End</h3>
                      <h3>Thiết kế giao diện</h3>
                      <h3>Phân chia công việc trong nhóm</h3>
                    </ListContent>
                  </div>
                </TimeSpanItem>

                <TimeSpanItem>
                  <h1>
                    <h2>Đồ án môn học</h2>
                    <h3>Mạng xã hội phân tán</h3>
                  </h1>

                  <div>
                    <ListContent>
                      <h1>Vai trò: Fullstack Developer</h1>
                      <h2>React, Node.js, TypeScript</h2>
                      <h3>Phân tích và thiết kế hệ thống</h3>
                      <h3>Triển khai Front-End và Back-End</h3>
                      <h3>Thiết kế giao diện</h3>
                    </ListContent>
                  </div>
                </TimeSpanItem>

                <TimeSpanItem>
                  <h1>
                    <h2>Dự án thực tế</h2>
                    <h3>Joynit - Ứng dụng quản lý sự kiện</h3>
                  </h1>

                  <div>
                    <ListContent>
                      <h1>Vai trò: Front-End Developer</h1>
                      <h2>Angular, TypeScript, GraphQL</h2>
                      <h3>Xây dựng giao diện theo thiết kế</h3>
                    </ListContent>
                  </div>
                </TimeSpanItem>

              </Content>
            </Block>
          </RightSection>
        </BodySection>
      </Container>
    </Wrapper>
  );
};

export default CV;
