import styled from 'styled-components';

function HomePage() {
  return (
    <>
      <div>Welcome to Next.js!</div>
      <RunCode>npm run dev 쳐야 실행됩니다</RunCode>
      <p>eslint, pretteir 제대로 작동되는지 확인해주세여</p>
    </>
  );
}

export default HomePage;

const RunCode = styled.p`
  color: red;
`;
