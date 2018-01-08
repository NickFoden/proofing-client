export const loadAuthToken = () => localStorage.getItem('authToken');

export const saveAuthToken = (authToken) => {
  localStorage.setItem('authToken', authToken);
};

export const clearAuthToken = () => {
  localStorage.removeItem('authToken');
};
