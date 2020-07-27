// external modules
import styled from 'styled-components';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';

// internal modules
import Nav from '../../components/Nav';
import DetailVideo from '../../components/DetailVideo';

const Video = () => {
  const router = useRouter();
  const { id } = router.query;

  const goBack = () => {
    Router.back();
  };

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
          <GoBack onClick={goBack}>
            <img src="/static/goback.png" />
            돌아가기
          </GoBack>
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
  padding: 20px 0 30px 0;
  top: 100px;
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  border: 1px solid #f9f9f9;
`;

const DetailContainer = styled.div`
  display: inline-block;
`;

const GoBack = styled.div`
  width: 130px;
  height: 40px;
  line-height: 40px;
  background-color: black;
  color: white;
  margin-bottom: 15px;
  cursor: pointer;

  img {
    margin-right: 5px;
  }
`;
