import React from 'react';
import { useApp } from '../context/AppContext';

export default function ErrorMessage({ message, onClose }) {
  const { setError } = useApp();
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center justify-between">
      <span>{message}</span>
      <button onClick={() => { setError(null); onClose?.(); }} className="ml-4 text-red-500 hover:text-red-700">✕</button>
    </div>
  );
}
