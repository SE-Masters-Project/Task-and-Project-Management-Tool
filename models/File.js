const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
    taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    fileName: { type: String, required: true },
    filePath: { type: String, required: true },
    fileType: { type: String, required: true },
    fileSize: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('File', FileSchema);
