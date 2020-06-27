// external modules
import styled from 'styled-components';

const VideoList = () => {
  return (
    <VideoWrap>
      <VideoContainer>videos...</VideoContainer>
    </VideoWrap>
  );
};

export default VideoList;

const VideoWrap = styled.section`
  width: calc(100% - 250px);
  height: 700px;
  border: 1px solid green;
`;

const VideoContainer = styled.article``;
