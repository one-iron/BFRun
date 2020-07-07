// external modules
import styled from 'styled-components';
import React, { useState } from 'react';

// internal modules
import BFTest from '../BFTest';
import Recommend from './Recommend';

const VideoList = (props) => {
  return (
    <VideoWrap>
      <BFTest />
      <article>
        <Recommend
          title="전체 추천영상"
          recommended={props.recommendList.general}
        />
        <Recommend
          title="프론트 추천영상"
          recommended={props.recommendList.front}
        />
        <Recommend title="백 추천영상" recommended={props.recommendList.back} />
      </article>
    </VideoWrap>
  );
};

export default VideoList;

const VideoWrap = styled.section`
  position: relative;
  max-width: 950px;
  margin: 0 auto;
  margin-bottom: 30px;

  @media ${(props) => props.theme.laptopM} {
    left: 0;
    width: 90%;
  }
`;
