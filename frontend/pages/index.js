// external modules
import styled from 'styled-components';
import Link from 'next/link';

// internal modules
import Nav from '../components/Nav';

const HomePage = () => {
  return (
    <>
      <Nav />
      <div>Welcome to Next.js!</div>
      <RunCode>npm run dev 쳐야 실행됩니다</RunCode>
      <div>
        <Link href="/TestPage">
          <a>Test Page...</a>
        </Link>
      </div>
    </>
  );
};

export default HomePage;

const RunCode = styled.p`
  color: red;
  margin: 10px 0;
`;
