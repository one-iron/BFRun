// external modules
import React, { useState, useEffect } from 'react';
import Iframe from 'react-iframe';
import styled, { css } from 'styled-components';

// internal modules
import DetailContent from './Content';
import DetailList from './List';

const DetailVideo = () => {
  const gotUrl =
    'https://www.youtube.com/watch?v=tZooW6PritE&list=PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb&index=2&t=0s';
  const queryUrl = 'tZooW6PritE?list=PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb';
  const listUrl = 'PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb';
  const [videoUrl, setVideoUrl] = useState([queryUrl]);
  const clickList = (index) => {
    setVideoUrl(`${queryUrl}&index=${index}`);
    console.log('videoUrl', videoUrl);
  };
  return (
    <DetailVideoWrap>
      <DetailVideoContainer>
        {/* 유튜브 영상 화면이 들어갈 main 태그입니다. */}
        <main className="videoMain">
          <Iframe
            className="video"
            src={`https://www.youtube.com/embed/${videoUrl}`}
            allowFullScreen
          />
        </main>
        {/* 유튜브 영상 정보가 들어갈 컴포넌트 입니다. */}
        <DetailContent />
      </DetailVideoContainer>

      <section className="listSection">
        {/* 유튜브 영상 재생복록이 들어갈 컴포넌트 입니다. */}
        <DetailList
          videoUrl={videoUrl}
          clickList={clickList}
          listApi={listUrl}
        />
      </section>
    </DetailVideoWrap>
  );
};

export default DetailVideo;

const DetailVideoWrap = styled.div`
  display: flex;
  @media ${(props) => props.theme.laptopM} {
    section {
      display: none;
    }
  }
`;
const DetailVideoContainer = styled.div`
  .videoMain {
    /* width: 960px; */
    height: calc(68vh + 40px);
    background-color: #ffffff;
    z-index: 10;
    .video {
      border: 1px solid red;
      width: 100%;
      height: 100%;
    }
  }
  .listSection {
    background-color: #ffffff;
  }
  @media ${(props) => props.theme.laptopM} {
    .videoManin {
      border: 1px solid red;
    }
  }
`;
