import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { Gauge, TrendingUp, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

function GaugeMeter({ value = 7.5, max = 10 }) {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / max) * circumference;
  const percentage = (value / max) * 100;

  return (
    <div className="relative w-64 h-64 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r={radius} fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="12" />
        <circle cx="100" cy="100" r={radius} fill="none" stroke="url(#gaugeGradient)" strokeWidth="12" strokeLinecap="round"
          strokeDasharray={circumference} strokeDashoffset={offset} className="gauge-ring"
          style={{ filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))' }} />
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" /><stop offset="50%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-gray-800" style={{ fontFamily: 'Orbitron, sans-serif' }}>{value.toFixed(1)}</span>
        <span className="text-sm text-gray-400">out of {max}</span>
        <span className="text-xs text-purple-600 mt-1 font-medium">{percentage.toFixed(0)}% Score</span>
      </div>
    </div>
  );
}

export default function Impact() {
  const { analysis } = useApp();
  const score = analysis?.impact_score || analysis?.score || 7.5;

  if (!analysis) {
    return (
      <div className="min-h-screen p-6 flex items-center justify-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center">
          <Gauge className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Score & Impact Analysis</h3>
          <p className="text-gray-500">Submit your startup idea to see the impact analysis.</p>
        </div>
      </div>
    );
  }

  const factors = [
    { label: 'Market Potential', value: 8.5, icon: TrendingUp, color: 'text-emerald-500' },
    { label: 'Innovation Level', value: 7.8, icon: Gauge, color: 'text-purple-500' },
    { label: 'Feasibility', value: 7.2, icon: CheckCircle, color: 'text-cyan-500' },
    { label: 'Risk Factor', value: 3.5, icon: AlertTriangle, color: 'text-amber-500', invert: true },
  ];

  return (
    <div className="min-h-screen p-6">
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-5xl mx-auto">
        <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Gauge className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Orbitron, sans-serif' }}>Startup Score</h2>
              </div>
              <p className="text-gray-500 mb-6">Comprehensive viability assessment based on market analysis, competitive landscape, and business model strength.</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Viability', val: 'High', color: 'text-emerald-600' },
                  { label: 'Growth', val: 'Strong', color: 'text-cyan-600' },
                  { label: 'Innovation', val: '8.5/10', color: 'text-purple-600' },
                  { label: 'Market Fit', val: 'Good', color: 'text-blue-600' },
                ].map((s, i) => (
                  <div key={i} className="px-3 py-2 rounded-lg bg-purple-50 border border-purple-100">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">{s.label}</p>
                    <p className={`text-sm font-bold ${s.color}`}>{s.val}</p>
                  </div>
                ))}
              </div>
            </div>
            <GaugeMeter value={score} />
          </div>
        </motion.div>

        <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Score Breakdown</h3>
          <div className="space-y-4">
            {factors.map((factor, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <factor.icon className={`w-4 h-4 ${factor.color}`} />
                    <span className="text-sm text-gray-600">{factor.label}</span>
                  </div>
                  <span className={`text-sm font-bold ${factor.color}`}>
                    {factor.invert ? factor.value.toFixed(1) + '/10 (Lower is better)' : factor.value.toFixed(1) + '/10'}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-purple-100 overflow-hidden">
                  <motion.div initial={{ width: 0 }}
                    animate={{ width: factor.invert ? `${(1 - factor.value / 10) * 100}%` : `${factor.value * 10}%` }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <h3 className="text-lg font-semibold text-gray-800">Key Strengths</h3>
            </div>
            <ul className="space-y-3">
              {['Strong market demand identified', 'Low initial capital requirement', 'Scalable technology stack', 'Clear revenue model'].map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{s}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-semibold text-gray-800">Risk Factors</h3>
            </div>
            <ul className="space-y-3">
              {['Market saturation in target segment', 'Regulatory compliance requirements', 'Talent acquisition challenges', 'Customer acquisition cost'].map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />{s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}