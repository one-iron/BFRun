import styled from 'styled-components';

const VideoSection = () => {
  return (
    <VideoSectionWrap>
      <CategoryName>제목부분</CategoryName>
      <VideoLiContainer>
        <Buttons>이전</Buttons>
        <ul>
          <VideoLi>비디오 리스트1</VideoLi>
          <VideoLi>비디오 리스트2</VideoLi>
          <VideoLi>비디오 리스트3</VideoLi>
          <VideoLi>비디오 리스트4</VideoLi>
          <VideoLi>비디오 리스트4</VideoLi>
          <VideoLi>비디오 리스트4</VideoLi>
          <VideoLi>비디오 리스트4</VideoLi>
          <VideoLi>비디오 리스트4</VideoLi>
        </ul>
        <Buttons>다음</Buttons>
      </VideoLiContainer>
    </VideoSectionWrap>
  );
};

export default VideoSection;

const VideoSectionWrap = styled.div`
  border: 1px solid blue;
  margin: 10px 0;
  padding: 10px;
  ul {
    border: 1px solid green;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CategoryName = styled.strong`
  border: 1px solid green;
  font-size: 20px;
  display: block;
`;

const VideoLiContainer = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  padding: 0 5px;
`;

const Buttons = styled.div`
  border-radius: 5px;
  text-align: center;
  background-color: lime;
  padding: 2px;
  margin: 4px;
  width: 100px;
  cursor: pointer;
`;

const VideoLi = styled.li`
  float: left;
  margin: 4px;
  border: 1px solid blue;
  background-color: rgba(52, 152, 219, 0.2);
  width: 120px;
  height: 80px;
`;
