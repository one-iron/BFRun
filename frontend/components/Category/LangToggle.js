// external modules
import React, { useState } from 'react';
import styled from 'styled-components';

const LangToggle = () => {
  const [kor, setKor] = useState(true);
  const [lang, setLang] = useState('한국어');

  const changLang = () => {
    if (kor) {
      setKor(false);
      setLang('English');
    } else {
      setKor(true);
      setLang('한국어');
    }
  };

  return (
    <LangWrap>
      <LangDiv isKor={kor} onClick={changLang}>
        {lang}
      </LangDiv>
    </LangWrap>
  );
};

export default LangToggle;

const LangWrap = styled.div`
  position: relative;
  margin: 10px 0 10px 170px;
`;

const LangDiv = styled.button`
  width: 60px;
  height: 25px;
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
`;
