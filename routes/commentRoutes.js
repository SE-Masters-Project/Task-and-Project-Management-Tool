const express = require('express');
const Comment = require('../models/Comment');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Get comments for a task
router.get('/:taskId', authMiddleware, async (req, res) => {
    const comments = await Comment.find({ taskId: req.params.taskId });
    res.json(comments);
});

// Add a comment to a task
router.post('/:taskId', authMiddleware, async (req, res) => {
    const { comment } = req.body;

    const newComment = new Comment({
        taskId: req.params.taskId,
        userId: req.user.userId,
        comment
    });

    await newComment.save();
    res.status(201).json(newComment);
});

module.exports = router;
