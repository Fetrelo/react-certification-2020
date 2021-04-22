import React from 'react';
import styled from 'styled-components';

const Alert = styled.div`
  border-radius: 5px;
  background-color: #ffbebe;
  margin-bottom: 2%;
  padding: 0.5em 1em;
  color: #be4f4f;
  display: flex;
  align-items: center;

  span {
    margin-left: 0.5em;
  }
`;

const ErrorMessage = ({ msg, icon }) => {
  return (
    <Alert>
      {icon}
      <span>{msg}</span>
    </Alert>
  );
};

export default ErrorMessage;
