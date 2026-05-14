"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, ChevronRight } from "lucide-react";

const collections = [
  {
    id: "trending-sarees",
    label: "Trending Now",
    name: "Silk Sarees",
    count: "12 styles",
    href: "/category/traditional",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500&q=75",
    color: "#E8614A",
    bg: "from-[#E8614A]/15 to-[#F4A57B]/10",
  },
  {
    id: "kurta-season",
    label: "Kurta Season",
    name: "Festive Kurtas",
    count: "8 styles",
    href: "/category/traditional",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&q=75",
    color: "#D4A72C",
    bg: "from-[#D4A72C]/15 to-[#E8C05A]/10",
  },
  {
    id: "new-western",
    label: "New Western",
    name: "Co-ord Sets",
    count: "10 styles",
    href: "/category/western",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=75",
    color: "#7FAF8A",
    bg: "from-[#7FAF8A]/15 to-[#A3C9AD]/10",
  },
  {
    id: "festive-drops",
    label: "Festive Drops",
    name: "Anarkali Sets",
    count: "6 styles",
    href: "/category/traditional",
    image: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=500&q=75",
    color: "#A78BCA",
    bg: "from-[#A78BCA]/15 to-[#C4AEDE]/10",
  },
  {
    id: "summer-edit",
    label: "Summer Edit",
    name: "Maxi Dresses",
    count: "9 styles",
    href: "/category/western?sort=newest",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=75",
    color: "#E8829A",
    bg: "from-[#E8829A]/15 to-[#F5A0B5]/10",
  },
];

export default function TrendingCollections() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-14 md:py-20 bg-section-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-coral/15 flex items-center justify-center">
              <TrendingUp size={16} className="text-coral" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-coral font-medium">Right Now</p>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal">Trending Collections</h2>
            </div>
          </div>
          <Link
            href="/category/traditional"
            className="hidden md:flex items-center gap-1.5 text-xs uppercase tracking-wider text-earth hover:text-coral transition-colors group font-medium"
          >
            View All
            <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-hidden px-4 pb-2 snap-x-mandatory"
        >
          {collections.map((col, i) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex-shrink-0 w-52 md:w-60 snap-start"
            >
              <Link href={col.href} className="group block">
                {/* Image */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3">
                  <img
                    src={col.image}
                    alt={col.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${col.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

                  {/* Label badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: col.color }}
                    >
                      {col.label}
                    </span>
                  </div>

                  {/* Arrow on hover */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-md">
                    <ChevronRight size={14} style={{ color: col.color }} />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3
                    className="font-serif text-lg text-charcoal group-hover:transition-colors duration-300"
                    style={{ "--hover-color": col.color } as React.CSSProperties}
                  >
                    {col.name}
                  </h3>
                  <p className="text-xs text-earth mt-0.5">{col.count}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
