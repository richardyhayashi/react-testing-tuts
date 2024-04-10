import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Todo from '../Todo';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
}

const addTasks = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", {name: /Add/i });
  tasks.forEach(task => {
    fireEvent.change(inputElement, { target: { value: "Go grocery shoppping" } });
    fireEvent.click(buttonElement);
  });
}

describe("Todo", () => {
  it('Should render same text passed into title prop', () => {
    render(<MockTodo />);
    addTasks(["Go grocery shoppping"]);
    const divElement = screen.getByText(/Go grocery shoppping/i);
    expect(divElement).toBeInTheDocument();
  });

  it('Should render multiple items', () => {
    render(<MockTodo />);
    const tasks = ["Go grocery shoppping", "Go to church", "Take the dog for a walk"];
    addTasks(tasks);
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(tasks.length);
  });

  it('Task should not have completed class when initially rendered', () => {
    render(<MockTodo />);
    const tasks = ["Go grocery shoppping"];
    addTasks(tasks);
    const divElement = screen.getByText(/Go grocery shoppping/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it('Task should have completed class when clicked', () => {
    render(<MockTodo />);
    const tasks = ["Go grocery shoppping"];
    addTasks(tasks);
    const divElement = screen.getByText(/Go grocery shoppping/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});