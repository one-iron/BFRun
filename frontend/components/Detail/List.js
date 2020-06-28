// external modules
import styled, { css } from 'styled-components';

// internal modules

const DetailList = () => {
  return (
    <DetailListWrap>
      <DetailListContainer>detail List Section</DetailListContainer>
    </DetailListWrap>
  );
};

export default DetailList;

const DetailListWrap = styled.div`
  position: absolute;
  top: 20px;
  left: 76vw;
  width: 15vw;
  height: 65vh;
  background-color: #ffffff;
  /* border: 1px solid blue; */
`;
const DetailListContainer = styled.div`
  overflow: auto;
  height: 65vh;
  /* border: 1px solid green; */
`;
