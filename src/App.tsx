import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Realisations from './pages/Realisations';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/equipe" element={<Team />} />
      <Route path="/realisations" element={<Realisations />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
