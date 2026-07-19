import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { Map, CheckCircle, Circle, Clock, Flag, Rocket } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const demoRoadmap = {
  phases: [
    { phase: 'Phase 1', title: 'Discovery & Planning', duration: '4 weeks', status: 'completed', tasks: ['Market research', 'User interviews', 'Technical architecture'] },
    { phase: 'Phase 2', title: 'MVP Development', duration: '12 weeks', status: 'in-progress', tasks: ['Core features', 'UI/UX design', 'Backend setup'] },
    { phase: 'Phase 3', title: 'Beta Launch', duration: '8 weeks', status: 'upcoming', tasks: ['User testing', 'Bug fixes', 'Performance optimization'] },
    { phase: 'Phase 4', title: 'Scale & Growth', duration: 'Ongoing', status: 'upcoming', tasks: ['Marketing', 'Feature expansion', 'Team growth'] },
  ],
};

const statusConfig = {
  completed: { icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  'in-progress': { icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
  upcoming: { icon: Circle, color: 'text-gray-400', bg: 'bg-gray-50', border: 'border-gray-200' },
};

export default function Roadmap() {
  const { analysis } = useApp();
  const roadmap = analysis?.mvp || analysis?.roadmap || demoRoadmap;

  return (
    <div className="min-h-screen p-6">
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-6xl mx-auto">
        <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-100">
          <div className="flex items-center gap-2 mb-2">
            <Map className="w-6 h-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              MVP Roadmap
            </h2>
          </div>
          <p className="text-gray-500">Development timeline and milestone tracking</p>
        </motion.div>

        <motion.div variants={item} className="space-y-4">
          {(roadmap.phases || []).map((phase, i) => {
            const config = statusConfig[phase.status] || statusConfig.upcoming;
            const StatusIcon = config.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border ${config.border} ${config.bg}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl ${config.bg} border ${config.border} flex items-center justify-center`}>
                      <StatusIcon className={`w-6 h-6 ${config.color}`} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">{phase.phase}</p>
                      <h3 className="text-lg font-bold text-gray-800">{phase.title}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-500">{phase.duration}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {(phase.tasks || []).map((task, j) => (
                    <div key={j} className="flex items-center gap-2 p-3 rounded-lg bg-white border border-gray-100">
                      <div className={`w-2 h-2 rounded-full ${phase.status === 'completed' ? 'bg-emerald-500' : phase.status === 'in-progress' ? 'bg-amber-500 animate-pulse' : 'bg-gray-400'}`} />
                      <span className="text-xs text-gray-600">{task}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-100">
          <div className="flex items-center gap-2 mb-4">
            <Flag className="w-5 h-5 text-cyan-600" />
            <h3 className="text-lg font-semibold text-gray-800">Key Milestones</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { milestone: 'MVP Complete', date: 'Q2 2024', progress: 75 },
              { milestone: 'Beta Launch', date: 'Q3 2024', progress: 40 },
              { milestone: 'First 1000 Users', date: 'Q4 2024', progress: 20 },
              { milestone: 'Series A Ready', date: 'Q2 2025', progress: 5 },
            ].map((m, i) => (
              <div key={i} className="p-4 rounded-xl bg-purple-50 border border-purple-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">{m.date}</span>
                  <span className="text-xs text-purple-600 font-medium">{m.progress}%</span>
                </div>
                <p className="text-sm font-semibold text-gray-800 mb-2">{m.milestone}</p>
                <div className="h-1.5 rounded-full bg-purple-100 overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${m.progress}%` }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}