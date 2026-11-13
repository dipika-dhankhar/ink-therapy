const API_URL = import.meta.env.VITE_API_URL || '/api';

const request = async (path, options) => {
  const response = await fetch(`${API_URL}${path}`, options);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || 'Request failed');
    error.status = response.status;
    throw error;
  }

  return data;
};

export const getEssays = (theme) =>
  request(theme ? `/essays?theme=${encodeURIComponent(theme)}` : '/essays');

export const getEssay = (slug) => request(`/essays/${encodeURIComponent(slug)}`);