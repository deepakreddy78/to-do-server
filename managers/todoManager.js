const fs = require('fs');
const path = require('path');
const todosFilePath = path.join(__dirname, './../data/todos.json');

// Helper function to read data from the file
const readTodosFromFile = () => {
  const data = fs.readFileSync(todosFilePath);
  return JSON.parse(data);
};

// Helper function to write data to the file
const writeTodosToFile = (todos) => {
  fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2));
};

exports.getAllItems = () => {
  return readTodosFromFile();
};

exports.getItemById = (id) => {
  const todos = readTodosFromFile();
  return todos.find(item => item.id === parseInt(id));
};

exports.addTodoItem = (title, description) => {
  const todos = readTodosFromFile();
  const newId = todos.length ? todos[todos.length - 1].id + 1 : 1;
  const newTodo = { id: newId, title, description };
  todos.push(newTodo);
  writeTodosToFile(todos);
  return newTodo;
};
