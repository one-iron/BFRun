// external modules
import { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

// internal modules
// import LangToggle from './LangToggle';

const MobileCategory = ({
  contentList,
  selectedContent,
  addDelContentTags,
  stackList,
  selectedStack,
  addDelStackTags,
  creatorList,
  selectedCreator,
  addDelCreatorTags,
  onBlackScreen,
}) => {
  const [showCategory, setShowCategory] = useState(false);
  const categoryRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleCategory = () => {
    if (showCategory) {
      setShowCategory(false);
    } else {
      setShowCategory(true);
    }
  };

  const clickedCategoryOutside = () => {
    useEffect(() => {
      const handleOutside = (e) => {
        if (
          !buttonRef.current.contains(e.target) &&
          categoryRef.current &&
          !categoryRef.current.contains(e.target)
        ) {
          setShowCategory(false);
        }
      };

      document.addEventListener('mousedown', handleOutside);
      return () => {
        document.removeEventListener('mousedown', handleOutside);
      };
    }, [categoryRef]);
  };

  clickedCategoryOutside(categoryRef);

  // 작은 화면에서 카테고리 키면 검정색 배경으로 바뀌고, 큰 화면에서는 white로

  return (
    <>
      {/* 모바일일 때 나오는 아이콘 */}
      <InfoWrap onClick={onBlackScreen}>
        <InfoButton onClick={toggleCategory} ref={buttonRef}>
          <i className="fa fa-bars" />
        </InfoButton>
      </InfoWrap>

      {/* 카테고리 창 */}
      <CategoryWrap isOpen={showCategory} ref={categoryRef}>
        <CategoryContainer>
          {/* <LangToggle /> */}
          <GroupContainer>
            <Title>Contents</Title>
            <AllTags>
              {contentList.map((type) => {
                return (
                  <Tag
                    key={type.id}
                    id={type.id}
                    style={{
                      backgroundColor: selectedContent.includes(type.name)
                        ? 'green'
                        : 'white',
                      color: selectedContent.includes(type.name)
                        ? 'white'
                        : 'black',
                    }}
                    onClick={() => addDelContentTags(type.name, type.id)}
                  >
                    {type.name}
                  </Tag>
                );
              })}
            </AllTags>
          </GroupContainer>
          <Line />
          <GroupContainer>
            <Title>FrontEnd</Title>
            <AllTags>
              {stackList[1].frontend_stacks.map((type) => {
                return (
                  <Tag
                    key={type.id}
                    id={type.id}
                    style={{
                      backgroundColor: selectedStack.includes(type.name)
                        ? type.color_code
                        : 'white',
                      color: selectedStack.includes(type.name)
                        ? 'white'
                        : 'black',
                    }}
                    onClick={() => addDelStackTags(type.name, type.id)}
                  >
                    {type.name}
                  </Tag>
                );
              })}
            </AllTags>
          </GroupContainer>
          <GroupContainer>
            <Title>BackEnd</Title>
            <AllTags>
              {stackList[2].backend_stacks.map((type) => {
                return (
                  <Tag
                    key={type.id}
                    id={type.id}
                    style={{
                      backgroundColor: selectedStack.includes(type.name)
                        ? type.color_code
                        : 'white',
                      color: selectedStack.includes(type.name)
                        ? 'white'
                        : 'black',
                    }}
                    onClick={() => addDelStackTags(type.name, type.id)}
                  >
                    {type.name}
                  </Tag>
                );
              })}
            </AllTags>
          </GroupContainer>
          <GroupContainer>
            <Title>Developer</Title>
            <AllTags>
              {stackList[0].general_stacks.map((type) => {
                return (
                  <Tag
                    key={type.id}
                    id={type.id}
                    style={{
                      backgroundColor: selectedStack.includes(type.name)
                        ? type.color_code
                        : 'white',
                      color: selectedStack.includes(type.name)
                        ? 'white'
                        : 'black',
                    }}
                    onClick={() => addDelStackTags(type.name, type.id)}
                  >
                    {type.name}
                  </Tag>
                );
              })}
            </AllTags>
          </GroupContainer>
          <GroupContainer>
            <Title>Creator</Title>
            <AllTags>
              {creatorList.map((type) => {
                return (
                  <Tag
                    key={type.id}
                    id={type.id}
                    style={{
                      backgroundColor: selectedCreator.includes(type.name)
                        ? '#F80000'
                        : 'white',
                      color: selectedCreator.includes(type.name)
                        ? 'white'
                        : 'black',
                    }}
                    onClick={() => addDelCreatorTags(type.name, type.id)}
                  >
                    {type.name}
                  </Tag>
                );
              })}
            </AllTags>
          </GroupContainer>
          <GroupContainer>
            <Title wecode>아직 프론트인지 백인지 모르겠다면?</Title>
            <TextLink href="http://bftest.wecode.co.kr/" target="_blank">
              BF-Test 하러가기!
            </TextLink>
          </GroupContainer>
          <GroupContainer>
            <Title wecode>부트캠프를 찾고 계신다면?</Title>
            <a href="https://wecode.co.kr/" target="_blank">
              <WecodeImg src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/logo/logo_black.png" />
            </a>
          </GroupContainer>
        </CategoryContainer>
      </CategoryWrap>
    </>
  );
};

export default MobileCategory;

const InfoWrap = styled.section`
  display: block;
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  z-index: 50;
`;

const InfoButton = styled.button`
  width: 50px;
  height: 50px;
  cursor: pointer;
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
  display: none;
  ${(props) =>
    props.isOpen &&
    css`
      display: block;
      position: fixed;
      top: 0;
      z-index: 1000;
      overflow-y: scroll;
      overflow-x: hidden;
      height: 100vh;
      width: 240px;
      animation-name: slideRight;
      animation-duration: 0.3s;
      ::-webkit-scrollbar {
        width: 4px;
      }
      ::-webkit-scrollbar-thumb {
        background: #b8b8b8;
      }
    `}
  @keyframes slideRight {
    from {
      left: -240px;
    }
    to {
      left: 0px;
    }
  }
`;

const CategoryContainer = styled.div`
  width: 240px;
  border: 1px solid #e4e9ed;
  border-radius: 7px;
  background-color: white;
`;

const GroupContainer = styled.div`
  margin: 30px 0 30px 10px;
`;

const Line = styled.div`
  width: 100%;
  border: 1px solid #ececec;
  margin: -10px auto;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #2d2d2d;
  ${(props) =>
    props.wecode &&
    css`
      font-size: 13px;
      font-weight: 400;
      margin-bottom: 0;
    `}
`;

const AllTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;
`;

const Tag = styled.div`
  background-color: white;
  border: 1px solid #eee;
  color: #333;
  font-size: 14px;
  border-radius: 3px;
  padding: 8px;
  font-weight: 700;
  margin: 5px 3px;
  cursor: pointer;
`;

const WecodeImg = styled.img`
  cursor: pointer;
  width: 100px;
  height: auto;
  margin-top: 15px;
`;

const TextLink = styled.a`
  cursor: pointer;
  font-weight: bold;
  color: #2d2d2d;
  display: block;
  margin-top: 15px;
`;
