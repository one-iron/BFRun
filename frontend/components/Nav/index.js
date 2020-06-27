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
        </NavLeft>
        <NavMiddle>
          <SearchBox>
            <SearchInput
              type="text"
              placeholder="검색하실 태그를 입력해주세요"
            />
            <SearchButton type="submit">
              <i className="fa fa-search" />
            </SearchButton>
          </SearchBox>
        </NavMiddle>
        <NavRight>
          <RightContent>Roadmap</RightContent>
          <RightContent>BFTest</RightContent>
        </NavRight>
      </NavContainer>
    </NavWrap>
  );
};

export default Nav;

const NavWrap = styled.nav`
  width: 100vw;
  height: 80px;
  border-bottom: 1px solid gray;
`;

const NavContainer = styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
`;

const NavLeft = styled.div``;

const TitleText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  padding-left: 20px;
`;

const NavMiddle = styled(NavLeft)``;

const SearchBox = styled.form`
  border: 1px solid gray;
  border-radius: 5px;
`;

const SearchInput = styled.input`
  width: 280px;
  height: 25px;
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
  padding-left: 15px;
`;
