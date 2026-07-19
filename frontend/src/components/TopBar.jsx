import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Sparkles, Download, Settings, Bell } from 'lucide-react';
import { useApp } from '../context/AppContext';

const pageDescriptions = {
  '/dashboard': 'Your AI Command Center for Startup Success',
  '/impact': 'Startup Score & Impact Analysis',
  '/market': 'Market Size & Opportunity',
  '/competitors': 'Competitive Landscape',
  '/swot': 'Strengths, Weaknesses, Opportunities, Threats',
  '/business-model': 'Business Model Canvas',
  '/roadmap': 'MVP Development Roadmap',
  '/revenue': 'Revenue Projections & Forecasts',
  '/pitch-deck': 'Investor Pitch Deck',
  '/chat': 'AI Mentor Conversation',
  '/documents': 'Document Management',
};

export default function TopBar({ title }) {
  const location = useLocation();
  const { analysis, downloadPdf, downloadPptx } = useApp();
  const description = pageDescriptions[location.pathname] || '';

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="h-16 glass border-b border-indigo-500/10 flex items-center justify-between px-6 sticky top-0 z-40"
    >
      <div className="flex items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <h2 className="text-sm font-semibold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              {title}
            </h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">{description}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {analysis && (
          <>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadPdf}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/30 text-xs text-violet-300 hover:border-violet-500/50 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadPptx}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-xs text-cyan-300 hover:border-cyan-500/50 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Pitch Deck</span>
            </motion.button>
          </>
        )}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => alert('No new notifications')}
          className="relative w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-cyan-400 rounded-full" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => alert('Settings panel coming soon')}
          className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <Settings className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.header>
  );
}