// external modules
import styled from 'styled-components';

const Update = () => {
  return (
    <UpdateWrap>
      <UpdateContainer>
        <Title>업데이트</Title>
        <Contents>
          <Tobe>
            예정
            <details>
              <ul>
                <li>검색창</li>
                <li>동영상 책갈피 기능</li>
              </ul>
            </details>
          </Tobe>
          <Done>
            완료
            <details>
              <ul>
                <li>책갈피 기능</li>
              </ul>
            </details>
          </Done>
        </Contents>
      </UpdateContainer>
    </UpdateWrap>
  );
};

export default Update;

const UpdateWrap = styled.div`
  border-top: 1px solid lightgray;
`;

const UpdateContainer = styled.div`
  margin-top: 50px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 22px;
  margin: 10px 0;
  font-family: 'NaNum Gothic';
`;

const Contents = styled.div`
  line-height: 30px;
  /* display: flex; */
`;

const Tobe = styled.div`
  ul {
    margin-left: 50px;
    list-style: circle;
  }
`;

const Done = styled(Tobe)`
  margin-top: 20px;
`;
