
import * as React from 'react';
import { Link } from 'react-router-dom';

function PatientDashboard() {
    return (
      <div>
        <h2>Patient Dashboard</h2>
        <p>Welcome, patient name!</p>
        <h1>Home page</h1>
        <Link to="/about">About</Link>

      </div>
    );
  }
  
export default PatientDashboard;
