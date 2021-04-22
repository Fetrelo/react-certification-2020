import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../state/GlobalContextProvider';

const StyledButton = styled.button`
  font-weight: bold;
  border: none;
  background-color: transparent;
  color: ${({ theme, btnType }) =>
    btnType === 'cancel' ? '#be4f4f' : theme === 'dark' ? '#e3e3e3' : '#525252'};
  padding: 1em 2em;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 400ms;
  outline: 0;
  border-radius: 0.25rem;

  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

const RippleButton = ({ children, btnType, action }) => {
  const { state: theme } = useContext(GlobalContext);
  const createRipple = (event) => {
    const button = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };
  const handleClick = (evt) => {
    createRipple(evt);
    action();
  };

  return (
    <StyledButton theme={theme.theme} btnType={btnType} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default RippleButton;
