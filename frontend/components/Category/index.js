// external modules
import { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

// internal modules
// import LangToggle from './LangToggle';

const Category = (props) => {
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

  const { selected } = props;
  clickedCategoryOutside(categoryRef);

  // 작은 화면에서 카테고리 키면 검정색 배경으로 바뀌고, 큰 화면에서는 white로

  return (
    <>
      {/* 모바일일 때 나오는 아이콘 */}
      <InfoWrap>
        <InfoButton onClick={toggleCategory} ref={buttonRef}>
          <i className="fa fa-bars" />
        </InfoButton>
      </InfoWrap>

      {/* 카테고리 창 */}
      <CategoryWrap isOpen={showCategory} ref={categoryRef}>
        <CategoryContainer>
          {/* <LangToggle /> */}
          <GroupContainer>
            <Title>컨텐츠</Title>
            <AllTags>
              {/* {contents.map((tag, index) => {
                return (
                  <Tag key={index} onClick={() => selected(Object.keys(tag))}>
                    {Object.values(tag)}
                  </Tag>
                );
              })} */}
              <Tag id="1" onClick={() => selected('lecture')}>
                강의
              </Tag>
              <Tag id="2" onClick={() => selected('honey tips')}>
                꿀팁
              </Tag>
              <Tag onClick={() => selected('general')}>공통</Tag>
            </AllTags>
          </GroupContainer>
          <GroupContainer>
            <Title>프론트</Title>
            <AllTags>
              <Tag
                onClick={() => selected('HTML')}
                style={{ backgroundColor: '#E55126' }}
              >
                HTML
              </Tag>
              <Tag
                onClick={() => selected('CSS')}
                style={{ backgroundColor: '#0C73B8' }}
              >
                CSS
              </Tag>
              <Tag
                onClick={() => selected('JavaScript')}
                style={{ backgroundColor: '#E5A228' }}
              >
                JavaScript
              </Tag>
              <Tag
                onClick={() => selected('React')}
                style={{ backgroundColor: '#5ED4F4' }}
              >
                React
              </Tag>
            </AllTags>
          </GroupContainer>
          <GroupContainer>
            <Title>백</Title>
            <AllTags>
              <Tag style={{ backgroundColor: '#396C97' }}>Python</Tag>
              <Tag style={{ backgroundColor: '#7CB801' }}>Node.js</Tag>
              <Tag style={{ backgroundColor: 'black' }}>Flask</Tag>
            </AllTags>
          </GroupContainer>
          <GroupContainer>
            <Title>크리에이터</Title>
            <AllTags>
              <Tag creator style={{ backgroundColor: '#F80000' }}>
                생활코딩
              </Tag>
              <Tag style={{ backgroundColor: '#F80000' }}>노마드코더</Tag>
              <Tag style={{ backgroundColor: '#F80000' }}>얄팍한 코딩사전</Tag>
              <Tag style={{ backgroundColor: '#F80000' }}>테크보이</Tag>
              <Tag style={{ backgroundColor: '#F80000' }}>김버그</Tag>
            </AllTags>
          </GroupContainer>
          <GroupContainer>
            <Title wecode>부트캠프를 찾고 계신다면?</Title>
            <WecodeImg src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/logo/logo_black.png" />
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

        animation-name: slideUp;
        animation-duration: 0.3s;
      `}

    @keyframes slideUp {
      from {
        bottom: 0px;
      }

      to {
        bottom: 80px;
      }
    }
  }
`;

const CategoryContainer = styled.div`
  width: 240px;
  height: 600px;
  border: 1px solid #eee;
  border-radius: 10px;
  background-color: #eee;

  @media (max-height: 775px) {
    height: 400px;
    overflow-y: scroll;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background: #b8b8b8;
    }
  }
`;

const GroupContainer = styled.div`
  margin: 30px 0 30px 10px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;

  ${(props) =>
    props.wecode &&
    css`
      font-size: 13px;
      font-weight: 400;
    `}
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
  /* border-radius: 10px; */
  border-radius: 3px;
  padding: 8px;
  font-weight: 700;
  margin: 5px 3px;
  cursor: pointer;

  ${(props) =>
    props.creator &&
    css`
      background-color: ${(props) => props.theme.subColor};
    `}
`;

const WecodeImg = styled.img`
  width: 100px;
  height: auto;
  margin-top: 15px;
`;
