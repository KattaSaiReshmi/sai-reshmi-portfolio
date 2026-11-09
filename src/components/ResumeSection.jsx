import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileDown, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Eye, 
  ShieldCheck, 
  Terminal,
  Maximize2,
  X
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';
import { soundManager } from '../utils/sound';

export default function ResumeSection() {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  const highlights = [
    "Comprehensive Data Analyst profile with Python, SQL, Excel & Power BI",
    "100K+ transaction analysis with dynamic Power BI DAX dashboards",
    "38K+ banking loan risk modeling with MySQL aggregations",
    "Multi-channel marketing campaign ROI & conversion tracking",
    "Published research in IJERT on FPGA & ultrasonic sensor automation",
    "Consistently exceptional academic record: 8.5 B.Tech, 9.9 PUC, 10.0 SSC"
  ];

  return (
    <section id="resume-section" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[650px] h-[350px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 shadow-glow-cyan/20">
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>08 // Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Curriculum Vitae &amp; Resume
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Directly examine or download the verified data analyst resume formatted for immediate hiring review.
          </p>
        </div>

        {/* Main Resume Showcase Box */}
        <div className="max-w-5xl mx-auto">
          <TiltCard
            intensity={6}
            className="cyber-glass rounded-3xl p-8 sm:p-12 border border-cyan-500/30 shadow-glow-cyan/20 relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Holographic Document Preview Card */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative w-full max-w-xs group cursor-pointer" onClick={() => setShowPreviewModal(true)}>
                  {/* Holographic Glowing Frame */}
                  <div className="relative rounded-2xl p-6 bg-[#030712] border-2 border-cyan-400/40 shadow-glow-cyan group-hover:border-cyan-300 group-hover:shadow-[0_0_40px_rgba(0,240,255,0.4)] transition-all duration-300">
                    
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                      <span className="font-mono text-[10px] text-cyan-400">PDF DOCUMENT</span>
                      <span className="font-mono text-[10px] text-slate-400">894 KB</span>
                    </div>

                    <div className="space-y-3 py-4 text-center">
                      <div className="w-16 h-16 mx-auto rounded-xl bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-glow-cyan/20 group-hover:scale-105 transition-transform">
                        <FileText className="w-8 h-8" />
                      </div>
                      <h4 className="text-base font-bold font-display text-white">
                        Katta Sai Reshmi
                      </h4>
                      <p className="text-xs font-mono text-cyan-400">
                        Data Analyst Resume
                      </p>
                    </div>

                    {/* Quick Preview overlay hint */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-1.5 text-xs font-mono text-slate-400 group-hover:text-cyan-300 transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click for Full Screen Preview</span>
                    </div>
                  </div>

                  {/* Corner Accent Triangles */}
                  <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400 pointer-events-none" />
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-400 pointer-events-none" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />
                </div>
              </div>

              {/* Right Column: Key Details & Download Actions */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest mb-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>VERIFIED &amp; READY FOR RECRUITER REVIEW</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                    Official Data Analyst Resume
                  </h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    Includes full contact information, professional experience, academic records, publications, and technical competency matrix.
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5">
                  {highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Download and View Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <MagneticButton
                    href="/resume.pdf"
                    download="Sai_Reshmi_Data_Analyst_Resume.pdf"
                    className="px-6 py-3.5 rounded-xl font-semibold font-mono text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white shadow-glow-cyan hover:shadow-cyan-400/40 transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <FileDown className="w-4 h-4 text-cyan-200" />
                      Download Official Resume (PDF)
                    </span>
                  </MagneticButton>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    className="px-5 py-3.5 rounded-xl font-semibold font-mono text-xs sm:text-sm cyber-glass border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/40 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                    <span>Open in New Tab</span>
                  </a>
                </div>

                <div className="text-[11px] font-mono text-slate-500">
                  SHA-256 Verified • FlowCV Engineered • Target: Immediate Data Analyst Openings
                </div>
              </div>

            </div>
          </TiltCard>
        </div>

      </div>

      {/* Full-Screen PDF Preview Modal */}
      <AnimatePresence>
        {showPreviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPreviewModal(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl h-[90vh] cyber-glass rounded-3xl border border-cyan-500/40 shadow-2xl flex flex-col z-10 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#040816]">
                <div className="flex items-center gap-2 font-mono text-xs text-white">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Sai_Reshmi_Data_Analyst_Resume.pdf</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="/resume.pdf"
                    download="Sai_Reshmi_Data_Analyst_Resume.pdf"
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 flex items-center gap-1.5"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                  <button
                    onClick={() => setShowPreviewModal(false)}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Embedded PDF iframe */}
              <div className="flex-1 w-full bg-slate-900">
                <iframe
                  src="/resume.pdf#toolbar=0"
                  className="w-full h-full border-0"
                  title="Sai Reshmi Resume Preview"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
