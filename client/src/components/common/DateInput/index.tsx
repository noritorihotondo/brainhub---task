import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Label } from '../Label';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DisplayError } from '../ErrorMessage';
import { CustomDatePickerInput } from '../CustomDatePickerInput';

interface Props {
  name: string;
  label?: string;
}

export const DateInput: React.FC<Props> = ({ name, label }) => {
  const { register, formState, control } = useFormContext();

  return (
    <Controller
      control={control}
      {...(register && register(name))}
      render={({ field: { onChange, value, ...restField } }) => (
        <div>
          {label && <Label text={label} />}

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Request Date"
              onChange={onChange}
              value={value}
              renderInput={(params) => <CustomDatePickerInput params={params} />}
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
        </div>
      )}
    />
  );
};
