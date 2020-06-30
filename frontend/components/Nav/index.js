// external modules
import { useState } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const dropDownMenu = () => {
    setShowMenu(!showMenu);
  };

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
          {/* 600px 이하일 때, 클릭할 때 input창 보이게 */}
          <Under600Search>
            <i className="fa fa-search" />
          </Under600Search>
          {/* 600px 이상일 때 */}
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
        <RightContainer>
          <RightMenu onClick={dropDownMenu}>
            MENU
            <i className="fa fa-caret-down" />
          </RightMenu>
          <NavRight isShow={showMenu}>
            <RightContent>About</RightContent>
            <RightContent>Roadmap</RightContent>
            <RightContent>BFTest</RightContent>
            <RightContent>Login</RightContent>
          </NavRight>
        </RightContainer>
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
  margin-left: 10px;
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

const Under600Search = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
    font-size: 20px;
  }
`;

const SearchBox = styled.form`
  border: 1px solid gray;
  border-radius: 5px;
  width: 300px;
  height: 25px;
  display: flex;

  @media (max-width: 600px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  /* width: 280px; */
  width: 100%;
  font-size: 12px;
  padding-left: 10px;

  /* @media ${(props) => props.theme.tablet} {
    width: 100%;
  } */
`;

const SearchButton = styled.button`
  width: 30px;
  height: 25px;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0;
`;

const RightContainer = styled.div`
  @media ${(props) => props.theme.laptopS} {
    position: relative;
  }
`;

const RightMenu = styled.div`
  display: none;

  @media ${(props) => props.theme.laptopS} {
    display: block;
    position: sticky;
    cursor: pointer;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 5px;
    width: 80px;

    i {
      margin-left: 5px;
      font-size: 18px;
    }
  }
`;

const NavRight = styled(NavLeft)`
  display: flex;

  @media ${(props) => props.theme.laptopS} {
    display: ${(props) => (props.isShow ? 'block' : 'none')};
    position: absolute;
    background-color: white;
    border: 1px solid green;
    border-radius: 5px;
    width: 80px;
    height: 115px;
  }
`;

const RightContent = styled.div`
  padding: 0 5px;
  margin-left: 10px;

  @media ${(props) => props.theme.laptopS} {
    margin: 10px 5px;
    padding: 0;
  }
`;
