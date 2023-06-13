// Save session data to session storage
export const saveSessionData = (key, value) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

// Get session data from session storage
export const getSessionData = (key) => {
  const data = sessionStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

// Clear session data from session storage
export const clearSessionData = () => {
  sessionStorage.clear();
};
