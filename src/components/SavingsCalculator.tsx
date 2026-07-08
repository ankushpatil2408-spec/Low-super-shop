import React, { useState } from "react";
import LucideIcon from "./LucideIcon";
import { motion } from "motion/react";

export default function SavingsCalculator() {
  const [groceries, setGroceries] = useState<number>(4000);
  const [personalCare, setPersonalCare] = useState<number>(1500);
  const [household, setHousehold] = useState<number>(1000);
  const [snacks, setSnacks] = useState<number>(1000);

  // Compute spendings
  const totalMarketSpend = groceries + personalCare + household + snacks;
  // Assumed discount average rate is 18% at Low Price Super Shop
  const discountRate = 0.18;
  const monthlySavings = Math.round(totalMarketSpend * discountRate);
  const ourShopPrice = totalMarketSpend - monthlySavings;
  const annualSavings = monthlySavings * 12;

  // Visual highlights for what they can do with savings
  const rewards = [
    {
      savingsNeeded: 1500,
      title: "1 Month Electricity Bill",
      description: "Save enough to cover your typical home electricity bill easily.",
      icon: "Zap",
    },
    {
      savingsNeeded: 5000,
      title: "Yearly School Books Set",
      description: "Genuinely pays for your children's notebooks and school kits.",
      icon: "PenTool",
    },
    {
      savingsNeeded: 12000,
      title: "Brand New Gas Stove or Cooker",
      description: "Upgrade your household appliances completely for free!",
      icon: "ChefHat",
    },
  ];

  return (
    <section id="calculator" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs sm:text-sm block">
            INTERACTIVE SAVINGS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Calculate Your Monthly Grocery Savings
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Slide the bars below to match your typical household spend and see how much you save by switching to Low Price Super Shop!
          </p>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Calculator layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Sliders Container (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-100 shadow-sm space-y-8 flex flex-col justify-center">
            <h3 className="font-display font-bold text-slate-800 text-lg sm:text-xl border-b border-slate-50 pb-4">
              Enter Your Estimated Monthly Spending
            </h3>

            {/* Grocery Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold text-slate-700">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  Grains & Groceries (Atta, Rice, Oils)
                </span>
                <span className="text-emerald-600 font-mono bg-emerald-50 px-2.5 py-0.5 rounded-lg">
                  ₹{groceries}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="15000"
                step="500"
                value={groceries}
                onChange={(e) => setGroceries(Number(e.target.value))}
                className="w-full accent-emerald-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Min: ₹1,000</span>
                <span>Max: ₹15,000</span>
              </div>
            </div>

            {/* Personal Care Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold text-slate-700">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  Personal Care (Soaps, Toothpastes, Shampoos)
                </span>
                <span className="text-emerald-600 font-mono bg-emerald-50 px-2.5 py-0.5 rounded-lg">
                  ₹{personalCare}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="5000"
                step="250"
                value={personalCare}
                onChange={(e) => setPersonalCare(Number(e.target.value))}
                className="w-full accent-emerald-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Min: ₹500</span>
                <span>Max: ₹5,000</span>
              </div>
            </div>

            {/* Snacks & Drinks Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold text-slate-700">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  Snacks & Tea/Coffee Beverages
                </span>
                <span className="text-emerald-600 font-mono bg-emerald-50 px-2.5 py-0.5 rounded-lg">
                  ₹{snacks}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="5000"
                step="250"
                value={snacks}
                onChange={(e) => setSnacks(Number(e.target.value))}
                className="w-full accent-emerald-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Min: ₹500</span>
                <span>Max: ₹5,000</span>
              </div>
            </div>

            {/* Household & Cleaning Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold text-slate-700">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                  Cleaning & Kitchen Needs
                </span>
                <span className="text-emerald-600 font-mono bg-emerald-50 px-2.5 py-0.5 rounded-lg">
                  ₹{household}
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="4000"
                step="100"
                value={household}
                onChange={(e) => setHousehold(Number(e.target.value))}
                className="w-full accent-emerald-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>Min: ₹300</span>
                <span>Max: ₹4,000</span>
              </div>
            </div>

          </div>

          {/* Savings Outcome Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-800 to-emerald-950 p-6 sm:p-10 rounded-3xl text-white flex flex-col justify-between relative overflow-hidden shadow-xl">
            {/* Background glowing circle */}
            <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-white/5 blur-2xl" />

            <div className="space-y-6 relative z-10">
              <div className="space-y-1">
                <span className="text-emerald-300 text-xs font-bold uppercase tracking-widest">
                  YOUR POTENTIAL SAVINGS
                </span>
                <h4 className="font-display font-black text-2xl tracking-tight">
                  Low Price Super Shop vs Market
                </h4>
              </div>

              {/* Monthly Savings Display */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-1.5 backdrop-blur-md">
                <p className="text-xs text-emerald-200 uppercase tracking-wider font-semibold">
                  Monthly Savings (Avg 18%)
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-4xl text-amber-400">
                    ₹{monthlySavings}
                  </span>
                  <span className="text-xs text-slate-300">/ per month</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-normal">
                  Your monthly bill drops from <strong className="text-white">₹{totalMarketSpend}</strong> to{" "}
                  <strong className="text-emerald-300">₹{ourShopPrice}</strong>!
                </p>
              </div>

              {/* Annual Savings Display */}
              <div className="space-y-1">
                <p className="text-xs text-emerald-200 uppercase tracking-wider font-semibold">
                  Guaranteed Annual Cash Saved
                </p>
                <h5 className="font-display font-black text-5xl tracking-tight text-white">
                  ₹{annualSavings}
                </h5>
                <span className="text-[11px] text-slate-300 block">
                  *Based on typical wholesale supermarket pricing index in Raver.
                </span>
              </div>
            </div>

            {/* Micro Goals unlocked */}
            <div className="space-y-4 pt-8 border-t border-white/10 mt-8">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                What this can buy in Raver:
              </p>
              <div className="space-y-3">
                {rewards.map((reward, i) => {
                  const isUnlocked = annualSavings >= reward.savingsNeeded;
                  return (
                    <div
                      key={i}
                      className={`flex gap-3 items-start transition-all duration-300 ${
                        isUnlocked ? "opacity-100" : "opacity-40"
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs ${
                          isUnlocked ? "bg-amber-400 text-emerald-950" : "bg-white/10 text-slate-400"
                        }`}
                      >
                        <LucideIcon name={reward.icon} className="w-4 h-4" />
                      </div>
                      <div>
                        <h6 className="font-bold text-xs flex items-center gap-1.5">
                          <span>{reward.title}</span>
                          {isUnlocked && (
                            <span className="text-[9px] bg-emerald-500 text-white px-1.5 py-0.2 rounded-full uppercase">
                              Covered!
                            </span>
                          )}
                        </h6>
                        <p className="text-[10px] text-slate-300">{reward.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
