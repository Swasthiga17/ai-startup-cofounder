import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../hooks/useApp';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Brain, TrendingUp, Users, Target, Briefcase, LineChart,
  Presentation, MessageSquare, FileText, BarChart3, Zap,
  ArrowRight, Activity, Globe, Shield, Cpu, Download, FileDown,
  Lightbulb, Search, CheckCircle, Clock, ChevronRight,
  Scale, DollarSign, Rocket, Layers, BookOpen, Award,
} from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const analysisModules = [
  { icon: Brain, label: 'Deep Analysis', desc: 'AI-powered feasibility & market viability assessment', color: 'from-violet-500 to-purple-600', status: 'active', stat: '92% Match' },
  { icon: Cpu, label: 'Smart Agents', desc: 'Multi-agent system for comprehensive strategy', color: 'from-cyan-500 to-blue-600', status: 'active', stat: '8 Agents' },
  { icon: Scale, label: 'Legal Compliance AI', desc: 'Regulatory check & compliance framework', color: 'from-emerald-500 to-teal-600', status: 'active', stat: '100% Covered' },
  { icon: DollarSign, label: 'Revenue Modeling', desc: 'Financial projections & unit economics', color: 'from-amber-500 to-orange-600', status: 'active', stat: '3Y Forecast' },
  { icon: Users, label: 'Competitor Intel', desc: 'Competitive landscape & positioning', color: 'from-pink-500 to-rose-600', status: 'active', stat: '12 Rivals' },
  { icon: Target, label: 'Risk Assessment', desc: 'Strategic risk analysis & mitigation plans', color: 'from-red-500 to-rose-600', status: 'active', stat: 'Low Risk' },
];

const roadmapSteps = [
  {
    step: 1,
    title: 'Legal Setup',
    icon: Scale,
    desc: 'Company registration, IP protection, compliance framework, and regulatory approvals for your startup entity.',
    color: 'from-emerald-500 to-teal-500',
    duration: '2-3 Weeks',
    details: ['Company Registration', 'IP & Trademark Filing', 'Regulatory Compliance', 'Founder Agreements'],
  },
  {
    step: 2,
    title: 'MVP Build',
    icon: Rocket,
    desc: 'Agile development of minimum viable product with core features, user testing, and iterative improvements.',
    color: 'from-blue-500 to-cyan-500',
    duration: '6-8 Weeks',
    details: ['Core Architecture', 'Feature Development', 'User Testing', 'Iteration Cycle'],
  },
  {
    step: 3,
    title: 'Market Pilot',
    icon: Globe,
    desc: 'Targeted beta launch in select markets to validate product-market fit and gather real user feedback.',
    color: 'from-amber-500 to-yellow-500',
    duration: '4-6 Weeks',
    details: ['Beta Launch', 'User Acquisition', 'Feedback Analysis', 'Product Refinement'],
  },
  {
    step: 4,
    title: 'Seed Funding',
    icon: Award,
    desc: 'Pitch to angel investors and VCs with validated traction, clear metrics, and compelling growth story.',
    color: 'from-purple-500 to-pink-500',
    duration: '8-12 Weeks',
    details: ['Investor Pipeline', 'Due Diligence', 'Term Sheet', 'First Close'],
  },
];

const recentAnalyses = [
  { idea: 'On-Demand Eco-Logistics Platform', score: 92, date: '2026-06-20', status: 'Complete', market: 'Logistics', risk: 'Low' },
  { idea: 'AI-Powered Personal Finance Assistant', score: 88, date: '2026-06-19', status: 'Complete', market: 'FinTech', risk: 'Low' },
  { idea: 'Remote Health Monitoring System', score: 85, date: '2026-06-18', status: 'Complete', market: 'HealthTech', risk: 'Moderate' },
  { idea: 'Blockchain Supply Chain Tracker', score: 79, date: '2026-06-17', status: 'Complete', market: 'Supply Chain', risk: 'Moderate' },
  { idea: 'Sustainable Fashion Marketplace', score: 83, date: '2026-06-16', status: 'Complete', market: 'E-Commerce', risk: 'Low' },
];

