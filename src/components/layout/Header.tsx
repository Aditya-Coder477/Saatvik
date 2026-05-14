"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, ShoppingBag, Menu, X, Tag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { navItems } from "@/data/site";
import MobileNav from "./MobileNav";

const announcements = [
  "🎉 Festive Collection 2026 — Now Live! Shop the Season",
  "✨ Free Shipping on orders above ₹2,999",
  "🔥 Flat 30% Off on All New Arrivals — Limited Time",
  "💎 New Western Edit Just Dropped — Explore Now",
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const { itemCount } = useCart();
  const { itemCount: wishlistCount } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnnouncementIndex((i) => (i + 1) % announcements.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/96 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.07)]"
            : "bg-transparent"
        }`}
      >
        {/* Announcement bar — gradient animated */}
        <div className="announcement-gradient text-white text-center py-2.5 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.p
              key={announcementIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-[11px] tracking-[0.18em] uppercase font-medium"
            >
              {announcements[announcementIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 -ml-2 text-charcoal hover:text-coral transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <h1 className="font-serif text-2xl md:text-3xl tracking-[0.18em] text-charcoal font-semibold transition-all duration-300 group-hover:tracking-[0.22em]">
                SAATVIK
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              {navItems.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[11px] lg:text-xs tracking-wider text-earth hover:text-coral transition-colors duration-300 relative group uppercase font-semibold"
                >
                  {item.label}
                  {i === 0 && (
                    <span className="ml-1.5 inline-block bg-coral text-white text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-full font-semibold leading-none">
                      New
                    </span>
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-coral to-peach group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-charcoal hover:text-coral transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <Link
                href="/wishlist"
                className="p-2 text-charcoal hover:text-coral transition-colors relative"
                aria-label="Wishlist"
              >
                <Heart size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-coral text-white text-[10px] rounded-full flex items-center justify-center font-semibold">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link
                href="/cart"
                className="p-2 text-charcoal hover:text-coral transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-coral text-white text-[10px] rounded-full flex items-center justify-center font-semibold">
                    {itemCount}
                  </span>
                )}
              </Link>
              <Link
                href="/category/new-arrivals"
                className="hidden sm:inline-flex items-center gap-1.5 bg-coral text-white text-xs uppercase tracking-wider font-medium px-4 py-2 rounded-full hover:bg-coral-dark transition-all duration-300 hover:shadow-lg hover:shadow-coral/25 hover:-translate-y-px ml-1"
              >
                <Tag size={12} />
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        {/* Search overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-sand p-4"
            >
              <div className="max-w-2xl mx-auto relative">
                <input
                  type="text"
                  placeholder="Search for sarees, kurtas, dresses..."
                  className="w-full py-3.5 px-5 pr-12 bg-cream border border-sand rounded-full text-sm font-sans focus:outline-none focus:border-coral transition-colors"
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-earth hover:text-coral transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Spacer for fixed header */}
      <div className="h-[calc(2.5rem+4rem)] md:h-[calc(2.5rem+5rem)]" />
    </>
  );
}
