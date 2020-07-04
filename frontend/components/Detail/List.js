// external modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// internal modules

const DetailList = (props) => {
  const [testData, setTestData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('https://run.mocky.io/v3/e9d79bcb-ebf2-4ab2-8611-5bc5587f0839')
  //     .then((response) => {
  //       console.log('res', response.data.videos);
  //       setTestData(response.data.videos);
  //     });
  // }, []);

  console.log('list of props', props);
  return (
    <DetailListWrap>
      <DetailListContainer>
        {props.listVideo &&
          props.listVideo.map((data, index) => {
            return (
              <>
                <section onClick={() => props.clickList(data.id)}>
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
    width: 100px;
  }
  .line {
    border: 1px solid lightgray;
    width: 100%;
    margin: 20px 0;
  }
`;
