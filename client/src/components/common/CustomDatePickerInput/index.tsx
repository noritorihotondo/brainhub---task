import React, { forwardRef } from 'react';
import { TextFieldProps, TextField } from '@mui/material';

interface Props {
  params: TextFieldProps;
}

export const CustomDatePickerInput = forwardRef<HTMLInputElement, Props>(({ params }, ref) => (
  <TextField {...params} ref={ref} />
));
