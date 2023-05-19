import { render, screen } from '@testing-library/react';
import PatientDashboard from './PatientDashboard';

test('renders learn react link', () => {
  render(<PatientDashboard />);
  const linkElement = screen.getByText(/Welcome, patient name!/i);
  expect(linkElement).toBeInTheDocument();
});
