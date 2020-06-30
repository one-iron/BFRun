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
    if (selectedTags.includes(tag)) {
      // 해당 태그가 있을 경우
      console.log('tag', tag);
      // console.log(
      //   '제거할 애',
      //   selectedTags.splice(selectedTags.indexOf(tag), 1),
      // );
      console.log('제거할 애 index', selectedTags.indexOf(tag));
      setSelectedTags(selectedTags.splice(selectedTags.indexOf(tag), 1));
      console.log('제거한 후의 selTag', selectedTags);
    } else {
      // 해당 태그가 없을 경우 추가하고 중복 제거
      console.log('selTag', selectedTags);
      setSelectedTags(Array.from(new Set([...selectedTags, tag])));
    }
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