const startupIdeas = [
  { label: 'On-Demand Eco-Logistics Platform', value: 'eco-logistics' },
  { label: 'AI-Powered Personal Finance Assistant', value: 'finance-ai' },
  { label: 'Remote Health Monitoring System', value: 'health-monitor' },
  { label: 'Blockchain Supply Chain Tracker', value: 'blockchain-supply' },
  { label: 'Sustainable Fashion Marketplace', value: 'fashion-marketplace' },
];

const gradientPurplePink = 'linear-gradient(135deg, #a855f7, #ec4899)';

function InteractiveMeshBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);

    const pts = Array.from({ length: 40 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1.5 + Math.random() * 3,
      speed: 0.2 + Math.random() * 0.5,
      hue: 240 + Math.random() * 60,
      phase: Math.random() * Math.PI * 2,
    }));
    setNodes(pts);

    const conns = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 20) {
          conns.push({ i, j, opacity: 0.03 + Math.random() * 0.06 });
        }
      }
    }
    setConnections(conns);

    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg className="w-full h-full opacity-40">
        <defs>
          <radialGradient id="mouseGlow" cx={`${mousePos.x / window.innerWidth * 100}%`} cy={`${mousePos.y / window.innerHeight * 100}%`} r="30%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.15)" />
            <stop offset="50%" stopColor="rgba(6, 182, 212, 0.05)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id="meshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#mouseGlow)" />

        {connections.map((conn, idx) => {
          const n1 = nodes[conn.i];
          const n2 = nodes[conn.j];
          if (!n1 || !n2) return null;
          return (
            <motion.line
              key={`conn-${idx}`}
              x1={`${n1.x}%`}
              y1={`${n1.y}%`}
              x2={`${n2.x}%`}
              y2={`${n2.y}%`}
              stroke="url(#meshGrad)"
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: [conn.opacity, conn.opacity * 2, conn.opacity] }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
            />
          );
        })}

        {nodes.map((node, idx) => (
          <motion.circle
            key={`node-${idx}`}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size}
            fill="url(#meshGrad)"
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              r: [node.size, node.size * 1.5, node.size],
              cx: [`${node.x}%`, `${node.x + Math.sin(node.phase) * 0.5}%`, `${node.x}%`],
              cy: [`${node.y}%`, `${node.y + Math.cos(node.phase) * 0.5}%`, `${node.y}%`],
            }}
            transition={{
              duration: 3 + node.speed * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: node.phase,
            }}
          />
        ))}
      </svg>

      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-600/5 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, 20, -10, 0], y: [0, -30, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/5 rounded-full blur-[120px]"
      />
    </div>
  );
}

function StatCard({ icon: Icon, label, value, color, sub }) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.01 }}
      className="relative overflow-hidden rounded-2xl p-5"
      style={{
        background: 'rgba(15, 15, 35, 0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(99, 102, 241, 0.15)',
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${color}`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[10px] text-emerald-400 font-mono font-semibold"
        >
          ● LIVE
        </motion.span>
      </div>
      <p className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>{value}</p>
      <p className="text-xs text-slate-400">{label}</p>
      {sub && <p className="text-[10px] text-slate-500 mt-1">{sub}</p>}
    </motion.div>
  );
}

function AnalysisCard({ mod }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative overflow-hidden rounded-2xl p-5 cursor-pointer group"
      style={{
        background: 'rgba(15, 15, 35, 0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(99, 102, 241, 0.15)',
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${mod.color} flex items-center justify-center shadow-lg`}>
          <mod.icon className="w-5 h-5 text-white" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-slate-500 font-mono">{mod.stat}</span>
          <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
        </div>
      </div>
      <h4 className="text-sm font-semibold text-white mb-1">{mod.label}</h4>
      <p className="text-xs text-slate-400 leading-relaxed">{mod.desc}</p>
      <div className="mt-4 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[10px] text-emerald-400 uppercase tracking-wider font-medium">Active</span>
      </div>
    </motion.div>
  );
}

