/* eslint-disable import/prefer-default-export */
import { createGlobalStyle } from 'styled-components';

export const Globalstyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
    font-family: '애플 SD 산돌고딕 Neo','Apple SD Gothic Neo','Helvetica Neue','Helvetica','나눔바른고딕','NanumBarunGothic','나눔바른고딕OTF','NanumBarunGothicOTF','Noto Sans','Noto+Sans','notokr-demilight','나눔고딕','NanumGothic','맑은 고딕','Malgun Gothic','sans-serif';
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
input {
    all: unset;
    box-sizing: border-box;
}
a {
    all: unset;
    box-sizing: border-box;
}
textarea {
    all:unset;
    box-sizing: border-box;
}
select {
    all: unset;
    box-sizing: border-box;
}
`;
