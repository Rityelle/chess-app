import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importe os componentes das rotas
import Home from './pages/home'
import Chess from './pages/chess'

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chess" element={<Chess />} />
      </Routes>
    </Router>
  )
}
