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
  height: calc(80vh + 20px);
  background-color: #ffffff;
  @media ${(props) => props.theme.laptopM} {
    position: unset;
    top: unset;
    left: unset;
    width: 45vw;
    height: unset;
    background-color: #ffffff;
  }
`;
const DetailListContainer = styled.div``;
