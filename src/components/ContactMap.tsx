import React, { useState } from "react";
import { STORE_CONTACT } from "../data";
import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";

export default function ContactMap() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("Product Availability Inquiry");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // Simulate sending message
    setIsSent(true);
    setName("");
    setPhone("");
    setMessage("");

    setTimeout(() => {
      setIsSent(false);
    }, 5000);
  };

  const contactCards = [
    {
      title: "Store Location",
      detail: STORE_CONTACT.address,
      subDetail: "Opposite IDBI Bank, Raver Taluka",
      icon: "MapPin",
      color: "text-red-500 bg-red-50 border-red-100",
    },
    {
      title: "Call Store",
      detail: STORE_CONTACT.phone,
      subDetail: "Available for home delivery queries",
      icon: "Phone",
      color: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      title: "Working Hours",
      detail: STORE_CONTACT.workingHours,
      subDetail: "Open on Sundays & Public Holidays",
      icon: "Clock",
      color: "text-blue-500 bg-blue-50 border-blue-100",
    },
    {
      title: "Electronic Mail",
      detail: STORE_CONTACT.email,
      subDetail: "For business sales and invoices",
      icon: "Mail",
      color: "text-amber-500 bg-amber-50 border-amber-100",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs sm:text-sm block">
            GET IN TOUCH
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Contact & Location Directions
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            We are conveniently located directly opposite IDBI Bank on Bavishe Galli. Stop by today or call us for local home delivery queries.
          </p>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactCards.map((card, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              key={i}
              className="p-6 bg-slate-50/50 hover:bg-white rounded-3xl border border-slate-100 hover:border-emerald-100 hover:shadow-lg hover:shadow-emerald-50/20 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${card.color}`}>
                  <LucideIcon name={card.icon} className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-normal font-semibold">
                    {card.detail}
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 mt-4 border-t border-slate-100 pt-3">
                {card.subDetail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Layout split: Map on left, Inquiry form on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map display (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-150 shadow-md min-h-[400px] flex flex-col justify-between bg-slate-100">
            {/* Embedded Iframe Map focused opposite IDBI Bank Raver */}
            <iframe
              title="Low Price Super Shop Location opposite IDBI Bank, Raver"
              src={STORE_CONTACT.gmapEmbedUrl}
              className="w-full h-full min-h-[350px] border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            <div className="bg-emerald-900 text-white p-4 text-xs sm:text-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="flex items-center gap-2">
                <LucideIcon name="MapPin" className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>Bavishe Galli, Raver, Maharashtra</strong> (Opp. IDBI Bank)</span>
              </div>
              <a
                href="https://maps.google.com/?q=IDBI+Bank,+Raver,+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-3 py-1.5 rounded text-[11px] uppercase shrink-0 tracking-wider text-center"
              >
                Open Google Maps
              </a>
            </div>
          </div>

          {/* Form container (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-slate-800 text-lg sm:text-xl border-b border-slate-50 pb-4">
                Send Direct Message
              </h3>
              <p className="text-xs text-slate-500 leading-normal">
                Have bulk orders or want to verify if a brand is in stock? Fill out the fast form below to query our store administrators directly.
              </p>
            </div>

            {isSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="my-6 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center text-sm text-emerald-800 space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto">
                  <LucideIcon name="Check" className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base">Inquiry Dispatched!</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We've received your request! A representative from Low Price Super Shop Raver will get back to your number shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xl border border-slate-100 focus:border-emerald-500 focus:outline-none transition-all"
                    />
                  </div>
                  {/* Phone */}
                  <div className="space-y-1">
                    <label htmlFor="contact-phone" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="e.g. 98XXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xl border border-slate-100 focus:border-emerald-500 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Subject Selector */}
                <div className="space-y-1">
                  <label htmlFor="contact-subject" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Inquiry Subject
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-slate-50 text-slate-800 text-xs px-3.5 py-2.5 rounded-xl border border-slate-100 focus:border-emerald-500 focus:outline-none transition-all"
                  >
                    <option value="Product Availability Inquiry">Product Availability</option>
                    <option value="Bulk Order Rates">Bulk / Wedding Orders</option>
                    <option value="Home Delivery Queries">Home Delivery</option>
                    <option value="Staff Recruitment">Staff Employment</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label htmlFor="contact-message" className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={3}
                    placeholder="Type list of items or request..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 text-xs px-3.5 py-2.5 rounded-xl border border-slate-100 focus:border-emerald-500 focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl transition-colors text-xs uppercase tracking-wider"
                >
                  Send Offline Inquiry
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
