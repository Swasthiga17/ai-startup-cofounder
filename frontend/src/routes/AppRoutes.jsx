import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import InputPage from '../pages/InputPage';
import Impact from '../pages/Impact';
import MarketAnalysis from '../pages/MarketAnalysis';
import CompetitorAnalysis from '../pages/CompetitorAnalysis';
import SWOTAnalysis from '../pages/SWOTAnalysis';
import BusinessModel from '../pages/BusinessModel';
import Roadmap from '../pages/Roadmap';
import RevenueForecast from '../pages/RevenueForecast';
import PitchDeck from '../pages/PitchDeck';
import Chat from '../pages/Chat';
import Documents from '../pages/Documents';
import Login from '../pages/Login';

const titles = {
  '/dashboard': 'Dashboard',
  '/impact': 'Score & Impact',
  '/market': 'Market Analysis',
  '/competitors': 'Competitor Analysis',
  '/swot': 'SWOT Analysis',
  '/business-model': 'Business Model Canvas',
  '/roadmap': 'MVP Roadmap',
  '/revenue': 'Revenue Forecast',
  '/pitch-deck': 'Pitch Deck',
  '/chat': 'AI Mentor Chat',
  '/documents': 'Document Upload',
};

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/input" element={<InputPage />} />
      <Route path="/dashboard" element={<Layout title={titles['/dashboard']}><Dashboard /></Layout>} />
      <Route path="/impact" element={<Layout title={titles['/impact']}><Impact /></Layout>} />
      <Route path="/market" element={<Layout title={titles['/market']}><MarketAnalysis /></Layout>} />
      <Route path="/competitors" element={<Layout title={titles['/competitors']}><CompetitorAnalysis /></Layout>} />
      <Route path="/swot" element={<Layout title={titles['/swot']}><SWOTAnalysis /></Layout>} />
      <Route path="/business-model" element={<Layout title={titles['/business-model']}><BusinessModel /></Layout>} />
      <Route path="/roadmap" element={<Layout title={titles['/roadmap']}><Roadmap /></Layout>} />
      <Route path="/revenue" element={<Layout title={titles['/revenue']}><RevenueForecast /></Layout>} />
      <Route path="/pitch-deck" element={<Layout title={titles['/pitch-deck']}><PitchDeck /></Layout>} />
      <Route path="/chat" element={<Layout title={titles['/chat']}><Chat /></Layout>} />
      <Route path="/documents" element={<Layout title={titles['/documents']}><Documents /></Layout>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
