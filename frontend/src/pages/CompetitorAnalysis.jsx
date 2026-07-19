import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { Users, Trophy, AlertTriangle, TrendingUp, Star, Shield } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const demoCompetitors = [
  { name: 'Competitor A', market_share: '25%', strength: 'High brand equity', weakness: 'Legacy tech stack', threat: 'High' },
  { name: 'Competitor B', market_share: '18%', strength: 'Brand recognition', weakness: 'High pricing', threat: 'Medium' },
  { name: 'Competitor C', market_share: '12%', strength: 'Innovation speed', weakness: 'Small scale', threat: 'Low' },
];

export default function CompetitorAnalysis() {
  const { analysis } = useApp();

  const rawCompetitors = analysis?.competitors?.competitors || analysis?.competitors || [];
  const competitors = Array.isArray(rawCompetitors) && rawCompetitors.length > 0
    ? rawCompetitors.map(c => ({
        name: c.name || 'Unknown',
        market_share: c.market_share || 'N/A',
        strength: c.strengths?.[0] || c.strength || 'N/A',
        weakness: c.weaknesses?.[0] || c.weakness || 'N/A',
        threat: c.threat || c.competitive_advantage ? 'Medium' : 'Medium',
      }))
    : demoCompetitors;

  return (
    <div className="min-h-screen p-6">
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100">
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Competitive Landscape
            </h2>
          </div>
          <p className="text-gray-500">Analysis of key competitors and market positioning</p>
        </motion.div>

        {/* Competitors Grid */}
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {competitors.map((comp, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-md">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className={`px-2 py-1 rounded-lg text-xs font-medium ${
                  comp.threat === 'High' ? 'bg-red-100 text-red-700 border border-red-200' :
                  comp.threat === 'Medium' ? 'bg-amber-100 text-amber-700 border border-amber-200' :
                  'bg-emerald-100 text-emerald-700 border border-emerald-200'
                }`}>
                  {comp.threat} Threat
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-1">{comp.name}</h3>
              <p className="text-xs text-gray-500 mb-4">Market Share: <span className="text-purple-600 font-medium">{comp.market_share}</span></p>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="text-xs text-gray-400">Strength:</span>
                  <span className="text-xs text-gray-700">{comp.strength}</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-xs text-gray-400">Weakness:</span>
                  <span className="text-xs text-gray-700">{comp.weakness}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Competitive Advantages */}
        <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-amber-500" />
            <h3 className="text-lg font-semibold text-gray-800">Your Competitive Advantages</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Innovation Edge', desc: 'Cutting-edge AI technology stack', icon: TrendingUp },
              { title: 'Cost Efficiency', desc: 'Optimized operational model', icon: Shield },
              { title: 'User Experience', desc: 'Superior product design', icon: Star },
            ].map((adv, i) => (
              <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-cyan-50 border border-emerald-100">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-3">
                  <adv.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <h4 className="text-sm font-semibold text-gray-800 mb-1">{adv.title}</h4>
                <p className="text-xs text-gray-500">{adv.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Market Position */}
        <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Market Position Matrix</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Market Leaders', count: '2', color: 'text-red-600' },
              { label: 'Challengers', count: '3', color: 'text-amber-600' },
              { label: 'Followers', count: '5', color: 'text-blue-600' },
              { label: 'Niche Players', count: '8', color: 'text-emerald-600' },
            ].map((pos, i) => (
              <div key={i} className="p-4 rounded-xl bg-purple-50 border border-purple-100">
                <p className="text-xs text-gray-500 mb-1">{pos.label}</p>
                <p className={`text-2xl font-bold ${pos.color}`} style={{ fontFamily: 'Orbitron, sans-serif' }}>{pos.count}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}