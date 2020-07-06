import styled from 'styled-components';
import React, { useState, useRef } from 'react';

const Test = (props) => {
  const { recommended } = props;
  const [left, setLeft] = useState(0);
  const visible = useRef(null);
  const total = useRef(null);

  const moveScroll = (direction) => {
    const visibleWidth = visible.current.offsetWidth;
    const totalWidth = total.current.offsetWidth;

    if (direction === 'before' && left < 0) {
      setLeft(left + visibleWidth);
    } else if (direction === 'next' && left >= -totalWidth + 1000) {
      setLeft(left - visibleWidth);
    }
    // console.log('버튼클릭', left);
  };

  return (
    <>
      <RecommendWrap>
        <TitleH2>{props.title}</TitleH2>
        <VideoContainer>
          <Button onClick={() => moveScroll('before')}>
            <i className="fa fa-caret-left" />
          </Button>
          <Videos ref={visible}>
            <Absolute toLeft={left} ref={total}>
              {recommended &&
                recommended['생활코딩'].map((video) => {
                  return (
                    <VideoWindow>
                      <div>{video.id}</div>
                    </VideoWindow>
                  );
                })}
            </Absolute>
          </Videos>
          <Button onClick={() => moveScroll('next')}>
            <i className="fa fa-caret-right" />
          </Button>
        </VideoContainer>
      </RecommendWrap>
    </>
  );
};

export default Test;

const RecommendWrap = styled.div`
  height: 200px;
`;

const TitleH2 = styled.h2`
  font-weight: 700;
  font-size: 25px;
  padding: 5px;
  margin: 0 50px;
  margin-bottom: 20px;
`;

const VideoContainer = styled.article`
  /* border: 1px solid black; */
  height: 100px;
  margin: 2px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  cursor: pointer;
  margin: 0 12px;
  font-size: 70px;
  color: black;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }

  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;

const Videos = styled.div`
  /* border: 2px solid red; */
  width: 900px;
  height: 150px;
  display: flex;
  position: relative;
  margin-top: 20px;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 0;
  }

  @media ${(props) => props.theme.tablet} {
    ::-webkit-scrollbar {
      /* width: 4px; */
    }
  }

  @media (max-width: 1004px) {
    justify-content: center;
  }
`;

const Absolute = styled.div`
  display: flex;
  position: absolute;
  left: ${(props) => props.toLeft}px;
  transition: left 0.8s ease-in-out;
`;

const VideoWindow = styled.div`
  /* display: flex; */
  div {
    width: 200px;
    height: 120px;
    border: 1px solid black;
    margin: 5px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
`;
