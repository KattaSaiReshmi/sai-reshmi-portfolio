import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Database, 
  BarChart3, 
  TrendingUp, 
  Lightbulb, 
  Cpu, 
  Award, 
  CheckCircle2,
  Terminal,
  FileCheck2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function About() {
  const workflowSteps = [
    {
      step: "01",
      title: "Data Extraction & Sanitization",
      desc: "Extracting multi-source datasets, resolving missing records, standardizing schema data types, eliminating anomalies, and transforming raw records using Python and SQL.",
      icon: Database,
      accent: "cyan"
    },
    {
      step: "02",
      title: "Exploratory Data Analysis (EDA)",
      desc: "Investigating distribution metrics, correlation patterns, cohort behaviors, and statistical summaries using Pandas and analytical scripting.",
      icon: BarChart3,
      accent: "violet"
    },
    {
      step: "03",
      title: "Interactive Power BI & DAX Modeling",
      desc: "Engineering custom measures (YTD, YoY comparisons, conversion ratios), building robust star-schema data models, and designing intuitive visual canvases.",
      icon: TrendingUp,
      accent: "blue"
    },
    {
      step: "04",
      title: "Actionable Business Recommendations",
      desc: "Translating complex data findings into clear executive narratives, KPI scorecards, and strategic action points that optimize business operations.",
      icon: Lightbulb,
      accent: "emerald"
    }
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 shadow-glow-cyan/20">
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>01 // About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Analytical Rigor, Engineering Logic &amp; Business Clarity
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Bridging technical data pipelines, statistical modeling, and executive visual storytelling to convert raw transactions into growth drivers.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Narrative Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <TiltCard intensity={8} className="h-full cyber-glass rounded-3xl p-8 sm:p-10 border border-white/10 shadow-cyber-card flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    Professional Narrative
                  </span>
                  <span className="text-xs font-mono text-slate-500">RGUKT IIIT RK VALLEY</span>
                </div>

                <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
                  <p>
                    I am <strong className="text-white font-semibold">Katta Sai Reshmi</strong>, a detail-oriented Data Analyst currently pursuing my B.Tech in Electronics &amp; Communication Engineering at <span className="text-cyan-300 font-medium">Rajiv Gandhi University of Knowledge Technologies, IIIT RK Valley</span> with an <strong className="text-cyan-400">8.5 CGPA</strong>.
                  </p>
                  <p className="text-slate-400">
                    My engineering foundation in digital logic, signal architectures, and embedded systems gives me a distinct edge in data analysis: a disciplined mindset for algorithmic efficiency, structured problem breakdown, and rigorous mathematical validation.
                  </p>
                  <p className="text-slate-400">
                    Through hands-on projects spanning <span className="text-slate-200 font-medium">E-commerce retail performance</span> (100K+ transaction records), <span className="text-slate-200 font-medium">multi-channel marketing ROI</span>, and <span className="text-slate-200 font-medium">bank loan risk classification</span> (38K+ borrower records), I transform messy transactional data into clean models and actionable Power BI dashboards.
                  </p>
                </div>
              </div>

              {/* Bottom Quick Highlights */}
              <div className="pt-8 border-t border-white/10 mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="text-2xl font-bold font-mono text-cyan-400">8.5</div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">B.Tech CGPA</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-violet-400">9.9</div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">PUC-MPC CGPA</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-emerald-400">10.0</div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">SSC CGPA</div>
                </div>
                <div>
                  <div className="text-2xl font-bold font-mono text-blue-400">100K+</div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase mt-0.5">Rows Analyzed</div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Bento Column: Telemetry & Engineering Advantage (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Engineering Edge Card */}
            <TiltCard intensity={8} className="cyber-glass rounded-3xl p-7 border border-white/10 shadow-cyber-card flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-violet-950/70 border border-violet-500/30 flex items-center justify-center text-violet-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display">The Engineering Advantage</h3>
                  <p className="text-xs font-mono text-slate-400">Hardware Precision + Data Logic</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Trained in FPGA systems at Sense Semiconductor and author of a peer-reviewed paper in <span className="text-violet-300 font-mono">IJERT</span> on intelligent sensor-driven traffic control. I bring high algorithmic discipline to SQL querying, schema optimization, and DAX modeling.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-violet-950/50 border border-violet-500/30 text-violet-300">
                  FPGA Systems Design
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-950/50 border border-cyan-500/30 text-cyan-300">
                  IJERT Publication
                </span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-blue-950/50 border border-blue-500/30 text-blue-300">
                  DSA &amp; OOP Foundations
                </span>
              </div>
            </TiltCard>

            {/* Quick Profile Parameters Console */}
            <div className="cyber-glass rounded-3xl p-6 border border-white/10 shadow-cyber-card font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Terminal className="w-3.5 h-3.5" />
                  candidate_profile.json
                </span>
                <span className="text-[10px] text-emerald-400">STATUS: ACTIVE</span>
              </div>
              <div className="space-y-1.5 text-slate-300">
                <p><span className="text-slate-500">"candidate":</span> <span className="text-cyan-300">"Katta Sai Reshmi"</span>,</p>
                <p><span className="text-slate-500">"target_role":</span> <span className="text-cyan-300">"Data Analyst / BI Specialist"</span>,</p>
                <p><span className="text-slate-500">"location":</span> <span className="text-cyan-300">"Dharmavaram, AP, India"</span>,</p>
                <p><span className="text-slate-500">"education":</span> <span className="text-cyan-300">"B.Tech ECE (RGUKT IIIT RK Valley)"</span>,</p>
                <p><span className="text-slate-500">"key_tools":</span> <span className="text-violet-300">["Python", "SQL", "Excel", "Power BI", "Pandas", "DAX"]</span></p>
              </div>
            </div>

          </div>
        </div>

        {/* 4-Step Analytical Execution Framework */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              End-to-End Analytical Workflow
            </h3>
            <p className="text-sm font-mono text-slate-400 mt-2">
              SYSTEMATIC PROCESS FROM RAW DATA TO BUSINESS ROI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <TiltCard 
                  key={step.step}
                  intensity={10}
                  className="cyber-glass rounded-2xl p-6 border border-white/10 hover:border-cyan-400/40 shadow-cyber-card transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black font-mono text-cyan-400/40">
                        {step.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="text-base font-bold text-white mb-2 font-display">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-mono text-cyan-400">
                    <span>Phase {idx + 1} verified</span>
                    <CheckCircle2 className="w-3.5 h-3.5 ml-auto text-emerald-400" />
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
