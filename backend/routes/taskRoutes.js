const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.post("/", taskController.addTask);
router.put("/:id/status", taskController.updateStatus);
router.get("/pending", taskController.getRecentPendingTasks);

module.exports = router;
