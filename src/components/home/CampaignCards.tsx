"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const campaigns = [
  {
    id: "festive",
    title: "Festive",
    subtitle: "Collection",
    tagline: "Celebrate in heritage threads",
    badge: "🪔 Now Live",
    href: "/category/traditional",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900&q=80",
    gradient: "from-[#8B3A1A]/80 via-[#C4623A]/55 to-transparent",
    accentColor: "#D4A72C",
    bg: "bg-[#2D1205]",
  },
  {
    id: "summer",
    title: "Summer",
    subtitle: "Edit",
    tagline: "Breezy, bold & beautiful",
    badge: "☀️ Fresh Drops",
    href: "/category/western?sort=newest",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80",
    gradient: "from-[#0E2A1A]/75 via-[#3A6A45]/45 to-transparent",
    accentColor: "#7FAF8A",
    bg: "bg-[#0A1F12]",
  },
  {
    id: "western",
    title: "Western",
    subtitle: "Chic",
    tagline: "Contemporary cuts, premium fabrics",
    badge: "✦ New Season",
    href: "/category/western",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=900&q=80",
    gradient: "from-[#1A0E2D]/80 via-[#4A3566]/50 to-transparent",
    accentColor: "#A78BCA",
    bg: "bg-[#120A1F]",
  },
  {
    id: "ethnic",
    title: "Ethnic",
    subtitle: "Elegance",
    tagline: "Artisan craftsmanship, timeless grace",
    badge: "🌸 Staff Picks",
    href: "/category/traditional",
    image: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=900&q=80",
    gradient: "from-[#2D0E1A]/80 via-[#803040]/50 to-transparent",
    accentColor: "#E8829A",
    bg: "bg-[#1F0A12]",
  },
];

export default function CampaignCards() {
  return (
    <section className="py-12 md:py-16 px-4 bg-section-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-coral mb-2 font-medium">Shop by Campaign</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
            Curated <span className="italic gradient-text-coral">Edits</span> for Every Occasion
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {campaigns.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <Link
                href={c.href}
                className={`group campaign-card relative block aspect-[3/4] overflow-hidden rounded-xl ${c.bg}`}
              >
                {/* Image */}
                <img
                  src={c.image}
                  alt={`${c.title} ${c.subtitle}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${c.gradient}`} />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className="text-[10px] tracking-wider font-semibold px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: `${c.accentColor}CC` }}
                  >
                    {c.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">{c.tagline}</p>
                  <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight">
                    {c.title}
                    <span className="block italic" style={{ color: c.accentColor }}>{c.subtitle}</span>
                  </h3>
                  <div className="mt-3 flex items-center gap-1.5 text-white/80 group-hover:text-white transition-colors">
                    <span className="text-xs uppercase tracking-widest">Explore</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>

                {/* Border glow on hover */}
                <div
                  className="absolute inset-0 rounded-xl border border-transparent group-hover:border-white/20 transition-all duration-500"
                  style={{ boxShadow: `inset 0 0 0 0 ${c.accentColor}` }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
