import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'Pages/HomePage/Home';
import { Login } from './Login/Login';
import Registration from './Registration/Registration';
import { Calculator } from './Calculator/Calculator';
import { DiaryPage } from 'Pages/DiaryPage/DiaryPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/SlimMom" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/calc" element={<Calculator />} />
        <Route path="/diary" element={<DiaryPage />} />
      </Routes>
    </div>
  );
}
export default App;
