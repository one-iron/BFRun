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
                <summary>본문 내용</summary>
                <p>{videoInfo.description}</p>
              </details>
            </section>
          </>
        )}
      </InformationContainer>
      {listVideo === 0 ? (
        <></>
      ) : (
        <ListSection>
          <PlayList
            videoUrl={videoUrl}
            listVideo={listVideo}
            clickList={clickList}
          />
        </ListSection>
      )}
    </InformationWrap>
  );
};

export default Information;

const InformationWrap = styled.div`
  margin-top: 10px;
  width: 960px;
  position: relative;
  background-color: white;

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
  width: listVideo === 0 ? '100%' : '45vw'

  @media (max-width: 1370px) {
    width: 45vw;
  }

  @media ${(props) => props.theme.tablet} {
    width: 90vw;
    border-bottom: 2px solid darkgray;
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
      background-image: url(${(props) => props.img});
      background-size: cover;
    }
    figcaption {
      margin-top: 10px;
      color: black;
      text-align: center;
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
    }
    article {
      color: gray;
    }
    details {
      line-height: 20px;
      cursor: text;
      summary {
        cursor: pointer;
        outline: none;
        font-size: 15px;
        font-weight: none;
      }
    }
  }
`;

const ListSection = styled.div`
  display: none;

  @media (max-width: 1370px) {
    display: unset;
    border-left: 2px solid darkgray;
  }

  @media ${(props) => props.theme.tablet} {
    border-left: none;
  }
`;
