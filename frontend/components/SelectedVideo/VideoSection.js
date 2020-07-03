// external modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';
import styled, { css } from 'styled-components';

const VideoSection = ({ selectedTags }) => {
  const [videoData, setVideoData] = useState([]);
  const videoCount = videoData.length; // 영상이 4개 이상일때만 좌, 우 버튼이 랜더 될 수 있도록 하기 위함..

  const moveRoute = (page) => {
    Router.push(page);
  };

  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/67348608-f1af-47a6-94eb-a5a5896c8e5a')
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
                <div>
                  {data.title.length < 20
                    ? data.title
                    : `${data.title.slice(0, 35)}...`}
                </div>
                <CreatorName>{data.creator}</CreatorName>
                {/* <CreatorName>조회수 {data.views.toLocaleString()}</CreatorName> */}
                <div />
              </VideoLi>
            );
          })}
        </ul>
        <Button next>
          <i className="fa fa-caret-right" />
        </Button>
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
  /* border: 1px solid green; */
  font-size: 20px;
  display: block;
`;

const VideoLiContainer = styled.div`
  /* border: 1px solid red; */
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
  /* border: 1px solid red; */
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  border-radius: 5px;
  float: left;
  margin: 10px;
  width: 200px;
  height: 200px;
  box-shadow: 0.1em 0 0.5em rgba(0, 0, 0, 0.3);
  &:hover {
    transform: scale(1.04);
  }
  div {
    font-size: 14px;
    margin-left: 4px;
    padding: 4px;
    /* white-space: nowrap; */
    /* overflow: hidden; */
    /* text-overflow: ellipsis; */
  }
  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;

const CreatorName = styled.div`
  font-size: 12px;
  color: grey;
  position: absolute;
  bottom: 2px;
`;

const ThumbNail = styled.img`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  /* cursor: pointer; */
`;
