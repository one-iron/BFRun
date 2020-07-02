// external modules
import styled from 'styled-components';

// internal modules
import Nav from '../components/Nav';
import DetailVideo from '../components/Detail/Video';

const Detail = () => {
  return (
    <>
      <Nav />
      <DetailWrap>
        <DetailContainer>
          <DetailVideo />
        </DetailContainer>
      </DetailWrap>
    </>
  );
};

export default Detail;

const DetailWrap = styled.div`
  position: relative;
  text-align: center;
  padding: 20px;
  top: 80px;
  width: 100vw;
  /* height: calc(100vh - 80px); */
  background-color: #f9f9f9;
  border: 1px solid #f9f9f9;
  @media ${(props) => props.theme.laptopM} {
    text-align: unset;
  }
`;

const DetailContainer = styled.div`
  display: inline-block;
`;
