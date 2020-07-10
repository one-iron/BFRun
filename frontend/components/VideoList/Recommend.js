// external modules
import styled from 'styled-components';
import React, { useState, useRef } from 'react';
import Link from 'next/link';

const Recommend = (props) => {
  const { recommended } = props;
  const [left, setLeft] = useState(0);
  const visible = useRef(null);
  const total = useRef(null);

  const moveScroll = (direction) => {
    const visibleWidth = visible.current.offsetWidth;
    const totalWidth = total.current.offsetWidth;

    if (direction === 'back' && left < 0) {
      setLeft(left + visibleWidth);
    } else if (direction === 'next' && left >= -totalWidth + 1000) {
      setLeft(left - visibleWidth);
    }
  };

  return (
    <RecommendWrap>
      <TitleH2>{props.title}</TitleH2>
      <VideoContainer>
        <Button onClick={() => moveScroll('back')}>
          <i className="fa fa-caret-left" />
        </Button>
        <Videos ref={visible}>
          <Absolute toLeft={left} ref={total}>
            {recommended.map((data, index) => {
              return (
                <Link
                  href="/video/[id]"
                  as={`/video/${data.video_id}`}
                  key={index}
                >
                  <VideoWindow>
                    <ThumbNail
                      key={data.video_id}
                      src={`http://i3.ytimg.com/vi/${data.url.slice(
                        data.url.indexOf('v=') + 2,
                        data.url.indexOf('&list'),
                      )}/maxresdefault.jpg`}
                    />
                    <VideoTitle>
                      {data.title.length < 34
                        ? data.title
                        : `${data.title.slice(0, 35)}...`}
                    </VideoTitle>
                    <CreatorName>{data.channel_name}</CreatorName>
                  </VideoWindow>
                </Link>
              );
            })}
          </Absolute>
        </Videos>
        <Button onClick={() => moveScroll('next')}>
          <i className="fa fa-caret-right" />
        </Button>
      </VideoContainer>
    </RecommendWrap>
  );
};

export default Recommend;

const RecommendWrap = styled.div`
  margin: 40px 0;
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
  height: 220px;
  display: flex;
  align-items: center;
  position: relative;
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
  align-items: center;
  position: absolute;
  left: ${(props) => props.toLeft}px;
  transition: left 0.8s ease-in-out;
`;

const VideoWindow = styled.div`
  /* border: 1px solid blue; */
  cursor: pointer;
  width: 200px;
  height: 180px;
  margin: 0 5px;
  border-radius: 5px;
  box-shadow: 0.1em 0 0.5em rgba(0, 0, 0, 0.3);
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.04);
  }
`;

const ThumbNail = styled.img`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const VideoTitle = styled.div`
  font-size: 14px;
  margin-left: 4px;
  word-break: break-all;
  padding: 4px;
  margin-bottom: 30px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const CreatorName = styled.div`
  margin-left: 5px;
  font-size: 12px;
  color: grey;
  position: absolute;
  bottom: 5px;
`;
