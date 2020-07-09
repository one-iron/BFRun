// external modules
import styled from 'styled-components';

// internal modules
import Nav from '../components/Nav';

const NotFound = () => {
  return (
    <>
      <Nav />
      <NotFoundWrap>
        <Text>존재하지 않는 페이지 입니다</Text>
        <GoBack>뒤로가기</GoBack>
      </NotFoundWrap>
    </>
  );
};

export default NotFound;

const NotFoundWrap = styled.div`
  position: relative;
  top: 120px;
  text-align: center;
`;

const Text = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;

const GoBack = styled.button``;
