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
        <figure>
          <ProfileImg img={data && data.profile} />
          <Channel>{data && data.channel}</Channel>
        </figure>
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
  background-color: #ffffff;
  padding: 20px;
  @media ${(props) => props.theme.laptopM} {
    width: 45vw;
  }
  @media ${(props) => props.theme.tablet} {
    width: 95vw;
  }
`;

const ProfileImg = styled.div`
  border: 1px solid #eee;
  border-radius: 50px;
  width: 55px;
  height: 55px;
  background-image: url(${(props) => props.img});
  background-size: cover;
`;

const Channel = styled.div`
  /* border: 1px solid red; */
  margin: 10px 0;
  display: inline-block;
  font-size: 13px;
  color: #333;
`;
