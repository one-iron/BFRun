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
  console.log('리턴리스트 데이터모양 ->', returnList);
  // console.log('returnList', returnList);
  console.log('selectedContent', selectedContent);
  console.log('selectedStack', selectedStack);
  console.log('selectedCreator', selectedCreator);

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
      {selectedContent[0] &&
        selectedContent.map((tag) => {
          return <VideoSection returnContentList={returnList} tag={tag} />;
        })}
      {selectedStack[0] &&
        returnList &&
        returnList.map((arr, index) => {
          return (
            <VideoSection returnStackList={arr} title={selectedStack[index]} />
          );
        })}
      {selectedCreator[0] &&
        selectedCreator.map((tag) => {
          return <VideoSection returnCreatorList={returnList} tag={tag} />;
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
