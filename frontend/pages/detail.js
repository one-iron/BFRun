// external modules
import styled from 'styled-components';

// internal modules
import Nav from '../components/Nav';
import DetailVideo from '../components/Detail/Video';
import DetailContent from '../components/Detail/Content';
import DetailList from '../components/Detail/List';

const Detail = () => {
  return (
    <>
      <Nav />
      <DetailWrap>
        <DetailContainer>
          <DetailVideo />
          <DetailContent />
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
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #f9f9f9;
  border: 1px solid #f9f9f9;
`;

const DetailContainer = styled.div`
  display: inline-block;
`;
