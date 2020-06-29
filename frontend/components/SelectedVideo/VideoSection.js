import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const VideoSection = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/62a3749c-fc70-4800-b16f-4e9b2b2079a7')
      .then((res) => res.json())
      .then((res) => setVideoData(res.videos));
  }, []);

  return (
    <VideoSectionWrap>
      <CategoryName>제목부분</CategoryName>
      <VideoLiContainer>
        <Button back>
          <i className="fa fa-chevron-circle-left" />
        </Button>
        <ul>
          {videoData.map((data) => {
            return (
              <VideoLi>
                <iframe
                  title="youtube"
                  width="130"
                  height="80"
                  src={data.url}
                  frameBorder="0"
                  allowFullScreen
                />
              </VideoLi>
            );
          })}
        </ul>
        <Button next>
          <i className="fa fa-chevron-circle-right" />
        </Button>
      </VideoLiContainer>
    </VideoSectionWrap>
  );
};

export default VideoSection;

const VideoSectionWrap = styled.div`
  border: 1px solid blue;
  width: 90%;
  margin: 10px 0;
  padding: 10px;
  ul {
    border: 1px solid green;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
  font-size: 20px;
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
  width: 120px;
  height: 80px;
`;
