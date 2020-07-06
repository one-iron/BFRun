// external modules
import styled from 'styled-components';

const BFTest = () => {
  return (
    <BFTestWrap>
      <BFTestContainer>
        아직 프론트인지 백인지 모르겠다면?{' '}
        <a href="http://bftest.wecode.co.kr/" target="_blank">
          BF-Test
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
  /* padding-bottom: 20px; */
`;

const BFTestContainer = styled.div`
  position: relative;
  height: 50px;
  background: #eeeeee;
  padding: 10px;
  border-radius: 2px;
  text-align: center;
  line-height: 30px;

  :before,
  :after {
    content: '';
    position: absolute;
    bottom: 10px;
    width: 40%;
    height: 10px;
    box-shadow: 0 5px 14px rgba(0, 0, 0, 0.7);
    z-index: -1;
    transition: all 0.3s ease-in-out;
  }

  :before {
    left: 15px;
    transform: skew(-5deg) rotate(-5deg);
  }

  :after {
    right: 15px;
    transform: skew(5deg) rotate(5deg);
  }

  :hover:before,
  :hover:after {
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.4);
  }

  :hover:before {
    left: 5px;
  }

  :hover:after {
    right: 5px;
  }

  a {
    cursor: pointer;
    font-weight: bold;
    color: #1a73e8;
  }
`;
