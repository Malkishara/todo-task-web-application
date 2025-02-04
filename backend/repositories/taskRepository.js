const Task = require("../models/Task");

class TaskRepository {
    async createTask(title, description) {
        
        return await Task.create({ title, description });
    }

    async updateTaskStatus(id, status) {
        const task = await Task.findByPk(id);
        if (!task) return null;
        task.status = status;
        await task.save();
        return task;
    }

    async getRecentPendingTasks() {
        return await Task.findAll({
            where: { status: false },
            order: [["createdAt", "DESC"]],
            limit: 5
        });
    }
}

module.exports = new TaskRepository();
