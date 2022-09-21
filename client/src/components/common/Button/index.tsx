import styled from 'styled-components';
import { Button as MyButton } from '@mui/material';
import React from 'react';

const StyledButton = styled(MyButton)``;

interface Props<ButtonValues extends object = object> {
  variant: 'text' | 'outlined' | 'contained' | undefined;
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}

type Component<ButtonValues extends object = object> = React.FC<Props<ButtonValues>>;

export const Button: Component = ({ variant, text, type }) => {
  return (
    <StyledButton variant={variant} type={type}>
      {text}
    </StyledButton>
  );
};
