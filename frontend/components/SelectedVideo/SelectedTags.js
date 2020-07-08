// export modules
import styled from 'styled-components';

const tagColors = {
  강의: 'green',
  꿀팁: 'green',
  핵심개념: 'green',
  동기부여: 'green',
  Apollo: '#112A47',
  AWS: 'gray',
  Database: '#036172',
  Git: 'gray',
  Linux: 'gray',
  Etc: 'gray',
  HTML: '#E55126',
  CSS: '#0C73B8',
  JavaScript: '#E5A228',
  TypeScript: '#007ACC',
  React: '#5ED4F4',
  'React Native': '#5ED4F4',
  Vue: '#3FB37F',
  Angular: '#BE002E',
  Webpack: '#8AD0F4',
  Python: '#396C97',
  Django: '#092D1F',
  'Node.js': '#7CB801',
  Flask: '#000000',
  GraphQL: '#DF34A6',
  SQL: '#008062',
  생활코딩: '#F80000',
  '얄팍한 코딩사전': '#F80000',
  '김왼손의 왼손코딩': '#F80000',
  '코딩하는 테크보이 워니': '#F80000',
  '드림코딩 by 엘리': '#F80000',
  '노마드 코더 Nomad Coders': '#F80000',
  'Minjun Kim': '#F80000',
  '김버그 Kimbug': '#F80000',
  '조코딩 JoCoding': '#F80000',
};

const SelectedTags = ({
  selectedContent,
  addDelContentTags,
  selectedStack,
  addDelStackTags,
  selectedCreator,
  addDelCreatorTags,
  removeTags,
}) => {
  return (
    <SelectedTagsWrap>
      <TagLine>
        <Remove onClick={removeTags}>전체 지우기</Remove>
      </TagLine>
      <TagLine>
        {selectedContent.map((tag, index) => {
          return (
            <TagName
              key={index}
              onClick={() => addDelContentTags(tag)}
              style={{
                backgroundColor: Object.keys(tagColors).includes(tag)
                  ? tagColors[tag]
                  : '',
                color: Object.keys(tagColors).includes(tag) ? 'white' : '',
              }}
            >
              {tag}
            </TagName>
          );
        })}
      </TagLine>
      <TagLine>
        {selectedStack.map((tag, index) => {
          return (
            <TagName
              key={index}
              onClick={() => addDelStackTags(tag)}
              style={{
                backgroundColor: Object.keys(tagColors).includes(tag)
                  ? tagColors[tag]
                  : '',
                color: Object.keys(tagColors).includes(tag) ? 'white' : '',
              }}
            >
              {tag}
            </TagName>
          );
        })}
      </TagLine>
      <TagLine>
        {selectedCreator.map((tag, index) => {
          return (
            <TagName
              key={index}
              onClick={() => addDelCreatorTags(tag)}
              style={{
                backgroundColor: Object.keys(tagColors).includes(tag)
                  ? tagColors[tag]
                  : '',
                color: Object.keys(tagColors).includes(tag) ? 'white' : '',
              }}
            >
              {tag}
            </TagName>
          );
        })}
      </TagLine>
    </SelectedTagsWrap>
  );
};

export default SelectedTags;

const SelectedTagsWrap = styled.div`
  /* border: 1px solid black; */
  padding: 6px 10px;
  flex-wrap: wrap;
  /* display: flex; */
  width: 100%;
  border-radius: 10px;
`;

const TagLine = styled.div`
  display: flex;
  /* border: 1px solid red; */
`;

const TagName = styled.span`
  border-radius: 3px;
  font-size: 14px;
  font-weight: 700;
  margin: 4px 8px;
  padding: 4px 8px;
  min-width: 10px;
  cursor: pointer;
`;

const Remove = styled.div`
  transform: scale(1);
  transition: all 0.4s ease-in-out;
  border: 1px solid black;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  margin: 4px 8px;
  padding: 4px 8px;
  background-color: white;
  color: black;
  &:hover {
    transform: scale(1.06);
  }
`;
