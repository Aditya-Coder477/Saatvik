"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StoryTeaser() {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80"
            alt="Saatvik artisan craftsmanship"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent rounded-2xl" />
          {/* Floating accent card */}
          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-[160px]">
            <p className="text-xs uppercase tracking-wider text-coral font-semibold mb-1">Est. 2020</p>
            <p className="text-sm font-serif text-charcoal leading-tight">500+ Happy Customers</p>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="py-4"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-coral mb-4 font-semibold">Our Story</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
            Rooted in <span className="italic gradient-text-coral">Tradition</span>,
            <br />Designed for Today
          </h2>
          <div className="w-12 h-[2px] mb-6" style={{ background: "linear-gradient(to right, #E8614A, #F4A57B)" }} />
          <p className="text-earth leading-relaxed mb-4 text-[15px]">
            Saatvik was born from a belief that purity and elegance are timeless. We bring together India&apos;s finest artisan traditions — from Lucknowi Chikankari to Chanderi silk — with modern silhouettes.
          </p>
          <p className="text-earth leading-relaxed mb-8 text-[15px]">
            Every piece is thoughtfully curated, ethically crafted, and designed to make you feel as beautiful as the heritage behind it.
          </p>
          <Link
            href="/about-us"
            className="inline-flex items-center gap-2.5 btn-coral rounded-full px-7 py-3.5 group"
          >
            Read Our Story
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
