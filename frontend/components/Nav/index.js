// external modules
import styled from 'styled-components';
import Link from 'next/link';

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
          <RightContent>About</RightContent>
          <RightContent>Roadmap</RightContent>
          <RightContent>BFTest</RightContent>
          <RightContent>Login</RightContent>
        </NavRight>
      </NavContainer>
    </NavWrap>
  );
};

export default Nav;

const NavWrap = styled.nav`
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: white;
  z-index: 100;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.2);
`;

const NavContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.laptopM} {
    width: 90%;
  }
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
