import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Signup from './Signup';

// Mock useNavigate hook
jest.mock('react-router-dom', () => ({
  Link: () => <a />,
  useNavigate: () => jest.fn(),
}));

describe('Signup', () => {
  test('renders and submits the form', () => {
    render(<Signup />);

    // Find form elements
    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'CREATE ACCOUNT' });

    fireEvent.change(nameInput, { target: { value: 'test' } });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(submitButton);

  });
});
