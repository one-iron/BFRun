// external modules
import styled from 'styled-components';
import Link from 'next/link';

// interal modules

const Nav = () => {
  return (
    <NavWrap>
      <NavContainer>
        <NavUL>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <span>hello world</span>
          </li>
        </NavUL>
      </NavContainer>
    </NavWrap>
  );
};

export default Nav;

const NavWrap = styled.nav`
  width: 100vw;
  height: 50px;
  background-color: black;
  color: white;
`;

const NavContainer = styled.div`
  padding: 15px;
`;

const NavUL = styled.ul`
  display: flex;
  list-style: none;

  li {
    padding-right: 15px;
  }
`;
