import { render, screen } from "@testing-library/react";
import Greet from "../Greet";

test("Greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
});

test("Greet renders with name", () => {
    render(<Greet name="John" />);
    const textElement = screen.getByText(/hello john/i);
    expect(textElement).toBeInTheDocument();
});