import { render, screen } from "@testing-library/react";
import HeaderComponent from "../components/HeaderComponent";

test("renders the header with correct text", () => {
  render(<HeaderComponent />);
  
  expect(screen.getByText("ToDo Application")).toBeInTheDocument();
  expect(screen.getByText("Stay organized with your tasks")).toBeInTheDocument();
});
