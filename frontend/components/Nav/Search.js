// external modules
import { useState } from 'react';
import styled from 'styled-components';

const Search = () => {
  const [searchBox, setSearchBox] = useState(false);
  const [input, setInput] = useState('');

  const searchKeyword = (e) => {
    setInput(e.target.value);
  };

  const submitKeyword = (e) => {
    e.preventDefault();
    console.log(input);
    setInput('');
  };

  return (
    <>
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
    </>
  );
};

export default Search;

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
