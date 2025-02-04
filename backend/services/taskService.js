const taskRepository = require("../repositories/taskRepository");

class TaskService {
    async addTask(title, description) {
       
        if (!title || !description) {
            throw new Error("Title and description cannot be empty.");
        }
        return await taskRepository.createTask(title, description);
    }

    async updateStatus(id, status) {
        const task = await taskRepository.updateTaskStatus(id, status);
        if (!task) {
            throw new Error("Task not found.");
        } 
        return task;
    }

    async getRecentPendingTasks() {
        return await taskRepository.getRecentPendingTasks();
    }
}

module.exports = new TaskService();
