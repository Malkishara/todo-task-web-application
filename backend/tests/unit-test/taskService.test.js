const TaskService = require("../../services/taskService");
const TaskRepository = require("../../repositories/taskRepository");

jest.mock("../../repositories/taskRepository");

describe("TaskService", () => {
  it("should add a task", async () => {
    const mockTask = { id: 1, title: "Test Task", description: "Task Description", status: false };
    TaskRepository.createTask.mockResolvedValue(mockTask);

    const result = await TaskService.addTask("Test Task", "Task Description");

    expect(result).toEqual(mockTask);
    expect(TaskRepository.createTask).toHaveBeenCalledWith("Test Task", "Task Description");
  });

  it("should throw an error if title or description is missing", async () => {
    await expect(TaskService.addTask("", ""))
      .rejects.toThrow("Title and description cannot be empty.");
  });

  it("should update task status", async () => {
    const mockTask = { id: 1, title: "Test Task", description: "Task Description", status: true };
    TaskRepository.updateTaskStatus.mockResolvedValue(mockTask);

    const result = await TaskService.updateStatus(1, true);

    expect(result.status).toBe(true);
  });

  it("should throw an error if task not found", async () => {
    TaskRepository.updateTaskStatus.mockResolvedValue(null);

    await expect(TaskService.updateStatus(1, true))
      .rejects.toThrow("Task not found.");
  });
});
