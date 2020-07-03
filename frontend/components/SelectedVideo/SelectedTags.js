// export modules
import styled from 'styled-components';

const tagColors = {
  강의: 'gray',
  꿀팁: 'gray',
  핵심개념: 'gray',
  동기부여: 'gray',
  Apollo: '#112A47',
  AWS: 'gray',
  Dtabase: '#036172',
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

const SelectedTags = ({ selectedTags, selected }) => {
  return (
    <SelectedTagsWrap>
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
  border: 1px solid black;
  flex-wrap: wrap;
  display: flex;
  width: 100%;
  border-radius: 10px;
  background-color: white;
`;

const TagName = styled.span`
  border-radius: 14px;
  margin: 4px 8px;
  padding: 4px 8px;
  min-width: 10px;
  cursor: pointer;
`;
