// external modules
import styled from 'styled-components';

const VideoList = (props) => {
  const { selectedTags } = props;
  return (
    <VideoWrap>
      {selectedTags}
      <VideoContainer>
        <div>prev</div>
        <Videos>
          <div>Video</div>
          <div>Video</div>
          <div>Video</div>
          <div>Video</div>
          <div>Video</div>
          <div>Video</div>
          <div>Video</div>
          <div>Video</div>
        </Videos>
        <div>next</div>
      </VideoContainer>
    </VideoWrap>
  );
};

export default VideoList;

const VideoWrap = styled.section`
  position: relative;
  left: calc((100% - 950px) / 2);
  max-width: 950px;
  height: 1200px;
  margin: 0 auto;
  border: 1px solid green;

  @media ${(props) => props.theme.laptopM} {
    left: 0;
    width: 90%;
  }
`;

const VideoContainer = styled.article`
  display: flex;
`;

const Videos = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;

  div {
    width: 150px;
    height: 150px;
    border: 1px solid red;
    margin: 5px 5px;
  }
`;
