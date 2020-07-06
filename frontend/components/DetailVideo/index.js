// external modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Iframe from 'react-iframe';
import styled from 'styled-components';

// internal modules
import Information from './Information';
import PlayList from './PlayList';
import { VIDEO_LIST } from '../../config';

const DetailVideo = () => {
  const [listData, setListData] = useState([]);
  const [listUrl, setListUrl] = useState();
  const [videoUrl, setVideoUrl] = useState();

  useEffect(() => {
    axios.get(VIDEO_LIST).then((response) => {
      console.log(response);
      const filterUrl = response.data.video_detail.video_url.replace('&', '?');
      setVideoUrl(
        filterUrl.slice(filterUrl.indexOf('=') + 1, filterUrl.length),
      );
      setListUrl(response.data.video_playlist);
    });
  }, []);

  // clicklist 함수는 디테일 리스트 컴포넌트로 넘겨서, 재생목록을 클릭하면 해당 인덱스를 추가하여 영상을 재랜더하게 해주는 함수이다.
  const clickList = (index) => {
    setVideoUrl(
      `${videoUrl.slice(0, videoUrl.indexOf('index'))}&index=${index}`,
    );
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
        <Information listData={listData} />
      </DetailVideoContainer>

      <section className="listSection">
        {/* 유튜브 영상 재생복록이 들어갈 컴포넌트 입니다. */}
        <PlayList
          videoUrl={videoUrl}
          listVideo={listUrl}
          clickList={clickList}
        />
      </section>
    </DetailVideoWrap>
  );
};

export default DetailVideo;

const DetailVideoWrap = styled.div`
  display: flex;

  @media ${(props) => props.theme.laptopM} {
    .listSection {
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
      width: 100%;
      height: 100%;
    }
  }
  .listSection {
    background-color: #ffffff;
  }
`;