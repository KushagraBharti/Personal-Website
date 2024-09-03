const API_URL = 'http://localhost:3001';

export const fetchProjects = async () => {
  const response = await fetch(`${API_URL}/projects`);
  return response.json();
};
