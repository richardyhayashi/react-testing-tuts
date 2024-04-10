import { render, screen } from "@testing-library/react";
import Greet from "../Greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  test("renders with name", () => {
    render(<Greet name="John" />);
    const textElement = screen.getByText(/hello john/i);
    expect(textElement).toBeInTheDocument();
  });
});