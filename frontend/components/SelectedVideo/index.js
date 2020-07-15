// external modules
import styled from 'styled-components';
// internal modules
import SelectedTags from './SelectedTags';
import VideoSection from './VideoSection';
import Loading from '../Loading';
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
  console.log('returnList -->', returnList);
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
      {/* <Loading /> */}
      {returnList[0] ? (
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
        })
      ) : (
        <Loading />
      )}
    </SelectedVideoWrap>
  );
};
export default SelectedVideo;

const SelectedVideoWrap = styled.section`
  position: relative;
  align-items: center;
  width: 100%;
  padding: 4px;
  margin-left: 20px;
  margin-bottom: 100px;
  @media ${(props) => props.theme.laptopM} {
    left: 0;
    width: 90%;
  }
`;

const NoContents = styled.div`
  margin-top: 30px;
  font-size: 20px;
  color: rgba(9, 132, 227, 1);
  text-align: center;
`;
