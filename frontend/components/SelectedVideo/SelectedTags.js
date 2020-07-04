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
  생활코딩: 'gray',
  '얄팍한 코딩사전': 'gray',
  '김왼손의 왼손코딩': 'gray',
  '코딩하는 테크보이 워니': 'gray',
  '드림코딩 by 엘리': 'gray',
  '노마드 코더 Nomad Coders': 'gray',
  'Minjun Kim': 'gray',
  '김버그 Kimbug': 'gray',
  '조코딩 JoCoding': 'gray',
};

const SelectedTags = (props) => {
  const { selectedTags, selected, removeTags } = props;
  return (
    <SelectedTagsWrap>
      {selectedTags.length > 2 && (
        <Remove onClick={() => removeTags()}>전체 지우기</Remove>
      )}
      {selectedTags.map((tag, index) => {
        return (
          <TagName
            key={index}
            onClick={() => selected(tag)}
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
    </SelectedTagsWrap>
  );
};

export default SelectedTags;

const SelectedTagsWrap = styled.div`
  /* border: 1px solid black; */
  padding: 6px 10px;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  border-radius: 10px;
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
  transition: all 0.3s ease-in-out;
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
