// external modules
import styled from 'styled-components';

// internal modules
import SelectedTags from './SelectedTags';
import VideoSection from './VideoSection';

const SelectedVideo = ({
  selectedTags,
  selected,
  selectedContent,
  addDelContentTags,
  selectedStack,
  addDelStackTags,
  selectedCreator,
  addDelCreatorTags,
  removeTags,
}) => {
  // console.log('selectedVideo', selectedContent, selecte);
  return (
    <SelectedVideoWrap>
      <SelectedTags
        selectedTags={selectedTags}
        selected={selected}
        selectedContent={selectedContent}
        addDelContentTags={addDelContentTags}
        selectedStack={selectedStack}
        addDelStackTags={addDelStackTags}
        selectedCreator={selectedCreator}
        addDelCreatorTags={addDelCreatorTags}
        removeTags={removeTags}
      />
      {selectedContent.map((tag) => {
        return <VideoSection tag={tag} />;
      })}
      {selectedStack.map((tag) => {
        return <VideoSection tag={tag} />;
      })}
      {selectedCreator.map((tag) => {
        return <VideoSection tag={tag} />;
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
  margin-bottom: 100px;

  @media ${(props) => props.theme.laptopM} {
    left: 0;
    width: 90%;
  }
`;
