import React from 'react';
import { MainWrapper, Typography, FormControl, Input, Button, InputWrapper } from '../components';
import { Select } from '../components/common/Select';
import { CreateUserSchema } from '../types/User';

export const CreateUser = () => {
  return (
    <MainWrapper>
      <Typography variant="h2" text="Create User"></Typography>
      <FormControl submitHandler={(data) => console.log(data)} validationSchema={CreateUserSchema}>
        <InputWrapper>
          <Input name="firstname" label="First Name" placeholder="tomasz" />
          <Input name="lastname" label="Last Name" placeholder="stanczak" />
          <Input name="email" label="Email" placeholder="test@gmail.com" />
          <Select name="event" label="event" />
        </InputWrapper>
        <Button variant="text" text="Submit" type="submit"></Button>
      </FormControl>
    </MainWrapper>
  );
};
