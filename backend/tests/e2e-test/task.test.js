const request = require("supertest");
const app = require("../../server"); 

describe("Task Endpoints", () => {
  it("should create a new task", async () => {
    const newTask = {
      title: "Test Task",
      description: "This is a test task"
    };

    const response = await request(app).post("/api/tasks").send(newTask);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.title).toBe(newTask.title);
    expect(response.body.description).toBe(newTask.description);
  },30000);

  it("should update task status", async () => {
    const task = await request(app).post("/api/tasks").send({
      title: "Update Task",
      description: "This task will be updated"
    });

    const response = await request(app).put(`/api/tasks/${task.body.id}/status`).send({
      status: true
    });

    expect(response.status).toBe(200);
    expect(response.body.status).toBe(true);
  });

  it("should get recent pending tasks", async () => {
    await request(app).post("/api/tasks").send({
      title: "Pending Task 1",
      description: "This task is pending"
    });

    const response = await request(app).get("/api/tasks/pending");

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
