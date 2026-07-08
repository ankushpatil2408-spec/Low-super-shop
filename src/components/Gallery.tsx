import React, { useState } from "react";
import { GALLERY_ITEMS } from "../data";
import { motion, AnimatePresence } from "motion/react";
import LucideIcon from "./LucideIcon";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filters = ["All", "Store View", "Products", "Services"];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Store View") return item.category === "Store View";
    if (activeFilter === "Products") return item.category === "Products";
    if (activeFilter === "Services") return item.category === "Services" || item.category === "Care Section" || item.category === "Store Quality";
    return true;
  });

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs sm:text-sm block">
            STORE TOUR
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Explore Low Price Super Shop
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Take a visual tour of our clean aisles, friendly POS checkouts, and premium organized products.
          </p>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-200"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-emerald-700"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Gallery Image Grid with Framer Motion Layout Animations */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative rounded-3xl overflow-hidden aspect-4/3 bg-slate-100 shadow-sm hover:shadow-lg border border-slate-100"
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                {/* Categorical badge top-left */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-emerald-800 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-50">
                  {item.category}
                </span>

                {/* Metadata bottom left - appears on hover */}
                <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <h4 className="font-display font-bold text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-emerald-300 mt-0.5">
                    Low Price Super Shop • Raver
                  </p>
                </div>

                {/* Micro zoom icon indicator */}
                <div className="absolute right-4 top-4 bg-emerald-600/90 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-70 group-hover:scale-100 duration-300 pointer-events-none">
                  <LucideIcon name="ChevronRight" className="w-4 h-4" />
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Gallery bottom guarantee label */}
        <div className="mt-12 text-center text-xs text-slate-400">
          *Photos represent our actual standards for inventory freshness, storage cleanliness, and shopping lane organization.
        </div>

      </div>
    </section>
  );
}
