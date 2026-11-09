import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Database, 
  BarChart3, 
  Code, 
  Wrench, 
  PieChart, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  Copy, 
  Check,
  Layers
} from 'lucide-react';
import { coreSkills, skillsData } from '../data/portfolioData';
import TiltCard from './TiltCard';
import { soundManager } from '../utils/sound';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSnippetTab, setActiveSnippetTab] = useState('dax');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const categories = [
    { id: 'all', label: 'All Disciplines', icon: Layers },
    { id: 'Visualization & BI', label: 'BI & Visualization', icon: PieChart },
    { id: 'Databases & Querying', label: 'Databases & SQL', icon: Database },
    { id: 'Programming Languages', label: 'Languages', icon: Code },
    { id: 'Data Wrangling & Foundations', label: 'Foundations & DSA', icon: BarChart3 },
    { id: 'Web & Developer Tools', label: 'Developer Tools', icon: Wrench },
  ];

  const filteredCategories = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(cat => cat.category === activeCategory);

  const sampleDaxCode = `// Power BI Custom DAX Measure - Dynamic City Market Share
Top City Sales % = 
VAR CurrentCityRevenue = [Total Revenue]
VAR TotalGlobalRevenue = CALCULATE([Total Revenue], ALL(Sales))
RETURN 
    DIVIDE(CurrentCityRevenue, TotalGlobalRevenue, 0)

// Year-over-Year Growth Measure
YoY Sales Growth % = 
VAR PreviousYearSales = CALCULATE([Total Revenue], SAMEPERIODLASTYEAR('Calendar'[Date]))
RETURN 
    DIVIDE([Total Revenue] - PreviousYearSales, PreviousYearSales, 0)`;

  const sampleSqlCode = `-- MySQL Analytical Query: Top Performing Products & Contribution
WITH RankedProducts AS (
    SELECT 
        Product,
        SUM(Quantity_Ordered) AS Units_Sold,
        ROUND(SUM(Quantity_Ordered * Price_Each), 2) AS Total_Revenue,
        DENSE_RANK() OVER (ORDER BY SUM(Quantity_Ordered * Price_Each) DESC) AS Sales_Rank
    FROM sales_transactions
    WHERE Order_Date >= '2019-04-01'
    GROUP BY Product
)
SELECT 
    Sales_Rank,
    Product,
    Units_Sold,
    Total_Revenue,
    ROUND(Total_Revenue * 100.0 / (SELECT SUM(Total_Revenue) FROM RankedProducts), 2) AS Revenue_Share_Pct
FROM RankedProducts
WHERE Sales_Rank <= 5;`;

  const handleCopyCode = () => {
    soundManager.playClick();
    const textToCopy = activeSnippetTab === 'dax' ? sampleDaxCode : sampleSqlCode;
    navigator.clipboard.writeText(textToCopy);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[300px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-violet-950/70 text-violet-300 border border-violet-500/30 shadow-glow-violet/20">
            <Cpu className="w-3.5 h-3.5 text-violet-400" />
            <span>02 // Skills &amp; Technologies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Technical Stack &amp; Analytical Competencies
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Proficiencies extracted directly from verified project architectures, academic coursework, and corporate training.
          </p>
        </div>

        {/* 7 Core Hero Skills Spotlight */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Core Specializations Spotlight</span>
            </div>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline-block">
              ENGINEERED FOR DATA-DRIVEN IMPACT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {coreSkills.map((skill) => (
              <TiltCard
                key={skill.name}
                intensity={10}
                className="cyber-glass rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 shadow-cyber-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                      {skill.category}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/5 text-slate-300 border border-white/10">
                      {skill.level}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {skill.highlight}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundManager.playClick();
                  setActiveCategory(cat.id);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-glow-cyan/20'
                    : 'cyber-glass text-slate-400 hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((group) => (
              <motion.div
                key={group.category}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="cyber-glass rounded-3xl p-6 sm:p-7 border border-white/10 shadow-cyber-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <h3 className="text-lg font-bold font-display text-white">
                      {group.category}
                    </h3>
                    <span className="text-xs font-mono text-cyan-400">
                      {group.skills.length} competencies
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-6">
                    {group.description}
                  </p>

                  <div className="space-y-4">
                    {group.skills.map((s) => (
                      <div key={s.name} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-semibold text-slate-200 font-mono">
                            {s.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                            {s.level}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-normal">
                          {s.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive Query & DAX Snippet Showcase */}
        <div className="cyber-glass rounded-3xl p-6 sm:p-8 border border-white/10 shadow-cyber-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold font-display text-white">
                  Real Analytical Code Execution
                </h4>
                <p className="text-xs font-mono text-slate-400">
                  Inspect genuine SQL scripts and Power BI DAX formulas written for analytics
                </p>
              </div>
            </div>

            {/* Tab switchers + Copy Button */}
            <div className="flex items-center gap-2">
              <div className="flex p-1 rounded-xl bg-[#030712] border border-white/10 font-mono text-xs">
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setActiveSnippetTab('dax');
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeSnippetTab === 'dax'
                      ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  DAX Formulas
                </button>
                <button
                  onClick={() => {
                    soundManager.playClick();
                    setActiveSnippetTab('sql');
                  }}
                  className={`px-3 py-1.5 rounded-lg transition-colors ${
                    activeSnippetTab === 'sql'
                      ? 'bg-cyan-600/30 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  SQL Queries
                </button>
              </div>

              <button
                onClick={handleCopyCode}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/40 transition-colors"
                title="Copy Code to Clipboard"
              >
                {copiedSnippet ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Syntax-Highlighted Code Container */}
          <div className="p-4 sm:p-6 rounded-2xl bg-[#02050e] border border-cyan-500/20 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed">
            <pre className="whitespace-pre">
              <code>{activeSnippetTab === 'dax' ? sampleDaxCode : sampleSqlCode}</code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
}
