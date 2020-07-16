// external modules
import styled from 'styled-components';
import Router from 'next/router';

// internal modules
import Nav from '../components/Nav';

const NotFound = () => {
  const goHome = () => {
    Router.replace('/');
  };

  const goBack = () => {
    Router.back();
  };

  return (
    <>
      <Nav />
      <NotFoundWrap>
        <Text>죄송합니다. 페이지를 사용할 수 없습니다.</Text>
        <p>링크가 잘못되었거나 페이지가 삭제되었습니다.</p>
        <Button onClick={goHome}>홈으로 가기</Button>
        <Button onClick={goBack}>뒤로가기</Button>
      </NotFoundWrap>
    </>
  );
};

export default NotFound;

const NotFoundWrap = styled.div`
  position: relative;
  top: 200px;
  text-align: center;

  p {
    margin-bottom: 30px;
  }
`;

const Text = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;

const Button = styled.button`
  cursor: pointer;
  border: 1px solid lightgray;
  color: #2d2d2d;
  outline: none;
  border-radius: 5px;
  padding: 5px;
  margin: 0 5px;
  font-size: 16px;

  :hover {
    background-color: ${(props) => props.theme.mainColor};
    color: white;
  }
`;
