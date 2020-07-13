// external modules
import { useState } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

// internal modules
import Login from '../Login';
import Search from './Search';

const Nav = ({ removeTags }) => {
  const [searchBox, setSearchBox] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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

  return (
    <NavWrap isBlack>
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
          {/* <Under600Search onClick={showSearchBox} openSearchBox={searchBox}>
            <i className="fa fa-search" />
          </Under600Search> */}
          {/* 600px 이상일 때 */}
          <ArrowBack
            className="fa fa-arrow-left"
            openSearchBox={searchBox}
            onClick={hideSearchBox}
          />
          {/* 검색 창 추후 추가*/}
          {/* <Search /> */}
        </NavMiddle>
        <RightContainer
          openSearchBox={searchBox}
          onMouseEnter={dropDownMenu}
          onMouseLeave={showMenu ? removeDownMenu : undefined}
        >
          {/* <RightMenu>
            메뉴
            <i className="fa fa-caret-down" />
          </RightMenu> */}
          <NavRight
            isShow={showMenu}
            onMouseLeave={showMenu ? removeDownMenu : undefined}
          >
            <Link href="/about">
              <RightContent>소개</RightContent>
            </Link>
            <Link href="/roadmap">
              <RightContent>로드맵</RightContent>
            </Link>
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
  z-index: 100;
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
  /* width: 30%; */

  /* @media (max-width: 600px) {
    ${(props) =>
      props.openSearchBox &&
      css`
        display: none;
      `}
  } */
`;

const TitleText = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: black;
  cursor: pointer;
`;

const NavMiddle = styled.div`
  /* width: 500px;

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
  } */
`;

// const Under600Search = styled.div`
//   display: none;

//   @media (max-width: 600px) {
//     display: block;
//     font-size: 20px;

//     ${(props) =>
//       props.openSearchBox &&
//       css`
//         display: none;
//       `}
//   }
// `;

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

  /* @media ${(props) => props.theme.laptopS} {
    display: block;
    position: sticky;
    cursor: pointer;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 5px;
    width: 0px;
    background-color: white;

    i {
      margin-left: 5px;
      font-size: 18px;
    }
  } */
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  /* width: 100%; */

  /* @media ${(props) => props.theme.laptopS} {
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
  } */
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
