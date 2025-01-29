
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, updateTask } from '../reducers/tasks';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleStatusChange = (task) => {
    dispatch(updateTask({ ...task, status: task.status === 'To Do' ? 'In Progress' : 'Done' }));
  };

  return (
    <div>
      <h3>Task List</h3>
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => handleStatusChange(task)}>Toggle Status</button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
