// external modules
import styled, { css } from 'styled-components';

const Team = () => {
  const githubImg = 'https://avatars0.githubusercontent.com/u';
  return (
    <TeamWrap>
      <TeamContainer>
        <End>
          <p>[ 프론트엔드 ]</p>
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
          <p>[ 백엔드 ]</p>
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
    </TeamWrap>
  );
};

export default Team;

const TeamWrap = styled.div``;

const TeamContainer = styled.div`
  display: flex;
  /* justify-content: space-evenly; */

  @media (max-width: 660px) {
    display: block;
  }
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

  @media (max-width: 660px) {
    ${(props) =>
      props.back &&
      css`
        margin-left: 20px;
      `}
  }
`;

const TeamDiv = styled.div`
  display: flex;
  margin: 5px 0;
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
