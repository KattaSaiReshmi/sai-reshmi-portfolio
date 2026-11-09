import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileSpreadsheet, 
  BarChart3, 
  DollarSign, 
  ShoppingBag, 
  MapPin, 
  Search, 
  TrendingUp, 
  Sparkles,
  Database,
  ArrowRight,
  CheckCircle2,
  PieChart,
  HelpCircle,
  Clock,
  Calendar,
  Layers,
  ChevronDown
} from 'lucide-react';
import datasetSummary from '../data/electronicsSalesData.json';
import TiltCard from './TiltCard';
import { soundManager } from '../utils/sound';

export default function LiveDatasetShowcase() {
  const [activeTab, setActiveTab] = useState('insights'); // 'insights', 'products', 'cities', 'qa'
  const [productSearch, setProductSearch] = useState('');
  const [openQaIndex, setOpenQaIndex] = useState(0);

  const filteredProducts = datasetSummary.topProductsByRev.filter(p => 
    p.name.toLowerCase().includes(productSearch.toLowerCase())
  );

  const maxCityRevenue = Math.max(...datasetSummary.cityBreakdown.map(c => c.revenue));

  return (
    <section id="live-dataset" className="py-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[750px] h-[400px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-cyan-950/70 text-cyan-300 border border-cyan-500/30 shadow-glow-cyan/20">
            <FileSpreadsheet className="w-3.5 h-3.5 text-cyan-400" />
            <span>04 // Interactive Live Dataset Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Electronics Store Sales Analytics
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Live interactive analytics executed directly on <span className="text-cyan-300 font-mono font-semibold">Electronics store dataset.xlsx</span> (Sales_April_2019 cohort).
          </p>
        </div>

        {/* Top 4 Cyber KPI Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          
          <TiltCard intensity={8} className="cyber-glass rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-cyan-400/40 shadow-cyber-card transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span>TOTAL REVENUE</span>
              <DollarSign className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
              ${datasetSummary.totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-[11px] font-mono text-cyan-300 mt-2 flex items-center gap-1.5">
              <TrendingUp className="w-3 h-3 text-cyan-400" /> April 2019 Cohort
            </div>
          </TiltCard>

          <TiltCard intensity={8} className="cyber-glass rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-violet-400/40 shadow-cyber-card transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span>ITEMS ORDERED</span>
              <ShoppingBag className="w-4 h-4 text-violet-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
              {datasetSummary.totalQuantity.toLocaleString()} Units
            </div>
            <div className="text-[11px] font-mono text-violet-300 mt-2">
              Across {datasetSummary.totalRecords} verified orders
            </div>
          </TiltCard>

          <TiltCard intensity={8} className="cyber-glass rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-emerald-400/40 shadow-cyber-card transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span>AVG ORDER VALUE</span>
              <BarChart3 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
              ${(datasetSummary.totalRevenue / datasetSummary.totalRecords).toFixed(2)}
            </div>
            <div className="text-[11px] font-mono text-emerald-300 mt-2">
              Mean Revenue per Cart
            </div>
          </TiltCard>

          <TiltCard intensity={8} className="cyber-glass rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-blue-400/40 shadow-cyber-card transition-all">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span>CATALOG VARIETIES</span>
              <Database className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
              {datasetSummary.uniqueProducts} Products
            </div>
            <div className="text-[11px] font-mono text-blue-300 mt-2">
              13 High-Ticket Items (&gt;$100)
            </div>
          </TiltCard>

        </div>

        {/* Interactive Exploration Terminal Canvas */}
        <div className="cyber-glass rounded-3xl border border-white/10 shadow-cyber-card overflow-hidden">
          
          {/* Terminal Navigation Bar */}
          <div className="p-4 sm:p-6 border-b border-white/10 bg-[#040816]/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'insights', label: 'Executive Insights', icon: Sparkles },
                { id: 'products', label: 'Product Performance', icon: ShoppingBag },
                { id: 'cities', label: 'City Breakdown', icon: MapPin },
                { id: 'qa', label: 'Data Inquiry Q&A', icon: HelpCircle },
              ].map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      soundManager.playClick();
                      setActiveTab(tab.id);
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-medium transition-all ${
                      isSelected
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-glow-cyan/20'
                        : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <span className="text-[11px] font-mono text-slate-400 hidden md:block">
              SOURCE: Electronics store dataset.xlsx
            </span>
          </div>

          {/* Tab 1: Executive Insights */}
          {activeTab === 'insights' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4" />
                    <span>Top Revenue Driver</span>
                  </div>
                  <h4 className="text-xl font-bold font-display text-white">
                    Macbook Pro Laptop
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Single-handedly generated <strong className="text-white">$42,500.00</strong> (22.4% of entire store revenue) across 25 units at $1,700 unit retail price.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                  <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-wider">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Highest Unit Volume</span>
                  </div>
                  <h4 className="text-xl font-bold font-display text-white">
                    AAA Batteries (4-Pack)
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Accounted for the highest sales frequency with <strong className="text-white">168 units sold</strong> across 114 separate customer checkouts.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                    <MapPin className="w-4 h-4" />
                    <span>Primary Regional Hub</span>
                  </div>
                  <h4 className="text-xl font-bold font-display text-white">
                    San Francisco Metro
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Generated <strong className="text-white">$46,852.35</strong> (24.7% of all revenue) with 285 units dispatched to 254 distinct customer orders.
                  </p>
                </div>

              </div>

              {/* Time Intelligence Peek */}
              <div className="p-6 rounded-2xl bg-[#030712] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div>
                    <span className="text-slate-200 font-semibold">Peak Purchase Windows Identified:</span>
                    <span className="text-slate-400 ml-2">11:00 AM – 1:00 PM (Lunch Break Peak) &amp; 7:00 PM – 8:00 PM (Evening Surge)</span>
                  </div>
                </div>
                <span className="text-cyan-400 font-bold whitespace-nowrap">Optimum Ad Scheduling Window</span>
              </div>
            </div>
          )}

          {/* Tab 2: Product Performance Matrix */}
          {activeTab === 'products' && (
            <div className="p-6 sm:p-8 space-y-6">
              {/* Search Bar */}
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search product (e.g. MacBook, iPhone, Monitor)..."
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 font-mono text-xs focus:outline-hidden focus:border-cyan-400 transition-colors"
                  />
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Showing {filteredProducts.length} of {datasetSummary.topProductsByRev.length} products
                </span>
              </div>

              {/* Table */}
              <div className="overflow-x-auto rounded-2xl border border-white/5">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="bg-white/[0.03] text-slate-400 border-b border-white/10 uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Product Name</th>
                      <th className="py-3 px-4 text-right">Unit Price</th>
                      <th className="py-3 px-4 text-right">Units Sold</th>
                      <th className="py-3 px-4 text-right">Orders</th>
                      <th className="py-3 px-4 text-right">Total Revenue</th>
                      <th className="py-3 px-4 text-right">Revenue Share</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-300">
                    {filteredProducts.map((prod) => {
                      const share = ((prod.revenue / datasetSummary.totalRevenue) * 100).toFixed(1);
                      return (
                        <tr key={prod.name} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-3 px-4 font-semibold text-white">{prod.name}</td>
                          <td className="py-3 px-4 text-right text-slate-400">${prod.price.toFixed(2)}</td>
                          <td className="py-3 px-4 text-right text-cyan-300 font-bold">{prod.quantity}</td>
                          <td className="py-3 px-4 text-right text-slate-400">{prod.orders}</td>
                          <td className="py-3 px-4 text-right text-emerald-400 font-bold">
                            ${prod.revenue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </td>
                          <td className="py-3 px-4 text-right text-slate-400">{share}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab 3: City Breakdown */}
          {activeTab === 'cities' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-4">
                {datasetSummary.cityBreakdown.map((city) => {
                  const pct = ((city.revenue / maxCityRevenue) * 100).toFixed(1);
                  const totalPct = ((city.revenue / datasetSummary.totalRevenue) * 100).toFixed(1);
                  return (
                    <div key={city.city} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-white flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                          {city.city}
                        </span>
                        <div className="flex items-center gap-4 text-slate-400">
                          <span>{city.quantity} units</span>
                          <span className="text-emerald-400 font-bold">
                            ${city.revenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                          </span>
                          <span className="text-cyan-300 font-semibold w-12 text-right">{totalPct}%</span>
                        </div>
                      </div>
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 4: Data Inquiry Q&A */}
          {activeTab === 'qa' && (
            <div className="p-6 sm:p-8 space-y-4">
              <div className="text-xs font-mono text-slate-400 mb-4">
                VERIFIED QUESTIONS ANSWERED IN THE ELECTRONICS STORE ASSIGNMENT
              </div>
              <div className="space-y-3">
                {datasetSummary.qaInsights.map((qa, idx) => {
                  const isOpen = openQaIndex === idx;
                  return (
                    <div 
                      key={idx}
                      className="rounded-2xl border border-white/5 overflow-hidden bg-white/[0.02] transition-colors"
                    >
                      <button
                        onClick={() => {
                          soundManager.playClick();
                          setOpenQaIndex(isOpen ? -1 : idx);
                        }}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 font-mono text-xs sm:text-sm text-slate-200 hover:text-cyan-300"
                      >
                        <span className="font-semibold flex items-center gap-2.5">
                          <span className="text-cyan-400">Q{idx + 1}:</span>
                          <span>{qa.question}</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-4 pb-4 pt-1 border-t border-white/5 font-mono text-xs sm:text-sm text-slate-300"
                          >
                            <div className="p-3 rounded-xl bg-[#030712] border border-cyan-500/20 text-cyan-300">
                              <span className="text-slate-400 font-bold block mb-1">Analytical Result:</span>
                              {qa.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
