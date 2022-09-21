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
import { CreateEventSchema } from '../types/Event';

export const CreateEvent = () => {
  return (
    <MainWrapper>
      <Typography variant="h2" text="Create Event"></Typography>
      <FormControl submitHandler={(data) => console.log(data)} validationSchema={CreateEventSchema}>
        <InputWrapper>
          <Input name="name" label="Event Name" placeholder="Birthday" />
          <DateInput name="date" />
        </InputWrapper>
        <Button variant="text" text="Submit" type="submit"></Button>
      </FormControl>
    </MainWrapper>
  );
};
