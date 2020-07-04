// external modules
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// internal modules
import Nav from '../components/Nav';
import Category from '../components/Category';
import VideoList from '../components/VideoList';
import SelectedVideo from '../components/SelectedVideo';
import { CATEGORY } from '../config';

export default function HomePage() {
  // ----------- 추후 제거할 코드
  const [selectedTags, setSelectedTags] = useState([]);
  // 추후 제거할 코드 ------------------
  const [contentList, setContentList] = useState();
  const [stackList, setStackList] = useState();
  const [creatorList, setCreatorList] = useState();
  const [selectedContent, setSelectedContent] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [selectedCreator, setSelectedCreator] = useState([]);

  // 카테고리 태그 불러오기
  useEffect(() => {
    axios.get(CATEGORY).then((res) => {
      setContentList([res.data.content_types]);
      setStackList([res.data.stacks]);
      setCreatorList([res.data.channels]);
    });
  }, []);

  // ----------- 추후 제거할 코드
  // 모든 태그 추가/제거
  const selected = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((tags) => tags !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  // 추후 제거할 코드 --------------

  // 컨텐츠 태그 추가/제거
  const addDelContentTags = (tag) => {
    if (selectedContent.includes(tag)) {
      setSelectedContent(selectedContent.filter((tags) => tags !== tag));
    } else {
      setSelectedContent([tag]);
    }
  };

  // 스택 태그 추가/제거
  const addDelStackTags = (tag) => {
    if (selectedStack.includes(tag)) {
      setSelectedStack(selectedStack.filter((tags) => tags !== tag));
    } else if (selectedStack.length > 2) {
      // 최대 3개만 가능
      setSelectedStack(selectedStack.slice(1, 3).concat(tag));
    } else {
      setSelectedStack([...selectedStack, tag]);
    }
  };

  // 크리에이터 태그 추가/제거
  const addDelCreatorTags = (tag) => {
    // stack이 있을 경우 하나의 크리에이더만 선택 가능
    if (selectedStack.length > 0) {
      setSelectedCreator([tag]);
    } else {
      // stack이 없을 경우 모든 크리에이터 선택 가능
      setSelectedCreator([...selectedCreator, tag]);
      if (selectedCreator.includes(tag)) {
        setSelectedCreator(selectedCreator.filter((tags) => tags !== tag));
      }
    }
  };

  const removeTags = () => {
    setSelectedTags([]);
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
          <Category
            selectedTags={selectedTags}
            selected={selected}
            contentList={contentList}
            selectedContent={selectedContent}
            addDelContentTags={addDelContentTags}
            stackList={stackList}
            selectedStack={selectedStack}
            addDelStackTags={addDelStackTags}
            creatorList={creatorList}
            selectedCreator={selectedCreator}
            addDelCreatorTags={addDelCreatorTags}
            removeTags={removeTags}
          />
          {selectedContent[0] || selectedStack[0] || selectedCreator[0] ? (
            <SelectedVideo
              selectedTags={selectedTags}
              selected={selected}
              selectedContent={selectedContent}
              addDelContentTags={addDelContentTags}
              selectedStack={selectedStack}
              addDelStackTags={addDelStackTags}
              selectedCreator={selectedCreator}
              addDelCreatorTags={addDelCreatorTags}
            />
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
