// external modules
import styled from 'styled-components';
import React from 'react';

// internal modules
import Recommend from './Recommend';

const VideoList = (props) => {
  return (
    <VideoWrap>
      <article>
        <Recommend
          title={`새싹 개발자들을 위한 꿀팁🌱`}
          recommended={props.recommendList.general}
        />
        <Recommend
          title="프론트엔드가 궁금하세요?"
          recommended={props.recommendList.front}
        />
        <Recommend
          title="백엔드에 관심이 있다면!"
          recommended={props.recommendList.back}
        />
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
