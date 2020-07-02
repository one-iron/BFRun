// external modules
import styled from 'styled-components';

// internal modules
import SelectedTags from './SelectedTags';
import VideoSection from './VideoSection';

const SelectedVideo = (props) => {
  return (
    <SelectedVideoWrap>
      <SelectedTags selectedTags={props.selectedTags} />
      <VideoSection selectedTags={props.selectedTags} />
    </SelectedVideoWrap>
  );
};

export default SelectedVideo;

const SelectedVideoWrap = styled.section`
  position: relative;
  /* display: flex; */
  /* flex-direction: column; */
  align-items: center;
  max-width: 950px;
  width: 950px;
  padding: 4px;
  margin: 0 auto;

  @media ${(props) => props.theme.laptopM} {
    left: 0;
    width: 90%;
  }
`;
