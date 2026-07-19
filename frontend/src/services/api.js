import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || '';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function analyzeStartup(idea) {
  const response = await api.post('/analyze', { idea });
  return response.data;
}

export async function downloadPdf(idea) {
  const response = await api.get('/download/pdf', { params: { idea }, responseType: 'blob' });
  return response.data;
}

export async function downloadPptx(idea) {
  const response = await api.get('/download/pptx', { params: { idea }, responseType: 'blob' });
  return response.data;
}

export async function sendChatMessage(message, idea) {
  const response = await api.post('/chat', { message, idea });
  return response.data;
}

export async function uploadDocument(file) {
  const formData = new FormData();
  formData.append('file', file);
  const response = await api.post('/upload-document', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
}

export default api;