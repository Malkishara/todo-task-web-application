const taskService = require("../services/taskService");

class TaskController {
    async addTask(req, res) {
        try {
            
            const { title, description } = req.body;
            const task = await taskService.addTask(title, description);
            res.status(201).json(task);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateStatus(req, res) {
        try {
            const { id } = req.params;
            const { status } = req.body;
            const updatedTask = await taskService.updateStatus(id, status);
            res.json(updatedTask);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getRecentPendingTasks(req, res) {
        try {
            const tasks = await taskService.getRecentPendingTasks();
            res.json(tasks);
        } catch (error) {
            res.status(500).json({ error: "Error fetching recent pending tasks." });
        }
    }
}

module.exports = new TaskController();
