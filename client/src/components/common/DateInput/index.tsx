import React from 'react';
import { Dayjs } from 'dayjs';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Label } from '../Label';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DisplayError } from '../ErrorMessage';

interface Props {
  name: string;
  label?: string;
}

export const DateInput: React.FC<Props> = ({ name, label }) => {
  const { register, formState, control } = useFormContext();
  const [value, setValue] = React.useState<Dayjs | null>(null);
  console.log(formState.errors);
  return (
    <div>
      {label && <Label text={label} />}

      <Controller
        defaultValue={value}
        control={control}
        {...(register && register(name))}
        render={({ field: { onChange, ...restField } }) => (
          <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Request Date"
                onChange={(event) => {
                  onChange(event);
                  setValue(event);
                }}
                renderInput={(params) => <TextField {...params} />}
                {...restField}
              />
            </LocalizationProvider>
            {formState.errors && (
              <ErrorMessage
                errors={formState.errors}
                name={name}
                render={({ message }) => <DisplayError message={message} />}
              />
            )}
          </>
        )}
      />
    </div>
  );
};
