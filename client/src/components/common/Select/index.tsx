import React, { useId } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputLabel, MenuItem } from '@mui/material';
import { ErrorMessage } from '@hookform/error-message';
import MuiSelect from '@mui/material/Select';
import { DisplayError } from '../ErrorMessage';
import { Option } from '../../../types';

interface Props {
  name: string;
  options: Option[];
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const Select: React.FC<Props> = ({
  name,
  options,
  label,
  disabled = false,
  placeholder,
}) => {
  const id = useId();
  const { register, formState } = useFormContext();

  return (
    <>
      <InputLabel id={`label-${id}`}>{label}</InputLabel>
      <MuiSelect
        {...(register && register(name))}
        labelId={`label-${id}`}
        id={id}
        name={name}
        label={label}
        disabled={disabled}
        placeholder={placeholder}
      >
        {options.map(({ value, name }) => (
          <MenuItem key={value} value={value}>
            {name}
          </MenuItem>
        ))}
      </MuiSelect>
      {formState.errors && (
        <ErrorMessage
          errors={formState.errors}
          name={name}
          render={({ message }) => <DisplayError message={message} />}
        />
      )}
    </>
  );
};
