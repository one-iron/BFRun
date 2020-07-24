import Link from 'next/link';
import styled from 'styled-components';

const GeneralCourse = () => {
  return (
    <Course>
      <li>
        <Link href="/video/210">
          <span>[생활코딩 - WEB1- HTML & Internet]</span>
        </Link>
      </li>
      <li>
        <Link href="/video/245">
          <span>[생활코딩 - WEB2]</span>
        </Link>
      </li>
      <li>
        <Link href="/video/261">
          <span>[생활코딩 - Github]</span>
        </Link>
      </li>
      <li>
        <Link href="/video/383">
          <span>[얄팍한 코딩사전 - Github]</span>
        </Link>
      </li>
      <li>
        <Link href="/video/1113">
          <span>[엘리 - 개발 공부 방법]</span>
        </Link>
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
        width: 100%;
        border-bottom: 2px solid #0055b8;
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
      &:hover {
        color: #0055b8;
        transition: color 0.2s ease-in-out;
      }
    }
  }
`;
