import React, { useId } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import styled from 'styled-components';
import { Input as MuiInput } from '@mui/material';
import { Label } from '../Label';
import { DisplayError } from '../ErrorMessage';

const StyledInput = styled(MuiInput)``;

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  type?: 'number' | 'text' | 'password';
}

export const Input: React.FC<Props> = ({
  name,
  label,
  disabled = false,
  placeholder,
  type = 'text',
}) => {
  const { register, getFieldState, formState } = useFormContext();
  const { error } = getFieldState(name, formState);
  const id = useId();

  return (
    <div>
      {label && <Label text={label} />}
      <StyledInput
        {...(register && register(name))}
        type={type}
        id={`${id}-${name}`}
        name={name}
        placeholder={placeholder ? placeholder : ''}
        aria-invalid={!!error}
        disabled={disabled}
      />
      {formState.errors && (
        <ErrorMessage
          errors={formState.errors}
          name={name}
          render={({ message }) => <DisplayError message={message} />}
        />
      )}
    </div>
  );
};
