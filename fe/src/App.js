import * as React from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PatientDashboard from './pages/PatientDashboard';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="about" element={<Signup />} />
    <Route path="dashboard" element={<PatientDashboard />} />
    
    </Routes>

  );
}

export default App;
