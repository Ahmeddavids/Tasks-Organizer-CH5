const express = require('express');
const { createTask, completeTask } = require('../controllers/taskController');

const router = express.Router();

router.post('/task', createTask);

router.put('/task/:id', completeTask);

module.exports = router;