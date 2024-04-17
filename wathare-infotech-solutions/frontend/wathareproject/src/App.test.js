import { render, screen } from '@testing-library/react';
import App from './App';
import CycleStatus from '..src/CycleStatus';

test('renders learn react link', () => {
  render(<CycleStatus />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
