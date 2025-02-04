const TaskService = require("../services/TaskService");
const axios = require("axios");

jest.mock("axios");

test("fetches tasks successfully", async () => {
  const mockTasks = [{ id: 1, title: "Test Task", description: "Test Desc" }];
  axios.get.mockResolvedValue({ data: mockTasks });

  const tasks = await TaskService.getTasks();
  expect(tasks).toEqual(mockTasks);
});

test("adds a task successfully", async () => {
  const newTask = { title: "New Task", description: "New Desc" };
  axios.post.mockResolvedValue({ data: newTask });

  const result = await TaskService.addTask(newTask);
  expect(result).toEqual(newTask);
});

test("updates task status successfully", async () => {
  axios.put.mockResolvedValue({ data: { success: true } });

  const result = await TaskService.updateTaskStatus(1);
  expect(result).toEqual({ success: true });
});
