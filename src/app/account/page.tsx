"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Package, Heart, Settings, LogOut, ChevronRight, ShoppingBag } from "lucide-react";
import Link from "next/link";

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: User },
  { id: "orders", label: "My Orders", icon: Package },
  { id: "wishlist", label: "Wishlist", icon: Heart },
  { id: "settings", label: "Account Settings", icon: Settings },
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-warm-white pb-24 pt-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b border-sand pb-6">
          <h1 className="font-serif text-4xl text-charcoal">My Account</h1>
          <p className="text-earth mt-2">Welcome back, Sarah. Manage your orders and preferences here.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-sand p-4 sticky top-32">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                        isActive
                          ? "bg-cream text-coral font-semibold"
                          : "text-earth hover:bg-cream hover:text-charcoal"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} className={isActive ? "text-coral" : ""} />
                        <span className="text-sm">{tab.label}</span>
                      </div>
                      {isActive && <ChevronRight size={16} className="text-coral" />}
                    </button>
                  );
                })}
              </nav>
              
              <div className="mt-8 pt-4 border-t border-sand">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-earth hover:bg-cream hover:text-coral transition-all">
                  <LogOut size={18} />
                  <span className="text-sm">Sign Out</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === "dashboard" && (
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-white p-6 rounded-2xl border border-sand shadow-sm text-center">
                        <div className="w-12 h-12 rounded-full bg-peach/20 text-coral mx-auto flex items-center justify-center mb-3">
                          <Package size={20} />
                        </div>
                        <h3 className="font-serif text-2xl text-charcoal mb-1">3</h3>
                        <p className="text-xs uppercase tracking-wider text-earth font-medium">Active Orders</p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-sand shadow-sm text-center">
                        <div className="w-12 h-12 rounded-full bg-peach/20 text-coral mx-auto flex items-center justify-center mb-3">
                          <Heart size={20} />
                        </div>
                        <h3 className="font-serif text-2xl text-charcoal mb-1">12</h3>
                        <p className="text-xs uppercase tracking-wider text-earth font-medium">Wishlist Items</p>
                      </div>
                      <div className="bg-white p-6 rounded-2xl border border-sand shadow-sm text-center">
                        <div className="w-12 h-12 rounded-full bg-peach/20 text-coral mx-auto flex items-center justify-center mb-3">
                          <ShoppingBag size={20} />
                        </div>
                        <h3 className="font-serif text-2xl text-charcoal mb-1">2,450</h3>
                        <p className="text-xs uppercase tracking-wider text-earth font-medium">Reward Points</p>
                      </div>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-sand shadow-sm">
                      <h3 className="font-serif text-2xl text-charcoal mb-6">Recent Orders</h3>
                      <div className="space-y-4">
                        {[1, 2].map((i) => (
                          <div key={i} className="flex flex-col sm:flex-row items-center justify-between p-4 border border-sand rounded-xl hover:border-coral/30 transition-colors">
                            <div className="flex items-center gap-4 mb-4 sm:mb-0 w-full sm:w-auto">
                              <div className="w-16 h-20 bg-cream rounded-md overflow-hidden flex-shrink-0">
                                <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=150&q=80" alt="Product" className="w-full h-full object-cover" />
                              </div>
                              <div>
                                <p className="font-medium text-charcoal text-sm">Order #STV-2026-{9483 + i}</p>
                                <p className="text-xs text-earth mt-1">Placed on {i === 1 ? 'August 12' : 'July 24'}, 2026</p>
                                <span className={`inline-block mt-2 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full ${i === 1 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                                  {i === 1 ? 'In Transit' : 'Delivered'}
                                </span>
                              </div>
                            </div>
                            <button className="btn-outline-white !text-charcoal !border-sand hover:!border-coral hover:!text-coral text-xs rounded-full px-5 py-2 w-full sm:w-auto">
                              View Details
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="text-center mt-6">
                        <button onClick={() => setActiveTab("orders")} className="text-xs font-semibold text-coral uppercase tracking-wider hover:underline underline-offset-4">
                          View All Orders
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "orders" && (
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-sand shadow-sm min-h-[400px] flex items-center justify-center text-center">
                    <div>
                      <Package size={48} className="mx-auto text-sand mb-4" />
                      <h3 className="font-serif text-2xl text-charcoal mb-2">Order History</h3>
                      <p className="text-earth max-w-sm mx-auto">Track your packages and view past purchases here.</p>
                    </div>
                  </div>
                )}
                
                {activeTab === "wishlist" && (
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-sand shadow-sm min-h-[400px] flex items-center justify-center text-center">
                    <div>
                      <Heart size={48} className="mx-auto text-sand mb-4" />
                      <h3 className="font-serif text-2xl text-charcoal mb-2">Your Wishlist is Empty</h3>
                      <p className="text-earth max-w-sm mx-auto mb-6">Explore our collections and save your favorite pieces for later.</p>
                      <Link href="/category/new-arrivals" className="btn-coral rounded-full">
                        Start Shopping
                      </Link>
                    </div>
                  </div>
                )}

                {activeTab === "settings" && (
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-sand shadow-sm min-h-[400px] flex items-center justify-center text-center">
                    <div>
                      <Settings size={48} className="mx-auto text-sand mb-4" />
                      <h3 className="font-serif text-2xl text-charcoal mb-2">Account Settings</h3>
                      <p className="text-earth max-w-sm mx-auto">Manage your personal information, addresses, and password.</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// Needed for AnimatePresence
import { AnimatePresence } from "framer-motion";
