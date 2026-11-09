import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Calendar, 
  Award, 
  ExternalLink, 
  Sparkles, 
  Mic, 
  Trophy, 
  CheckCircle2, 
  BookOpen,
  Cpu,
  Layers
} from 'lucide-react';
import { publicationData, coCurricularData } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Publication() {
  return (
    <section id="achievements" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[350px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 shadow-glow-cyan/20">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>07 // Publications &amp; Achievements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Research Publications &amp; Leadership
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Peer-reviewed research and public leadership activities documented on resume.
          </p>
        </div>

        {/* Featured IJERT Research Paper */}
        <div className="max-w-4xl mx-auto mb-16">
          <TiltCard
            intensity={8}
            className="cyber-glass rounded-3xl p-8 sm:p-10 border border-cyan-500/30 shadow-glow-cyan/20 relative"
          >
            {/* Top Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest">
                  {publicationData.type}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>Published: {publicationData.date}</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2 leading-snug">
              {publicationData.title}
            </h3>
            <p className="text-sm font-mono text-cyan-300 mb-6">
              Journal: <span className="font-semibold text-white">{publicationData.journal}</span>
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {publicationData.abstract}
            </p>

            {/* Research Key Findings */}
            <div className="space-y-2.5 mb-6">
              {publicationData.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Keywords */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
              {publicationData.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                >
                  {kw}
                </span>
              ))}
            </div>
          </TiltCard>
        </div>

        {/* Co-Curricular & Leadership Achievements */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-display text-white">
              Leadership &amp; Co-Curricular Activities
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1 uppercase">
              EXTRACURRICULAR HONORS EXTRACTED FROM RESUME
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coCurricularData.map((item) => {
              const Icon = item.icon === 'Mic' ? Mic : Trophy;
              return (
                <TiltCard
                  key={item.title}
                  intensity={8}
                  className="cyber-glass rounded-2xl p-6 border border-white/10 hover:border-cyan-400/40 shadow-cyber-card transition-all"
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-950/70 border border-violet-500/30 flex items-center justify-center text-violet-300 shrink-0 shadow-glow-violet/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-display text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs font-mono text-cyan-400">
                        {item.context}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </TiltCard>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
