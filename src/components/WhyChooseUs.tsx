import React from "react";
import { FEATURES } from "../data";
import LucideIcon from "./LucideIcon";
import { motion } from "motion/react";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-white relative">
      {/* Dynamic background decoration */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-emerald-50/50 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs sm:text-sm block">
            OUR ADVANTAGES
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Why Shop At Low Price Super Shop?
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            We operate on thin profit margins to deliver wholesale grocery rates to the local households of Raver.
          </p>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Features Bento Grid (6 features requested) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Custom Icon wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-50 flex items-center justify-center text-emerald-600 border border-emerald-100/50">
                  <LucideIcon name={feature.iconName} className="className w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-slate-800 text-lg sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Bottom detail marker */}
              <div className="pt-6 mt-4 border-t border-slate-50 flex items-center justify-between text-[11px] font-bold text-emerald-600 uppercase tracking-widest">
                <span>Value Guaranteed</span>
                <LucideIcon name="Check" className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Callout Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-emerald-950 to-slate-900 p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl"
        >
          {/* Subtle light orb */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <span className="text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-widest">
                OUR CUSTOMER PLEDGE
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-snug">
                Found a lower price? We'll match it and give you premium brand choices instantly!
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                At Low Price Super Shop, we guarantee original products sourced directly from manufacturers. No adulteration, no expired stock, and absolutely full weight scales.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-900/50 hover:shadow-emerald-950 transition-all text-center"
              >
                Get Directions To Shop
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
