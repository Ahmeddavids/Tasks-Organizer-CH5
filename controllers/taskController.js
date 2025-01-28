const taskModel = require('../models/task');

exports.createTask = async (req, res) => {
    try {
        const {taskName, dueDate = new Date(), priority, } = req.body;
        if (!taskName || !dueDate || !priority) {
            return res.status(400).json({
                message: 'Please enter all fields'
            });
        }
        
        const formattedDate = dueDate.toLocaleString()
        
        const newTask = await taskModel.create({
            taskName,
            priority,
            dueDate: formattedDate
        });

        // Send a success response
        res.status(201).json({
            message: 'Task created successfully',
            data: newTask
        })

    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error' + error.message
        });
    }
};


// To mark a task as completed 
exports.completeTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await taskModel.findByPk(taskId);
        if (!task) {
            return res.status(404).json({
                message: 'Task not found'
            });
        }
        task.update({completed: true});
        // Send a success response
        res.status(201).json({
            message: 'Task completed',
            data: task
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error' + error.message
        });
    }
};

// To mark a task as completed 
exports.updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const {taskName, priority, dueDate} = req.body;

        const task = await taskModel.findByPk(taskId);
        if (!task) {
            return res.status(404).json({
                message: 'Task not found'
            });
        }
        const formattedDate = dueDate.toLocaleString();
        
        task.update({taskName, priority, dueDate: formattedDate});
        // Send a success response
        res.status(201).json({
            message: 'Task updated successfully',
            data: task
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error' + error.message
        });
    }
}
