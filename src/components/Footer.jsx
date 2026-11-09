import React from 'react';
import { 
  Terminal, 
  ArrowUp, 
  Linkedin, 
  Github, 
  Mail, 
  Heart,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import MagneticButton from './MagneticButton';
import { soundManager } from '../utils/sound';

export default function Footer() {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#02050e] overflow-hidden pt-16 pb-12">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Deck */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center justify-between">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="text-lg font-bold font-display tracking-tight text-white">
                {personalDetails.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Data Analyst transforming multi-dimensional datasets into high-impact Power BI executive dashboards and strategic decisions.
            </p>
          </div>

          {/* System Telemetry */}
          <div className="md:col-span-4 space-y-2 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300 font-semibold">STATUS:</span>
              <span className="text-emerald-400">OPEN TO DATA ANALYST OPPORTUNITIES</span>
            </div>
            <div>
              <span className="text-slate-500">DEGREE:</span> B.Tech ECE (RGUKT IIIT RK Valley)
            </div>
            <div>
              <span className="text-slate-500">BASE:</span> {personalDetails.location}
            </div>
          </div>

          {/* Socials & Back To Top */}
          <div className="md:col-span-3 flex md:flex-col items-center md:items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={personalDetails.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="p-2.5 rounded-full cyber-glass border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalDetails.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="p-2.5 rounded-full cyber-glass border border-white/10 text-slate-400 hover:text-violet-300 hover:border-violet-400/40 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalDetails.email}`}
                onClick={() => soundManager.playClick()}
                className="p-2.5 rounded-full cyber-glass border border-white/10 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <MagneticButton
              onClick={scrollToTop}
              className="px-4 py-2 rounded-full text-xs font-mono font-medium cyber-glass border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors flex items-center gap-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </MagneticButton>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {currentYear} {personalDetails.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>React + Vite</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Framer Motion &amp; GSAP</span>
            <span>•</span>
            <span className="text-cyan-400">Vercel Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
