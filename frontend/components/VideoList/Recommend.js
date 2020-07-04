import styled from 'styled-components';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

const Recommend = (props) => {
  return (
    <>
      <RecommendWrap>
        <TitleH2>{props.title}</TitleH2>
        <VideoContainer>
          <Button>
            <i className="fa fa-caret-left" />
          </Button>
          <Videos>
            <VideoWindow>
              <div>Video1</div>
              <div>Video2</div>
              <div>Video3</div>
              <div>Video4</div>
            </VideoWindow>
            <VideoWindow>
              <div>Video1</div>
              <div>Video2</div>
              <div>Video3</div>
              <div>Video4</div>
            </VideoWindow>
          </Videos>
          <Button
            onClick={() => {
              window.scrollTo(400, 0);
            }}
          >
            <i className="fa fa-caret-right" />
          </Button>
        </VideoContainer>
      </RecommendWrap>
    </>
  );
};

export default Recommend;

const RecommendWrap = styled.div`
  margin: 30px auto;
`;

const TitleH2 = styled.h2`
  font-weight: 700;
  font-size: 25px;
  padding: 5px;
  margin: 0 50px;
  margin-bottom: 10px;
`;

const VideoContainer = styled.article`
  /* border: 1px solid black; */
  border-radius: 10px;
  margin: 2px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  cursor: pointer;
  margin: 0 20px;
  font-size: 70px;
  color: black;
`;

const Videos = styled.div`
  border: 2px solid red;
  width: 900px;
  display: flex;
  padding: 0 5px;
  /* z-index: 10; */
  @media (max-width: 771px) {
    justify-content: center;
  }
  @media (max-width: 1004px) {
    justify-content: center;
    padding: 0 110px;
  }
`;

const VideoWindow = styled.div`
  display: flex;
  /* overflow: hidden; */
  div {
    width: 200px;
    height: 120px;
    border: 1px solid black;
    margin: 5px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
`;
