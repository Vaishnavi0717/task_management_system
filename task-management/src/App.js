
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import store from './store/store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <TaskForm />
          <TaskList />
        </Router>
      </AuthProvider>
    </Provider>
  );
};

export default App;
