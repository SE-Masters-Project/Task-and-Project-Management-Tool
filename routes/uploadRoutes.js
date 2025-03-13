const express = require('express');
const multer = require('multer');
const authMiddleware = require('../middleware/authMiddleware');
const File = require('../models/File'); // Create this model

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Upload file to a task and save metadata to MongoDB
router.post('/:taskId', authMiddleware, upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        // Save file metadata in MongoDB
        const newFile = new File({
            taskId: req.params.taskId,
            uploadedBy: req.user.userId,
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: req.file.size
        });

        await newFile.save();

        res.json({ message: "File uploaded successfully", file: newFile });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
