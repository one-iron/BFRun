import styled from 'styled-components';

const BackCourse = () => {
  return (
    <Course>
      <li>
        <span>[김왼손 - Python]</span>
      </li>
      <li>
        <span>[생활코딩 - Python]</span>
      </li>
      <li>
        <span>[생활코딩 - 관계형 데이터 모델링]</span>
      </li>
      <li>
        <span>
          [테크보이 워니 - 코딩 1시간만에 배우기 - 파이썬 ft. 실리콘밸리
          엔지니어]
        </span>
      </li>
      <li>
        <span>[조코딩 - 점프 투 파이썬](</span>
      </li>
    </Course>
  );
};

export default BackCourse;

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
