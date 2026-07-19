import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { TrendingUp, Globe, DollarSign, Users, BarChart3, ArrowUpRight, ArrowDownRight, Target } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function MarketAnalysis() {
  const { analysis } = useApp();

  const marketData = analysis?.market || analysis?.market_analysis || {
    tam: '$50B',
    sam: '$15B',
    som: '$2B',
    growth_rate: '12.5%',
    segments: ['Enterprise', 'SMB', 'Consumer'],
    trends: ['AI Integration', 'Cloud Migration', 'Automation'],
  };

  return (
    <div className="min-h-screen p-6">
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Market Analysis
            </h2>
          </div>
          <p className="text-gray-500">Total Addressable Market and opportunity sizing</p>
        </motion.div>

        {/* Market Size Cards */}
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'TAM', value: marketData.tam, desc: 'Total Addressable Market', icon: Globe, color: 'from-violet-500 to-purple-500' },
            { label: 'SAM', value: marketData.sam, desc: 'Serviceable Available Market', icon: Users, color: 'from-blue-500 to-cyan-500' },
            { label: 'SOM', value: marketData.som, desc: 'Serviceable Obtainable Market', icon: DollarSign, color: 'from-emerald-500 to-teal-500' },
          ].map((card, i) => (
            <div key={i} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-md`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{card.label}</p>
              <p className="text-3xl font-bold text-gray-800 mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>{card.value}</p>
              <p className="text-xs text-gray-400">{card.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Growth & Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-emerald-500" />
              <h3 className="text-lg font-semibold text-gray-800">Market Growth</h3>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl font-bold text-gray-800" style={{ fontFamily: 'Orbitron, sans-serif' }}>{marketData.growth_rate}</div>
              <div className="flex items-center gap-1 text-emerald-500">
                <ArrowUpRight className="w-5 h-5" />
                <span className="text-sm font-medium">YoY</span>
              </div>
            </div>
            <div className="space-y-3">
              {['Technology adoption accelerating', 'Increasing digital transformation', 'Growing remote work trend'].map((trend, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  {trend}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-purple-500" />
              <h3 className="text-lg font-semibold text-gray-800">Market Segments</h3>
            </div>
            <div className="space-y-3">
              {(marketData.segments || []).map((seg, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-purple-50 border border-purple-100">
                  <span className="text-sm text-gray-700 font-medium">{seg}</span>
                  <span className="text-xs text-purple-600 font-semibold">{['40%', '35%', '25%'][i] || '20%'}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key Trends */}
        <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Market Trends</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(marketData.trends || []).map((trend, i) => (
              <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-sm font-medium text-gray-800">Trend {i + 1}</span>
                </div>
                <p className="text-xs text-gray-600">{trend}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}