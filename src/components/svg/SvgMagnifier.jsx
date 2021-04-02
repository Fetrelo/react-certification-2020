import * as React from 'react';
import styled from 'styled-components';

const StyledSvg = styled.svg`
  fill: #525252;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
`;

function SvgMagnifier(props) {
  return (
    <StyledSvg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path
        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 
14z"
      />
    </StyledSvg>
  );
}

export default SvgMagnifier;
