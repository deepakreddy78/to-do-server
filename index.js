const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(express.json());
app.use(morgan('dev')); // Logging requests

// Load environment variables
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Import routes
const todoRoutes = require('./routes/todoRoutes.js');

// Use routes
app.use('/api', todoRoutes);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
