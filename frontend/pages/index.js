// external modules
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// internal modules
import Nav from '../components/Nav';
import Category from '../components/Category';
import VideoList from '../components/VideoList';
import SelectedVideo from '../components/SelectedVideo';

export default function HomePage() {
  const [selectedTags, setSelectedTags] = useState([]);

  // 태그 추가/삭제
  const selected = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((tags) => tags !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // 선택한 태그로 axios

  // 맨 위로 가기
  const goToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Nav />
      <ContentWrap>
        <ContentContainer>
          <Category selectedTags={selectedTags} selected={selected} />
          {selectedTags[0] ? (
            <SelectedVideo selectedTags={selectedTags} selected={selected} />
          ) : (
            <VideoList />
          )}
          <GoUp onClick={goToTop}>
            <i className="fa fa-arrow-up" />
          </GoUp>
        </ContentContainer>
      </ContentWrap>
    </>
  );
}

const ContentWrap = styled.section`
  position: relative;
  top: 120px;
  margin-bottom: 100px;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  width: 1200px;
  display: flex;

  @media ${(props) => props.theme.laptopM} {
    max-width: 100%;
  }
`;

const GoUp = styled.div`
  position: absolute;
  right: 80px;
  bottom: 0px;
  cursor: pointer;
  background-color: black;
  color: white;
  font-size: 20px;
  height: 40px;
  width: 40px;
  border: 1px solid black;
  border-radius: 20px;
  text-align: center;
  line-height: 35px;
`;
