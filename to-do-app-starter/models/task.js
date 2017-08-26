const db = require('../db/config');

const Task = {}

Task.findAll = () => {
  return db.query('SELECT * FROM tasks');
}

Task.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM tasks
    WHERE id = $1
    `, [id]);
}

Task.create = (task) => {
  return db.one(`
    INSERT INTO tasks
    (task_title, status, category)
    VALUES ($1, $2, $3)
    RETURNING *
    `, [task.task_title, task.status, task.category]);
}

Task.update = (task, id) => {
  return db.one(`
    UPDATE tasks SET
    task_title = $1,
    status = $2,
    category = $3
    WHERE id = $4
    RETURNING *
    `, [task.task_title, task.status, task.category])
}

Task.destroy = (id) => {
  return db.none(`
    DELETE FROM tasks
    WHERE id = $1
    `, [id]);
}

module.exports = Task;
