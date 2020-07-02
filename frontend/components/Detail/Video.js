// external modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Iframe from 'react-iframe';
import styled from 'styled-components';

// internal modules
import DetailContent from './Content';
import DetailList from './List';

const DetailVideo = () => {
  const [listData, setListData] = useState([]);
  const [listUrl, setListUrl] = useState();
  const [videoUrl, setVideoUrl] = useState();

  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/cd4032e7-50ce-4420-882a-80616cff62b2')
      .then((response) => {
        const filterUrl = response.data.url.replace('&', '?');
        setVideoUrl(
          filterUrl.slice(filterUrl.indexOf('=') + 1, filterUrl.length),
        );
      });
  }, []);

  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/cd4032e7-50ce-4420-882a-80616cff62b2')
      .then((response) => {
        const testUrl = response.data.url.slice(
          response.data.url.indexOf('list=') + 5,
          response.data.url.indexOf('index') - 1,
        );
        const getResultApi = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${testUrl}&part=snippet&key=AIzaSyAuxeBHYUNeNJtDze-Xpl1VwJLdL3Fh95M`;
        axios.get(getResultApi).then((response) => {
          const getListApi = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${testUrl}&part=snippet&maxResults=${response.data.pageInfo.totalResults}&key=AIzaSyAuxeBHYUNeNJtDze-Xpl1VwJLdL3Fh95M`;
          axios.get(getListApi).then((listResponse) => {
            setListData(listResponse.data.items);
          });
        });
        setListUrl(
          response.data.url.slice(
            response.data.url.indexOf('list=') + 5,
            response.data.url.indexOf('index') - 1,
          ),
        );
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
        <DetailContent listData={listData} />
      </DetailVideoContainer>

      <section className="listSection">
        {/* 유튜브 영상 재생복록이 들어갈 컴포넌트 입니다. */}
        <DetailList
          listData={listData}
          videoUrl={videoUrl}
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
