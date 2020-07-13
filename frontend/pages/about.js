// external modules
import styled, { css } from 'styled-components';

// internal moduels
import Nav from '../components/Nav';

const About = () => {
  const githubImg = 'https://avatars0.githubusercontent.com/u';

  return (
    <>
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
              유튜브로 찾아 들어가야 하는 불편함이 있었습니다. 이를 개선하고자
              알찬 강의들을 모아놓은 사이트를 만든 것이 BFRun 프로젝트입니다.{' '}
              <br />
              <p style={{ fontStyle: 'italic' }}>
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
              <TeamContainer>
                <End>
                  <p>프론트엔드</p>
                  <TeamDiv>
                    <ImgDiv>
                      <img
                        src={`${githubImg}/58619071?s=460&u=94bbef350e5f936666b4aff5601a009bb2d741ef&v=4`}
                        alt="kmj"
                      />
                    </ImgDiv>
                    <DetailDiv>
                      <Name>김민정 MJ Kim</Name>
                      <URL>
                        <a
                          href="https://github.com/howdy-mj"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github
                        </a>
                      </URL>
                    </DetailDiv>
                  </TeamDiv>
                  <TeamDiv>
                    <ImgDiv>
                      <img
                        src={`${githubImg}/59866241?s=460&u=2ec46f9a5e73636199d7c335cd93e55663a0ec9b&v=4`}
                        alt="kmj"
                      />
                    </ImgDiv>
                    <DetailDiv>
                      <Name>심기현 Simple Key</Name>
                      <URL>
                        <a
                          href="https://github.com/skh417"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github
                        </a>
                      </URL>
                    </DetailDiv>
                  </TeamDiv>
                  <TeamDiv>
                    <ImgDiv>
                      <img
                        src={`${githubImg}/59141662?s=460&u=b761ea7b11ece3885fe8011b5e2f7b4ae5210f7f&v=4`}
                        alt="kmj"
                      />
                    </ImgDiv>
                    <DetailDiv>
                      <Name>이원철 One-iron</Name>
                      <URL>
                        <a
                          href="https://github.com/one-iron"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github
                        </a>
                      </URL>
                    </DetailDiv>
                  </TeamDiv>
                </End>
                <End back>
                  <p>백엔드</p>
                  <TeamDiv>
                    <ImgDiv>
                      <img
                        src={`${githubImg}/60729037?s=460&u=02b11a01d5e8a000474fc1edb8266cb00499b193&v=4`}
                        alt="kmj"
                      />
                    </ImgDiv>
                    <DetailDiv>
                      <Name>이예은 Yeeun</Name>
                      <URL>
                        <a
                          href="https://github.com/yenilee"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github
                        </a>
                      </URL>
                    </DetailDiv>
                  </TeamDiv>
                  <TeamDiv>
                    <ImgDiv>
                      <img
                        src={`${githubImg}/33950753?s=460&u=81572a4a2e22584e5f695470ad8aab752ac30d33&v=4`}
                        alt="kmj"
                      />
                    </ImgDiv>
                    <DetailDiv>
                      <Name>진성준 Jun-Jin</Name>
                      <URL>
                        <a
                          href="https://github.com/sungjun-jin"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github
                        </a>
                      </URL>
                    </DetailDiv>
                  </TeamDiv>
                </End>
              </TeamContainer>
            </Contents>
          </OneContainer>
          <OneContainer>
            <Title>마지막으로</Title>
            <Contents>
              끝으로 영상 활용에 동의해주신 생활코딩의 이고잉님, 얄팍한
              코딩사전님, 김왼손님, 코딩하는 테크보이 워니님, 드림코딩의 엘리님,
              노마드코더의 니콜라스님, 김버그님, 조코딩님에게 무한한 감사를
              드립니다. <br />
              해당 사이트에 대한 문의나 피드백은 bfrunteam@gmail.com
              <MailTag href="mMailTagilto:bfrunteam@gmail.com">
                (메일 보내기)
              </MailTag>
              로 보내주시면 너무나도 감사하겠습니다.
            </Contents>
          </OneContainer>
          <Update>
            <Title>업데이트</Title>
            <Tobe>
              예정
              <details>
                <ul>
                  <li>책갈피 기능</li>
                </ul>
              </details>
            </Tobe>
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

const TeamDiv = styled.div`
  display: flex;
  margin: 5px 0;
`;

const End = styled.div`
  margin-left: 20px;

  ${(props) =>
    props.back &&
    css`
      margin-left: 70px;
    `}

  p {
    text-align: center;
  }
`;

const TeamContainer = styled.div`
  display: flex;

  /* justify-content: space-evenly; */
`;

const ImgDiv = styled.div`
  img {
    width: 80px;
    border-radius: 50%;
    border: 1px solid black;
  }
`;

const DetailDiv = styled.div`
  margin: auto 0 auto 20px;
`;

const Name = styled.div`
  font-weight: 700;
`;

const URL = styled.div`
  cursor: pointer;
  a {
    color: black;
  }
`;

const MailTag = styled.a`
  cursor: pointer;
  font-size: 14px;
  color: blue;
`;

const Update = styled.div``;

const Tobe = styled.div``;

const Done = styled.div``;
