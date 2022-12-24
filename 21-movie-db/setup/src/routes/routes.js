import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '.';

export const AppRouter = () => {

  return (
    <div>
      <Routes>
        {
          routes.map(({ path, Component}) => (
            <Route key={path} path={path} element={<Component/>} />
          ))
        }
      </Routes>
    </div>
  )
}