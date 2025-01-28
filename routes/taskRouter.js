const express = require('express');
const { createTask, completeTask, updateTask } = require('../controllers/taskController');

const router = express.Router();
// Create Task
router.post('/task', createTask);
// Complete a Task
router.put('/task/:id', completeTask);
// Update Task
router.patch('/task/:id', updateTask);

module.exports = router;