import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PatientDashboard from './PatientDashboard';

describe('PatientDashboard', () => {
  beforeEach(() => {
    // Mock the localStorage.getItem method
    jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue('test@example.com');
  });

  afterEach(() => {
    // Restore the localStorage.getItem method
    window.localStorage.__proto__.getItem.mockRestore();
  });

  test('renders the dashboard when patientMail is present', () => {
    render(
      <Router>
        <PatientDashboard />
      </Router>
    );

    // Assert that the dashboard is rendered
    expect(screen.getByText('Welcome test@example.com')).toBeInTheDocument();
  });


});
