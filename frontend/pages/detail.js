// external modules
import styled from 'styled-components';

// internal modules
import Nav from '../components/Nav';
import DetailVideo from '../components/Detail/Video';
import DetailList from '../components/Detail/List';

const Detail = () => {
  return (
    <>
      <Nav />
      <DetailWrap>
        <DetailVideo />
        <DetailList />
      </DetailWrap>
    </>
  );
};

export default Detail;

const DetailWrap = styled.div`
  position: relative;
  top: 80px;
  width: 100%;
  background-color: #f9f9f9;
  border: 1px solid #f9f9f9;
`;
