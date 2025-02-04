const request = require("supertest");
const TaskController = require("../../controllers/taskController");
const TaskService = require("../../services/taskService");

jest.mock("../../services/taskService");

describe("TaskController", () => {
  it("should add a task", async () => {
    const req = { body: { title: "Test Task", description: "Task Description" } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    TaskService.addTask.mockResolvedValue({ id: 1, ...req.body });

    await TaskController.addTask(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ id: 1, ...req.body });
  });

  it("should return 400 if an error occurs", async () => {
    const req = { body: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    TaskService.addTask.mockRejectedValue(new Error("Title and description cannot be empty."));

    await TaskController.addTask(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "Title and description cannot be empty." });
  });
});
