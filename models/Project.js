const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now },
    deadline: { type: Date },
    status: { type: String, enum: ["Not Started", "In Progress", "Completed"], default: "Not Started" }
});

module.exports = mongoose.model('Project', ProjectSchema);
