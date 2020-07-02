// external modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';
import styled, { css } from 'styled-components';

const VideoSection = ({ selectedTags }) => {
  const [videoData, setVideoData] = useState([]);
  const videoCount = videoData.length; // 영상이 4개 이상이면 좌, 우 버튼이 랜더 될 수 있도록 하기 위함..

  const moveRoute = (page) => {
    Router.push(page);
  };

  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/1bc92fb2-edd8-4414-8cfb-cfd846e889df')
      .then((res) => setVideoData(res.data.videos));
  }, []);

  return (
    <VideoSectionWrap>
      <CategoryName>{selectedTags}</CategoryName>
      <VideoLiContainer>
        {videoCount > 4 && (
          <Button back>
            <i className="fa fa-caret-left" />
          </Button>
        )}
        <ul>
          {videoData.map((data) => {
            return (
              <VideoLi onClick={() => moveRoute('/detail')}>
                <ThumbNail key={data.id} src={data.thumb} />
              </VideoLi>
            );
          })}
        </ul>
        {videoCount > 4 && (
          <Button next>
            <i className="fa fa-caret-right" />
          </Button>
        )}
      </VideoLiContainer>
    </VideoSectionWrap>
  );
};

export default VideoSection;

const VideoSectionWrap = styled.div`
  border: 1px solid blue;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  ul {
    /* border: 1px solid green; */
    margin: 5px 15px;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 500px) {
      justify-content: center;
    }
  }
`;

const CategoryName = styled.strong`
  border: 1px solid green;
  font-size: 20px;
  display: block;
`;

const VideoLiContainer = styled.div`
  border: 1px solid red;
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 5px;
`;

const Button = styled.div`
  cursor: pointer;
  font-size: 50px;
  color: rgba(255, 118, 117, 1);
  position: absolute;
  ${(props) =>
    props.back &&
    css`
      left: 0;
    `}
  ${(props) =>
    props.next &&
    css`
      right: 0;
    `}
`;

const VideoLi = styled.li`
  float: left;
  margin: 10px;
  width: 160px;
  @media (max-width: 500px) {
    width: 200px;
  }
`;

const ThumbNail = styled.img`
  width: 100%;
  cursor: pointer;
`;
