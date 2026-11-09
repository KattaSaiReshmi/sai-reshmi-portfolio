import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileDown, 
  ArrowRight, 
  MapPin, 
  Database, 
  TrendingUp, 
  Sparkles, 
  BarChart2, 
  Cpu,
  Layers,
  CheckCircle2,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[96vh] pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-violet-600/10 to-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Futuristic cyber grid backdrop */}
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none -z-10" />
      <div className="absolute inset-0 cyber-vignette pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Heading, Bio, CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Status Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
                AVAILABLE FOR DATA ANALYST ROLES
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-slate-300 cyber-glass border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personalDetails.location}
              </span>
            </motion.div>

            {/* Main Title & Staggered Reveal */}
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs sm:text-sm tracking-widest text-cyan-400 uppercase">
                <span className="text-violet-400">&lt;portfolio&gt;</span>
                <span>DATA ANALYST &amp; BI SPECIALIST</span>
                <span className="text-violet-400">&lt;/portfolio&gt;</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
                {personalDetails.name}
              </h1>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="text-2xl sm:text-4xl font-bold font-display text-gradient-cyber">
                  {personalDetails.role}
                </span>
                <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded-md bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  SQL • Python • Power BI
                </span>
              </div>
            </motion.div>

            {/* Summary Text */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {personalDetails.summary}
            </motion.p>

            {/* Core Tech Stack Pills */}
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                Core Capabilities:
              </div>
              <div className="flex flex-wrap gap-2">
                {['Python', 'SQL', 'Excel', 'Power BI', 'Pandas', 'DAX', 'MySQL', 'EDA'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium cyber-glass border border-cyan-500/20 text-slate-200 hover:text-cyan-300 hover:border-cyan-400/50 hover:shadow-glow-cyan/20 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Magnetic CTA Buttons */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-4">
              <MagneticButton
                href="#projects"
                className="px-7 py-3.5 rounded-xl font-semibold font-mono text-sm sm:text-base bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white shadow-glow-cyan hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-all"
              >
                <span className="flex items-center gap-2">
                  Explore Projects
                  <ArrowRight className="w-4 h-4 text-cyan-200" />
                </span>
              </MagneticButton>

              <MagneticButton
                href="#live-dataset"
                className="px-6 py-3.5 rounded-xl font-semibold font-mono text-sm sm:text-base cyber-glass border border-cyan-400/40 text-cyan-300 hover:text-white hover:border-cyan-300 hover:bg-cyan-950/40 shadow-glow-cyan/20 transition-all"
              >
                <span className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-cyan-400" />
                  Live Dataset Terminal
                </span>
              </MagneticButton>

              <MagneticButton
                href="/resume.pdf"
                download="Sai_Reshmi_Data_Analyst_Resume.pdf"
                className="px-5 py-3.5 rounded-xl font-medium font-mono text-xs sm:text-sm cyber-glass border border-white/10 text-slate-300 hover:text-white hover:border-violet-500/40 transition-all"
              >
                <span className="flex items-center gap-2">
                  <FileDown className="w-4 h-4 text-violet-400" />
                  Resume PDF
                </span>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: 3D Tilt Cyber Hologram Card */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex justify-center">
            <TiltCard 
              intensity={12} 
              className="w-full max-w-md cyber-glass rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-[0_0_50px_-10px_rgba(0,240,255,0.25)] relative"
            >
              {/* Corner Accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />

              {/* Holographic Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs text-cyan-300 font-semibold tracking-wider">
                    DATA_CORE_TELEMETRY
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                  SYS_VERIFIED
                </span>
              </div>

              {/* Avatar Holographic Representation */}
              <div className="relative mx-auto w-36 h-36 mb-6 flex items-center justify-center">
                {/* Concentric Rotating Pulse Rings */}
                <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-3 rounded-full border border-violet-500/30 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-cyan-500/20 via-violet-600/30 to-blue-500/20 blur-md" />
                
                {/* Center Core Badge */}
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#050814] to-[#0c1222] border-2 border-cyan-400/80 shadow-glow-cyan flex flex-col items-center justify-center">
                  <BarChart2 className="w-9 h-9 text-cyan-300" />
                  <span className="text-[9px] font-mono text-cyan-200 font-bold mt-1">KSR</span>
                </div>

                {/* Floating Micro-Badges */}
                <div className="absolute -top-1 -right-2 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-400 shadow-glow-cyan">
                  8.5 CGPA
                </div>
                <div className="absolute -bottom-2 -left-2 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-violet-950 text-violet-300 border border-violet-400 shadow-glow-violet">
                  100K+ ROWS
                </div>
              </div>

              {/* Live Data Telemetry Matrix */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/30 transition-colors">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Degree &amp; CGPA</div>
                  <div className="text-sm font-bold text-white font-mono mt-0.5">8.5 CGPA</div>
                  <div className="text-[10px] text-cyan-400 font-mono">B.Tech ECE (RGUKT)</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-violet-400/30 transition-colors">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Pre-University</div>
                  <div className="text-sm font-bold text-white font-mono mt-0.5">9.9 CGPA</div>
                  <div className="text-[10px] text-violet-400 font-mono">PUC-MPC (RGUKT)</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-emerald-400/30 transition-colors">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Secondary (SSC)</div>
                  <div className="text-sm font-bold text-white font-mono mt-0.5">10.0 CGPA</div>
                  <div className="text-[10px] text-emerald-400 font-mono">Perfect Merit Score</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/30 transition-colors">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Training</div>
                  <div className="text-sm font-bold text-white font-mono mt-0.5">Sense Semi</div>
                  <div className="text-[10px] text-cyan-400 font-mono">FPGA Systems Intern</div>
                </div>
              </div>

              {/* Interactive Code Stream Console */}
              <div className="p-3.5 rounded-xl bg-[#030712] border border-cyan-500/20 font-mono text-xs text-left">
                <div className="flex items-center justify-between text-[10px] text-slate-500 pb-2 mb-2 border-b border-white/5">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Terminal className="w-3 h-3" />
                    bash - python3
                  </span>
                  <span>ready</span>
                </div>
                <div className="text-slate-400 space-y-1">
                  <p><span className="text-violet-400">&gt;&gt;&gt;</span> <span className="text-cyan-300">import</span> pandas <span className="text-cyan-300">as</span> pd</p>
                  <p><span className="text-violet-400">&gt;&gt;&gt;</span> ksr_insights = df.groupby(<span className="text-emerald-300">'Product'</span>).sum()</p>
                  <p><span className="text-emerald-400"># Output: 100K+ records processed flawlessly</span></p>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
