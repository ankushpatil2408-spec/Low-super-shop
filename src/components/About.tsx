import React from "react";
import { STORE_CONTACT } from "../data";
import LucideIcon from "./LucideIcon";
import { motion } from "motion/react";

export default function About() {
  const highlights = [
    {
      title: "Trusted Local Legacy",
      description: "Serving the wonderful families of Raver with dedication, integrity, and absolute price honesty.",
      icon: "ShieldCheck",
    },
    {
      title: "Customer-First Philosophy",
      description: "Whether you need a single pen or custom wholesale orders, we serve everyone with extreme care.",
      icon: "Smile",
    },
    {
      title: "Guaranteed Lowest Prices",
      description: "Our special direct-from-brand inventory structures bypass local middle-men to give you maximum cash savings.",
      icon: "BadgePercent",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative side accent lines */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-emerald-50/20 rounded-l-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Story Layout (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="rounded-2xl overflow-hidden h-48 sm:h-56 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400"
                    alt="Groceries display"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 rounded-2xl bg-emerald-600 text-white shadow-xl space-y-2">
                  <span className="text-3xl sm:text-4xl font-display font-extrabold block">20+</span>
                  <span className="text-xs uppercase tracking-wider font-semibold block opacity-90">
                    Trusted Brands
                  </span>
                  <p className="text-xs text-emerald-100">
                    We partner with Nestlé, Unilever, ITC, Britannia, and organic farmers.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="space-y-4 pt-8"
              >
                <div className="p-5 rounded-2xl bg-amber-500 text-white shadow-xl space-y-2">
                  <span className="text-3xl sm:text-4xl font-display font-extrabold block">Low Price</span>
                  <span className="text-xs uppercase tracking-wider font-semibold block opacity-90">
                    Pledge Guarantee
                  </span>
                  <p className="text-xs text-amber-50">
                    Pay lower than normal retail shop rates, always.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden h-48 sm:h-56 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=400"
                    alt="Organized shop racks"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Copy & Highlights (6 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs sm:text-sm block">
                WHO WE ARE
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Your Complete One-Stop Daily Supermarket Shop in Raver
              </h2>
              <div className="h-1 w-20 bg-emerald-500 rounded-full" />
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Founded on the belief that everyday essentials should not carry inflated price tags,{" "}
              <strong>Low Price Super Shop</strong> has grown to become the most reliable and budget-friendly super store in Raver. Conveniently located opposite the IDBI Bank on Bavishe Galli, we provide a spacious, clean, and highly comfortable environment where you can shop at peace.
            </p>

            {/* Structured Highlights */}
            <div className="space-y-5 pt-2">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100">
                    <LucideIcon name={item.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Location Action */}
            <div className="pt-4 flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm hover:text-emerald-700 transition-colors group"
              >
                <span>Find Us & Map Directions</span>
                <LucideIcon name="ArrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
