import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { includes } from 'ramda';
import { Row, Col } from 'antd';
import {
  Wrapper,
  PostContainer,
  ImageSection,
  PostTitle,
  Date,
  SummaryContent,
} from './blogs.styles';
import { getAnimation } from '../../reducers/navigation/navigation.selector';

const Blogs = ({ animation }) => {
  const [animate, setAminate] = useState(false);

  useEffect(() => {
    setAminate(includes('blog', animation));
  }, [animation]);

  return (
    <Wrapper>
      <Row>
        <Col xs={24} md={12} lg={6}>
          <PostContainer animate={animate} delay='.15s'>
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
          <PostContainer animate={animate} delay='.3s'>
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
          <PostContainer animate={animate} delay='.45s'>
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
          <PostContainer animate={animate} delay='.6s'>
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

const mapStateToProps = state => ({
  animation: getAnimation(state),
});

export default connect(mapStateToProps)(Blogs);
