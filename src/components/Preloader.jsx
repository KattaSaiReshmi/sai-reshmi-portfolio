import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Database, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    { text: "INITIALIZING DATA SYSTEM...", icon: Terminal },
    { text: "COMPILING PYTHON & SQL PIPELINES...", icon: Database },
    { text: "CALIBRATING POWER BI DATA ENGINE...", icon: Cpu },
    { text: "LOADING INTERACTIVE DATASET ASSETS...", icon: Sparkles },
    { text: "PORTFOLIO ONLINE // ACCESS GRANTED", icon: CheckCircle2 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 450);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(prev + increment, 100);
        
        // update status index based on progress
        const idx = Math.min(
          Math.floor((next / 100) * (statuses.length - 1)),
          statuses.length - 1
        );
        setStatusIndex(idx);
        return next;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  const CurrentIcon = statuses[statusIndex].icon;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        y: -40,
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 z-50 bg-[#030712] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* Main Terminal Box */}
      <div className="relative w-full max-w-md cyber-glass p-8 rounded-2xl border border-cyan-500/20 shadow-glow-cyan/20">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 animate-pulse" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-slate-400">ksr_system_v2.0</span>
          </div>
          <span className="font-mono text-xs text-cyan-400 font-semibold tracking-wider">
            DATA.ANALYST
          </span>
        </div>

        {/* Identity Spotlight */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-violet-500/20 to-blue-500/20 border border-cyan-400/40 flex items-center justify-center shadow-glow-cyan"
          >
            <CurrentIcon className="w-8 h-8 text-cyan-400 animate-pulse" />
          </motion.div>
          <h2 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white mb-1">
            KATTA SAI RESHMI
          </h2>
          <p className="text-xs font-mono tracking-widest text-cyan-400/80 uppercase">
            Data Analyst &amp; BI Engineer
          </p>
        </div>

        {/* Dynamic Status Log */}
        <div className="h-8 flex items-center justify-center mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={statusIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="font-mono text-xs text-slate-300 text-center tracking-wide"
            >
              &gt; {statuses[statusIndex].text}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-slate-400">CALIBRATING</span>
            <span className="text-cyan-400 font-bold">{progress}%</span>
          </div>
          <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-white/10 p-[1px]">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 rounded-full shadow-[0_0_12px_rgba(0,240,255,0.6)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Skip button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => onComplete()}
            className="text-[11px] font-mono text-slate-500 hover:text-cyan-400 transition-colors uppercase tracking-widest underline underline-offset-4"
          >
            Skip Intro [ESC]
          </button>
        </div>
      </div>
    </motion.div>
  );
}
