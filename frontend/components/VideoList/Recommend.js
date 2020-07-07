import styled from 'styled-components';
import React, { useState } from 'react';

const Recommend = (props) => {
  const { recommended } = props;
  const [left, setLeft] = useState(0);
  const [buttonCount, setButtonCount] = useState(0);

  const moveScroll = (direction) => {
    if (direction === 'before' && buttonCount > 0) {
      setLeft(left + 840);
      setButtonCount(buttonCount - 1);
    } else if (direction === 'next' && buttonCount < 5) {
      setLeft(left - 840);
      setButtonCount(buttonCount + 1);
    }
    console.log('버튼클릭', left);
  };
  return (
    <>
      <RecommendWrap>
        <TitleH2>{props.title}</TitleH2>
        <VideoContainer>
          <Button onClick={() => moveScroll('before')}>
            <i className="fa fa-caret-left" />
          </Button>
          {/* {buttonCount > 0 && (
            <Button onClick={() => moveScroll('before')}>
              <i className="fa fa-caret-left" />
            </Button>
          )} */}
          <Videos>
            <Absolute toLeft={left}>
              {recommended &&
                recommended.map((video) => {
                  return (
                    <VideoWindow>
                      <div>{video.video_id}</div>
                    </VideoWindow>
                  );
                })}
            </Absolute>
          </Videos>
          <Button onClick={() => moveScroll('next')}>
            <i className="fa fa-caret-right" />
          </Button>
          {/* {buttonCount < 5 && (
            <Button onClick={() => moveScroll('next')}>
              <i className="fa fa-caret-right" />
            </Button>
          )} */}
        </VideoContainer>
      </RecommendWrap>
    </>
  );
};

export default Recommend;

const RecommendWrap = styled.div`
  margin: 30px auto;
`;

const TitleH2 = styled.h2`
  font-weight: 700;
  font-size: 25px;
  padding: 5px;
  margin: 0 50px;
  margin-bottom: 10px;
`;

const VideoContainer = styled.article`
  /* border: 1px solid black; */
  height: 200px;
  border-radius: 10px;
  margin: 2px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
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
`;

const Videos = styled.div`
  /* border: 2px solid red; */
  width: 900px;
  height: 150px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 5px;
  overflow: hidden;
  @media (max-width: 771px) {
    justify-content: center;
  }
  @media (max-width: 1004px) {
    justify-content: center;
    padding: 0 110px;
  }
`;

const Absolute = styled.div`
  display: flex;
  position: absolute;
  left: ${(props) => props.toLeft}px;
  transition: left 0.8s ease-in-out;
`;

const VideoWindow = styled.div`
  display: flex;
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
