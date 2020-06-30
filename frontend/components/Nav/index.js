// external modules
import { useState } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchBox, setSearchBox] = useState(false);
  const [input, setInput] = useState('');

  const dropDownMenu = () => {
    setShowMenu(!showMenu);
  };

  const showSearchBox = () => {
    setSearchBox(true);
  };

  const hideSearchBox = () => {
    setSearchBox(false);
  };

  const searchKeyword = (e) => {
    setInput(e.target.value);
  };
  const submitKeyword = (e) => {
    e.preventDefault();
    console.log(input);
    setInput('');

    // 검색한 것 useEffect, fetch로
  };

  return (
    <NavWrap>
      <NavContainer>
        <NavLeft openSearchBox={searchBox}>
          <Link href="/">
            <a>
              <TitleText>BFRun</TitleText>
            </a>
          </Link>
        </NavLeft>
        <NavMiddle>
          {/* 600px 이하일 때, 클릭할 때 input창 보이게 */}
          <Under600Search onClick={showSearchBox} openSearchBox={searchBox}>
            <i className="fa fa-search" />
          </Under600Search>
          {/* 600px 이상일 때 */}
          <ArrowBack
            className="fa fa-arrow-left"
            openSearchBox={searchBox}
            onClick={hideSearchBox}
          />
          <SearchBox openSearchBox={searchBox} onSubmit={submitKeyword}>
            <SearchInput
              type="text"
              placeholder="검색어를 입력해주세요"
              value={input}
              onChange={searchKeyword}
            />
            <SearchButton type="submit" onClick={submitKeyword}>
              <i className="fa fa-search" />
            </SearchButton>
          </SearchBox>
        </NavMiddle>
        <RightContainer openSearchBox={searchBox}>
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
  /* background-color: ${(props) => props.theme.mainColor}; */
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

  @media (max-width: 600px) {
    ${(props) =>
      props.openSearchBox &&
      css`
        display: none;
      `}
  }
`;

const TitleText = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: black;
  cursor: pointer;
`;

const NavMiddle = styled.div`
  width: 500px;

  @media ${(props) => props.theme.tablet} {
    width: 300px;
  }

  @media (max-width: 600px) {
    width: 0;
    padding: 0;
  }
`;

const Under600Search = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
    font-size: 20px;

    ${(props) =>
      props.openSearchBox &&
      css`
        display: none;
      `}
  }
`;

const ArrowBack = styled.i`
  display: none;
  @media (max-width: 600px) {
    ${(props) =>
      props.openSearchBox &&
      css`
        display: block;
        margin-right: 15px;
        font-size: 20px;
      `}
  }
`;

const SearchBox = styled.form`
  border: 1px solid gray;
  border-radius: 5px;
  height: 30px;
  display: flex;
  background-color: white;

  @media (max-width: 600px) {
    display: none;

    ${(props) =>
      props.openSearchBox &&
      css`
        display: flex;
      `}
  }
`;

const SearchInput = styled.input`
  width: 100%;
  font-size: 12px;
  padding-left: 20px;
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

  @media (max-width: 600px) {
    ${(props) =>
      props.openSearchBox &&
      css`
        display: none;
      `}
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
    background-color: white;

    i {
      margin-left: 5px;
      font-size: 18px;
    }
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.laptopS} {
    display: none;
    position: absolute;
    background-color: white;
    border: 1px solid black;
    border-top: none;
    border-radius: 5px;

    ${(props) =>
      props.isShow &&
      css`
        display: block;
        width: 80px;
        animation-name: down;
        animation-duration: 0.5s;
      `}

    @keyframes down {
      from {
        height: 0;
      }
      to {
        height: 115px;
      }
    }
  }
`;

const RightContent = styled.div`
  padding: 0 5px;
  margin-left: 10px;

  @media ${(props) => props.theme.laptopS} {
    margin: 10px 5px;
    padding: 0;

    ${(props) =>
      props.isShow &&
      css`
        width: 80px;
        animation-name: slideDown;
        animation-duration: 0.5s;
      `}

    @keyframes slideDown {
      from {
        height: 0;
      }

      to {
        height: 115px;
      }
    }
  }
`;
