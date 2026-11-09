import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  MessageSquare,
  Terminal,
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';
import TiltCard from './TiltCard';
import MagneticButton from './MagneticButton';
import { soundManager } from '../utils/sound';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, type) => {
    soundManager.playClick();
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundManager.playClick();
    setIsSubmitting(true);

    // Simulate sending transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Trigger festive cyber confetti burst
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#a855f7', '#38bdf8', '#ffffff']
      });

      // Reset form after delay
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[400px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[350px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 shadow-glow-cyan/20">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>09 // Transmission Portal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Initiate Contact &amp; Collaboration
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Reach out directly for full-time Data Analyst opportunities, analytics consulting, or technical inquiries.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Telemetry Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card with 1-Click Copy */}
            <TiltCard intensity={8} className="cyber-glass rounded-2xl p-6 border border-white/10 hover:border-cyan-400/40 shadow-cyber-card transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Direct Email</span>
                    <h4 className="text-sm sm:text-base font-bold font-mono text-white mt-0.5">
                      {personalDetails.email}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalDetails.email, 'email')}
                  className="p-2 rounded-xl bg-white/5 hover:bg-cyan-950/60 text-slate-400 hover:text-cyan-300 border border-white/10 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedItem === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedItem === 'email' && (
                <div className="mt-3 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Email copied to clipboard!
                </div>
              )}
            </TiltCard>

            {/* Phone Card with 1-Click Copy */}
            <TiltCard intensity={8} className="cyber-glass rounded-2xl p-6 border border-white/10 hover:border-violet-400/40 shadow-cyber-card transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-violet-950/60 border border-violet-400/30 flex items-center justify-center text-violet-300 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Mobile &amp; WhatsApp</span>
                    <h4 className="text-sm sm:text-base font-bold font-mono text-white mt-0.5">
                      {personalDetails.phone}
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalDetails.phone, 'phone')}
                  className="p-2 rounded-xl bg-white/5 hover:bg-violet-950/60 text-slate-400 hover:text-violet-300 border border-white/10 transition-colors"
                  title="Copy phone number to clipboard"
                >
                  {copiedItem === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copiedItem === 'phone' && (
                <div className="mt-3 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Phone number copied!
                </div>
              )}
            </TiltCard>

            {/* Location Card */}
            <div className="cyber-glass rounded-2xl p-6 border border-white/10 shadow-cyber-card">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Base Location</span>
                  <h4 className="text-sm sm:text-base font-bold font-mono text-white mt-0.5">
                    {personalDetails.location}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Open to In-Office, Hybrid &amp; Remote Roles Worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Profiles: LinkedIn & GitHub */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <a
                href={personalDetails.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="p-4 rounded-2xl cyber-glass border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-950/20 shadow-cyber-card transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-mono font-semibold text-slate-200 group-hover:text-cyan-300">
                    LinkedIn
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              <a
                href={personalDetails.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundManager.playClick()}
                className="p-4 rounded-2xl cyber-glass border border-white/10 hover:border-violet-400/50 hover:bg-violet-950/20 shadow-cyber-card transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-5 h-5 text-violet-400" />
                  <span className="text-xs font-mono font-semibold text-slate-200 group-hover:text-violet-300">
                    GitHub
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-violet-400 transition-colors" />
              </a>
            </div>

          </div>

          {/* Right Column: Cyber Communication Console (7 cols) */}
          <div className="lg:col-span-7">
            <TiltCard intensity={6} className="cyber-glass rounded-3xl p-8 sm:p-10 border border-cyan-500/30 shadow-glow-cyan/20">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  COMMUNICATION_TERMINAL // SECURE_SOCKET
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  ONLINE
                </span>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white">
                    Transmission Dispatched Successfully!
                  </h3>
                  <p className="text-sm font-mono text-slate-400 max-w-md mx-auto">
                    Thank you for reaching out. Sai Reshmi will respond to your inquiry at the provided email address promptly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Your Name / Organization *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Talent Acquisition Partner"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 font-mono text-xs focus:outline-hidden focus:border-cyan-400 focus:bg-cyan-950/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Return Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 font-mono text-xs focus:outline-hidden focus:border-cyan-400 focus:bg-cyan-950/20 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Inquiry Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Data Analyst Opportunity / Interview Invitation"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 font-mono text-xs focus:outline-hidden focus:border-cyan-400 focus:bg-cyan-950/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Message / Requirement Details *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your transmission or project overview here..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 font-mono text-xs focus:outline-hidden focus:border-cyan-400 focus:bg-cyan-950/20 transition-all resize-none"
                    />
                  </div>

                  <MagneticButton
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold font-mono text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white shadow-glow-cyan hover:shadow-cyan-400/50 transition-all"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Encrypting &amp; Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Transmit Message</span>
                        </>
                      )}
                    </span>
                  </MagneticButton>
                </form>
              )}

            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
}
