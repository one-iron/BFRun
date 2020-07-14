import styled from 'styled-components';

const GeneralCourse = () => {
  return (
    <Course>
      <li>
        <span>[생활코딩 - WEB1- HTML & Internet]</span>
      </li>
      <li>
        <span>[생활코딩 - WEB2]</span>
      </li>
      <li>
        <span>[생활코딩 - Github]</span>
      </li>
      <li>
        <span>[얄팍한 코딩사전 - Github]</span>
      </li>
      <li>
        <span>[엘리 - 개발 공부 방법]</span>
      </li>
    </Course>
  );
};

export default GeneralCourse;

const Course = styled.div`
  /* border: 1px solid orange; */
  padding: 5px;
  display: flex;
  flex-direction: column;
  animation: appear 0.5s ease-in-out;
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  li {
    margin: 10px 0;
    cursor: pointer;
    span {
      position: relative;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        top: 20px;
        display: inline;
        width: 100%;
        border-bottom: 2px solid;
        opacity: 0;
        -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
        transition: opacity 0.6s, transform 0.6s;
        -webkit-transform: scale(0, 1);
        transform: scale(0, 1);
      }
      &:hover:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
    }
  }
`;
