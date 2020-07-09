const SJ = 'http://172.16.100.136:5000';
const YE = 'http://172.16.100.111:5000';

const AWS = 'http://3.14.86.175:5000';

// 구글 로그인
export const clientId =
  '160523732114-5da8gimc6d808mjt1t30frv94bv227lq.apps.googleusercontent.com';
export const googleLogin = `${YE}/login`;

// 카테고리 API
// export const CATEGORY = `${AWS}/categories`;
export const CATEGORY = `${SJ}/categories`;

// 태그로 불러올 VIDEO 주소
// export const SELECTED_VIDEO_LIST = `${AWS}/videos`;
export const SELECTED_VIDEO_LIST = `${SJ}/videos`;

// 보여줄 비디오 API
export const VIDEO_LIST = `${YE}/video`;
// export const VIDEO_LIST =
//   'https://run.mocky.io/v3/d8eca722-2afa-423d-a11d-ae27e0e9f750';

// 메인 페이지 추천영상 Mock-up Data
// export const RECOMMEND = `${YE}/main`;
export const RECOMMEND =
  'https://run.mocky.io/v3/b509b683-7046-4296-827a-7475560062fc';
