// external modules
import styled, { css } from 'styled-components';

// internal modules
import DetailContent from './Content';
import DetailList from './List';

const DetailVideo = () => {
  return (
    <DetailVideoWrap>
      <DetailVideoContainer>
        {/* 유튜브 영상 화면이 들어갈 장소 입니다. */}
        <main className="videoMain">detail Video Section</main>
        {/* 유튜브 영상 정보가 들어갈 컴포넌트 입니다. */}
        <DetailContent />
      </DetailVideoContainer>

      <section className="listSection">
        {/* 유튜브 영상 재생복록이 들어갈 컴포넌트 입니다. */}
        <DetailList />
      </section>
    </DetailVideoWrap>
  );
};

export default DetailVideo;

const DetailVideoWrap = styled.div`
  display: flex;
  @media ${(props) => props.theme.laptopM} {
    section {
      display: none;
    }
  }
`;
const DetailVideoContainer = styled.div`
  .videoMain {
    width: 960px;
    height: calc(68vh + 40px);
    background-color: #ffffff;
  }
  .listSection {
    background-color: #ffffff;
  }
  @media ${(props) => props.theme.laptopM} {
    width: 95vw;
  }
`;
