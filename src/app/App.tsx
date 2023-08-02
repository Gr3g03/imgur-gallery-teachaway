import React from 'react';
import Dashboard from '../pages/dashbaord/dashboard';
import { Route, Routes } from 'react-router-dom';
import CardInfo from '../pages/details/CardInfo';
import NotFound from '../main/components/notFound';

const App: React.FC = () => {
  return (
    <Routes>
      <Route index path="/" element={<Dashboard />} />
      <Route path="discover/:id" element={<CardInfo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
