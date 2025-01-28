const taskModel = require('../models/task');

exports.createTask = async (req, res) => {
    try {
        const {taskName, dueDate, priority, } = req.body;
        if (!taskName || !dueDate || !priority) {
            return res.status(400).json({
                message: 'Please enter all fields'
            });
        }

        

    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error' + error.message
        });
    }
};

