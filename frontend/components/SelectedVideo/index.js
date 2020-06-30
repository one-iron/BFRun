// external modules
import styled from 'styled-components';
// internal modules
import SelectedTags from './SelectedTags';
import VideoSection from './VideoSection';

const SelectedVideo = () => {
  return (
    <SelectedVideoWrap>
      이곳
      <SelectedTags />
      <VideoSection />
    </SelectedVideoWrap>
  );
};

export default SelectedVideo;

const SelectedVideoWrap = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.2);
  left: calc((100% - 950px) / 2);
  max-width: 950px;
  padding: 4px;
  margin: 0 auto;
  border: 1px solid red;

  @media ${(props) => props.theme.laptopM} {
    left: 0;
    width: 90%;
  }
`;
