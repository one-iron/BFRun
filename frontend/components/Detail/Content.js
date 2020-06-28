// external modules
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

// internal modules
import DetailList from './List';

const DetailContent = () => {
  return (
    <DetailContentWrap>
      <DetailContentContainer>detail Content Section</DetailContentContainer>
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
`;
const DetailContentContainer = styled.div`
  background-color: #ffffff;
  @media ${(props) => props.theme.laptopM} {
    width: 45vw;
  }
`;
