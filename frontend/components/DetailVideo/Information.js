// external modules
import styled from 'styled-components';

// internal modules
import PlayList from './PlayList';

const Information = (props) => {
  const { listVideo, clickList, videoUrl, videoInfo } = props;

  // 조회수의 숫자에 쉼표를 찍는 Intl 함수를 변수로 지정하여 조회수에 쓰이고 있습니다.
  const numberFilter = new Intl.NumberFormat('en-IN', {
    maximumSignificantDigits: 3,
  });

  return (
    <InformationWrap>
      <InformationContainer>
        {videoInfo && (
          <>
            <section>
              <figure>
                <img src={videoInfo.channel_profile} alt="" />
                <figcaption>{videoInfo.channel_name}</figcaption>
              </figure>
            </section>
            <section>
              <summary>{videoInfo.title}</summary>
              <article>
                조회수 {numberFilter.format(videoInfo.view)}회{' '}
                <time>{videoInfo.created_at}</time>
              </article>
              <main style={{ whiteSpace: 'pre-line' }}>
                {videoInfo.description}
              </main>
            </section>
          </>
        )}
      </InformationContainer>
      <ListSection>
        <PlayList
          videoUrl={videoUrl}
          listVideo={listVideo}
          clickList={clickList}
        />
      </ListSection>
    </InformationWrap>
  );
};

export default Information;

const InformationWrap = styled.div`
  margin-top: 20px;
  width: 960px;
  margin-top: 20px;
  @media ${(props) => props.theme.laptopM} {
    display: flex;
    justify-content: space-between;
    width: 95vw;
  }
  @media ${(props) => props.theme.tablet} {
    display: unset;
    width: 95vw;
    height: 100%;
  }
`;

const InformationContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  font-size: 13px;
  color: #333;
  padding: 15px;
  @media ${(props) => props.theme.laptopM} {
    width: 45vw;
  }
  @media ${(props) => props.theme.tablet} {
    width: 95vw;
  }
  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80px;
    img {
      border: 1px solid #eee;
      border-radius: 50px;
      width: 45px;
      /* height: 55px; */
      background-image: url(${(props) => props.img});
      background-size: cover;
    }
    figcaption {
      margin-top: 10px;
    }
  }
  section:nth-of-type(2) {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    * {
      margin-top: 5px;
    }
    summary {
      font-size: 20px;
      font-weight: 600;
      /* height: 25px; */
    }
    article {
      text-align: left;
      color: gray;
    }
    main {
      text-align: left;
    }
  }
`;

const ListSection = styled.div`
  display: none;
  @media ${(props) => props.theme.laptopM} {
    display: unset;
  }
  @media ${(props) => props.theme.tablet} {
    display: unset;
  }
`;
