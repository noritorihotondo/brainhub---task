import React from 'react';
import styled from 'styled-components';

const StyledErrorMessage = styled.p`
  text-align: center;
  color: red;
  border: 1px solid red;
  padding: 10px;
  border-radius: 4px;
`;

interface Props {
  message: string;
}

export const DisplayError: React.FC<Props> = ({ message }) => {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
};
