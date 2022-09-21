import React from 'react';
import Joi from 'joi';
import styled from 'styled-components';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface Props<FormValues extends object = object> {
  children: React.ReactNode;
  submitHandler: SubmitHandler<FormValues>;
  validationSchema?: Joi.AnySchema;
}

type Component<FormValues extends object = object> = React.FC<Props<FormValues>>;

export const FormControl: Component = ({ children, validationSchema, submitHandler }) => {
  const methods = useForm({
    resolver: validationSchema && joiResolver(validationSchema),
  });
  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={methods.handleSubmit(submitHandler)}>{children}</StyledForm>
    </FormProvider>
  );
};
