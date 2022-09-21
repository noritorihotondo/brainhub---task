import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputLabel, MenuItem } from '@mui/material';
import { ErrorMessage } from '@hookform/error-message';
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select';
import { DisplayError } from '../ErrorMessage';

type Option = {
  name: string;
  value: string;
};

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  options?: Option[];
}

export const Select: React.FC<Props> = ({ name, label, disabled = false, placeholder }) => {
  const { register, formState } = useFormContext();
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <MuiSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        {...(register && register(name))}
        value={age}
        name={name}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
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
