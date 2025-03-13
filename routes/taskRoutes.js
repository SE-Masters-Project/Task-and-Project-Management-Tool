const express = require('express');
const Task = require('../models/Task');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Get all tasks for a project
router.get('/:projectId', authMiddleware, async (req, res) => {
    const tasks = await Task.find({ projectId: req.params.projectId });
    res.json(tasks);
});

// Create a new task
router.post('/:projectId', authMiddleware, async (req, res) => {
    const { title, description, assignee, priority, dueDate } = req.body;

    const task = new Task({
        title,
        description,
        projectId: req.params.projectId,
        assignee,
        priority,
        dueDate
    });

    await task.save();
    res.status(201).json(task);
});

module.exports = router;
