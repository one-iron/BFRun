// external modules
import styled from 'styled-components';

// internal modules
import Nav from '../components/Nav';
import Category from '../components/Category';
import VideoList from '../components/VideoList';

const HomePage = () => {
  return (
    <>
      <Nav />
      <Content>
        <Category />
        <VideoList />
      </Content>
    </>
  );
};

export default HomePage;

const Content = styled.section`
  display: felx;
  flex-wrap: wrap;
  width: 800px;
  margin: 0 auto;
`;
