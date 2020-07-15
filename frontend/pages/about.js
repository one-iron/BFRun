// external modules
import styled, { css } from 'styled-components';
import Head from 'next/head';

// internal moduels
import Nav from '../components/Nav';
import Team from '../components/About/Team';
import Update from '../components/About/Update';

const About = () => {
  return (
    <>
      <Head>
        <title>BFRun | About</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <AboutWrap>
        <AboutContainer>
          <header>
            안녕하세요, <br />
            저희는 개발자 커리어를 꾸려 가고 있는 BFRun Team입니다.
          </header>
          <OneContainer>
            <Title>시작하게 된 계기</Title>
            <Contents>
              아무 것도 모르고 개발에 뛰어든 사람들 중 하나로서, 유튜브
              크리에이터 분들의 강의는 큰 도움이 되었습니다. <br />
              하지만 강의 영상들이 모아져 있는 곳이 없어서😔 즐겨찾기를 하거나
              유튜브로 찾아 들어가야 하는 불편함이 있었습니다. <br /> 이를
              개선하고자 알찬 강의들을 모아놓은 사이트를 만든 것이 BFRun
              프로젝트입니다. <br />
              <p style={{ fontStyle: 'italic', fontSize: '14px' }}>
                +저희 프로젝트는 민정님의 ✨반짝이는 아이디어✨로 시작하게
                되었습니다.
              </p>
            </Contents>
          </OneContainer>
          <OneContainer>
            <Title>BFRun?</Title>
            <Contents>
              BFRun은 백엔드와 프론트엔드 모두 개발자로서 커리어 레이스를
              달리자(Run)는 의미와, 두 사이드를 배워보자(Learn)는 중의적
              표현입니다. <br />
              이름의 경우 같은 부트 캠프 6기 분들의 사이드 프로젝트인 BFTest의
              영향도 받았습니다 🙋🏻‍♀️
            </Contents>
          </OneContainer>
          <OneContainer>
            <Title team>팀 소개</Title>
            <Contents>
              <Team />
            </Contents>
          </OneContainer>
          <OneContainer>
            <Title>마지막으로</Title>
            <Contents>
              영상 활용에 동의해주신 생활코딩의 이고잉님, 얄팍한 코딩사전님,
              김왼손님, 코딩하는 테크보이 워니님, 드림코딩의 엘리님,
              노마드코더의 니콜라스님, 김버그님, 조코딩님에게 무한한 감사를
              드립니다. <br />
              아울러 해당 사이트에 대한 문의나 피드백은 bfrunteam@gmail.com
              <MailTag href="mailto:bfrunteam@gmail.com">(메일 보내기)</MailTag>
              로 보내주시면 너무나도 감사하겠습니다.
            </Contents>
          </OneContainer>
          <Update />
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
    font-size: 30px;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
    margin-bottom: 10px;
    line-height: 40px;
  }

  @media ${(props) => props.theme.laptopM} {
    width: 90%;
  }
`;

const OneContainer = styled.div`
  margin: 50px 0;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 22px;
  margin: 10px 0;
  font-family: 'NaNum Gothic';

  ${(props) =>
    props.team &&
    css`
      margin-bottom: 10px;
    `}
`;

const Contents = styled.div`
  line-height: 30px;
`;

const MailTag = styled.a`
  cursor: pointer;
  font-size: 14px;
  color: blue;
`;
