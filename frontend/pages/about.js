// external modules
import styled from 'styled-components';

// internal moduels
import Nav from '../components/Nav';

const About = () => {
  return (
    <>
      <Nav />
      <AboutWrap>
        <AboutContainer>
          <header>
            안녕하세요, 저희는 개발자 커리어를 꾸려 가고 있는 BFRun Team입니다.
          </header>
          <OneContainer>
            <Title>시작하게 된 계기</Title>
            <Contents>
              아무 것도 모르고 개발에 뛰어든 사람들 중 하나로서, 유튜브
              크리에이터 분들의 강의는 큰 도움이 되었습니다. <br />
              하지만 강의 영상들이 모아져 있는 곳이 없어서😔 즐겨찾기를 하거나
              항 유튜브로 찾아 들어가야 하는 불편함이 있었습니다. 이를
              개선하고자 알찬 강의들을 모아놓은 사이트를 만든 것이 BFRun
              프로젝트입니다. <br />
              +저희 프로젝트는 민정님의 ✨반짝이는 아이디어✨로 시작하게
              되었습니다.
            </Contents>
          </OneContainer>
          <OneContainer>
            <Title>BF Run?</Title>
            <Contents>
              BFRun은 백엔드와 프론트엔드 모두 개발자로서 커리어 레이스를
              달리자(Run)는 의미와, 두 사이드를 배워보자(Learn)는 중의적
              표현입니다. <br />
              이름의 경우 같은 부트 캠프 6기 분들의 사이드 프로젝트인 BFTest의
              영향도 받았습니다 🙋🏻‍♀️
            </Contents>
          </OneContainer>
          <OneContainer>
            <Title>팀 소개</Title>
            <Contents></Contents>
          </OneContainer>
          <OneContainer>
            <Title>마지막으로</Title>
            <Contents>
              끝으로 영상 활용에 동의해주신 이고잉님, 얄팍한 코딩사전님,
              김왼손님, 워니님, 엘리님, 니콜라스님, 김버그님, 조코딩님에게
              무한한 감사를 드립니다. <br />
              개선시킬 점이나 불편한 점이 있으다면 피드백은 위 이메일로
              보내주시면 너무나도 감사하겠습니다.
            </Contents>
          </OneContainer>
          <Update>
            <Title>업데이트</Title>
            <Tobe>예정</Tobe>
            <Done>완료</Done>
          </Update>
        </AboutContainer>
      </AboutWrap>
    </>
  );
};

export default About;

const AboutWrap = styled.div`
  position: relative;
  top: 120px;
  margin-bottom: 100px;
`;

const AboutContainer = styled.div`
  margin: 0 auto;
  width: 1200px;

  header {
    font-size: 
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  @media ${(props) => props.theme.laptopM} {
    width: 90%;
  }
`;

const OneContainer = styled.div``;

const Title = styled.div`
  font-weight: 700;
  font-size: 22px;
  margin: 10px 0;
  font-family: 'NaNum Gothic';
`;

const Contents = styled.div`
  line-height: 22px;
`;

const Update = styled.div``;

const Tobe = styled.div``;

const Done = styled.div``;
