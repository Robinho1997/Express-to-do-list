const express = require("express");
const router = express.Router();

// Define an array to store the todos
let todos = [];

// Route handler for GET /todos
router.get("/", (req, res) => {
  res.json(todos);
});

// Route handler for POST /todos
router.post("/", (req, res) => {
  const todo = { todo: req.body.todo };
  todos.push(todo);
  res.json(todos);
});

// Route handler for DELETE /todos/:id
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((todo, i) => i !== id);
  res.json(todos);
});

module.exports = router;
