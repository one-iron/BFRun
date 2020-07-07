// external modules
import styled from 'styled-components';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { RECOMMEND } from '../../config';

// internal modules
import BFTest from '../BFTest';
import Recommend from './Recommend';
import Test from './Test';

const VideoList = (props) => {
  const [recommended, setRecommended] = useState();

  // useEffect(() => {
  //   axios
  //     .get('https://run.mocky.io/v3/257ee40e-be84-4f39-8a53-aba9e5691ddf')
  //     .then((res) => setRecommended(res.data));
  // }, []);

  // console.log('props video list', props.recommendList);
  return (
    <VideoWrap>
      <BFTest />
      <article>
        <Recommend title="전체" recommended={props.recommendList.general} />
        <Test title="전체Test" recommended={props.recommendList.general} />
        <Test title="프론트Test" recommended={props.recommendList.front} />
        <Test title="백Test" recommended={props.recommendList.back} />
        {/* <Recommend title="프론트엔드 추천 영상" />
        <Recommend title="백엔드 추천 영상" /> */}
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
