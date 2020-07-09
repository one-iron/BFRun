// external modules
import styled from 'styled-components';

// internal modules
import SelectedTags from './SelectedTags';
import VideoSection from './VideoSection';

const SelectedVideo = ({
  returnList,
  selectedContent,
  addDelContentTags,
  selectedStack,
  addDelStackTags,
  selectedCreator,
  addDelCreatorTags,
  removeTags,
}) => {
  return (
    <SelectedVideoWrap>
      <SelectedTags
        selectedContent={selectedContent}
        addDelContentTags={addDelContentTags}
        selectedStack={selectedStack}
        addDelStackTags={addDelStackTags}
        selectedCreator={selectedCreator}
        addDelCreatorTags={addDelCreatorTags}
        removeTags={removeTags}
      />
      {returnList &&
        returnList.map((arr, index) => {
          return (
            <VideoSection
              returnList={arr}
              title={
                selectedCreator[index] ||
                selectedContent[index] ||
                selectedStack[index]
              }
              key={index}
            />
          );
        })}
    </SelectedVideoWrap>
  );
};

export default SelectedVideo;

const SelectedVideoWrap = styled.section`
  position: relative;
  align-items: center;
  max-width: 940px;
  padding: 4px;
  margin: 0 auto;
  margin-bottom: 100px;

  @media ${(props) => props.theme.laptopM} {
    left: 0;
    width: 90%;
  }
`;
