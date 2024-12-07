const todoManager = require('../managers/todoManager.js');

exports.getAllTodos = (req, res) => {
  const todoItems = todoManager.getAllItems();
  res.status(200).json(todoItems);
};

exports.getTodoById = (req, res) => {
  const id = req.params.id;
  const todoItem = todoManager.getItemById(id);
  if (!todoItem) {
    return res.status(404).json({ error: 'Todo item not found' });
  }
  res.status(200).json(todoItem);
};

exports.createTodo = (req, res) => {
  const { title, description } = req.body;
  const newTodo = todoManager.addTodoItem(title, description);
  res.status(201).json(newTodo);
};
