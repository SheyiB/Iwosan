import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

// Mock useNavigate hook
jest.mock('react-router-dom', () => ({
  Link: () => <a />,
  useNavigate: () => jest.fn(),
}));

describe('Login', () => {
  test('renders and submits the form', () => {
    render(<Login />);

    // Find form elements
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'LOGIN' });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(submitButton);

  });
});
