// external modules
import styled, { css } from 'styled-components';

// internal modules

const DetailVideo = () => {
  return (
    <DetailVideoWrap>
      <DetailVideoContainer>detail Video Section</DetailVideoContainer>
    </DetailVideoWrap>
  );
};

export default DetailVideo;

const DetailVideoWrap = styled.div``;
const DetailVideoContainer = styled.div`
  width: 50vw;
  height: 65vh;
  margin: 20px auto;
  background-color: #ffffff;
  /* border: 1px solid green; */
`;
