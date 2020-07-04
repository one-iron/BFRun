// external modules
import styled from 'styled-components';

// internal modules
import SelectedTags from './SelectedTags';
import VideoSection from './VideoSection';

const SelectedVideo = (props) => {
  const { selectedTags, selected, removeTags } = props;
  return (
    <SelectedVideoWrap>
      <SelectedTags
        selectedTags={selectedTags}
        selected={selected}
        removeTags={removeTags}
      />
      {selectedTags.map((tag) => {
        return <VideoSection selectedTags={tag} />;
      })}
    </SelectedVideoWrap>
  );
};

export default SelectedVideo;

const SelectedVideoWrap = styled.section`
  position: relative;
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
