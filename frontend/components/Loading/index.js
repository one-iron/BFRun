// external modules
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <LoadingWrap>
      {/* <i className="fa fa-spinner" /> */}
      <LoadingSpin />
      <LoadingTxt>잠시만 기다려주세요</LoadingTxt>
    </LoadingWrap>
  );
};

export default Loading;

const LoadingWrap = styled.div`
  width: 100%;
  height: 100vh;
  color: rgba(9, 132, 227, 1);
  padding-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const LoadingSpin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 5px solid rgba(9, 132, 227, 0.3);
  border-radius: 50%;
  border-top-color: rgba(9, 132, 227, 1);
  animation: spin 1.9s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const LoadingTxt = styled.div`
  font-size: 16px;
  margin-top: 10px;
  animation: loading-blank 2s linear 0s infinite;
  @keyframes loading-blank {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0.3;
    }
    40% {
      opacity: 0.6;
    }
    60% {
      opacity: 1;
    }
    80% {
      opacity: 0.6;
    }
    100% {
      opacity: 0.3;
    }
  }
`;
