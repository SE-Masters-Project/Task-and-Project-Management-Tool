const express = require('express');
const Project = require('../models/Project');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Get all projects (Protected Route)
router.get('/', authMiddleware, async (req, res) => {
    const projects = await Project.find({ owner: req.user.userId });
    res.json(projects);
});

// Create a new project (Protected Route)
router.post('/', authMiddleware, async (req, res) => {
    const { name, description, deadline } = req.body;

    const project = new Project({
        name,
        description,
        owner: req.user.userId,
        deadline
    });

    await project.save();
    res.status(201).json(project);
});

module.exports = router;
