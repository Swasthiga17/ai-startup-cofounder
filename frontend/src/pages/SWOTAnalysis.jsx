import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { Target, Zap, Shield, Lightbulb, AlertTriangle } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const demoSWOT = {
  strengths: ['Strong market demand', 'Innovative tech stack', 'Experienced team', 'Scalable infrastructure'],
  weaknesses: ['Limited brand awareness', 'Early stage funding', 'Small initial team', 'Narrow product scope'],
  opportunities: ['Growing market segment', 'Strategic partnerships', 'New geographic markets', 'Adjacent verticals'],
  threats: ['Established competitors', 'Regulatory changes', 'Rapid tech evolution', 'Market saturation'],
};

const sectionStyles = {
  Strengths: { border: 'border-emerald-400', bg: 'bg-emerald-50', dot: 'bg-emerald-500', icon: 'text-emerald-500' },
  Weaknesses: { border: 'border-red-400', bg: 'bg-red-50', dot: 'bg-red-500', icon: 'text-red-500' },
  Opportunities: { border: 'border-blue-400', bg: 'bg-blue-50', dot: 'bg-blue-500', icon: 'text-blue-500' },
  Threats: { border: 'border-amber-400', bg: 'bg-amber-50', dot: 'bg-amber-500', icon: 'text-amber-500' },
};

const sectionIcons = {
  Strengths: Zap,
  Weaknesses: AlertTriangle,
  Opportunities: Lightbulb,
  Threats: Shield,
};

export default function SWOTAnalysis() {
  const { analysis } = useApp();
  const swot = analysis?.swot || analysis?.swot_analysis || demoSWOT;

  const sections = ['Strengths', 'Weaknesses', 'Opportunities', 'Threats'];

  return (
    <div className="min-h-screen p-6">
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-6xl mx-auto">
        <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-6 h-6 text-pink-600" />
            <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              SWOT Analysis
            </h2>
          </div>
          <p className="text-gray-500">Strategic assessment of strengths, weaknesses, opportunities, and threats</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sections.map((title) => {
            const items = swot[title.toLowerCase()] || [];
            const Icon = sectionIcons[title];
            const styles = sectionStyles[title];
            return (
              <motion.div key={title} variants={item}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-t-4 ${styles.border}`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon className={`w-5 h-5 ${styles.icon}`} />
                  <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm text-gray-600 p-2 rounded-lg ${styles.bg} border border-gray-100`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${styles.dot} flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}