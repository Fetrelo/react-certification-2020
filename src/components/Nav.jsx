import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InputTextIcon from './CustomInputs/InputTextIcon';
import Toggle from './CustomInputs/Toggle';
import SvgHamburger from './svg/SvgHamburger';
import SvgLogin from './svg/SvgLogin';
import { GlobalContext } from '../state/GlobalContextProvider';

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

const Nav = () => {
  const { state: theme } = useContext(GlobalContext);

  return (
    <StyledNav theme={theme.theme}>
      <LeftNav role="group">
        <Link to="/">
          <SvgHamburger role="img" theme={theme.theme} />
        </Link>
        <InputTextIcon />
      </LeftNav>
      <RightNav role="group">
        <Toggle labelOn="🌙" labelOff="☀️" />
        <LoginButton role="button">
          <SvgLogin theme={theme.theme} />
        </LoginButton>
      </RightNav>
    </StyledNav>
  );
};

export default Nav;
