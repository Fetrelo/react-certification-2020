import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InputTextIcon from './CustomInputs/InputTextIcon';
import Toggle from './CustomInputs/Toggle';
import SvgHome from './svg/SvgHome';
import SvgLogin from './svg/SvgLogin';
import { GlobalContext } from '../state/GlobalContextProvider';
import Login from './Login';

const StyledNav = styled.nav`
  display: flex;
  background-color: ${(props) => (props.theme === 'dark' ? '#525252' : '#e2e2e2')};
  justify-content: space-between;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5);
`;

const LeftNav = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 1vh 1.5vw;
  width: 100%;
  @media screen and (max-width: 500px) {
    justify-content: space-around;
  }
`;

const RightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const LoginButton = styled.div`
  background-color: #bebebe;
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50px;
  height: 100%;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #686868;
    svg {
      fill: #bebebe;
    }
  }
`;

const ContextualMenu = styled.ul`
  opacity: 0;
  display: none;
  z-index: 2;
  position: absolute;
  right: 0;
  list-style: none;
  margin: 0;
  transition: 0.3s;
  cursor: pointer;
  padding: 0;

  a {
    text-decoration: none;
  }

  li {
    transition: 0.3s;
    background-color: ${(props) => (props.theme === 'dark' ? '#525252' : '#e2e2e2')};
    padding: 0.25em 0.5em;
    color: ${(props) => (props.theme === 'dark' ? '#e2e2e2' : '#525252')};

    &:hover {
      background-color: ${(props) => (props.theme === 'dark' ? '#e2e2e2' : '#525252')};
      color: ${(props) => (props.theme === 'dark' ? '#525252' : '#e2e2e2')};
    }
  }
`;

const AvatarWrapper = styled.div`
  position: relative;

  &:hover ${ContextualMenu} {
    opacity: 1;
    display: inline;
  }
`;

const StyledAvatar = styled.img`
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const LogoutBtn = styled.li`
  transition: 0.3s;
`;

const Nav = () => {
  const {
    state: { theme, showLoginModal, sessionData },
    dispatch,
    logout,
  } = useContext(GlobalContext);

  return (
    <>
      {showLoginModal ? <Login /> : null}
      <StyledNav theme={theme}>
        <LeftNav role="group">
          <Link to="/">
            <SvgHome role="img" theme={theme} />
          </Link>
          <InputTextIcon />
        </LeftNav>
        <RightNav role="group">
          <Toggle labelOn="🌙" labelOff="☀️" />
          {sessionData && sessionData.isAuthenticated ? (
            <AvatarWrapper>
              <StyledAvatar src={sessionData.avatarUrl} alt="avatar" />
              <ContextualMenu theme={theme}>
                <Link to="/favs">
                  <li>Favourites</li>
                </Link>
                <LogoutBtn
                  onClick={() => {
                    logout();
                  }}
                >
                  Log out
                </LogoutBtn>
              </ContextualMenu>
            </AvatarWrapper>
          ) : (
            <LoginButton
              role="button"
              onClick={() => {
                dispatch({ type: 'TOGGLE_LOGIN' });
              }}
            >
              <SvgLogin theme={theme} />
            </LoginButton>
          )}
        </RightNav>
      </StyledNav>
    </>
  );
};

export default Nav;
