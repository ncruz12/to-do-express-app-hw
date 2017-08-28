const Task = require('../models/task');

const taskController = {};

taskController.index = (req, res) => {
  Task.findAll()
    .then(tasks => {
      // where i left off
      res.render('tasks/task-index', {
        message: 'Showing all tasks',
        data: tasks,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};

taskController.show = (req, res) => {
  Task.findById(req.params.id)
    .then(task => {
      res.render('tasks/task-single', {
        message: 'Displaying one task',
        data: task,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};

taskController.create = (req, res) => {
  Task.create({
    task_title: req.body.task_title,
    status: req.body.status,
    category: req.body.category,
  }).then (task => {
    // res.json({
    //   messsage: 'Task added successfully!',
    //   data: task,
    // });
    res.redirect('/tasks');
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};

taskController.update = (req, res) => {
  Task.update({
    task_title: req.body.task_title,
    status: req.body.status,
    category: req.body.category,
  }, req.params.id).then(task => {
    res.json({
      message:'Task updated successfully!',
      data: task,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
};

taskController.delete = (req, res) => {
  Task.destroy(req.params.id)
    .then(() => {
      res.redirect('/tasks')
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

module.exports = taskController;
