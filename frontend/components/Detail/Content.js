// external modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';

// internal modules
import DetailList from './List';

const DetailContent = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/f55d367e-769a-4257-9bd0-9b48f1926c45')
      .then((response) => {
        // eslint-disable-next-line no-console
        setData(response.data);
        console.log('axios >>>', response.data);
      });
  }, []);

  return (
    <DetailContentWrap>
      <DetailContentContainer>
        <section>
          <figure>
            <img src={data && data.profile} alt="" />
            <figcaption>{data && data.channel}</figcaption>
          </figure>
        </section>
        <section>
          <summary>{data && data.title}</summary>
          <article>{data && data.views}</article>
          <time>{data && data.created_at}</time>
        </section>
      </DetailContentContainer>
      <DetailList />
    </DetailContentWrap>
  );
};

export default DetailContent;

const DetailContentWrap = styled.div`
  width: 50vw;
  height: 15vh;
  margin: 20px auto;
  @media ${(props) => props.theme.laptopM} {
    display: flex;
    justify-content: space-between;
    width: 95vw;
  }
  @media ${(props) => props.theme.tablet} {
    display: unset;
    width: 95vw;
  }
`;

const DetailContentContainer = styled.div`
  @media ${(props) => props.theme.laptopM} {
    width: 45vw;
  }
  @media ${(props) => props.theme.tablet} {
    width: 95vw;
  }
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  font-size: 13px;
  color: #333;
  section:nth-of-type(2) {
    margin-left: 20px;
    * {
      margin-bottom: 5px;
    }
    :first-child {
      color: red;
    }
  }
  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
  }
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
`;
