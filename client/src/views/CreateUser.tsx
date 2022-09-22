import React, { useEffect, useMemo } from 'react';
import {
  MainWrapper,
  Typography,
  FormControl,
  Input,
  Button,
  InputWrapper,
  Select,
} from '../components';
import { UserFormValues, Option, EventEntity } from '../types';
import { useApi, useAppDispatch, useAppSelector } from '../hooks';
import { createUserSchema } from '../formValidation';
import { fetchEvents, successNotification } from '../slices';

const getOptions = (events: EventEntity[]): Option[] =>
  events.map(({ id, name }) => ({ name, value: id }));

export const CreateUser = () => {
  const api = useApi();
  const dispatch = useAppDispatch();
  const { events } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchEvents());
  }, []);

  const options = useMemo(() => getOptions(events), [events]);

  const onSubmit = async (formValues: UserFormValues) => {
    await api.post('/user', formValues, () => {
      dispatch(successNotification('User created successfully'));
    });
  };

  return (
    <MainWrapper>
      <Typography variant="h2" text="Create User"></Typography>
      <FormControl submitHandler={onSubmit} validationSchema={createUserSchema}>
        <InputWrapper>
          <Input name="firstname" label="First Name" placeholder="firstname" />
          <Input name="lastname" label="Last Name" placeholder="lastname" />
          <Input name="email" label="Email" placeholder="email" />
          <Select name="event" label="event" options={options} />
        </InputWrapper>
        <Button variant="text" text="Submit" type="submit"></Button>
      </FormControl>
    </MainWrapper>
  );
};
