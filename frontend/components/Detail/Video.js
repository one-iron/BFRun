// external modules
import styled, { css } from 'styled-components';

// internal modules
import DetailList from './List';

const DetailVideo = () => {
  return (
    <DetailVideoWrap>
      <DetailVideoContainer>detail Video Section</DetailVideoContainer>
      <section>
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
  width: 60vw;
  height: 68vh;
  background-color: #ffffff;
  @media ${(props) => props.theme.laptopM} {
    width: 95vw;
  }
`;
