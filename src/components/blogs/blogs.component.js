import React from 'react';
import { Row, Col } from 'antd';
import {
  Wrapper,
  PostContainer,
  ImageSection,
  PostTitle,
  Date,
  SummaryContent,
} from './blogs.styles';

const Blogs = () => {
  return (
    <Wrapper>
      <Row>
        <Col xs={24} md={12} lg={6}>
          <PostContainer>
            <ImageSection>
              <img
                src='https://via.placeholder.com/270x200'
                alt='post thumnail'
              />
            </ImageSection>
            <PostTitle>Breaking Your Coder's Block</PostTitle>
            <Date>August 17, 2019</Date>
            <SummaryContent>
              At one time or another, as a developer, we’ve all found ourselves
              hopelessly stuck on a coding issue ...
            </SummaryContent>
          </PostContainer>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <PostContainer>
            <ImageSection>
              <img
                src='https://via.placeholder.com/270x200'
                alt='post thumnail'
              />
            </ImageSection>
            <PostTitle>Breaking Your Coder's Block</PostTitle>
            <Date>August 17, 2019</Date>
            <SummaryContent>
              At one time or another, as a developer, we’ve all found ourselves
              hopelessly stuck on a coding issue ...
            </SummaryContent>
          </PostContainer>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <PostContainer>
            <ImageSection>
              <img
                src='https://via.placeholder.com/270x200'
                alt='post thumnail'
              />
            </ImageSection>
            <PostTitle>Breaking Your Coder's Block</PostTitle>
            <Date>August 17, 2019</Date>
            <SummaryContent>
              At one time or another, as a developer, we’ve all found ourselves
              hopelessly stuck on a coding issue ...
            </SummaryContent>
          </PostContainer>
        </Col>
        <Col xs={24} md={12} lg={6}>
          <PostContainer>
            <ImageSection>
              <img
                src='https://via.placeholder.com/270x200'
                alt='post thumnail'
              />
            </ImageSection>
            <PostTitle>Breaking Your Coder's Block</PostTitle>
            <Date>August 17, 2019</Date>
            <SummaryContent>
              At one time or another, as a developer, we’ve all found ourselves
              hopelessly stuck on a coding issue ...
            </SummaryContent>
          </PostContainer>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Blogs;
