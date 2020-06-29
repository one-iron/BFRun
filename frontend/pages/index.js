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

  const selected = (tag) => {
    setSelectedTags([...selectedTags, tag]);
  };

  return (
    <>
      <Nav />
      <ContentWrap>
        <ContentContainer>
          <Category selectedTags={selectedTags} selected={selected} />
          <VideoList selectedTags={selectedTags} />
          <SelectedVideo />
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
