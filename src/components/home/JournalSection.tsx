"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "The Art of Handblock Printing",
    category: "Artisan Stories",
    image: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=800&q=80",
    link: "/journal",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Styling Your Festive Look",
    category: "Style Guide",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
    link: "/journal",
    span: "col-span-1",
  },
  {
    id: 3,
    title: "Summer Ethnic Trends 2026",
    category: "Trend Report",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    link: "/journal",
    span: "col-span-1",
  },
  {
    id: 4,
    title: "Modern Saree Draping Styles",
    category: "Lookbook",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    link: "/journal",
    span: "col-span-1 md:col-span-2",
  },
];

export default function JournalSection() {
  return (
    <section className="py-16 md:py-24 bg-section-peach">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-coral mb-3 font-medium">Read</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal">
              Curated <span className="italic gradient-text-coral">Stories</span>
            </h2>
          </div>
          <Link
            href="/journal"
            className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-earth hover:text-coral transition-colors group font-semibold"
          >
            View Journal
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${article.span} aspect-[4/3] md:aspect-auto`}
            >
              <Link href={article.link} className="block w-full h-full">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block px-3 py-1 mb-3 text-[10px] uppercase tracking-widest font-bold text-white bg-coral/80 rounded-full backdrop-blur-sm">
                    {article.category}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-white leading-snug group-hover:text-peach-light transition-colors">
                    {article.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
