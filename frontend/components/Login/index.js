// external modules
import { useState } from 'react';
import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

// internal modules
import { googleLogin, clientId } from '../../config';

const Login = (props) => {
  const [loginToken, setToken] = useState('');
  const [img, setImg] = useState('');

  // console.log(loginToken);
  // console.log(lstoken);

  const onGoogleLogin = async (res) => {
    console.log(res);

    try {
      const token = await axios({
        method: 'POST',
        url: googleLogin,
        data: {
          id: res.googleId,
          token: res.tokenObj.id_token,
          email: res.profileObj.email,
        },
      });
      console.log(token);
      if (token.data.token) {
        const { email, familyName, givenName, imageUrl } = res.profileObj;
        localStorage.setItem('token', token.data.token);
        localStorage.setItem('imageUrl', imageUrl);
        localStorage.setItem('email', email);
        localStorage.setItem('familyName', familyName);
        localStorage.setItem('givenName', givenName);
        setToken(token.data.token);
        setImg(imageUrl);
      } else {
        console.warn('Login failed, can not check google token');
      }
    } catch {
      console.warn('Login failed, can not connect django api');
    }
  };

  const onGoogleLogout = () => {
    setToken('');
    setImg('');
    localStorage.removeItem('token');
    localStorage.removeItem('imageUrl');
    localStorage.removeItem('email');
    localStorage.removeItem('familyName');
    localStorage.removeItem('givenName');
  };

  return (
    <LoginWrap>
      {loginToken ? (
        <div onClick={onGoogleLogout}>로그아웃</div>
      ) : (
        <GoogleLogin
          clientId={clientId}
          render={(props) => <div onClick={props.onClick}>로그인</div>}
          onSuccess={(result) => onGoogleLogin(result)}
          onFailure={(result) => console.log(result)}
          cookiePolicy="single_host_origin"
        />
      )}
    </LoginWrap>
  );
};

export default Login;

const LoginWrap = styled.div`
  margin-left: 10px;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid gray;
  color: gray;
  padding: 6px 8px;

  /* border: 1px solid orange;
  background-color: orange;
  color: white;
  padding: 6px 10px;
  font-weight: 700; */

  @media ${(props) => props.theme.laptopS} {
    margin: 0;
    border: none;
    padding: 0 5px;
    font-size: 14px;

    :hover {
      color: red;
    }
  }
`;