function RoadmapCard() {
  const [selectedPlatform, setSelectedPlatform] = useState(startupIdeas[0].label);

  return (
    <motion.div
      variants={item}
      className="relative overflow-hidden rounded-2xl p-6 md:p-8"
      style={{
        background: 'rgba(15, 15, 35, 0.5)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(99, 102, 241, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%, rgba(139,92,246,0.02) 100%)',
      }} />

      <div className="relative flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Rocket className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              COMPREHENSIVE ROADMAP: {selectedPlatform.toUpperCase()}
            </h3>
          </div>
          <p className="text-xs text-slate-400">Strategic execution timeline with milestones & deliverables</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2.5 px-6 py-3 rounded-xl text-white font-semibold text-sm shadow-lg transition-all"
          style={{ background: gradientPurplePink }}
        >
          <FileDown className="w-4 h-4" />
          <span>Download Full Report</span>
        </motion.button>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
        {roadmapSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="relative"
            >
              {idx < roadmapSteps.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/30 to-transparent hidden md:block" />
              )}
              
              <div className="relative flex md:flex-col items-start md:items-center gap-3 md:gap-4">
                <div className="relative flex-shrink-0">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-indigo-900 border border-indigo-500/50 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-cyan-300">{step.step}</span>
                  </div>
                </div>

                <div className="flex-1 md:text-center">
                  <div className="flex items-center md:justify-center gap-2 mb-1">
                    <h4 className="text-sm font-bold text-white">{step.title}</h4>
                    <span className="text-[10px] text-cyan-400/80 font-mono">{step.duration}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">{step.desc}</p>

                  <div className="space-y-1.5">
                    {step.details.map((detail, dIdx) => (
                      <motion.div
                        key={dIdx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.15 + dIdx * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                        <span className="text-[10px] text-slate-500">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function RecentAnalysesTable() {
  return (
    <motion.div
      variants={item}
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(15, 15, 35, 0.7)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(99, 102, 241, 0.15)',
      }}
    >
      <div className="p-5 border-b border-indigo-500/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-400" />
            <h3 className="text-base font-semibold text-white">Recent Analyses</h3>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300"
          >
            <span>View All</span>
            <ChevronRight className="w-3 h-3" />
          </motion.button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-indigo-500/10">
              {['Startup Idea', 'Score', 'Market', 'Risk', 'Date', 'Status'].map((header, i) => (
                <th key={i} className="px-5 py-3 text-left text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentAnalyses.map((row, idx) => (
              <motion.tr
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ backgroundColor: 'rgba(99, 102, 241, 0.05)' }}
                className="border-b border-indigo-500/5 cursor-pointer transition-colors"
              >
                <td className="px-5 py-4 text-sm text-white font-medium">{row.idea}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 rounded-full bg-slate-700 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${row.score}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className={`h-full rounded-full ${
                          row.score >= 90 ? 'bg-emerald-400' : row.score >= 80 ? 'bg-cyan-400' : 'bg-amber-400'
                        }`}
                      />
                    </div>
                    <span className="text-xs text-slate-300 font-mono">{row.score}%</span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className="text-xs text-slate-400">{row.market}</span>
                </td>
                <td className="px-5 py-4">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    row.risk === 'Low' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                    row.risk === 'Moderate' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                    'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}>
                    {row.risk}
                  </span>
                </td>
                <td className="px-5 py-4 text-xs text-slate-500 font-mono">{row.date}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-xs text-emerald-400">{row.status}</span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default function Dashboard() {
  const { analysis, downloadPdf } = useApp();
  const [selectedIdea, setSelectedIdea] = useState('');
  const [showIdeaDropdown, setShowIdeaDropdown] = useState(false);

  if (!analysis) {
    return (
      <div className="relative min-h-[60vh]">
        <InteractiveMeshBackground />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center border border-indigo-500/20">
              <Brain className="w-10 h-10 text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              No Analysis Data
            </h2>
            <p className="text-slate-400 mb-6">Start by entering your startup idea on the home page.</p>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold"
              >
                Start Analysis
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="relative space-y-6">
      <InteractiveMeshBackground />

      <div className="relative z-10 space-y-6">
        {/* Welcome Header */}
        <motion.div variants={item}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl p-6 md:p-8 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 10, 40, 0.8), rgba(20, 15, 50, 0.6))',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
            }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'radial-gradient(ellipse at 20% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(6, 182, 212, 0.06) 0%, transparent 60%)',
            }} />
            
            <div className="relative flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <h2 className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    <span className="bg-gradient-to-r from-purple-300 via-cyan-300 to-pink-300 bg-clip-text text-transparent">
                      Your AI Command Center for Startup Success
                    </span>
                  </h2>
                </div>
                <p className="text-sm text-slate-400">
                  Analysis complete for: <span className="text-cyan-300 font-medium">"{analysis.idea?.substring(0, 60)}..."</span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-xs text-emerald-400 font-medium">● System Ready</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={downloadPdf}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all text-white"
                  style={{ background: gradientPurplePink }}
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Full Report</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Startup Idea Input */}
        <motion.div variants={item} className="relative">
          <div className="rounded-2xl p-5"
            style={{
              background: 'rgba(15, 15, 35, 0.7)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(99, 102, 241, 0.15)',
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <h3 className="text-sm font-semibold text-white">Startup Idea Selection</h3>
            </div>
            <div className="relative">
              <div
                onClick={() => setShowIdeaDropdown(!showIdeaDropdown)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all"
                style={{
                  background: 'rgba(99, 102, 241, 0.08)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                }}
              >
                <div className="flex items-center gap-3">
                  <Search className="w-4 h-4 text-indigo-400" />
                  <span className={`text-sm ${selectedIdea ? 'text-white' : 'text-slate-500'}`}>
                    {selectedIdea || 'Select a startup idea to analyze...'}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: showIdeaDropdown ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </motion.div>
              </div>

              <AnimatePresence>
                {showIdeaDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 rounded-xl overflow-hidden z-20"
                    style={{
                      background: 'rgba(10, 8, 30, 0.95)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                    }}
                  >
                    {startupIdeas.map((idea, idx) => (
                      <motion.div
                        key={idea.value}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => {
                          setSelectedIdea(idea.label);
                          setShowIdeaDropdown(false);
                        }}
                        className="px-4 py-3 hover:bg-indigo-500/10 cursor-pointer transition-all flex items-center gap-3 border-b border-indigo-500/5 last:border-b-0"
                      >
                        <div className={`w-2 h-2 rounded-full ${selectedIdea === idea.label ? 'bg-cyan-400' : 'bg-slate-600'}`} />
                        <span className="text-sm text-slate-300 hover:text-white">{idea.label}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard icon={Globe} label="Market Score" value="8.4/10" color="from-emerald-500 to-teal-500" sub="TAM: $12.4B" />
          <StatCard icon={Users} label="Competition" value="Moderate" color="from-amber-500 to-orange-500" sub="12 direct rivals" />
          <StatCard icon={Shield} label="Risk Level" value="Low" color="from-cyan-500 to-blue-500" sub="86% success prob." />
          <StatCard icon={Cpu} label="AI Confidence" value="94%" color="from-violet-500 to-purple-500" sub="Based on 8 agents" />
        </motion.div>

        {/* Analysis Modules Grid - 6 cards */}
        <motion.div variants={item}>
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-indigo-400" />
            <h3 className="text-lg font-semibold text-white">Analysis Modules</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {analysisModules.map((mod, i) => (
              <AnalysisCard key={i} mod={mod} />
            ))}
          </div>
        </motion.div>

        {/* Comprehensive Roadmap Card */}
        <RoadmapCard />

        {/* Recent Analyses Table */}
        <RecentAnalysesTable />

        {/* Agent Workflow Visualization */}
        <motion.div variants={item} className="rounded-2xl p-6"
          style={{
            background: 'rgba(15, 15, 35, 0.7)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(99, 102, 241, 0.15)',
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Brain className="w-5 h-5 text-violet-400" />
            <h3 className="text-lg font-semibold text-white">AI Agent Workflow</h3>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            {['Market', 'Competitor', 'SWOT', 'MVP', 'Revenue', 'Pitch'].map((agent, i) => (
              <div key={agent} className="flex items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-2"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.15))',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                    }}
                  >
                    <span className="text-sm font-bold gradient-text">{agent[0]}</span>
                  </motion.div>
                  <span className="text-[10px] text-slate-400">{agent}</span>
                </motion.div>
                {i < 5 && (
                  <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className="w-10 h-0.5 bg-gradient-to-r from-indigo-500/50 to-cyan-500/50 mx-2 hidden sm:block"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}