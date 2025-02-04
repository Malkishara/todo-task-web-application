import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ViewTasksComponent from "../components/ViewTasksComponent";
import TaskService from "../services/TaskService";

jest.mock("../services/TaskService", () => ({
  updateTaskStatus: jest.fn(),
}));

const mockRefreshTasks = jest.fn();
const mockTasks = [
  { id: 1, title: "Task 1", description: "Description 1" },
  { id: 2, title: "Task 2", description: "Description 2" },
];

test("renders no tasks message when task list is empty", () => {
  render(<ViewTasksComponent tasks={[]} refreshTasks={() => {}} />);
  
  expect(screen.getByText("You have no pending tasks.")).toBeInTheDocument();
});

test("renders task list correctly", () => {
  render(<ViewTasksComponent tasks={mockTasks} refreshTasks={() => {}} />);
  
  expect(screen.getByText("Task 1")).toBeInTheDocument();
  expect(screen.getByText("Task 2")).toBeInTheDocument();
});

test("calls updateTaskStatus and refreshTasks when Done button is clicked", async () => {
  TaskService.updateTaskStatus.mockResolvedValueOnce({});

  render(<ViewTasksComponent tasks={mockTasks} refreshTasks={mockRefreshTasks} />);

  fireEvent.click(screen.getAllByText("Done")[0]);

  await waitFor(() => {
    expect(TaskService.updateTaskStatus).toHaveBeenCalledWith(1);
  });

  await waitFor(() => {
    expect(mockRefreshTasks).toHaveBeenCalled();
  });
});
