// external modules
import styled from 'styled-components';

// internal modules
import Nav from '../components/Nav';
import Category from '../components/Category';
import VideoList from '../components/VideoList';

export default function HomePage() {
  return (
    <>
      <Nav />
      <Content>
        <Category />
        <VideoList />
      </Content>
    </>
  );
}

const Content = styled.section`
  display: felx;
  flex-wrap: wrap;
  width: 800px;
  margin: 0 auto;
`;
