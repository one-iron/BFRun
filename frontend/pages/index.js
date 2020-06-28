// external modules
import styled from 'styled-components';

// internal modules
import Nav from '../components/Nav';
import Category from '../components/Category';
import VideoList from '../components/VideoList';
import SelectedVideo from '../components/SelectedVideo';

export default function HomePage() {
  return (
    <>
      <Nav />
      <ContentWrap>
        <ContentContainer>
          <Category />
          {/* <VideoList /> */}
          <SelectedVideo />
        </ContentContainer>
      </ContentWrap>
    </>
  );
}

const ContentWrap = styled.section`
  position: relative;
  top: 100px;
`;

const ContentContainer = styled.div`
  /* margin: 0 auto; */
  max-width: 1060px;
  width: 1000px;
`;
