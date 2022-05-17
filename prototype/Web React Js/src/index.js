import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom"; import { Routes, Route, Link } from "react-router-dom";
import HomePage from './Pages/HomePage';
import NouvelleSoiree from './Pages/NouvelleSoiree';
import AjoutPersonne from './Pages/AjoutPersonne';
import Test from './Pages/test';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/nouvelleSoiree" element={<NouvelleSoiree />} />
      <Route path='/ajout' element={<AjoutPersonne />} />
      <Route path='test' element={<Test />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

