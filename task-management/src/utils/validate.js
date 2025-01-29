
export const isValidTask = (task) => {
    return task.title && task.description && task.priority && task.status;
  };
  
  export const isValidUser = (user) => {
    return user.username && user.password;
  };
  