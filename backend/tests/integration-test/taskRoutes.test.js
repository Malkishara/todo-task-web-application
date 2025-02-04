const request = require("supertest");
const express = require("express");
const taskRoutes = require("../../routes/taskRoutes");
const TaskService = require("../../services/taskService");

jest.mock("../../services/taskService");

const app = express();
app.use(express.json());
app.use("/api/tasks", taskRoutes);

describe("Task Routes", () => {
  it("should create a task", async () => {
    TaskService.addTask.mockResolvedValue({ id: 1, title: "Test Task", description: "Task Description" });

    const res = await request(app)
      .post("/api/tasks")
      .send({ title: "Test Task", description: "Task Description" });

    expect(res.status).toBe(201);
    expect(res.body.title).toBe("Test Task");
  },30000);

  it("should update task status", async () => {
    TaskService.updateStatus.mockResolvedValue({ id: 1, title: "Test Task", status: true });

    const res = await request(app)
      .put("/api/tasks/1/status")
      .send({ status: true });

    expect(res.status).toBe(200);
    expect(res.body.status).toBe(true);
  },30000);

  it("should fetch recent pending tasks", async () => {
    TaskService.getRecentPendingTasks.mockResolvedValue([
      { id: 1, title: "Task 1", status: false },
      { id: 2, title: "Task 2", status: false }
    ]);

    const res = await request(app).get("/api/tasks/pending");

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
  },30000);
});
