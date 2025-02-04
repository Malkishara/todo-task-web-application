const TaskRepository = require("../../repositories/taskRepository");
const Task = require("../../models/Task");

jest.mock("../../models/Task");

describe("TaskRepository", () => {
  it("should create a task", async () => {
    const mockTask = { id: 1, title: "Test Task", description: "Task Description", status: false };
    Task.create.mockResolvedValue(mockTask);

    const result = await TaskRepository.createTask("Test Task", "Task Description");

    expect(result).toEqual(mockTask);
    expect(Task.create).toHaveBeenCalledWith({ title: "Test Task", description: "Task Description" });
  });

  it("should update task status", async () => {
    const mockTask = { save: jest.fn(), status: false };
    Task.findByPk.mockResolvedValue(mockTask);

    const result = await TaskRepository.updateTaskStatus(1, true);

    expect(mockTask.status).toBe(true);
    expect(mockTask.save).toHaveBeenCalled();
  });

  it("should return null if task not found", async () => {
    Task.findByPk.mockResolvedValue(null);

    const result = await TaskRepository.updateTaskStatus(1, true);

    expect(result).toBeNull();
  });
});
