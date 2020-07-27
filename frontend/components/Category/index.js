// external modules
import styled, { css } from 'styled-components';

// internal modules
// import LangToggle from './LangToggle';

const Category = ({
  contentList,
  selectedContent,
  addDelContentTags,
  stackList,
  selectedStack,
  addDelStackTags,
  creatorList,
  selectedCreator,
  addDelCreatorTags,
}) => {
  return (
    <>
      <CategoryWrap>
        <ContentsContainer>
          <GroupContainer contents>
            <Title>Contents</Title>
            <AllTags>
              {contentList.map((type) => {
                return (
                  <Tag
                    key={type.id}
                    id={type.id}
                    style={{
                      backgroundColor: selectedContent.includes(type.name)
                        ? 'green'
                        : '#f2f1e9',
                      color: selectedContent.includes(type.name)
                        ? 'white'
                        : 'black',
                    }}
                    onClick={() => addDelContentTags(type.name, type.id)}
                  >
                    {type.name}
                  </Tag>
                );
              })}
            </AllTags>
          </GroupContainer>
        </ContentsContainer>
        <CategoryContainer>
          {/* <LangToggle /> */}
          <GroupContainer>
            <Title>FrontEnd</Title>
            <AllTags>
              {stackList[1].frontend_stacks.map((type) => {
                return (
                  <Tag
                    key={type.id}
                    id={type.id}
                    style={{
                      backgroundColor: selectedStack.includes(type.name)
                        ? type.color_code
                        : '#f2f1e9',
                      color: selectedStack.includes(type.name)
                        ? 'white'
                        : 'black',
                    }}
                    onClick={() => addDelStackTags(type.name, type.id)}
                  >
                    {type.name}
                  </Tag>
                );
              })}
            </AllTags>
          </GroupContainer>
          <Line />
          <GroupContainer>
            <Title>BackEnd</Title>
            <AllTags>
              {stackList[2].backend_stacks.map((type) => {
                return (
                  <Tag
                    key={type.id}
                    id={type.id}
                    style={{
                      backgroundColor: selectedStack.includes(type.name)
                        ? type.color_code
                        : '#f2f1e9',
                      color: selectedStack.includes(type.name)
                        ? 'white'
                        : 'black',
                    }}
                    onClick={() => addDelStackTags(type.name, type.id)}
                  >
                    {type.name}
                  </Tag>
                );
              })}
            </AllTags>
          </GroupContainer>
          <Line />
          <GroupContainer>
            <Title>Developer</Title>
            <AllTags>
              {stackList[0].general_stacks.map((type) => {
                return (
                  <Tag
                    key={type.id}
                    id={type.id}
                    style={{
                      backgroundColor: selectedStack.includes(type.name)
                        ? type.color_code
                        : '#f2f1e9',
                      color: selectedStack.includes(type.name)
                        ? 'white'
                        : 'black',
                    }}
                    onClick={() => addDelStackTags(type.name, type.id)}
                  >
                    {type.name}
                  </Tag>
                );
              })}
            </AllTags>
          </GroupContainer>
          <Line />
          <GroupContainer>
            <Title>Creator</Title>
            <AllTags>
              {creatorList.map((type) => {
                return (
                  <Tag
                    key={type.id}
                    id={type.id}
                    style={{
                      backgroundColor: selectedCreator.includes(type.name)
                        ? '#F80000'
                        : '#f2f1e9',
                      color: selectedCreator.includes(type.name)
                        ? 'white'
                        : 'black',
                    }}
                    onClick={() => addDelCreatorTags(type.name, type.id)}
                  >
                    {type.name}
                  </Tag>
                );
              })}
            </AllTags>
          </GroupContainer>
        </CategoryContainer>
        <BfTestLink>
          <GroupContainer>
            <Title wecode>
              아직 프론트인지
              <br /> 백인지 모르겠다면?
            </Title>
            <TextLink href="http://bftest.wecode.co.kr/" target="_blank">
              BF-Test 하러가기! <i className="fa fa-angle-right"></i>
            </TextLink>
          </GroupContainer>
        </BfTestLink>
        <WecodeLink>
          <GroupContainer>
            <Title wecode>
              부트캠프를 <br />
              찾고 계신다면?
            </Title>
            <TextLink href="https://wecode.co.kr/" target="_blank">
              WeCode 바로가기 <i className="fa fa-angle-right"></i>
            </TextLink>
          </GroupContainer>
        </WecodeLink>
      </CategoryWrap>
    </>
  );
};

export default Category;

const CategoryWrap = styled.aside`
  display: block;
  @media ${(props) => props.theme.laptopM} {
    display: none;
  }
`;

const ContentsContainer = styled.div`
  width: 240px;
  border: 1px solid #e4e9ed;
  border-radius: 7px;
  background-color: white;
`;

const CategoryContainer = styled(ContentsContainer)`
  margin-top: 10px;
`;

const GroupContainer = styled.div`
  margin: 30px 0 30px 10px;

  ${(props) =>
    props.contents &&
    css`
      margin: 30px 0 10px 10px;
    `}
`;

const Line = styled.div`
  width: 100%;
  border: 1px solid #ececec;
  margin: -10px auto;
`;

const Title = styled.div`
  font-family: 'Gothic A1';
  font-size: 18px;
  font-weight: 900;
  margin-left: 5px;
  margin-bottom: 10px;
  color: #2d2d2d;

  ${(props) =>
    props.wecode &&
    css`
      font-size: 18px;
      font-weight: 900;
      line-height: 24px;
      margin-bottom: 0;
    `}
`;

const AllTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;
`;

const Tag = styled.div`
  font-family: 'AppleSDGothicNeo';
  font-size: 14px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  padding: 8px;
  margin: 5px 3px;
  cursor: pointer;
`;

const BfTestLink = styled(ContentsContainer)`
  margin-top: 10px;
`;

const WecodeLink = styled(ContentsContainer)`
  margin-top: 10px;
`;

const TextLink = styled.a`
  cursor: pointer;
  color: #2d2d2d;
  display: block;
  margin-top: 7px;
  margin-left: 7px;

  i {
    font-weight: bold;
    font-size: 20px;
    margin-left: 3px;
    transition: all 0.3s linear;
  }
  &:hover {
    text-decoration: underline;
    i {
      margin-left: 14px;
    }
  }
`;
