import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router/dist/lib/context';
import { Home, CreateEvent, CreateUser } from '../views';

export const baseUrl = {
  home: '/home',
  createUser: '/create-user',
  createEvent: '/create-event',
};

export const paths: RouteObject[] = [
  {
    path: '*',
    element: <Navigate to={baseUrl.home} replace />,
  },
  {
    path: baseUrl.home,
    element: <Home />,
  },
  {
    path: baseUrl.createEvent,
    element: <CreateEvent />,
  },
  {
    path: baseUrl.createUser,
    element: <CreateUser />,
  },
];
