import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Building2, 
  ShieldCheck,
  Terminal,
  Award
} from 'lucide-react';
import { internshipData } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Internship() {
  return (
    <section id="internship" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[350px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 shadow-glow-cyan/20">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>05 // Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Corporate Training &amp; Engineering Practice
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Real industry immersion at semiconductor and digital systems design labs.
          </p>
        </div>

        {/* Experience Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <TiltCard
            intensity={8}
            className="cyber-glass rounded-3xl p-8 sm:p-12 border border-white/10 hover:border-cyan-400/50 shadow-cyber-card transition-all"
          >
            {/* Top Corporate Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0 shadow-glow-cyan/20">
                  <Building2 className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                      {internshipData.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      {internshipData.location}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                    {internshipData.company}
                  </h3>
                  <p className="text-base font-semibold font-mono text-cyan-400 mt-1">
                    {internshipData.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 whitespace-nowrap self-start sm:self-center">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{internshipData.duration}</span>
              </div>
            </div>

            {/* Description Summary */}
            <p className="text-base text-slate-300 leading-relaxed mb-8">
              {internshipData.description}
            </p>

            {/* Bullet Accomplishments */}
            <div className="space-y-3 mb-8">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
                Key Contributions &amp; Industry Learnings
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {internshipData.highlights.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Applied Tags */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                Competencies Exercised:
              </div>
              <div className="flex flex-wrap gap-2">
                {internshipData.skillsApplied.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard>
        </div>

      </div>
    </section>
  );
}
