import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ArrowRight, Loader2, Brain, Cpu, Zap, Building2, Lightbulb, Settings, Sparkles } from 'lucide-react';

const thinkingSteps = [
  'Initializing neural networks...',
  'Scanning market databases...',
  'Analyzing competitive landscape...',
  'Processing business model...',
  'Generating strategic insights...',
  'Compiling comprehensive report...',
];

const orbitCards = [
  {
    icon: Building2,
    title: 'CONCEPT: ECO-LOGISTICS HUB',
    desc: 'Sustainable last-mile delivery platform integrating electric fleets and smart routing for urban logistics optimization.',
    color: '#60a5fa',
  },
  {
    icon: Lightbulb,
    title: 'IDEA: ON-DEMAND PACKAGING',
    desc: 'AI-powered packaging system that creates custom-fit boxes in real-time, reducing waste and shipping costs by 40%.',
    color: '#38bdf8',
  },
  {
    icon: Settings,
    title: 'FUNCTION: ROUTE OPTIMIZATION',
    desc: 'Dynamic route planning using real-time traffic data and machine learning to minimize delivery times and fuel consumption.',
    color: '#22d3ee',
  },
];

function CentralLoadingNode() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 24 }, (_, i) => ({
      angle: (i / 24) * Math.PI * 2,
      radius: 18 + Math.random() * 12,
      size: 2 + Math.random() * 3,
      speed: 0.6 + Math.random() * 0.8,
      hue: 260 + Math.random() * 40,
      delay: Math.random() * 2,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Outer glow ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, transparent, rgba(139,92,246,0.1), rgba(59,130,246,0.2), rgba(139,92,246,0.1), transparent)',
          maskImage: 'radial-gradient(circle at 50% 50%, transparent 40%, black 41%, black 59%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, transparent 40%, black 41%, black 59%, transparent 60%)',
        }}
      />

      {/* Inner ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-2 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, transparent, rgba(6,182,212,0.15), rgba(139,92,246,0.1), transparent)',
          maskImage: 'radial-gradient(circle at 50% 50%, transparent 45%, black 46%, black 54%, transparent 55%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, transparent 45%, black 46%, black 54%, transparent 55%)',
        }}
      />

      {/* Central core */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500/30 via-purple-500/30 to-cyan-500/30 flex items-center justify-center"
        style={{ boxShadow: '0 0 40px rgba(139,92,246,0.15), 0 0 80px rgba(6,182,212,0.08)' }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          <Sparkles className="w-6 h-6 text-purple-300" />
        </motion.div>
      </motion.div>

      {/* Orbiting particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, hsla(${p.hue}, 80%, 70%, 0.9), hsla(${p.hue}, 80%, 70%, 0.1))`,
            boxShadow: `0 0 ${p.size * 3}px hsla(${p.hue}, 80%, 70%, 0.4)`,
            left: '50%',
            top: '50%',
          }}
          animate={{
            x: [0, Math.cos(p.angle) * p.radius, 0],
            y: [0, Math.sin(p.angle) * p.radius, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
          }}
          transition={{
            duration: p.speed * 2,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

function OrbitingCard({ icon: Icon, title, desc, color, orbitIndex }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 + orbitIndex * 0.2, duration: 0.6, ease: 'easeOut' }}
      className="absolute"
      style={{
        animation: `orbit-${orbitIndex} 6s ease-in-out infinite`,
        transformOrigin: 'center',
      }}
    >
      <style>{`
        @keyframes orbit-${orbitIndex} {
          0%, 100% {
            transform: translateX(0) translateY(0);
            opacity: 0.7;
          }
          25% {
            transform: translateX(${Math.cos((orbitIndex * 120 - 30) * Math.PI / 180) * 220 - Math.cos((orbitIndex * 120) * Math.PI / 180) * 220}px) 
                       translateY(${Math.sin((orbitIndex * 120 - 30) * Math.PI / 180) * 220 - Math.sin((orbitIndex * 120) * Math.PI / 180) * 220}px);
            opacity: 0.9;
          }
          50% {
            transform: translateX(${Math.cos((orbitIndex * 120 + 30) * Math.PI / 180) * 220 - Math.cos((orbitIndex * 120) * Math.PI / 180) * 220}px)
                       translateY(${Math.sin((orbitIndex * 120 + 30) * Math.PI / 180) * 220 - Math.sin((orbitIndex * 120) * Math.PI / 180) * 220}px);
            opacity: 0.7;
          }
          75% {
            transform: translateX(${Math.cos((orbitIndex * 120 - 15) * Math.PI / 180) * 220 - Math.cos((orbitIndex * 120) * Math.PI / 180) * 220}px)
                       translateY(${Math.sin((orbitIndex * 120 - 15) * Math.PI / 180) * 220 - Math.sin((orbitIndex * 120) * Math.PI / 180) * 220}px);
            opacity: 0.85;
          }
        }
      `}</style>
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 3 + orbitIndex * 0.5, repeat: Infinity, ease: 'easeInOut', delay: orbitIndex * 0.3 }}
        className="w-64 backdrop-blur-md rounded-2xl border p-4"
        style={{
          background: 'rgba(15, 23, 42, 0.6)',
          borderColor: `${color}33`,
          boxShadow: `0 0 30px ${color}08, inset 0 0 30px ${color}05`,
        }}
      >
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `linear-gradient(135deg, ${color}20, ${color}05)`,
              border: `1px solid ${color}30`,
            }}
          >
            <Icon className="w-5 h-5" style={{ color }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xs font-bold tracking-wider mb-1" style={{ color, fontFamily: 'Orbitron, sans-serif' }}>
              {title}
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-400/80">
              {desc}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ActiveNetworkBackground() {
  const [lines, setLines] = useState([]);
  const [nodes, setNodes] = useState([]);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

  useEffect(() => {
    setDimensions({ w: window.innerWidth, h: window.innerHeight });

    const pts = Array.from({ length: 30 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setNodes(pts);

    const conns = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 250) {
          conns.push({ x1: pts[i].x, y1: pts[i].y, x2: pts[j].x, y2: pts[j].y, opacity: 0.1 + Math.random() * 0.2 });
        }
      }
    }
    setLines(conns);
  }, []);

  return (
    <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.5 }}>
      <defs>
        <filter id="glow-network">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {lines.map((l, i) => (
        <motion.line
          key={i}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke="url(#meshGradient)"
          strokeWidth="0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: [l.opacity, l.opacity * 1.8, l.opacity] }}
          transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={1.5 + Math.random() * 2}
          fill="url(#meshGradient)"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.6, 0.2], r: [1.5 + (i % 3) * 0.5, 2.5 + (i % 3) * 0.5, 1.5 + (i % 3) * 0.5] }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
          filter="url(#glow-network)"
        />
      ))}
    </svg>
  );
}

export default function InputPage() {
  const [idea, setIdea] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showLoadingView, setShowLoadingView] = useState(false);
  const navigate = useNavigate();
  const { analyze, loading, error } = useApp();
  const [currentStep, setCurrentStep] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idea.trim()) return;
    try {
      setShowLoadingView(true);
      setCurrentStep(0);
      const interval = setInterval(() => {
        setCurrentStep(prev => (prev < thinkingSteps.length - 1 ? prev + 1 : prev));
      }, 800);
      await analyze(idea);
      clearInterval(interval);
      navigate('/dashboard');
    } catch {
      clearInterval(interval);
      setShowLoadingView(false);
    }
  };

  if (showLoadingView) {
    const cardPositions = [
      { angle: 0, top: '50%', left: '50%' },
      { angle: 120, top: '50%', left: '50%' },
      { angle: 240, top: '50%', left: '50%' },
    ];

    return (
      <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
        {/* Active Network Mesh Background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          <ActiveNetworkBackground />
          {/* Ambient glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-600/5 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px]" />
        </div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-8 left-8 z-10"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-600/20">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Startup Forge
              </h1>
              <p className="text-[10px] text-slate-500 tracking-wider uppercase">AI Startup Helper</p>
            </div>
          </div>
        </motion.div>

        {/* Loading Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
          {/* Central Loading Node */}
          <div className="relative flex items-center justify-center mb-8" style={{ minHeight: '320px', minWidth: '320px' }}>
            {/* Orbiting Cards */}
            <div
              className="absolute"
              style={{
                animation: 'none',
                top: 'calc(50% - 140px)',
                left: 'calc(50% - 180px)',
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: -100, y: -80 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
              >
                <motion.div
                  animate={{
                    y: [-6, 6, -6],
                    x: [-8, 8, -8],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
                  className="w-64 backdrop-blur-md rounded-2xl border p-4"
                  style={{
                    background: 'rgba(15, 23, 42, 0.6)',
                    borderColor: '#60a5fa33',
                    boxShadow: '0 0 30px #60a5fa08, inset 0 0 30px #60a5fa05',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #60a5fa20, #60a5fa05)', border: '1px solid #60a5fa30' }}>
                      <Building2 className="w-5 h-5" style={{ color: '#60a5fa' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-bold tracking-wider mb-1" style={{ color: '#60a5fa', fontFamily: 'Orbitron, sans-serif' }}>
                        CONCEPT: ECO-LOGISTICS HUB
                      </h3>
                      <p className="text-[11px] leading-relaxed text-slate-400/80">
                        Sustainable last-mile delivery platform integrating electric fleets and smart routing for urban logistics optimization.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div
              className="absolute"
              style={{
                top: 'calc(50% + 40px)',
                left: 'calc(50% + 100px)',
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 100, y: 80 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{ duration: 1, delay: 1.0, ease: 'easeOut' }}
              >
                <motion.div
                  animate={{
                    y: [8, -8, 8],
                    x: [10, -10, 10],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="w-64 backdrop-blur-md rounded-2xl border p-4"
                  style={{
                    background: 'rgba(15, 23, 42, 0.6)',
                    borderColor: '#38bdf833',
                    boxShadow: '0 0 30px #38bdf808, inset 0 0 30px #38bdf805',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #38bdf820, #38bdf805)', border: '1px solid #38bdf830' }}>
                      <Lightbulb className="w-5 h-5" style={{ color: '#38bdf8' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-bold tracking-wider mb-1" style={{ color: '#38bdf8', fontFamily: 'Orbitron, sans-serif' }}>
                        IDEA: ON-DEMAND PACKAGING
                      </h3>
                      <p className="text-[11px] leading-relaxed text-slate-400/80">
                        AI-powered packaging system that creates custom-fit boxes in real-time, reducing waste and shipping costs by 40%.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            <div
              className="absolute"
              style={{
                top: 'calc(50% + 80px)',
                left: 'calc(50% - 220px)',
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: -80, y: 100 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
              >
                <motion.div
                  animate={{
                    y: [6, -6, 6],
                    x: [-12, 12, -12],
                  }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.0 }}
                  className="w-64 backdrop-blur-md rounded-2xl border p-4"
                  style={{
                    background: 'rgba(15, 23, 42, 0.6)',
                    borderColor: '#22d3ee33',
                    boxShadow: '0 0 30px #22d3ee08, inset 0 0 30px #22d3ee05',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #22d3ee20, #22d3ee05)', border: '1px solid #22d3ee30' }}>
                      <Settings className="w-5 h-5" style={{ color: '#22d3ee' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-bold tracking-wider mb-1" style={{ color: '#22d3ee', fontFamily: 'Orbitron, sans-serif' }}>
                        FUNCTION: ROUTE OPTIMIZATION
                      </h3>
                      <p className="text-[11px] leading-relaxed text-slate-400/80">
                        Dynamic route planning using real-time traffic data and machine learning to minimize delivery times and fuel consumption.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Central Loading Node */}
            <div className="relative z-10">
              <CentralLoadingNode />
            </div>
          </div>

          {/* Thinking Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="max-w-md w-full"
          >
            <div className="p-4 rounded-xl bg-white/5 border border-purple-500/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-3">
                <Loader2 className="w-4 h-4 text-purple-400 animate-spin" />
                <span className="text-sm text-purple-300 font-medium" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  AI Processing
                </span>
              </div>
              <div className="space-y-2">
                {thinkingSteps.slice(0, currentStep + 1).map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-xs"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span className="text-slate-400">{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated 3D Network Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
          {[...Array(20)].map((_, i) => (
            <motion.line
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#meshGradient)"
              strokeWidth="1"
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <motion.circle
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
              cx={`${Math.random() * 100}%`}
              cy={`${Math.random() * 100}%`}
              r="4"
              fill="url(#meshGradient)"
            />
          ))}
        </svg>
      </div>

      {/* Logo - Top Left */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 left-8 z-10"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Startup Forge
            </h1>
            <p className="text-[10px] text-gray-600 tracking-wider uppercase">AI Startup Helper</p>
          </div>
        </div>
      </motion.div>

      {/* Main Content - Centered Input */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-2xl"
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-3">
              What company do you want to create?
            </h2>
            <p className="text-gray-600">
              Describe your startup idea and let AI guide you through the journey
            </p>
          </motion.div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="relative">
            <div className={`absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-2xl blur-xl transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'opacity-0'}`} />

            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-2 border border-gray-200">
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                rows={6}
                placeholder="e.g. AI-powered personal finance assistant for freelancers..."
                className="w-full px-6 py-4 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none resize-none text-lg"
              />

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="px-6 pb-3 text-sm text-red-600"
                >
                  {error}
                </motion.p>
              )}

              <motion.button
                type="submit"
                disabled={!idea.trim() || loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="absolute bottom-4 right-4 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <span>Submit</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </div>
          </form>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-6 mt-12"
          >
            {[
              { icon: Brain, label: 'Deep Analysis', desc: 'AI-powered insights' },
              { icon: Cpu, label: 'Smart Agents', desc: 'Multi-agent system' },
              { icon: Zap, label: 'Instant Results', desc: 'Real-time processing' },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-sm font-semibold text-gray-800 mb-1">{feature.label}</h4>
                <p className="text-xs text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}