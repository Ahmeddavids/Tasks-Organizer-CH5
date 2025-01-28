const taskModel = require('../models/task');

exports.createTask = async (req, res) => {
    try {
        const {taskName, dueDate = new Date(), priority, } = req.body;
        if (!taskName || !dueDate || !priority) {
            return res.status(400).json({
                message: 'Please enter all fields'
            });
        }

        const newTask = await taskModel.create({
            taskName,
            priority,
            dueDate: dueDate.toLocaleString()
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

