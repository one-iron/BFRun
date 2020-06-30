// external modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';

// internal modules

const DetailList = (props) => {
  const [listData, setListData] = useState([]);

  // 영상의 리스트 정보들을 이 곳에서 패치하여 listData에 저장합니다.
  // 첫번째 axios에서는 재생목록의 전체 정보를 가져옵니다.
  // 두번째 axios에서는 위에서 가져오 전체 정보에서 재생목록에 들어있는 items 총 갯수를 가져와 api 주소에 전체 영상을 요청하게 됩니다.
  useEffect(() => {
    const getResultApi = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${props.listApi}&part=snippet&key=AIzaSyBRVdxD4PpcxEMKdpkx8Ge4GzNYolOfgUY`;
    axios.get(getResultApi).then((response) => {
      const getListApi = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${props.listApi}&part=snippet&maxResults=${response.data.pageInfo.totalResults}&key=AIzaSyBRVdxD4PpcxEMKdpkx8Ge4GzNYolOfgUY`;
      axios.get(getListApi).then((listResponse) => {
        setListData(listResponse.data.items);
      });
    });
  }, []);
  return (
    <DetailListWrap>
      <DetailListContainer>
        {listData.map((data) => {
          return (
            <>
              <section onClick={() => props.clickList(data.snippet.position)}>
                <img src={data.snippet.thumbnails.default.url} alt="" />
              </section>
            </>
          );
        })}
      </DetailListContainer>
    </DetailListWrap>
  );
};

export default DetailList;

const DetailListWrap = styled.div`
  width: 340px;
  overflow: auto;
  height: calc(100vh);
  margin-left: 20px;
  background-color: #ffffff;
  @media ${(props) => props.theme.laptopM} {
    position: unset;
    top: unset;
    left: unset;
    width: 45vw;
    height: unset;
    background-color: #ffffff;
  }
  @media ${(props) => props.theme.tablet} {
    position: unset;
    top: unset;
    left: unset;
    width: 95vw;
    height: unset;
    background-color: #ffffff;
  }
`;
const DetailListContainer = styled.div`
  img {
    &:hover {
      cursor: pointer;
    }
  }
`;
