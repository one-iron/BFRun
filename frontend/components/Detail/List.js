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
  width: 240px;
  height: 100vh;
  /* height: calc(100vh - 40px); */
  margin-left: 20px;
  background-color: #ffffff;
  @media ${(props) => props.theme.laptopM} {
    position: unset;
    top: unset;
    left: unset;
    width: 45vw;
    height: unset;
    background-color: #ffffff;
  }
  @media ${(props) => props.theme.tablet} {
    position: unset;
    top: unset;
    left: unset;
    width: 95vw;
    height: unset;
    background-color: #ffffff;
  }
`;
const DetailListContainer = styled.div``;
