// external modules
import styled, { css } from 'styled-components';

// internal modules
import LangToggle from './LangToggle';

const Category = () => {
  return (
    <CategoryWrap>
      <SingleContainer>
        <Left>카테고리</Left>
        <Right>펼치기</Right>
      </SingleContainer>
      <CategoryContainer>
        <LangToggle />
        <GroupContainer>
          <Title>컨텐츠</Title>
          <AllTags>
            <Tag>강의</Tag>
            <Tag>꿀팁</Tag>
            <Tag>공통</Tag>
          </AllTags>
        </GroupContainer>
        <GroupContainer>
          <Title>프론트</Title>
          <AllTags>
            <Tag>HTML</Tag>
            <Tag>CSS</Tag>
            <Tag>JavaScript</Tag>
            <Tag>React</Tag>
          </AllTags>
        </GroupContainer>
        <GroupContainer>
          <Title>백</Title>
          <AllTags>
            <Tag>Python</Tag>
            <Tag>Node.js</Tag>
            <Tag>Flask</Tag>
          </AllTags>
        </GroupContainer>
        <GroupContainer>
          <Title>크리에이터</Title>
          <AllTags>
            <Tag creator>생활코딩</Tag>
            <Tag>노마드코더</Tag>
            <Tag>얄팍한 코딩사전</Tag>
            <Tag>테크보이</Tag>
            <Tag>김버그</Tag>
          </AllTags>
        </GroupContainer>
      </CategoryContainer>
    </CategoryWrap>
  );
};

export default Category;

const CategoryWrap = styled.aside`
  position: relative;
`;

const SingleContainer = styled.div`
  width: 900px;
  height: 30px;
  margin: 0 auto;
  border: 1px solid #ececec;
  border-radius: 10px;
  background-color: #ececec;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
`;

const Left = styled.div``;

const Right = styled.div``;

const CategoryContainer = styled(SingleContainer)`
  height: 400px;
  display: block;
`;

const GroupContainer = styled.div`
  margin-left: 10px;
  margin-bottom: 30px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const AllTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px 5px;
`;

const Tag = styled.div`
  background-color: gray;
  color: white;
  font-size: 14px;
  border-radius: 10px;
  padding: 2px 10px;
  margin: 5px 3px;
  cursor: pointer;

  ${(props) =>
    props.creator &&
    css`
      background-color: ${(props) => props.theme.subColor};
    `}
`;
