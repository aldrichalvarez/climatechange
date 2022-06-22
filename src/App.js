import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import EarlyAccess from './components/EarlyAccess';
import Home from './components/Home';
import './static/css/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
