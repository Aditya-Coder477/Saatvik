"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FashionEditBanner() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl h-[50vh] md:h-[60vh]"
        >
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600&q=85"
            alt="Saatvik Fashion Edit"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#C94830]/85 via-[#E8614A]/50 to-[#D4A72C]/25" />

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-white/10" />
          <div className="absolute -right-8 -top-8 w-48 h-48 rounded-full border border-white/15" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-xl">
            <div className="flex items-center gap-2 mb-5">
              <Sparkles size={14} className="text-peach" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-peach/90 font-semibold">
                Editor's Pick
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-5">
              Your Perfect
              <span className="block italic text-peach">Festive Look</span>
              Awaits
            </h2>

            <p className="text-white/75 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
              Discover our handpicked festive edit — from silk sarees to embroidered anarkalis.
              <em className="not-italic font-light"> Pure, premium, crafted for you.</em>
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/category/traditional"
                className="inline-flex items-center gap-2 bg-white text-coral text-xs uppercase tracking-widest font-semibold px-7 py-3.5 rounded-full hover:bg-cream hover:shadow-lg transition-all duration-300 hover:-translate-y-px group"
              >
                Shop Festive Edit
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/category/western"
                className="inline-flex items-center gap-2 btn-outline-white rounded-full text-xs px-7 py-3.5"
              >
                View All Collections
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
