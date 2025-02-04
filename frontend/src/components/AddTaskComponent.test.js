import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddTaskComponent from "../components/AddTaskComponent";
import TaskService from "../services/TaskService";

jest.mock("../services/TaskService", () => ({
  addTask: jest.fn(),
}));

test("calls refreshTasks after adding task", async () => {
  const mockRefreshTasks = jest.fn();
  
  
  TaskService.addTask.mockResolvedValueOnce({});
  
  render(<AddTaskComponent refreshTasks={mockRefreshTasks} />);

  fireEvent.change(screen.getByLabelText("Title"), { target: { value: "Test Task" } });
  fireEvent.change(screen.getByLabelText("Description"), { target: { value: "Test Description" } });
  

  fireEvent.click(screen.getByText("Add"));

  await waitFor(() => {
    expect(mockRefreshTasks).toHaveBeenCalled();
  });
});
