import React, { useState } from 'react';
import styled from 'styled-components';

const CheckBoxWrapper = styled.div`
  width: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0% 3%;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 50;
  left: 50;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #be4f4f;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

const Toggle = ({ labelOn, labelOff }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => setIsChecked(!isChecked);

  return (
    <CheckBoxWrapper role="switch">
      <CheckBox
        id="checkbox"
        type="checkbox"
        onChange={handleCheck}
        checked={isChecked}
      />
      <CheckBoxLabel htmlFor="checkbox" />
      <label htmlFor="checkbox">{isChecked ? labelOn : labelOff}</label>
    </CheckBoxWrapper>
  );
};

export default Toggle;
