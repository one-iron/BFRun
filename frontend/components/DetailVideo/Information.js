// external modules
import styled from 'styled-components';

// internal modules
import PlayList from './PlayList';

const Information = (props) => {
  const { listVideo, clickList, videoUrl, videoInfo } = props;

  return (
    <InformationWrap>
      <InformationContainer>
        {videoInfo && (
          <>
            <section>
              <a href={videoInfo.video_url} target="_blank">
                <figure>
                  <img src={videoInfo.channel_profile} alt="" />
                  <figcaption>{videoInfo.channel_name}</figcaption>
                </figure>
              </a>
            </section>
            <section>
              <summary>{videoInfo.title}</summary>
              <article>
                <time>{videoInfo.created_at}</time>
              </article>
              <details style={{ whiteSpace: 'pre-line' }}>
                {videoInfo.description}
              </details>
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
  margin-top: 10px;
  width: 960px;

  @media (max-width: 1370px) {
    display: flex;
    justify-content: space-between;
    width: 95vw;
  }

  @media ${(props) => props.theme.tablet} {
    display: unset;
    width: 90vw;
    height: 100%;
  }
`;

const InformationContainer = styled.div`
  display: flex;
  font-size: 13px;
  color: #333;
  padding: 15px;

  @media (max-width: 1370px) {
    width: 45vw;
  }

  @media ${(props) => props.theme.tablet} {
    width: 90vw;
    border-bottom: 1px solid gray;
  }

  figure {
    cursor: pointer;
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
    text-align: left;
    * {
      margin: 5px 0;
    }
    summary {
      font-size: 20px;
      font-weight: 600;
      /* height: 25px; */
    }
    article {
      color: gray;
    }
    details {
      line-height: 20px;
    }
  }
`;

const ListSection = styled.div`
  display: none;

  @media (max-width: 1370px) {
    display: unset;
    border-left: 1px solid gray;
  }

  @media ${(props) => props.theme.tablet} {
    border-left: none;
  }
`;
