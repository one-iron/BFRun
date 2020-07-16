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
        <div>
          <img src="/static/404cat.png" />
          <Text>죄송합니다. 페이지를 사용할 수 없습니다.</Text>
          {/* <p>링크가 잘못되었거나 페이지가 삭제되었습니다.</p> */}
          <Button onClick={goHome}>홈으로 가기</Button>
          <Button onClick={goBack}>뒤로가기</Button>
        </div>
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

  img {
    width: 250px;
    margin-bottom: 30px;
  }
  div {
    /* border: 1px solid rgba(255, 23, 24, 0.4);
    border-radius: 4px; */
    display: inline-block;
    padding: 50px;
  }
`;

const Text = styled.h1`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  transition: all 0.3s ease-in-out;
  border: 1px solid lightgray;
  background-color: white;
  color: #2d2d2d;
  outline: none;
  border-radius: 4px;
  padding: 5px;
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.mainColor};
    color: white;
  }
`;
