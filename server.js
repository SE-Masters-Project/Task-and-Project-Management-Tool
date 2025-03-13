require('dotenv').config(); // Load environment variables
const express = require('express');
const connectDB = require('./config/db'); // Import database connection
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const commentRoutes = require('./routes/commentRoutes');
const cors = require('cors');



const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());
// Connect to MongoDB
connectDB();

// Test Route
app.get('/', (req, res) => {
    res.send('Task Manager API is running...');
});

app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/uploads', uploadRoutes);
app.use('/api/comments', commentRoutes);

// Define Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
