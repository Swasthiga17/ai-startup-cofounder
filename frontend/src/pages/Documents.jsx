import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { FileText, Upload, File, X, CheckCircle, Loader2, Trash2 } from 'lucide-react';
import { uploadDocument } from '../services/api';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Documents() {
  const { analysis } = useApp();
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleUpload = async (e) => {
    const selectedFiles = Array.from(e.target.files);
    setUploading(true);
    for (const file of selectedFiles) {
      try {
        const result = await uploadDocument(file);
        setFiles(prev => [...prev, { name: file.name, size: file.size, status: 'uploaded', date: new Date().toLocaleDateString() }]);
      } catch {
        setFiles(prev => [...prev, { name: file.name, size: file.size, status: 'failed', date: new Date().toLocaleDateString() }]);
      }
    }
    setUploading(false);
  };

  const removeFile = (idx) => setFiles(prev => prev.filter((_, i) => i !== idx));

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="min-h-screen p-6">
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 max-w-5xl mx-auto">
        <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-6 h-6 text-slate-600" />
            <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Document Management
            </h2>
          </div>
          <p className="text-gray-500">Upload and manage your startup documents</p>
        </motion.div>

        <motion.div variants={item}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); handleUpload({ target: { files: e.dataTransfer.files } }); }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 shadow-lg border-2 border-dashed border-slate-300 hover:border-purple-400 transition-colors cursor-pointer text-center"
          onClick={() => fileInputRef.current?.click()}
        >
          <input ref={fileInputRef} type="file" multiple className="hidden" onChange={handleUpload} accept=".pdf,.doc,.docx,.txt,.csv,.xlsx,.pptx" />
          <Upload className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-base font-semibold text-gray-700 mb-1">Upload Documents</h3>
          <p className="text-xs text-gray-500">Drag & drop files or click to browse (PDF, DOC, XLSX, PPTX)</p>
        </motion.div>

        {uploading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm text-purple-600">
            <Loader2 className="w-4 h-4 animate-spin" /> Uploading files...
          </motion.div>
        )}

        {files.length > 0 && (
          <motion.div variants={item} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-100">
              <h3 className="text-sm font-semibold text-gray-800">Uploaded Documents ({files.length})</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {files.map((file, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <File className="w-5 h-5 text-purple-500" />
                    <div>
                      <p className="text-sm text-gray-700 font-medium">{file.name}</p>
                      <p className="text-xs text-gray-400">{formatSize(file.size)} • {file.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {file.status === 'uploaded' ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <span className="text-xs text-red-500">Failed</span>
                    )}
                    <button onClick={() => removeFile(i)} className="p-1 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}