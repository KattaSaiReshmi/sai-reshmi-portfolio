import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Menu, 
  X, 
  FileDown, 
  Volume2, 
  VolumeX, 
  Sparkles,
  Database,
  BarChart2
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Live Data", href: "#live-dataset" },
    { name: "Experience", href: "#internship" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      // Total document height calculation for scroll progress
      const totalDocHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalDocHeight > 0) {
        setScrollProgress((scrollY / totalDocHeight) * 100);
      }

      // Determine active section
      const sections = ['hero', 'about', 'skills', 'projects', 'live-dataset', 'internship', 'education', 'achievements', 'resume-section', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const state = soundManager.toggle();
    setSoundEnabled(state);
  };

  return (
    <>
      {/* Top scroll progress indicator bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-slate-900">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-cyan-300 shadow-[0_0_10px_#00f0ff]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Navbar Container */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-40 px-3 sm:px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          
          {/* Brand Logo with Neon Indicator */}
          <a
            href="#hero"
            onClick={() => soundManager.playClick()}
            className="group flex items-center gap-2.5 px-4 py-2 rounded-full cyber-glass border border-white/10 hover:border-cyan-400/40 shadow-cyber-card transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 border border-cyan-400/50 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold font-display tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                KSR<span className="text-cyan-400">.data</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 -mt-1 hidden sm:block">
                PORTFOLIO
              </span>
            </div>
          </a>

          {/* Desktop Nav Capsule */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full cyber-glass border border-white/10 shadow-cyber-card">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => soundManager.playHover()}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium font-mono transition-all duration-200 ${
                    isActive
                      ? "text-cyan-300 bg-cyan-950/60 shadow-[0_0_12px_rgba(0,240,255,0.2)]"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full border border-cyan-400/40 pointer-events-none"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls: Audio Toggle, Resume & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle Button */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? "Mute Cyber FX" : "Enable Cyber FX Audio"}
              className={`p-2 rounded-full cyber-glass border transition-all duration-300 ${
                soundEnabled
                  ? "border-cyan-400/50 text-cyan-400 shadow-glow-cyan"
                  : "border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Quick Resume CTA */}
            <a
              href="#resume-section"
              onClick={() => soundManager.playClick()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold font-mono bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-blue-500/20 border border-cyan-400/40 text-cyan-300 hover:text-white hover:border-cyan-300 shadow-glow-cyan/30 hover:shadow-glow-cyan transition-all duration-300"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-full cyber-glass border border-white/10 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-3 top-20 z-40 lg:hidden cyber-glass rounded-2xl border border-cyan-500/30 p-5 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    soundManager.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-3 rounded-xl text-sm font-mono text-slate-200 hover:text-cyan-300 hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-cyan-400 font-mono">/&gt;</span>
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-white/10 flex gap-2">
                <a
                  href="/resume.pdf"
                  download="Sai_Reshmi_Data_Analyst_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-400/40"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
