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

  test('redirects to login when patientMail is empty', () => {
    // Set patientMail to an empty string
    window.localStorage.__proto__.getItem.mockReturnValue('');

    render(
      <Router>
        <PatientDashboard />
      </Router>
    );

    // Assert that the user is redirected to the login page
    expect(screen.queryByText('Welcome test@example.com')).not.toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('redirects to login when patientMail is not present', () => {
    // Remove patientMail from localStorage
    window.localStorage.__proto__.getItem.mockReturnValue(null);

    render(
      <Router>
        <PatientDashboard />
      </Router>
    );

    // Assert that the user is redirected to the login page
    expect(screen.queryByText('Welcome test@example.com')).not.toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
