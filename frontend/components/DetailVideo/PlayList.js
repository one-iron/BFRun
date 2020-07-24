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
          listVideo.map((data, index) => {
            return (
              <Link href="/video/[id]" as={`/video/${data.id}`} key={index}>
                <ListDiv>
                  <section onClick={() => clickList(data.id)}>
                    <img
                      src={`http://i3.ytimg.com/vi/${data.url.slice(
                        data.url.indexOf('v=') + 2,
                        data.url.indexOf('&list'),
                      )}/hqdefault.jpg`}
                      alt=""
                    />
                    <section className="textSection">
                      <summary>{data.title}</summary>
                      <time>{data.created_at.slice(0, 10)}</time>
                    </section>
                  </section>
                </ListDiv>
              </Link>
            );
          })}
      </PlayListContainer>
    </PlayListWrap>
  );
};

export default PlayList;

const PlayListWrap = styled.section`
  width: 340px;
  overflow: auto;
  height: 81vh;
  margin-left: 20px;
  background-color: #ffffff;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #b8b8b8;
  }
  @media (max-width: 1370px) {
    width: 45vw;
    height: 300px;
  }
  @media ${(props) => props.theme.tablet} {
    margin-top: 10px;
    width: 90vw;
    height: 300px;
  }
`;

const PlayListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  font-size: 12px;
  section {
    display: flex;
    text-align: left;
    overflow: hidden;

    &:hover {
      cursor: pointer;
      background-color: #eeeeee;
    }
    .textSection {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
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
    height: 60px;
    object-fit: cover;
  }
`;

const ListDiv = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 20px 0;
  width: 100%;
  margin: 5px 0;
`;
