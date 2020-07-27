// external modules
import styled, { css } from 'styled-components';
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
        {recommended.length < 4 ? (
          <></>
        ) : (
          <Button back onClick={() => moveScroll('back')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <g fill="none" fillRule="evenodd">
                <circle cx="18" cy="18" r="18" fill="#000" fillRule="nonzero" />
                <path
                  fill="#FFF"
                  d="M12 25L22 18 12 11z"
                  transform="matrix(-1 0 0 1 34 0)"
                />
              </g>
            </svg>
          </Button>
        )}

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
                        data.url.indexOf('&'),
                      )}/maxresdefault.jpg`}
                    />
                    <VideoTitle>
                      {' '}
                      {data.title.length > 70
                        ? `${data.title.slice(0, 50)}...`
                        : data.title}
                    </VideoTitle>
                    <CreatorName>{data.channel_name}</CreatorName>
                  </VideoWindow>
                </Link>
              );
            })}
          </Absolute>
        </Videos>
        {recommended.length < 4 ? (
          <></>
        ) : (
          <Button next onClick={() => moveScroll('next')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <g
                fill="none"
                fillRule="evenodd"
                transform="matrix(-1 0 0 1 36 0)"
              >
                <circle cx="18" cy="18" r="18" fill="#000" fillRule="nonzero" />
                <path
                  fill="#FFF"
                  d="M12 25L22 18 12 11z"
                  transform="matrix(-1 0 0 1 34 0)"
                />
              </g>
            </svg>
          </Button>
        )}
      </VideoContainer>
    </RecommendWrap>
  );
};

export default Recommend;

const RecommendWrap = styled.div`
  margin: 20px 0;
`;

const TitleH2 = styled.h2`
  display: inline-block;
  /* width: 175px; */
  line-height: 34px;
  font-size: 25px;
  padding: 5px;
  margin-left: 10px;
  font-family: 'Gothic A1';
  font-weight: 900;
  white-space: break-spaces;
`;

const VideoContainer = styled.article`
  position: relative;
  margin: 2px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  position: absolute;
  cursor: pointer;
  margin: 0 12px;
  font-size: 70px;
  color: black;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }

  ${(props) =>
    props.next &&
    css`
      right: -50px;
    `}

  ${(props) =>
    props.back &&
    css`
      left: -50px;
    `}

  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;

const Videos = styled.div`
  width: 850px;
  height: 280px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  @media ${(props) => props.theme.tablet} {
    overflow-x: scroll;
    overflow-y: hidden;
    ::-webkit-scrollbar {
      width: 0;
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
  cursor: pointer;
  width: 260px;
  height: 242px;
  margin: 0 12px;
  border-radius: 3px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 7px 7px 6px rgba(0, 0, 0, 0.3);
  }
`;

const ThumbNail = styled.img`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const VideoTitle = styled.div`
  font-family: 'AppleSDGothicNeo';
  font-size: 14px;
  margin: 4px 14px 0 14px;
  word-break: break-all;
  padding: 4px;
  line-height: 16px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const CreatorName = styled.div`
  margin-left: 16px;
  font-family: 'AppleSDGothicNeo';
  font-size: 13px;
  color: grey;
  position: absolute;
  bottom: 16px;
`;
