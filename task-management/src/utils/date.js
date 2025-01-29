
export const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };
  
  export const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Date(date).toLocaleTimeString('en-US', options);
  };
  
  export const isDeadlineApproaching = (deadlineDate) => {
    const deadline = new Date(deadlineDate);
    const now = new Date();
    const timeDiff = deadline - now;
    const timeInHours = timeDiff / (1000 * 3600);
    return timeInHours < 24; // Returns true if deadline is within 24 hours
  };
  