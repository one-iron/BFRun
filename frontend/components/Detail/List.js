// external modules
import styled from 'styled-components';

// internal modules

const DetailList = (props) => {
  console.log('props', props);
  return (
    <DetailListWrap>
      <DetailListContainer>
        {props.listData.map((data) => {
          return (
            <>
              <section onClick={() => props.clickList(data.snippet.position)}>
                <img src={data.snippet.thumbnails.default.url} alt="" />
                <section className="textSection">
                  <summary>{data.snippet.title}</summary>
                  <time>{data.snippet.publishedAt.slice(0, 10)}</time>
                  <p>{data.snippet.channelTitle}</p>
                  <p>
                    {data.snippet.description.length < 18
                      ? data.snippet.description
                      : `${data.snippet.description.slice(0, 18)}...`}
                  </p>
                </section>
              </section>
              <div className="line" />
            </>
          );
        })}
      </DetailListContainer>
    </DetailListWrap>
  );
};

export default DetailList;

const DetailListWrap = styled.div`
  width: 340px;
  overflow: auto;
  height: 100vh;
  margin-left: 20px;
  background-color: #ffffff;
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
const DetailListContainer = styled.div`
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
  }
  .line {
    border: 1px solid lightgray;
    width: 100%;
    margin: 20px 0;
  }
`;
