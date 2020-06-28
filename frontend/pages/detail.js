// external modules
import styled from 'styled-components';

// internal modules
import Nav from '../components/Nav';
import DetailVideo from '../components/Detail/Video';
import DetailContent from '../components/Detail/Content';

const Detail = () => {
  return (
    <>
      <Nav />
      <DetailWrap>
        <DetailVideo />
        <DetailContent />
      </DetailWrap>
    </>
  );
};

export default Detail;

const DetailWrap = styled.div`
  position: relative;
  top: 80px;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #f9f9f9;
  border: 1px solid #f9f9f9;
`;
