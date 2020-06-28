// external modules
import styled from 'styled-components';

// internal modules
import Nav from '../components/Nav';
import InfoLine from '../components/Category/InfoLine';
import Category from '../components/Category/Left';
import VideoList from '../components/VideoList/Right';
import Top from '../components/Category/Top';
import Bottom from '../components/VideoList/Bottom';

const HomePage = () => {
  return (
    <>
      <Nav />
      <ContentWrap>
        <ContentContainer>
          {/* <Category /> */}
          <InfoLine />
          <VideoList />
          {/* <Top />
          <Bottom /> */}
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
  margin: 0 auto;
  max-width: 1060px;
  width: 1000px;
`;
