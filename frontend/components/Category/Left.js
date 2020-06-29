// external modules
import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

// internal modules
import LangToggle from './LangToggle';

const Category = (props) => {
  const [showCategory, setShowCategory] = useState(false);

  const toggleCategory = () => {
    setShowCategory(!showCategory);
  };

  const closeCategory = () => {
    setShowCategory(false);
  };

  const { selected } = props;

  // 카테고리 height 775px 이하일때, scroll로 바꿔야 함

  return (
    <>
      {/* 모바일일 때 나오는 아이콘 */}
      <InfoWrap>
        <InfoButton onClick={toggleCategory}>
          <i className="fa fa-bars" />
        </InfoButton>
      </InfoWrap>

      {/* 카테고리 창 */}
      <CategoryWrap isOpen={showCategory}>
        <CategoryContainer>
          <Close onClick={closeCategory}>x</Close>
          <LangToggle />
          <GroupContainer>
            <Title>컨텐츠</Title>
            <AllTags>
              <Tag onClick={() => selected('lecture')}>강의</Tag>
              <Tag onClick={() => selected('honey tips')}>꿀팁</Tag>
              <Tag>공통</Tag>
            </AllTags>
          </GroupContainer>
          <GroupContainer>
            <Title>프론트</Title>
            <AllTags>
              <Tag>HTML</Tag>
              <Tag>CSS</Tag>
              <Tag>JavaScript</Tag>
              <Tag>React</Tag>
            </AllTags>
          </GroupContainer>
          <GroupContainer>
            <Title>백</Title>
            <AllTags>
              <Tag>Python</Tag>
              <Tag>Node.js</Tag>
              <Tag>Flask</Tag>
            </AllTags>
          </GroupContainer>
          <GroupContainer>
            <Title>크리에이터</Title>
            <AllTags>
              <Tag creator>생활코딩</Tag>
              <Tag>노마드코더</Tag>
              <Tag>얄팍한 코딩사전</Tag>
              <Tag>테크보이</Tag>
              <Tag>김버그</Tag>
            </AllTags>
          </GroupContainer>
          <GroupContainer>
            <Title>위코드 홍보</Title>
          </GroupContainer>
        </CategoryContainer>
      </CategoryWrap>
    </>
  );
};

export default Category;

const InfoWrap = styled.section`
  display: none;

  @media ${(props) => props.theme.laptopM} {
    display: block;
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    z-index: 50;
  }
`;

const InfoButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 50px;
  outline: none;
  border: none;

  i {
    color: white;
    z-index: 99;
    font-size: 20px;
  }
`;

const CategoryWrap = styled.aside`
  display: block;
  position: fixed;
  left: calc((100% - 1200px) / 2);
  z-index: 50;

  @media ${(props) => props.theme.laptopM} {
    display: none;

    ${(props) =>
      props.isOpen &&
      css`
        display: block;
        bottom: 80px;
        left: 20px;
      `}
  }
`;

const CategoryContainer = styled.div`
  width: 240px;
  height: 600px;
  border: 1px solid #ececec;
  border-radius: 10px;
  background-color: #ececec;
`;

const Close = styled.button`
  display: none;
  @media ${(props) => props.theme.laptopM} {
    display: block;
  }
`;

const GroupContainer = styled.div`
  margin-left: 10px;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const AllTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px 5px;
`;

const Tag = styled.div`
  background-color: gray;
  color: white;
  font-size: 14px;
  border-radius: 10px;
  padding: 2px 10px;
  margin: 5px 3px;
  cursor: pointer;

  ${(props) =>
    props.creator &&
    css`
      background-color: ${(props) => props.theme.subColor};
    `}
`;
