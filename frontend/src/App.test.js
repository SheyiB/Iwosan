import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('renders the Login component when the path is "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    ); 
    const headingElement = screen.getByRole('heading', { name: /login/i });

    expect(headingElement).toBeInTheDocument();
  });

  test('renders the Signup component when the path is "signup"', () => {
    render(
      <MemoryRouter initialEntries={['/signup']}>
        <App />
      </MemoryRouter>
    );const headingElement = screen.getByRole('heading', { name: /create account/i });

    expect(headingElement).toBeInTheDocument();
  });

});
