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
        // console.log('axios >>>', response.data);
      });
  }, []);

  return (
    <DetailContentWrap>
      <DetailContentContainer>
        {data && (
          <>
            <section>
              <figure>
                <img src={data.profile} alt="" />
                <figcaption>{data.channel}</figcaption>
              </figure>
            </section>
            <section>
              <summary>{data.title}</summary>
              <articel>{data.views}</articel>
            </section>
          </>
        )}
      </DetailContentContainer>
      <ListSection>
        <DetailList />
      </ListSection>
    </DetailContentWrap>
  );
};

export default DetailContent;

const DetailContentWrap = styled.div`
  position: absolute;
  bottom: 3vh;
  width: 60vw;
  height: 15vh;
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

const ListSection = styled.section`
  display: none;
  @media ${(props) => props.theme.laptopM} {
    display: unset;
  }
`;

const DetailContentContainer = styled.div`
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
    align-items: center;
    * {
      margin-bottom: 5px;
    }
    summary {
      font-size: 18px;
      font-weight: 600;
      height: 25px;
    }
    article {
      text-align: left;
    }
  }
`;
