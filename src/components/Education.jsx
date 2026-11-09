import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { educationData } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Education() {
  return (
    <section id="education" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[350px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-violet-950/70 text-violet-300 border border-violet-500/30 shadow-glow-violet/20">
            <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
            <span>06 // Education &amp; Academic Merit</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Academic Track Record
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Consistent top-tier quantitative excellence across university, pre-university, and secondary school education.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Cyber Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyan-400 via-violet-500 to-cyan-500/20 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {educationData.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={edu.degree}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Indicator */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#030712] border-2 border-cyan-400 shadow-glow-cyan items-center justify-center z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <TiltCard
                      intensity={8}
                      className="cyber-glass rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/40 shadow-cyber-card transition-all"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10 mb-4">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                          {edu.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {edu.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold font-display text-white mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-xs font-mono text-slate-300 mb-4">
                        {edu.institution}
                      </p>

                      <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10">
                        <Award className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-bold font-mono text-emerald-300">
                          {edu.score}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {edu.description}
                      </p>
                    </TiltCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
