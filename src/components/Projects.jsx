import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Database, 
  TrendingUp, 
  BarChart3, 
  FileCode2, 
  Sparkles, 
  X, 
  Check, 
  Copy, 
  ArrowRight,
  PieChart,
  Layers,
  ChevronRight
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';
import { soundManager } from '../utils/sound';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalTab, setModalTab] = useState('overview'); // 'overview', 'sql', 'dax'
  const [copiedCode, setCopiedCode] = useState(false);

  const openProjectModal = (project) => {
    soundManager.playClick();
    setSelectedProject(project);
    setModalTab('overview');
  };

  const closeProjectModal = () => {
    soundManager.playClick();
    setSelectedProject(null);
  };

  const handleCopy = (code) => {
    soundManager.playClick();
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-[700px] h-[400px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 shadow-glow-cyan/20">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>03 // Project Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Data Engineering &amp; Business Intelligence Works
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Real enterprise scenarios: from multi-thousand-row data hygiene and SQL transformations to high-fidelity Power BI dashboards.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projectsData.map((project, idx) => (
            <TiltCard
              key={project.id}
              intensity={10}
              className="cyber-glass rounded-3xl p-7 border border-white/10 hover:border-cyan-400/50 shadow-cyber-card transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Card Header & Badge */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <span className="font-mono text-xs text-cyan-400">
                    PROJECT_0{idx + 1} // {project.period}
                  </span>
                  {project.hasLiveDataset && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 animate-pulse">
                      LIVE DATASET CONNECTED
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4 line-clamp-1">
                  {project.subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                  {project.summary}
                </p>

                {/* Key Metric Chips */}
                <div className="grid grid-cols-2 gap-2.5 mb-6">
                  {project.kpis.slice(0, 2).map((kpi, kIdx) => (
                    <div key={kIdx} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                      <div className="text-[10px] font-mono text-slate-400">{kpi.label}</div>
                      <div className="text-xs font-bold font-mono text-cyan-300 mt-0.5">{kpi.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => openProjectModal(project)}
                  className="flex-1 py-2.5 px-4 rounded-xl text-xs font-mono font-semibold bg-white/5 hover:bg-cyan-950/60 text-slate-200 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 transition-all flex items-center justify-center gap-2"
                >
                  <FileCode2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Inspect Code &amp; KPIs</span>
                </button>

                {project.hasLiveDataset && (
                  <a
                    href="#live-dataset"
                    onClick={() => soundManager.playClick()}
                    className="p-2.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 transition-colors"
                    title="Jump to Live Dataset Terminal"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Global Dataset CTA Banner */}
        <div className="cyber-glass rounded-3xl p-8 border border-cyan-500/30 shadow-glow-cyan/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
              <Database className="w-4 h-4 text-cyan-400" />
              <span>Real Repository Data Exploration</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
              Explore Live Electronic Store Sales Transactions
            </h4>
            <p className="text-sm text-slate-400 max-w-2xl">
              Interact with genuine analysis generated directly from <span className="text-slate-200 font-mono">Electronics store dataset.xlsx</span>: filter by product, examine city market shares, and inspect daily cohort revenue.
            </p>
          </div>

          <MagneticButton
            href="#live-dataset"
            className="px-7 py-3.5 rounded-xl font-semibold font-mono text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow-cyan hover:shadow-cyan-400/40 transition-all whitespace-nowrap"
          >
            <span className="flex items-center gap-2">
              Launch Live Terminal
              <ArrowRight className="w-4 h-4" />
            </span>
          </MagneticButton>
        </div>

      </div>

      {/* Project Deep-Dive Modal Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProjectModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl cyber-glass rounded-3xl border border-cyan-500/40 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <div className="text-xs font-mono text-cyan-400 mb-1">
                    PROJECT DEEP DIVE // {selectedProject.period}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-slate-400 mt-1">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={closeProjectModal}
                  className="p-2 rounded-full cyber-glass border border-white/10 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Tabs */}
              <div className="flex border-b border-white/10 mb-6 font-mono text-xs gap-2">
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setModalTab('overview');
                  }}
                  className={`pb-3 px-3 border-b-2 font-medium transition-colors ${
                    modalTab === 'overview'
                      ? 'border-cyan-400 text-cyan-300'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  Overview &amp; KPIs
                </button>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setModalTab('sql');
                  }}
                  className={`pb-3 px-3 border-b-2 font-medium transition-colors ${
                    modalTab === 'sql'
                      ? 'border-cyan-400 text-cyan-300'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  SQL Implementation
                </button>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setModalTab('dax');
                  }}
                  className={`pb-3 px-3 border-b-2 font-medium transition-colors ${
                    modalTab === 'dax'
                      ? 'border-cyan-400 text-cyan-300'
                      : 'border-transparent text-slate-400 hover:text-white'
                  }`}
                >
                  Power BI DAX Logic
                </button>
              </div>

              {/* Tab 1: Overview */}
              {modalTab === 'overview' && (
                <div className="space-y-6 text-left">
                  <div>
                    <h4 className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-2">
                      Key Highlights &amp; Accomplishments
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-mono text-slate-400 uppercase tracking-widest mb-3">
                      Metrics &amp; Architecture
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {selectedProject.kpis.map((kpi, kIdx) => (
                        <div key={kIdx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                          <div className="text-[10px] font-mono text-slate-400">{kpi.label}</div>
                          <div className="text-sm font-bold font-mono text-cyan-300 mt-1">{kpi.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs font-mono text-slate-400">Dashboard Type:</span>
                    <p className="text-sm font-bold font-mono text-white mt-1">
                      {selectedProject.dashboardType}
                    </p>
                  </div>
                </div>
              )}

              {/* Tab 2: SQL */}
              {modalTab === 'sql' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Aggregations, Joins &amp; Window Functions</span>
                    <button
                      onClick={() => handleCopy(selectedProject.sampleSql)}
                      className="flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCode ? 'Copied' : 'Copy SQL'}</span>
                    </button>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#02050e] border border-cyan-500/20 font-mono text-xs text-slate-300 overflow-x-auto">
                    <pre><code>{selectedProject.sampleSql}</code></pre>
                  </div>
                </div>
              )}

              {/* Tab 3: DAX */}
              {modalTab === 'dax' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Power BI Calculated Measures &amp; Time Intelligence</span>
                    <button
                      onClick={() => handleCopy(selectedProject.sampleDax)}
                      className="flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-purple-300 border border-white/10"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedCode ? 'Copied' : 'Copy DAX'}</span>
                    </button>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#02050e] border border-purple-500/20 font-mono text-xs text-slate-300 overflow-x-auto">
                    <pre><code>{selectedProject.sampleDax}</code></pre>
                  </div>
                </div>
              )}

              {/* Modal Footer */}
              <div className="pt-6 border-t border-white/10 mt-6 flex justify-end">
                <button
                  onClick={closeProjectModal}
                  className="px-6 py-2.5 rounded-xl font-mono text-xs bg-white/10 text-slate-200 hover:text-white"
                >
                  Close Drawer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
