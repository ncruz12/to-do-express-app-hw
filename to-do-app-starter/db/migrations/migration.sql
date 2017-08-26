\c tasks_db_app;

CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  task_title TEXT,
  status VARCHAR(50),
  category VARCHAR(100)
);
