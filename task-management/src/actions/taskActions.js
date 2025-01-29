
import { setTasks } from '../reducers/tasks';
import { fetchTasks } from '../utils/api';
import { showNotification } from '../utils/notifications';

export const loadTasks = () => async (dispatch) => {
  try {
    const tasks = await fetchTasks();
    dispatch(setTasks(tasks));
  } catch (error) {
    showNotification('Failed to load tasks', 'error');
  }
};
