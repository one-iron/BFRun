// external modules
import { useState } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

// internal modules
import Login from '../Login';

const Nav = ({ removeTags }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchBox, setSearchBox] = useState(false);
  const [input, setInput] = useState('');

  // 화면 작아졌을 때, 오른쪽 상단 메뉴
  const dropDownMenu = () => {
    setShowMenu(!showMenu);
  };

  const removeDownMenu = () => {
    setShowMenu(false);
  };

  // 화면 작아졌을 때, searchBox
  const showSearchBox = () => {
    setSearchBox(true);
  };

  const hideSearchBox = () => {
    setSearchBox(false);
  };

  // 검색창
  const searchKeyword = (e) => {
    setInput(e.target.value);
  };

  const submitKeyword = (e) => {
    e.preventDefault();
    console.log(input);
    setInput('');

    // 검색한 것 useEffect, axios로
  };

  return (
    <NavWrap>
      <NavContainer>
        <NavLeft openSearchBox={searchBox}>
          <Link href="/">
            <a>
              <TitleText onClick={removeTags}>BF Run.</TitleText>
            </a>
          </Link>
        </NavLeft>
        <NavMiddle openSearchBox={searchBox}>
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
        <RightContainer
          openSearchBox={searchBox}
          onMouseEnter={dropDownMenu}
          onMouseLeave={showMenu && removeDownMenu}
        >
          <RightMenu>
            메뉴
            <i className="fa fa-caret-down" />
          </RightMenu>
          <NavRight isShow={showMenu} onMouseLeave={showMenu && removeDownMenu}>
            <RightContent>소개</RightContent>
            <RightContent>로드맵</RightContent>
            <Login />
          </NavRight>
        </RightContainer>
      </NavContainer>
    </NavWrap>
  );
};

export default Nav;

const NavWrap = styled.nav`
  width: 100%;
  height: 100px;
  position: fixed;
  background-color: white;
  /* background-color: ${(props) => props.theme.mainColor}; */
  z-index: 100;
  /* box-shadow: 4px 4px 2px #2676E1; */
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
  /* color: white;
  background-color: orange;
  border: 5px solid orange;
  padding: 8px 18px;
  border-radius: 40px; */
  cursor: pointer;
`;

const NavMiddle = styled.div`
  width: 500px;
  /* margin-left: 300px; */

  @media ${(props) => props.theme.tablet} {
    width: 300px;
  }

  @media (max-width: 600px) {
    width: 0px;
    padding: 0;

    ${(props) =>
      props.openSearchBox &&
      css`
        width: 100%;
        display: flex;
      `}
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
        display: inline-block;
        margin-right: 15px;
        margin-top: 3px;
        font-size: 20px;
      `}
  }
`;

const SearchBox = styled.form`
  border: 1px solid gray;
  /* border: 1.5px solid orange; */
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
        width: 300px;
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
  height: 28px;
  border: none;
  outline: none;
  background-color: transparent;
  color: gray;
  /* background-color: orange;
  padding: 0 10px;

  i {
    color: white;
  } */
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
        height: 80px;

        /* animation-name: down;
        animation-duration: 0.5s; */
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
  cursor: pointer;
  color: gray;
  font-size: 14px;

  @media ${(props) => props.theme.laptopS} {
    margin: 10px 5px;
    padding: 0;
    /* cursor: pointer; */

    :hover {
      color: red;
    }
  }
`;
