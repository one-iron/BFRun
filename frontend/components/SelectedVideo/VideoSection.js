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
    const totalWidth = total.current.offsetWidth;

    if (direction === 'before' && left < 0) {
      setLeft(left + visibleWidth);
    } else if (direction === 'next' && left >= -totalWidth + 1000) {
      setLeft(left - visibleWidth);
    }
  };

  return (
    <VideoSectionWrap>
      <CategoryName>{title}</CategoryName>
      <SlideDiv>
        <Button back onClick={() => moveScroll('before')}>
          <i className="fa fa-caret-left" />
        </Button>
        <VideoLiContainer ref={visible}>
          <ListContainer toLeft={left} ref={total}>
            {returnList &&
              returnList.map((data, index) => {
                return (
                  <Link
                    href="/video/[id]"
                    as={`/video/${data.video_id}`}
                    key={index}
                  >
                    <VideoLi>
                      <VideoHover>
                        <ThumbNail
                          src={`http://i3.ytimg.com/vi/${data.url.slice(
                            data.url.indexOf('v=') + 2,
                            data.url.indexOf('&list'),
                          )}/maxresdefault.jpg`}
                        />
                        <VideoTitle>
                          {data.title.length < 20
                            ? data.title
                            : `${data.title.slice(0, 35)}...`}
                        </VideoTitle>
                        <CreatorName>{data.channel_name}</CreatorName>
                      </VideoHover>
                    </VideoLi>
                  </Link>
                );
              })}
          </ListContainer>
        </VideoLiContainer>
        <Button next onClick={() => moveScroll('next')}>
          <i className="fa fa-caret-right" />
        </Button>
      </SlideDiv>
    </VideoSectionWrap>
  );
};

export default VideoSection;

const VideoSectionWrap = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  margin: 10px 0;
  padding: 10px;
`;

const CategoryName = styled.strong`
  /* font-size: 20px;
  display: block; */

  font-weight: 700;
  font-size: 25px;
  padding: 5px;
  margin-left: 10px;
  margin-bottom: 20px;
`;

const SlideDiv = styled.div`
  display: flex;
  align-items: center;
`;

const VideoLiContainer = styled.div`
  border: 1px solid red;
  display: flex;
  /* position: relative; */
  align-items: center;
  margin: 0 10px;
  padding: 0 5px;
  width: 100%;
  height: 510px;
  overflow-x: scroll;
`;

const ListContainer = styled.div`
  display: flex;
  margin: 5px 0;
  height: 500px;
  flex-wrap: wrap;
  left: ${(props) => props.toLeft}px;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const Button = styled.div`
  transform: scale(1.5);
  transition: all 0.2s ease-in-out;
  display: inline;
  cursor: pointer;
  font-size: 50px;
  color: rgba(255, 118, 117, 1);
  position: absolute;
  &:hover {
    transform: scale(2);
  }
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
`;

const VideoLi = styled.div`
  cursor: pointer;
  float: left;
  margin: 10px;
  width: 200px;
  height: auto;
  list-style-type: none;
`;

const VideoHover = styled.div`
  margin: 10px 0;
  height: 200px;
  border-radius: 5px;
  box-shadow: 0.1em 0 0.5em rgba(0, 0, 0, 0.3);
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.04);
  }
`;

const CreatorName = styled.div`
  margin-left: 5px;
  font-size: 12px;
  color: grey;
  position: absolute;
  bottom: 5px;
`;

const ThumbNail = styled.img`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const VideoTitle = styled.div`
  font-size: 14px;
  margin-left: 4px;
  padding: 4px;
  margin-bottom: 30px;
  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;
