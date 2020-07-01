// external modules
import React, { useState } from 'react';
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
      setSelectedTags(
        selectedTags.filter((tags) => (tags !== tag ? tags : '')),
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // 선택한 태그로 axios

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
        </ContentContainer>
      </ContentWrap>
    </>
  );
}

const ContentWrap = styled.section`
  position: relative;
  top: 100px;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  width: 1200px;

  @media ${(props) => props.theme.laptopM} {
    max-width: 100%;
  }
`;
