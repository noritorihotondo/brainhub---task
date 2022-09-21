import React from 'react';
import styled from 'styled-components';
import { Link as MyLink } from 'react-router-dom';

interface Props {
  to: string;
  text: string;
}

const StyledLink = styled(MyLink)`
  text-decoration: none;
`;

export const Link: React.FC<Props> = ({ to, text }) => {
  return <StyledLink to={to}>{text}</StyledLink>;
};
