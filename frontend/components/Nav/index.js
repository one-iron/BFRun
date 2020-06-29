// external modules
import styled from 'styled-components';
import Link from 'next/link';

// interal modules

const Nav = () => {
  return (
    <NavWrap>
      <NavContainer>
        <NavLeft>
          <Link href="/">
            <a>
              <TitleText>BFRun</TitleText>
            </a>
          </Link>
          <div>| About</div>
        </NavLeft>
        <NavMiddle>
          <SearchBox>
            <SearchInput
              type="text"
              placeholder="검색하실 태그를 입력해주세요 (최대 3개)"
            />
            <SearchButton type="submit">
              <i className="fa fa-search" />
            </SearchButton>
          </SearchBox>
        </NavMiddle>
        <NavRight>
          <RightContent>Roadmap</RightContent>
          <RightContent>BFTest</RightContent>
          <div>Login</div>
        </NavRight>
      </NavContainer>
    </NavWrap>
  );
};

export default Nav;

const NavWrap = styled.nav`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid gray;
  position: fixed;
  background-color: white;
  z-index: 100;
`;

const NavContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-left: 10px;
  }
`;

const TitleText = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: black;
  cursor: pointer;
`;

const NavMiddle = styled(NavLeft)`
  padding-left: 30px;
`;

const SearchBox = styled.form`
  border: 1px solid gray;
  border-radius: 5px;
`;

const SearchInput = styled.input`
  width: 280px;
  height: 25px;
  font-size: 12px;
  padding-left: 10px;
`;

const SearchButton = styled.button`
  width: 30px;
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
`;

const NavRight = styled(NavLeft)`
  display: flex;
`;

const RightContent = styled.div`
  padding: 0 5px;
`;
