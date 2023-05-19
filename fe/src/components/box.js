import * as React from 'react';
import './PatientDashboard.css';

function PatientDashboard() {
    return (
      <div>
        <h2 className='text-3xl font-bold underline'>Patient Dashboard</h2>
        <p>Welcome, patient name!</p>
        <h1>Home page</h1>
        <Link to="/about">About</Link>

      </div>
    );
  }
  
export default PatientDashboard;
