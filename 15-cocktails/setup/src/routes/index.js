import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { routes } from './routes';

export const AppRouter = () => {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        
        <Routes>
          {
            routes.map(({ path, Component}) => (
              <Route key={path} path={path} element={<Component/>} />
            ))
          }
        </Routes>
      </div>
    </BrowserRouter>
  )
}