import React from 'react';
import {
  MainWrapper,
  Typography,
  FormControl,
  Input,
  Button,
  InputWrapper,
  DateInput,
} from '../components';
import { createEventSchema } from '../formValidation';
import { useApi, useAppDispatch } from '../hooks';
import { EventFormValues } from '../types';
import { successNotification } from '../slices';

export const CreateEvent = () => {
  const api = useApi();
  const dispatch = useAppDispatch();

  const onSubmit = async (formValues: EventFormValues) => {
    console.log(formValues);
    await api.post('/event', formValues, () => {
      dispatch(successNotification('Event created successfully'));
    });
  };

  return (
    <MainWrapper>
      <Typography variant="h2" text="Create Event"></Typography>
      <FormControl submitHandler={onSubmit} validationSchema={createEventSchema}>
        <InputWrapper>
          <Input name="name" label="Event Name" placeholder="Birthday" />
          <DateInput name="date" />
        </InputWrapper>
        <Button variant="text" text="Submit" type="submit"></Button>
      </FormControl>
    </MainWrapper>
  );
};
