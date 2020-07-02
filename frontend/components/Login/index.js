// external modules
import { useState } from 'react';
import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

// internal modules
import { googleLogin, clientId } from '../../config';

const Login = (props) => {
  const [loginToken, setToken] = useState('');

  const onGoogleLogin = async (res) => {
    console.log(res);

    try {
      const token = await axios({
        method: 'POST',
        url: googleLogin,
        data: { id: res.googleId, token: res.tokenObj.id_token },
      });
      console.log(token);
      if (token.data.token) {
        localStorage.setItem('token', token.data.token);
        setToken(token.data.token);
      } else {
        console.warn('Login failed, can not check google token');
      }
    } catch {
      console.warn('Login failed, can not connect django api');
    }
  };

  return (
    <LoginWrap>
      {loginToken ? (
        <></>
      ) : (
        <GoogleLogin
          clientId={clientId}
          render={(props) => <div onClick={props.onClick}>Login </div>}
          onSuccess={(result) => onGoogleLogin(result)}
          onFailure={(result) => console.log(result)}
          // cookiePolicy="single_host_origin"
        />
      )}
    </LoginWrap>
  );
};

export default Login;

const LoginWrap = styled.div`
  margin-left: 10px;
  cursor: pointer;
  border: 1px solid #1a73e8;
  border-radius: 3px;
  background-color: #1a73e8;
  color: white;
  padding: 3px;

  @media ${(props) => props.theme.laptopS} {
    margin: 0;
    /* padding: 0; */
  }
`;
