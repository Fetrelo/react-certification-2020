import React from 'react';
import styled from 'styled-components';
import SvgMagnifier from '../svg/SvgMagnifier';

const Wrapper = styled.div`
  position: relative;
  background-color: #bebebe;
  margin: 0% 3%;
  border-radius: 25px;
  @media screen and (max-width: 280px) {
    width: 65%;
  }
`;

const SvgWrapper = styled.div`
  height: 100%;
  display: flex;
  padding: 0px 8px;
  position: absolute;
  align-items: center;
  pointer-events: none;
  justify-content: center;
`;

const InputWrapper = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
`;

const StyledInputText = styled.input`
  width: 95%;
  padding: 8px 5px;
  font-size: 1em;
  padding-left: calc(1em + 25px);
  border: none;
  background-color: transparent;
  color: #424242;
  &:focus {
    outline: none;
  }
`;

const InputTextIcon = () => {
  return (
    <Wrapper role="search">
      <SvgWrapper>
        <SvgMagnifier />
      </SvgWrapper>
      <InputWrapper>
        <StyledInputText />
      </InputWrapper>
    </Wrapper>
  );
};

export default InputTextIcon;
