const express = require('express');
const taskRoutes = express.Router();

const taskController = require('../controllers/tasks-controller');

taskRoutes.get('/', taskController.index);
taskRoutes.post('/', taskController.create);

taskRoutes.get('/:id', taskController.show);
taskRoutes.put('/:id', taskController.update);
taskRoutes.delete('/:id', taskController.delete);

module.exports = taskRoutes;
