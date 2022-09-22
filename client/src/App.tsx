import React from 'react';
import { useRoutes } from 'react-router-dom';
import { paths } from './config';
import { Notification } from './components';

export const App = () => {
  const element = useRoutes(paths);

  return (
    <>
      <Notification />
      {element}
    </>
  );
};
