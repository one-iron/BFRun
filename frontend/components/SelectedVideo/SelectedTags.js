import styled from 'styled-components';

const SelectedTags = (props) => {
  const { selectedTags, selected } = props;

  return (
    <SelectedTagsWrap>
      {selectedTags.map((tag, index) => {
        return (
          <TagName key={index} onClick={() => selected(tag)}>
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
  background-color: black;
  color: white;
  margin: 4px 8px;
  padding: 4px 8px;
  min-width: 10px;
  cursor: pointer;
`;
