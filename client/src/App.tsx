import { useRoutes } from 'react-router-dom';
import { paths } from './config';

export const App = () => {
  const element = useRoutes(paths);

  return element;
};
