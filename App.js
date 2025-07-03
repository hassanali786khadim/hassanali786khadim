// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Forget from './components/Forget/Forget'; 
import SetNewPassword from './components/SetNewPassword/SetNewPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<Forget />} /> 
        <Route path="/SetNewPassword" element={<SetNewPassword />} /> 
      </Routes>
    </Router>
  );
}

export default App;
