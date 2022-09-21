import React from 'react';
import styled from 'styled-components';
import { InputLabel as MyLabel } from '@mui/material';

interface Props {
  text: string;
}

const StyledLabel = styled(MyLabel)``;

export const Label: React.FC<Props> = ({ text }) => {
  return <StyledLabel>{text}</StyledLabel>;
};
