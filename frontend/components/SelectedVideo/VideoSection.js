// external modules
import { useState, useRef } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const VideoSection = ({ title, returnList }) => {
  const [left, setLeft] = useState(0);
  const visible = useRef(null);
  const total = useRef(null);

  const moveScroll = (direction) => {
    const visibleWidth = visible.current.offsetWidth;
    const totalWidth = total.current.offsetWidth * returnList.length;
    if (direction === 'back' && left < 0) {
      setLeft(left + visibleWidth);
    } else if (direction === 'next' && left >= (-totalWidth + 2000) / 2) {
      setLeft(left - visibleWidth);
    }
  };

  return (
    <VideoSectionWrap>
      <CategoryName>{title}</CategoryName>
      {returnList[0] ? (
        <SlideDiv>
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
          <VideoLiContainer ref={visible} isOver={returnList.length}>
            <ListContainer toLeft={left} ref={total} isOver={returnList.length}>
              {returnList.map((data, index) => {
                return (
                  <Link
                    href="/video/[id]"
                    as={`/video/${data.video_id}`}
                    key={index}
                  >
                    <VideoLi>
                      <ThumbNail
                        src={`http://i3.ytimg.com/vi/${data.url.slice(
                          data.url.indexOf('v=') + 2,
                          data.url.indexOf('&'),
                        )}/hqdefault.jpg`}
                      />
                      <VideoTitle>
                        {data.title.length > 70
                          ? `${data.title.slice(0, 70)}...`
                          : data.title}
                      </VideoTitle>
                      <CreatorName>{data.channel_name}</CreatorName>
                    </VideoLi>
                  </Link>
                );
              })}
            </ListContainer>
          </VideoLiContainer>
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
        </SlideDiv>
      ) : (
        <NoContents>
          <WarningIcon className="fa fa-exclamation-triangle"> </WarningIcon>
          준비 중입니다
        </NoContents>
      )}
    </VideoSectionWrap>
  );
};
export default VideoSection;

const VideoSectionWrap = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
`;

const CategoryName = styled.strong`
  font-weight: 700;
  font-size: 25px;
  padding: 5px;
  margin-left: 30px;
  margin-bottom: 20px;
`;

const SlideDiv = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1239px) {
    justify-content: center;
  }
`;

const VideoLiContainer = styled.div`
  position: relative;
  align-items: center;
  margin: 0 20px;
  padding: 0 5px;
  width: 880px;
  height: ${(props) => (props.isOver > 4 ? '600px' : '300px')};
  overflow: hidden;

  @media ${(props) => props.theme.tablet} {
    overflow-x: scroll;
    overflow-y: hidden;
    ::-webkit-scrollbar {
      width: 0;
    }
  }

  @media (max-width: 500px) {
    margin: 0 0;
  }
`;

const ListContainer = styled.div`
  left: ${(props) => props.toLeft}px;
  transition: left 0.8s ease-in-out;
  position: absolute;
  display: flex;
  flex-flow: ${(props) => (props.isOver > 4 ? 'column wrap' : 'unset')};
  margin: 5px 0;
  height: 100%;

  @media (max-width: 500px) {
    justify-content: center;
  }

  @media ${(props) => props.theme.mobile} {
    margin: 0;
  }
`;

const Button = styled.div`
  transform: scale(1);
  transition: all 0.2s ease-in-out;
  display: inline;
  cursor: pointer;
  font-size: 30px;
  color: black;
  position: absolute;
  &:hover {
    transform: scale(1.2);
  }
  z-index: 50;
  ${(props) =>
    props.back &&
    css`
      left: 0;
      margin-right: 10px;
    `}
  ${(props) =>
    props.next &&
    css`
      right: 0;
    `}

  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;

const VideoLi = styled.div`
  cursor: pointer;
  float: left;
  margin: 10px 17px 10px 17px;
  width: 260px;
  height: 260px;
  list-style-type: none;
  border-radius: 4px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  background-color: white;
  &:hover {
    box-shadow: 7px 7px 6px rgba(0, 0, 0, 0.3);
  }
`;

const CreatorName = styled.div`
  margin: 0 0 16px 16px;
  font-size: 12px;
  color: grey;
  position: absolute;
  bottom: 5px;
`;

const ThumbNail = styled.img`
  width: 100%;
  /* height: 146px; */
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: absolute;
  top: -26px;
  clip: rect(26px 300px 175px 0px);
`;

const VideoTitle = styled.div`
  font-size: 14px;
  padding: 4px;
  margin: 0 22px 0 16px;
  line-height: 20px;
  position: absolute;
  top: 155px;
  /* @media (max-width: 500px) {
    width: 300px;
    height: 300px;
  } */
`;

const NoContents = styled.div`
  margin-top: 30px;
  font-size: 20px;
  color: rgba(9, 132, 227, 1);
  text-align: center;
`;

const WarningIcon = styled.i`
  margin-right: 5px;
  animation: vibration 1s linear infinite;
  @keyframes vibration {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
