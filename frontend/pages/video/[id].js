// external modules
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Head from 'next/head';

// internal modules
import Nav from '../../components/Nav';
import DetailVideo from '../../components/DetailVideo';

const Video = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>BFRun | Video</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <DetailWrap>
        <DetailContainer>
          <DetailVideo id={id} />
        </DetailContainer>
      </DetailWrap>
    </>
  );
};

export default Video;

const DetailWrap = styled.div`
  position: relative;
  text-align: center;
  padding: 20px;
  top: 100px;
  width: 100%;
  background-color: #f9f9f9;
  border: 1px solid #f9f9f9;

  @media ${(props) => props.theme.laptopM} {
    text-align: unset;
  }
`;

const DetailContainer = styled.div`
  display: inline-block;
`;
