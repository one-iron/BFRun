// external modules
import styled from 'styled-components';
import Recommend from './Recommend';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// internal modules
import BFTest from '../BFTest';

const VideoList = () => {
  const [recommended, setRecommended] = useState();

  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/257ee40e-be84-4f39-8a53-aba9e5691ddf')
      .then((res) => setRecommended(res.data));
  }, []);

  return (
    <VideoWrap>
      <BFTest />
      <article>
        <Recommend recommended={recommended} />
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
  /* height: 1200px; */
  margin: 0 auto;
  /* border: 1px solid green; */

  @media ${(props) => props.theme.laptopM} {
    left: 0;
    width: 90%;
  }
`;

// const TitleH2 = styled.h2`
//   font-weight: 700;
//   font-size: 30px;
//   padding: 5px;
//   margin: 0 50px;
// `;

// const VideoContainer = styled.article`
//   border: 1px solid rgba(255, 234, 167, 0.4);
//   border-radius: 10px;
//   background-color: rgba(255, 234, 167, 0.4);
//   /* margin: 2px 4px; */
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Button = styled.div`
//   cursor: pointer;
//   font-size: 70px;
//   color: rgba(255, 118, 117, 1);
// `;

// const Videos = styled.div`
//   /* border: 1px solid green; */
//   display: flex;
//   flex-wrap: wrap;
//   padding: 0 5px;
//   @media (max-width: 701px) {
//     justify-content: center;
//   }
//   div {
//     width: 200px;
//     height: 120px;
//     border: 1px solid rgba(255, 118, 117, 1);
//     margin: 5px 5px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: rgba(255, 118, 117, 1);
//   }
// `;
