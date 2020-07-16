// external modules
import styled from 'styled-components';

const Update = () => {
  return (
    <UpdateWrap>
      <UpdateContainer>
        <Title>업데이트</Title>
        <Contents>
          <Tobe>
            <details>
              <summary>예정</summary>
              <ul>
                <li>검색창</li>
                <li>동영상 책갈피 기능</li>
                <li>한/영 영상 나누기</li>
              </ul>
            </details>
          </Tobe>
          {/* <Done>
            <details>
              <summary>완료</summary>
              <ul>
                <li>책갈피 기능</li>
              </ul>
            </details>
          </Done> */}
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
  summary {
    outline: none;
    font-size: 15px;
    font-weight: none;
  }
  ul {
    margin-left: 50px;
    list-style: circle;
  }
`;

const Done = styled(Tobe)`
  margin-top: 20px;
`;
