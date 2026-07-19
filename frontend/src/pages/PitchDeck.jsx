import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { Presentation, Download, Eye, Share2, FileText, Image, Video } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const slides = [
  { title: 'Problem', desc: 'The problem your startup solves', icon: '🎯' },
  { title: 'Solution', desc: 'Your unique value proposition', icon: '💡' },
  { title: 'Market', desc: 'TAM/SAM/SOM analysis', icon: '📊' },
  { title: 'Product', desc: 'Key features and demo', icon: '🚀' },
  { title: 'Business Model', desc: 'Revenue streams and pricing', icon: '💰' },
  { title: 'Competition', desc: 'Competitive landscape', icon: '⚔️' },
  { title: 'Team', desc: 'Core team members', icon: '👥' },
  { title: 'Financials', desc: 'Revenue projections', icon: '📈' },
  { title: 'Ask', desc: 'Funding requirements', icon: '🤝' },
  { title: 'Contact', desc: 'Get in touch', icon: '📧' },
];

export default function PitchDeck() {
  const { analysis, downloadPptx } = useApp();

  return (
    <div className="min-h-screen p-6">
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-6xl mx-auto">
        <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-fuchsia-100">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Presentation className="w-6 h-6 text-fuchsia-600" />
                <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Pitch Deck
                </h2>
              </div>
              <p className="text-gray-500">Investor-ready presentation slides</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadPptx}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white text-sm shadow-lg hover:shadow-xl transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PPTX</span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {slides.map((slide, i) => (
            <motion.div key={i} whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-fuchsia-100 cursor-pointer group"
            >
              <div className="aspect-video bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-lg border border-fuchsia-100 flex items-center justify-center mb-3 relative overflow-hidden">
                <span className="text-4xl">{slide.icon}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                  <div className="flex gap-2">
                    <button className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 transition-colors">
                      <Eye className="w-4 h-4 text-white" />
                    </button>
                    <button className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 transition-colors">
                      <Share2 className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Slide {i + 1}</p>
                  <h4 className="text-sm font-semibold text-gray-800">{slide.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Total Slides', value: '10', icon: FileText, color: 'text-purple-600' },
            { label: 'Est. Duration', value: '15 min', icon: Video, color: 'text-cyan-600' },
            { label: 'Format', value: 'PPTX', icon: Image, color: 'text-emerald-600' },
          ].map((stat, i) => (
            <div key={i} className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-fuchsia-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-fuchsia-50 flex items-center justify-center">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                  <p className="text-lg font-bold text-gray-800">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}