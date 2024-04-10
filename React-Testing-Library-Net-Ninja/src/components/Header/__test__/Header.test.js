import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('Should render same text passed into title prop', () => {
  render(<Header title="My Header"/>);
  const linkElement = screen.getByText(/my header/i);
  expect(linkElement).toBeInTheDocument();
});
