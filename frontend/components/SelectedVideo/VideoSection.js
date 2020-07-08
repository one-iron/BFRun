// external modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Router from 'next/router';
import styled, { css } from 'styled-components';

// internal modules
import { SELECTED_VIDEO } from '../../config';

const VideoSection = ({ tag }) => {
  const [videoData, setVideoData] = useState([]);
  const videoCount = videoData.length; // 영상이 4개 이상일때만 좌, 우 버튼이 랜더 될 수 있도록 하기 위함..

  const moveRoute = (page) => {
    Router.push(page);
  };

  useEffect(() => {
    axios.get(SELECTED_VIDEO).then((res) => setVideoData(res.data.videos));
  }, []);

  return (
    <VideoSectionWrap>
      <CategoryName>{tag}</CategoryName>
      <SlideDiv>
        {videoCount > 4 && (
          <Button back>
            <i className="fa fa-caret-left" />
          </Button>
        )}

        <VideoLiContainer>
          <ListContainer>
            {videoData.map((data) => {
              return (
                <VideoLi key={data.id} onClick={() => moveRoute('/detail')}>
                  <Link href="/detail/[id]">
                    <VideoHover>
                      <ThumbNail key={data.id} src={data.thumb} />
                      <VodeoTitle>
                        {data.title.length < 20
                          ? data.title
                          : `${data.title.slice(0, 35)}...`}
                      </VodeoTitle>
                      <CreatorName>{data.creator}</CreatorName>
                    </VideoHover>
                  </Link>
                </VideoLi>
              );
            })}
          </ListContainer>
        </VideoLiContainer>

        {videoCount && (
          <Button next>
            <i className="fa fa-caret-right" />
          </Button>
        )}
      </SlideDiv>
    </VideoSectionWrap>
  );
};

export default VideoSection;

const VideoSectionWrap = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  margin: 10px 0;
  padding: 10px;
`;

const CategoryName = styled.strong`
  /* border: 1px solid green; */
  font-size: 20px;
  display: block;
`;

const SlideDiv = styled.div`
  display: flex;
  align-items: center;
`;

const VideoLiContainer = styled.div`
  border: 1px solid red;
  display: flex;
  /* position: relative; */
  align-items: center;
  margin: 0 10px;
  padding: 0 5px;
  width: 100%;
  overflow-x: scroll;
`;

const ListContainer = styled.div`
  display: flex;
  margin: 5px 0;
  height: 500px;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;
// const VideoWindow = styled.div`
//   width: 100%;
//   overflow: auto;
//   display: flex;
// `;

const Button = styled.div`
  transform: scale(1.5);
  transition: all 0.2s ease-in-out;
  display: inline;
  cursor: pointer;
  font-size: 50px;
  color: rgba(255, 118, 117, 1);
  position: absolute;
  &:hover {
    transform: scale(2);
  }
  ${(props) =>
    props.back &&
    css`
      left: 0;
      margin-right: 10px;
    `}
  ${(props) =>
    props.next &&
    css`
      right: 0;
    `}
`;

const VideoLi = styled.li`
  cursor: pointer;
  float: left;
  margin: 10px;
  width: 200px;
  height: auto;
  list-style-type: none;
`;

const VideoHover = styled.div`
  margin: 10px 0;
  height: 200px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0.1em 0 0.5em rgba(0, 0, 0, 0.3);
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.04);
  }
`;

const CreatorName = styled.div`
  margin-left: 5px;
  font-size: 12px;
  color: grey;
  position: absolute;
  bottom: 5px;
`;

const ThumbNail = styled.img`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  /* cursor: pointer; */
`;

const VodeoTitle = styled.div`
  font-size: 14px;
  margin-left: 4px;
  padding: 4px;
  margin-bottom: 30px;
  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;
