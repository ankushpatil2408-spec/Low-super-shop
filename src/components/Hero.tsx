import React from "react";
import { STORE_CONTACT } from "../data";
import LucideIcon from "./LucideIcon";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-radial from-emerald-50 via-white to-white"
    >
      {/* Background abstract shapes for glassmorphic depth */}
      <div className="absolute top-1/4 -left-12 w-64 h-64 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute bottom-12 right-0 w-80 h-80 rounded-full bg-amber-100/50 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Copy (7 Cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Local Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-emerald-100/70 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-800"
            >
              <LucideIcon name="MapPin" className="w-3.5 h-3.5 text-emerald-600 animate-bounce" />
              <span>Raver's Trusted Supermarket Store</span>
            </motion.div>

            {/* Store Name & Dynamic Heading */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-gray-900 leading-tight"
              >
                Welcome to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-500">
                  {STORE_CONTACT.name}
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-xl sm:text-2xl font-medium text-emerald-700 max-w-xl mx-auto lg:mx-0"
              >
                "{STORE_CONTACT.tagline}"
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Get premium quality grains, daily groceries, fresh packaged snacks, household cleaning goods, and stationery essentials at prices lower than local MRP markets. Your trusted neighborly budget-friendly store right in the heart of Raver!
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#categories"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <span>Browse Categories</span>
                <LucideIcon name="ArrowRight" className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${STORE_CONTACT.whatsapp.replace("+", "")}?text=Hello%20Low%20Price%20Super%20Shop%2C%20I%20want%20to%20inquire%20about%20daily%20grocery%20deals.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-center border border-slate-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <LucideIcon name="MessageCircle" className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp Order</span>
              </a>
            </motion.div>

            {/* Quick Benefits Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-100 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-600">₹0 Fee</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Free Car Parking</span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-x border-slate-100 px-3">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-600">100%</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Fresh & Organic</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-600">5k+</span>
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Daily Items</span>
              </div>
            </motion.div>

          </div>

          {/* Hero Graphics (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Glassmorphic Frame wrapper */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-sm sm:max-w-md h-[400px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl shadow-emerald-100 border-4 border-white"
            >
              {/* Elegant shop lifestyle photo */}
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800"
                alt="Low Price Super Shop Store view"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-slate-900/10 to-transparent" />
              
              {/* Bottom Card Inside Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel text-slate-900 shadow-xl space-y-2 border border-white/50">
                <div className="flex items-center gap-1.5 text-amber-500">
                  <LucideIcon name="Star" className="w-4 h-4 fill-current" />
                  <LucideIcon name="Star" className="w-4 h-4 fill-current" />
                  <LucideIcon name="Star" className="w-4 h-4 fill-current" />
                  <LucideIcon name="Star" className="w-4 h-4 fill-current" />
                  <LucideIcon name="Star" className="w-4 h-4 fill-current" />
                  <span className="text-xs font-bold text-slate-800 ml-1">4.9 / 5 Rating</span>
                </div>
                <h3 className="font-display font-bold text-sm sm:text-base leading-tight">
                  Lowest rates in Raver Taluka, guaranteed!
                </h3>
                <p className="text-[11px] text-slate-600">
                  Our price matching pledge means you never overpay for monthly grocery bins.
                </p>
              </div>
            </motion.div>

            {/* Decorative Floating Floating Badge 1 - Best Prices */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 sm:-right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-display font-extrabold px-4 py-2.5 rounded-2xl shadow-lg shadow-amber-200 text-xs flex items-center gap-2 border border-amber-400"
            >
              <LucideIcon name="BadgePercent" className="w-4 h-4" />
              <div className="text-left leading-none">
                <span className="block text-[9px] uppercase tracking-wider font-semibold opacity-90">Special Deals</span>
                <span className="text-sm">Up to 25% Off</span>
              </div>
            </motion.div>

            {/* Decorative Floating Badge 2 - Pure Grains */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md text-emerald-800 font-display font-bold px-4 py-3 rounded-2xl shadow-xl border border-emerald-100 text-xs flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <LucideIcon name="ShieldCheck" className="w-4.5 h-4.5" />
              </div>
              <div className="text-left leading-none">
                <span className="block text-[10px] text-slate-400">Products</span>
                <span className="text-xs font-bold text-slate-800">100% Brand Certified</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
