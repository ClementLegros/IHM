import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom"; import { Routes, Route, Link } from "react-router-dom";
import HomePage from './Pages/HomePage';
import NouvelleSoiree from './Pages/NouvelleSoiree';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/nouvelleSoiree" element={<NouvelleSoiree />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

