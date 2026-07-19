import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { DollarSign, TrendingUp, BarChart3, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function RevenueForecast() {
  const { analysis } = useApp();

  return (
    <div className="min-h-screen p-6">
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-6xl mx-auto">
        <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Revenue Forecast
            </h2>
          </div>
          <p className="text-gray-500">3-year financial projections and growth metrics</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Year 1 Revenue', value: '$1.2M', growth: '+150%', icon: TrendingUp, color: 'text-emerald-600' },
            { label: 'Year 2 Revenue', value: '$4.8M', growth: '+300%', icon: TrendingUp, color: 'text-blue-600' },
            { label: 'Year 3 Revenue', value: '$18.2M', growth: '+280%', icon: TrendingUp, color: 'text-purple-600' },
          ].map((yr, i) => (
            <div key={i} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-gray-500 uppercase tracking-wider">{yr.label}</span>
                <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-full">{yr.growth}</span>
              </div>
              <p className={`text-3xl font-bold text-gray-800 mb-1`} style={{ fontFamily: 'Orbitron, sans-serif' }}>{yr.value}</p>
              <div className="flex items-center gap-1">
                <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                <span className="text-xs text-emerald-600">Projected growth</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-800">Revenue Breakdown</h3>
            </div>
            <div className="space-y-3">
              {[
                { source: 'Subscription', pct: 45, amount: '$540K' },
                { source: 'Enterprise', pct: 30, amount: '$360K' },
                { source: 'API Access', pct: 15, amount: '$180K' },
                { source: 'Consulting', pct: 10, amount: '$120K' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">{s.source}</span>
                    <span className="text-xs text-gray-500">{s.amount} ({s.pct}%)</span>
                  </div>
                  <div className="h-2 rounded-full bg-green-100 overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${s.pct}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-800">Key Financial Metrics</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Gross Margin', value: '78%', color: 'text-emerald-600' },
                { label: 'CAC Payback', value: '6 mo', color: 'text-cyan-600' },
                { label: 'LTV/CAC', value: '5.2x', color: 'text-purple-600' },
                { label: 'Burn Rate', value: '$85K/mo', color: 'text-amber-600' },
              ].map((m, i) => (
                <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
                  <p className="text-xs text-gray-500 mb-1">{m.label}</p>
                  <p className={`text-xl font-bold ${m.color}`} style={{ fontFamily: 'Orbitron, sans-serif' }}>{m.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}