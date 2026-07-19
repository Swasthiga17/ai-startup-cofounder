import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import ParticleBackground from './ParticleBackground';

export default function Layout({ children, title }) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] relative">
      <ParticleBackground />
      <div className="scanline" />
      
      <div className="relative z-10 flex">
        <Sidebar />
        <div className="flex-1 ml-72 min-h-screen">
          <TopBar title={title} />
          <main className="p-6 grid-bg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {children}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}