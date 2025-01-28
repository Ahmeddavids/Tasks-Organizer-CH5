const express = require('express');
const { createTask, completeTask, updateTask, deleteTask, getAllTasks, getAllNotCompletedTask } = require('../controllers/taskController');

const router = express.Router();
// Create Task
router.post('/task', createTask);
// Complete a Task
router.put('/task/:id', completeTask);
// Update Task
router.patch('/task/:id', updateTask);
// Delete Task
router.delete('/task/:id', deleteTask);
// Get all tasks
router.get('/task', getAllTasks);
router.get('/task/not-complete', getAllNotCompletedTask);

module.exports = router;