const express = require('express');
const router = express.Router();

// Import controller functions
const todoController = require('../controllers/todoController');

// Routes
router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodoById);
router.post('/', todoController.createTodo);

module.exports = router;
