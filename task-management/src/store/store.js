
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../reducers/tasks';
import notificationsReducer from '../reducers/notifications';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    notifications: notificationsReducer,
  },
});

export default store;
