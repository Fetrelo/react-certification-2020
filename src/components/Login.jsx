import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import loginApi from '../mocks/login.api';
import { GlobalContext } from '../state/GlobalContextProvider';
import RippleButton from './CustomInputs/RippleButton';
import ErrorMessage from './ErrorMessage';
import SvgAlert from './svg/SvgAlert';
import { storage } from '../utils/storage';

const ModalWrapper = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  width: 100%;
  height: 100%;
`;

const LoginModal = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 40%;
  padding: 2%;
  border-radius: 10px;
  background-color: ${(props) => (props.theme === 'dark' ? '#525252' : '#e2e2e2')};
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);

  strong {
    color: ${(props) => (props.theme === 'dark' ? '#e2e2e2' : '#525252')};
  }

  input {
    margin-top: 3%;
    padding: 3%;
    border: none;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
`;

const Login = () => {
  const { state: theme, dispatch } = useContext(GlobalContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const login = async () => {
    setError('');
    try {
      const user = await loginApi(username, password);
      user.isAuthenticated = true;
      storage.set('USER_INFO', user);
      dispatch({ type: 'LOGIN', payload: user });
      dispatch({ type: 'TOGGLE_LOGIN' });
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <ModalWrapper>
      <LoginModal theme={theme.theme}>
        {error ? (
          <ErrorMessage msg={error} icon={<SvgAlert theme={theme.theme} />} />
        ) : null}
        <strong>Login</strong>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(evt) => setUsername(evt.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <ButtonsWrapper>
          <RippleButton
            type="button"
            btnType="cancel"
            action={() => dispatch({ type: 'TOGGLE_LOGIN' })}
          >
            Cancel
          </RippleButton>
          <RippleButton type="button" action={login}>
            Login
          </RippleButton>
        </ButtonsWrapper>
      </LoginModal>
    </ModalWrapper>
  );
};

export default Login;
