// external modules
import styled, { css } from 'styled-components';

// internal modules

const DetailContent = () => {
  return (
    <DetailContentWrap>
      <DetailContentContainer>detail Content Section</DetailContentContainer>
    </DetailContentWrap>
  );
};

export default DetailContent;

const DetailContentWrap = styled.div`
  width: 50vw;
  height: 15vh;
  margin: 20px auto;
  background-color: #ffffff;
  /* border: 1px solid blue; */
`;
const DetailContentContainer = styled.div`
  /* border: 1px solid green; */
`;
