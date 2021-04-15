import * as React from 'react';
import styled from 'styled-components';

const StyledHamburger = styled.svg`
  fill: ${(props) => (props.theme === 'dark' ? '#be4f4f' : '#525252')};
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

function SvgHamburger(props) {
  return (
    <StyledHamburger viewBox="0 0 100 80" width="1em" height="1em" {...props}>
      <path d="M0 0h100v15H0zM0 30h100v15H0zM0 60h100v15H0z" />
    </StyledHamburger>
  );
}

export default SvgHamburger;
