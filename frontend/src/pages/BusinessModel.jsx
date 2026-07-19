import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { Briefcase, DollarSign, Users, Target, Zap, Globe, BarChart3 } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const demoData = {
  revenue_streams: ['Subscription', 'Enterprise', 'API', 'Consulting'],
  cost_structure: ['Development', 'Marketing', 'Operations', 'Support'],
  key_metrics: ['MRR', 'CAC', 'LTV', 'Churn Rate'],
};

export default function BusinessModel() {
  const { analysis } = useApp();
  const businessModel = analysis?.business_model || demoData;

  return (
    <div className="min-h-screen p-6">
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-6xl mx-auto">
        <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-indigo-100">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-6 h-6 text-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Business Model Canvas
            </h2>
          </div>
          <p className="text-gray-500">Revenue streams, cost structure, and key metrics</p>
        </motion.div>

        <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-indigo-100">
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-emerald-500" />
            <h3 className="text-lg font-semibold text-gray-800">Revenue Streams</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(businessModel.revenue_streams || []).map((stream, i) => (
              <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">{stream}</span>
                  <span className="text-xs text-emerald-600 font-medium">{['Primary', 'Secondary', 'Tertiary', 'Quaternary'][i]}</span>
                </div>
                <div className="h-2 rounded-full bg-emerald-100 overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${[40, 30, 20, 10][i]}%` }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-indigo-100">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-red-500" />
            <h3 className="text-lg font-semibold text-gray-800">Cost Structure</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {(businessModel.cost_structure || []).map((cost, i) => (
              <div key={i} className="p-4 rounded-xl bg-red-50 border border-red-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-red-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-800">{cost}</span>
                </div>
                <p className="text-xs text-gray-500">{['35%', '25%', '25%', '15%'][i]} of total costs</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-indigo-100">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-cyan-500" />
            <h3 className="text-lg font-semibold text-gray-800">Key Performance Metrics</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {(businessModel.key_metrics || []).map((metric, i) => (
              <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                <p className="text-xs text-gray-500 mb-1">{metric}</p>
                <p className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {['$45K', '2.5%', '$18K', '3.2%'][i]}
                </p>
                <p className="text-xs text-emerald-600 mt-1">↑ {['12%', '8%', '15%', '5%'][i]} vs last month</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-indigo-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Model Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Model Type', value: 'SaaS Subscription', icon: Briefcase },
              { label: 'Pricing Strategy', value: 'Tiered Pricing', icon: DollarSign },
              { label: 'Target Market', value: 'Enterprise & SMB', icon: Users },
            ].map((info, i) => (
              <div key={i} className="p-4 rounded-xl bg-purple-50 border border-purple-100">
                <div className="flex items-center gap-2 mb-2">
                  <info.icon className="w-4 h-4 text-purple-600" />
                  <span className="text-xs text-gray-500">{info.label}</span>
                </div>
                <p className="text-sm font-semibold text-gray-800">{info.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}