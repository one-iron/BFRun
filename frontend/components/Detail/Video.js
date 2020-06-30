// external modules
import React, { useState, useEffect } from 'react';
import Iframe from 'react-iframe';
import styled, { css } from 'styled-components';

// internal modules
import DetailContent from './Content';
import DetailList from './List';

const DetailVideo = () => {
  // gotUrl은 백엔드에서 받아오는 영상의 주소이다. 하지만 이 주소로는 iframe을 이용해서 띄울수가 없으니 가공을 해야한다.
  const gotUrl =
    'https://www.youtube.com/watch?v=tZooW6PritE&list=PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb&index=2&t=0s';
  // 디테일 영상 페이지로 쿼리를 찍어 들어오는지는 알 수 없지만, 그럴 가정으로 만들었다. 그러면, 쿼리유알에을 이 곳에 저장한다.
  const queryUrl = 'tZooW6PritE?list=PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb';
  // 쿼리 유알엘에서 리스트 주소만 뽑아 놓자
  const listUrl = 'PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb';
  const [videoUrl, setVideoUrl] = useState([queryUrl]);
  // clicklist 함수는 디테일 리스트 컴포넌트로 넘겨서, 재생목록을 클릭하면 해당 인덱스를 추가하여 영상을 재랜더하게 해주는 함수이다.
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
