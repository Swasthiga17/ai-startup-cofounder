import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { Send, Bot, User, Loader2, MessageSquare } from 'lucide-react';

export default function Chat() {
  const { analysis, chat } = useApp();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => { scrollToBottom(); }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || sending) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setSending(true);
    try {
      const reply = await chat(userMsg, analysis?.idea);
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setSending(false);
    }
  };

  const suggestions = [
    'Explain my market analysis',
    'What are the key risks?',
    'Suggest revenue strategies',
    'How to improve my score?',
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-cyan-100 overflow-hidden">
          <div className="p-4 border-b border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-600" />
              <h2 className="text-lg font-bold text-gray-800">AI Mentor Chat</h2>
            </div>
            <p className="text-xs text-gray-500">Ask questions about your startup analysis</p>
          </div>

          <div className="h-[500px] overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <Bot className="w-12 h-12 text-cyan-400 mb-3" />
                <h3 className="text-sm font-semibold text-gray-700 mb-1">Start a conversation</h3>
                <p className="text-xs text-gray-500 mb-4">Ask me anything about your startup analysis</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {suggestions.map((s, i) => (
                    <button key={i} onClick={() => { setInput(s); }}
                      className="px-3 py-1.5 text-xs rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200 hover:bg-cyan-100 transition-colors"
                    >{s}</button>
                  ))}
                </div>
              </div>
            )}
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'user' ? 'bg-purple-100' : 'bg-cyan-100'
                  }`}>
                    {msg.role === 'user' ? <User className="w-4 h-4 text-purple-600" /> : <Bot className="w-4 h-4 text-cyan-600" />}
                  </div>
                  <div className={`max-w-[80%] p-3 rounded-xl text-sm ${
                    msg.role === 'user' ? 'bg-purple-500 text-white' : 'bg-white border border-gray-100 text-gray-700'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {sending && (
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Loader2 className="w-3 h-3 animate-spin" />
                AI is thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-4 border-t border-cyan-100 bg-white">
            <div className="flex gap-2">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about your startup..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-cyan-300 focus:bg-white transition-all"
              />
              <motion.button type="submit" disabled={!input.trim() || sending}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white disabled:opacity-40 shadow-md hover:shadow-lg transition-all"
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}