// external modules
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const PlayList = (props) => {
  const { listVideo, clickList } = props;
  const router = useRouter();
  const { id } = router.query;

  return (
    <PlayListWrap>
      <PlayListContainer>
        {listVideo &&
          listVideo.map((data) => {
            return (
              <Link href="/video/[id]" as={`/video/${data.id}`}>
                <div>
                  <section onClick={() => clickList(data.id)}>
                    <img
                      src={`http://i3.ytimg.com/vi/${data.url.slice(
                        data.url.indexOf('v=') + 2,
                        data.url.indexOf('&list'),
                      )}/maxresdefault.jpg`}
                      alt=""
                    />
                    <section className="textSection">
                      <summary>{data.title}</summary>
                      <time>{data.created_at.slice(0, 10)}</time>
                      <p>{data.title}</p>
                    </section>
                  </section>
                  <div className="line" />
                </div>
              </Link>
            );
          })}
      </PlayListContainer>
    </PlayListWrap>
  );
};

export default PlayList;

const PlayListWrap = styled.div`
  width: 340px;
  overflow: auto;
  height: 100vh;
  margin-left: 20px;
  background-color: #ffffff;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #b8b8b8;
  }
  @media ${(props) => props.theme.laptopM} {
    width: 45vw;
    height: 300px;
    background-color: #ffffff;
  }
  @media ${(props) => props.theme.tablet} {
    width: 95vw;
    height: 300px;
    background-color: #ffffff;
  }
`;

const PlayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  font-size: 12px;
  section {
    display: flex;
    text-align: left;
    &:hover {
      cursor: pointer;
      background-color: #eeeeee;
    }
    .textSection {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      * {
        margin-bottom: 5px;
      }
      summary {
        font-size: 16px;
        font-weight: 600;
      }
      time {
        color: #333;
      }
    }
  }
  img {
    width: 100px;
  }
  .line {
    border: 1px solid lightgray;
    width: 100%;
    margin: 20px 0;
  }
`;
