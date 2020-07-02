// external modules
import styled from 'styled-components';

const BFTest = () => {
  return (
    <BFTestWrap>
      <BFTestContainer>
        아직 프론트인지 백인지 모르겠다면?{' '}
        <a href="http://bftest.wecode.co.kr/" target="_blank">
          BFTest
        </a>{' '}
        하러가기!
      </BFTestContainer>
    </BFTestWrap>
  );
};

export default BFTest;

const BFTestWrap = styled.div`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
  padding-bottom: 20px;
`;

const BFTestContainer = styled.div`
  background-color: #eeeeee;
  padding: 10px;
  border-radius: 5px;
  text-align: center;

  a {
    cursor: pointer;
    font-weight: bold;
    color: #1a73e8;
  }
`;
