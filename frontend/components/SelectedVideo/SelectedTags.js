import styled from 'styled-components';

const SelectedTags = () => {
  return (
    <SelectedTagsWrap>
      <TagName>React</TagName>
      <TagName>Vue</TagName>
      {/* <TagName>어려워여ㅜㄹㅁㄹ</TagName>
      <TagName>HTML</TagName>
      <TagName>HTML</TagName>
      <TagName>HTML</TagName>
      <TagName>JavaScript</TagName>
      <TagName>NextJS</TagName>
      <TagName>TypeScript</TagName>
      <TagName>React Native</TagName>
      <TagName>Redux</TagName> */}
    </SelectedTagsWrap>
  );
};

export default SelectedTags;

const SelectedTagsWrap = styled.div`
  border: 1px solid #ececec;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  border-radius: 10px;
  background-color: #ececec;
`;

const TagName = styled.span`
  border-radius: 14px;
  background-color: blue;
  color: white;
  margin: 4px 8px;
  padding: 4px 8px;
  min-width: 10px;
`;
