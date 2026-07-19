import React from 'react';
import { createContext, useState, useCallback } from 'react';
import { analyzeStartup, downloadPdf as dlPdf, downloadPptx as dlPptx, sendChatMessage } from '../services/api';

export const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyze = useCallback(async (idea) => {
    setLoading(true);
    setError(null);
    try {
      const result = await analyzeStartup(idea);
      // Backend returns { status: "success", data: {...} }, unwrap it
      const analysisData = result.data || result;
      setAnalysis(analysisData);
      return analysisData;
    } catch (err) {
      const msg = err?.response?.data?.detail || err?.message || 'Analysis failed';
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const downloadPdf = useCallback(async () => {
    if (!analysis) return;
    try {
      const blob = await dlPdf(analysis.idea);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'startup-report.pdf';
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      setError('PDF download failed');
    }
  }, [analysis]);

  const downloadPptx = useCallback(async () => {
    if (!analysis) return;
    try {
      const blob = await dlPptx(analysis.idea);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'pitch-deck.pptx';
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      setError('PPTX download failed');
    }
  }, [analysis]);

  const chat = useCallback(async (message, idea) => {
    setError(null);
    try {
      const result = await sendChatMessage(message, idea);
      return result.reply || 'No response';
    } catch (err) {
      const msg = err?.response?.data?.detail || err?.message || 'Chat failed';
      setError(msg);
      throw err;
    }
  }, []);

  const reset = useCallback(() => {
    setAnalysis(null);
    setError(null);
  }, []);

  return (
    <AppContext.Provider value={{ analysis, loading, error, analyze, downloadPdf, downloadPptx, chat, reset, setError }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = React.useContext(AppContext);
  if (!ctx) throw new Error('useApp must be inside AppProvider');
  return ctx;
}