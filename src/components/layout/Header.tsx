"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { navItems } from "@/data/site";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount } = useCart();
  const { itemCount: wishlistCount } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        {/* Announcement bar */}
        <div className="bg-charcoal text-cream text-center py-2 text-xs tracking-widest uppercase font-sans">
          Free shipping on orders above ₹2,999 &nbsp;|&nbsp; 15-day easy returns
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 -ml-2 text-charcoal hover:text-gold transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <h1 className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-charcoal font-medium">
                SAATVIK
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm tracking-wide text-earth hover:text-charcoal transition-colors duration-300 relative group uppercase"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1 sm:gap-3">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-charcoal hover:text-gold transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <Link
                href="/wishlist"
                className="p-2 text-charcoal hover:text-gold transition-colors relative"
                aria-label="Wishlist"
              >
                <Heart size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link
                href="/cart"
                className="p-2 text-charcoal hover:text-gold transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-white text-[10px] rounded-full flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
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
              className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-sand p-4"
            >
              <div className="max-w-2xl mx-auto relative">
                <input
                  type="text"
                  placeholder="Search for sarees, kurtas, dresses..."
                  className="w-full py-3 px-4 pr-12 bg-cream border border-sand rounded-none text-sm font-sans focus:outline-none focus:border-gold transition-colors"
                  autoFocus
                />
                <button
                  onClick={() => setSearchOpen(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-earth hover:text-charcoal"
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
      <div className="h-[calc(2rem+4rem)] md:h-[calc(2rem+5rem)]" />
    </>
  );
}
