import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Users,
  Target,
  Briefcase,
  Map,
  LineChart,
  Presentation,
  Home,
  MessageSquare,
  FileText,
  Zap,
  ChevronRight,
  Lightbulb,
  Cpu,
  Globe,
  Shield,
  Moon,
  Sun,
  Sparkles,
} from 'lucide-react';

const links = [
  { path: '/dashboard', icon: Home, label: 'Dashboard', color: 'from-violet-500 to-purple-500' },
  { path: '/input', icon: Lightbulb, label: 'Idea Analysis', color: 'from-amber-500 to-yellow-500' },
  { path: '/chat', icon: Cpu, label: 'Smart Agents', color: 'from-cyan-500 to-blue-500' },
  { path: '/market', icon: Globe, label: 'Market Research', color: 'from-emerald-500 to-teal-500' },
  { path: '/competitors', icon: Users, label: 'Competitor Intel', color: 'from-orange-500 to-red-500' },
  { path: '/swot', icon: Target, label: 'SWOT Analysis', color: 'from-pink-500 to-rose-500' },
  { path: '/business-model', icon: Briefcase, label: 'Business Model', color: 'from-indigo-500 to-blue-500' },
  { path: '/roadmap', icon: Map, label: 'MVP Roadmap', color: 'from-amber-500 to-yellow-500' },
  { path: '/revenue', icon: LineChart, label: 'Revenue Forecast', color: 'from-green-500 to-emerald-500' },
  { path: '/pitch-deck', icon: Presentation, label: 'Pitch Deck', color: 'from-fuchsia-500 to-pink-500' },
  { path: '/impact', icon: BarChart3, label: 'Score & Impact', color: 'from-blue-500 to-cyan-500' },
  { path: '/documents', icon: FileText, label: 'Documents', color: 'from-slate-400 to-slate-500' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);

  return (
    <motion.aside
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="fixed left-0 top-0 h-screen w-72 flex flex-col z-50 border-r border-indigo-500/10"
      style={{
        background: 'linear-gradient(180deg, rgba(15, 10, 40, 0.95) 0%, rgba(10, 8, 30, 0.98) 100%)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
      }}
    >
      {/* Logo */}
      <div className="p-6 border-b border-indigo-500/10">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3"
        >
          <div className="relative">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-600/20">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-1 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-md"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Startup Forge
              </span>
            </h1>
            <p className="text-[10px] text-slate-500 tracking-widest uppercase flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
              AI Command Center
            </p>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 p-4 space-y-1 overflow-y-auto scrollbar-thin"
      >
        {links.map(({ path, icon: Icon, label, color }) => {
          const active = location.pathname === path;
          return (
            <motion.button
              key={path}
              variants={itemVariants}
              whileHover={{ x: 4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(path)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all relative group ${
                active
                  ? 'text-white border border-indigo-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
              style={{
                background: active
                  ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.1))'
                  : 'transparent',
              }}
            >
              {active && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 rounded-r-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${color} bg-opacity-20`}
                style={{
                  background: active
                    ? `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`
                    : 'rgba(255,255,255,0.05)',
                }}
              >
                <Icon className={`w-4 h-4 ${active ? 'text-white' : 'text-slate-400'}`} />
              </div>
              <span className="flex-1 text-left">{label}</span>
              {active && (
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              )}
            </motion.button>
          );
        })}
      </motion.nav>

      {/* Bottom section */}
      <div className="p-4 border-t border-indigo-500/10 space-y-3">
        {/* Dark Mode Toggle */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setDarkMode(!darkMode)}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-indigo-500/10 hover:border-indigo-500/30 transition-all"
        >
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
            darkMode ? 'bg-indigo-500/20 text-indigo-400' : 'bg-amber-500/20 text-amber-400'
          }`}>
            {darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </div>
          <div className="flex-1 text-left">
            <span className="text-sm text-slate-300 font-medium">Dark Mode</span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-indigo-400' : 'bg-amber-400'}`} />
              <span className="text-[10px] text-slate-500">{darkMode ? 'Enabled' : 'Disabled'}</span>
            </div>
          </div>
          <div className={`w-10 h-5 rounded-full transition-all duration-300 ${
            darkMode ? 'bg-indigo-500/40' : 'bg-slate-600/30'
          }`}>
            <motion.div
              animate={{ x: darkMode ? 20 : 2 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className={`w-4 h-4 rounded-full mt-0.5 ${
                darkMode ? 'bg-indigo-400 shadow-lg shadow-indigo-400/30' : 'bg-slate-400'
              }`}
            />
          </div>
        </motion.button>

        {/* New Analysis button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/')}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
            <Home className="w-4 h-4" />
          </div>
          <span>New Analysis</span>
        </motion.button>

        {/* Status indicator */}
        <div className="px-4 py-3 rounded-xl" style={{
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08), rgba(6, 182, 212, 0.08))',
          border: '1px solid rgba(16, 185, 129, 0.15)',
        }}>
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <div className="absolute -inset-1 bg-emerald-400/20 rounded-full animate-ping" />
            </div>
            <span className="text-xs text-emerald-400 font-medium">System Online</span>
          </div>
          <p className="text-[10px] text-slate-500 mt-1">AI Engine v2.0 Active</p>
        </div>
      </div>
    </motion.aside>
  );
}