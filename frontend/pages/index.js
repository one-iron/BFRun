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
      <ContentWrap>
        <ContentContainer>
          <Category />
          <VideoList />
        </ContentContainer>
      </ContentWrap>
    </>
  );
};

export default HomePage;

const ContentWrap = styled.section`
  position: relative;
  top: 100px;
`;

const ContentContainer = styled.div`
  /* margin: 0 auto; */
  max-width: 1060px;
  width: 1000px;
`;
