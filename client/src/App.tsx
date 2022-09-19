import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { paths } from './config/url';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {paths.map((x, index) => (
          <Route path={x.path} element={x.component()} key={index + x.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
