import * as React from 'react';
import styled from 'styled-components';

const StyledLoginSvg = styled.svg`
  transition: 0.2s;
  fill: #525252;
  width: 20px;
  height: 20px;
`;

function SvgLogin(props) {
  return (
    <StyledLoginSvg viewBox="0 0 330 330" width="1em" height="1em" {...props}>
      <path d="M305 149.998H121.215l44.392-44.392c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-69.998 69.998c-5.858 5.857-5.858 15.355 0 21.213l69.998 70.002A14.952 14.952 0 00155 250a14.96 14.96 0 0010.606-4.393c5.857-5.858 5.858-15.355 0-21.213l-44.394-44.396H305c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15z" />
      <path d="M155 300H40V30h115c8.284 0 15-6.716 15-15s-6.716-15-15-15H25c-8.284 0-15 6.716-15 15v300c0 8.284 6.716 15 15 15h130c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
    </StyledLoginSvg>
  );
}

export default SvgLogin;
