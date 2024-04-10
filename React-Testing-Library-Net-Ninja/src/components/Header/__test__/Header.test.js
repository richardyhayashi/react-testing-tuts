import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('Should render same text passed into title prop', () => {
  render(<Header title="My Header"/>);
  const linkElement = screen.getByText(/my header/i);
  expect(linkElement).toBeInTheDocument();
});

// it('Should render same text passed into title prop', () => {
//   render(<Header title="My Header"/>);
//   const linkElement = screen.getByRole("heading");
//   expect(linkElement).toBeInTheDocument();
// });

it('Should render same text passed into title prop', () => {
  render(<Header title="My Header"/>);
  const linkElement = screen.getByRole("heading", {name: 'My Header'});
  expect(linkElement).toBeInTheDocument();
});

it('Should render same text passed into title prop', () => {
  render(<Header title="My Header"/>);
  const linkElement = screen.getByTitle("Header");
  expect(linkElement).toBeInTheDocument();
});

it('Should render same text passed into title prop', () => {
  render(<Header title="My Header"/>);
  const linkElement = screen.getByTestId("header-1");
  expect(linkElement).toBeInTheDocument();
});

// FIND BY

it('Should render same text passed into title prop', async () => {
  render(<Header title="My Header"/>);
  const linkElement = await screen.findByText(/my header/i);
  expect(linkElement).toBeInTheDocument();
});

// QUERY BY

it('Should render same text passed into title prop', async () => {
  render(<Header title="My Header"/>);
  const linkElement = screen.queryByText(/dogs/i);
  expect(linkElement).not.toBeInTheDocument();
});

it('Should render same text passed into title prop', async () => {
  render(<Header title="My Header"/>);
  const headingElements = screen.getAllByRole('heading');
  expect(headingElements.length).toBe(2);
});