"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import { navItems } from "@/data/site";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/30 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 250 }}
            className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-sand">
              <span className="font-serif text-xl tracking-[0.15em] text-charcoal">
                SAATVIK
              </span>
              <button onClick={onClose} className="p-1 text-earth hover:text-charcoal">
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto py-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between px-6 py-4 text-charcoal hover:bg-cream transition-colors"
                  >
                    <span className="text-sm uppercase tracking-wider">{item.label}</span>
                    <ChevronRight size={16} className="text-gold" />
                  </Link>
                </motion.div>
              ))}

              <div className="my-4 mx-6 h-px bg-sand" />

              <Link
                href="/wishlist"
                onClick={onClose}
                className="flex items-center justify-between px-6 py-4 text-charcoal hover:bg-cream transition-colors"
              >
                <span className="text-sm uppercase tracking-wider">Wishlist</span>
                <ChevronRight size={16} className="text-gold" />
              </Link>
              <Link
                href="/reviews"
                onClick={onClose}
                className="flex items-center justify-between px-6 py-4 text-charcoal hover:bg-cream transition-colors"
              >
                <span className="text-sm uppercase tracking-wider">Reviews</span>
                <ChevronRight size={16} className="text-gold" />
              </Link>
            </nav>

            {/* Sticky Mobile CTA */}
            <div className="p-6 border-t border-sand bg-white shrink-0">
              <Link
                href="/category/new-arrivals"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-white uppercase tracking-widest font-semibold text-xs shadow-lg shadow-coral/25"
                style={{ background: "linear-gradient(135deg, #E8614A, #F4A57B)" }}
              >
                Shop New Arrivals
              </Link>
            </div>
            {/* Footer */}
            <div className="p-6 border-t border-sand bg-cream shrink-0">
              <p className="text-xs text-earth text-center">
                Pure &middot; Premium &middot; Curated
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
