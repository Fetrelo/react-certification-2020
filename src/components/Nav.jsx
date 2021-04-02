import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InputTextIcon from './CustomInputs/InputTextIcon';
import Toggle from './CustomInputs/Toggle';
import SvgHamburger from './svg/SvgHamburger';
import SvgLogin from './svg/SvgLogin';

const StyledNav = styled.nav`
  display: flex;
  background-color: #e2e2e2;
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
  return (
    <StyledNav>
      <LeftNav role="group">
        <Link to="/">
          <SvgHamburger role="img" />
        </Link>
        <InputTextIcon />
      </LeftNav>
      <RightNav role="group">
        <Toggle labelOn="🌙" labelOff="☀️" />
        <LoginButton role="button">
          <SvgLogin />
        </LoginButton>
      </RightNav>
    </StyledNav>
  );
};

export default Nav;
