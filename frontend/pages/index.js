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
  console.log('*******현재 Tags', selectedTags);

  const selected = (tag) => {
    if (selectedTags.includes(tag)) {
      // 해당 태그가 있을 경우, 제거
      console.log('--------------------제거');
      console.log('tag', tag);
      console.log('제거할', tag, '의 index는', selectedTags.indexOf(tag));
      console.log('remove', selectedTags.splice(selectedTags.indexOf(tag), 1));
      setSelectedTags(selectedTags.splice(selectedTags.indexOf(tag), 1));
      console.log('제거한 후의 selTag', selectedTags);
    } else {
      // 해당 태그가 없을 경우 추가, 대신 중복 추가 불가
      console.log('--------------------추가');
      console.log('selTag', selectedTags);
      setSelectedTags(Array.from(new Set([...selectedTags, tag])));
    }
    // return setSelectedTags(selectedTags);
  };

  return (
    <>
      <Nav />
      <ContentWrap>
        <ContentContainer>
          <Category selectedTags={selectedTags} selected={selected} />
          {selectedTags[0] ? (
            <SelectedVideo selectedTags={selectedTags} />
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
