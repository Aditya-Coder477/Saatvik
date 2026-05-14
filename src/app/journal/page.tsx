"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "The Art of Handblock Printing",
    category: "Artisan Stories",
    image: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=800&q=80",
    excerpt: "Discover the centuries-old technique of creating intricate patterns using carved wooden blocks in the heart of Rajasthan.",
    date: "August 12, 2026",
  },
  {
    id: 2,
    title: "Styling Your Festive Look",
    category: "Style Guide",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
    excerpt: "From intimate pujas to grand weddings, here's how to accessorize and drape for the upcoming festive season.",
    date: "July 28, 2026",
  },
  {
    id: 3,
    title: "Summer Ethnic Trends 2026",
    category: "Trend Report",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    excerpt: "Lightweight fabrics, pastel palettes, and relaxed silhouettes taking over this season's ethnic fashion.",
    date: "July 15, 2026",
  },
  {
    id: 4,
    title: "Modern Saree Draping Styles",
    category: "Lookbook",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    excerpt: "Rethink the classic six yards with contemporary drapes that are both comfortable and striking.",
    date: "June 02, 2026",
  },
  {
    id: 5,
    title: "The Story of Chanderi Silk",
    category: "Artisan Stories",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
    excerpt: "Exploring the luminous texture and historical significance of India's most beloved handloom silk.",
    date: "May 18, 2026",
  },
  {
    id: 6,
    title: "Building a Capsule Wardrobe",
    category: "Style Guide",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
    excerpt: "Essential pieces every woman needs for a versatile, elegant, and timeless ethnic wardrobe.",
    date: "May 04, 2026",
  },
];

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-warm-white pb-24">
      {/* Header */}
      <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto text-center border-b border-sand">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-xs uppercase tracking-[0.4em] text-coral mb-4 font-semibold">The Journal</p>
          <h1 className="font-serif text-5xl md:text-7xl text-charcoal mb-6">
            Curated <span className="italic gradient-text-coral">Stories</span>
          </h1>
          <p className="text-earth max-w-2xl mx-auto leading-relaxed">
            Exploring the intersection of heritage craft, modern styling, and the artisans who bring our vision to life.
          </p>
        </motion.div>
      </div>

      {/* Featured Article */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <img
              src={articles[0].image}
              alt={articles[0].title}
              className="w-full aspect-[4/3] md:aspect-[3/2] object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-6">
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-coral">
              <span>{articles[0].category}</span>
              <span className="w-1 h-1 rounded-full bg-sand" />
              <span className="text-earth">{articles[0].date}</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight">
              {articles[0].title}
            </h2>
            <p className="text-earth text-lg leading-relaxed">
              {articles[0].excerpt}
            </p>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 btn-coral rounded-full px-7 py-3.5 mt-4"
            >
              Read Full Story <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-10 md:gap-y-16">
          {articles.slice(1).map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Link href="/journal" className="block mb-6 overflow-hidden rounded-xl">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-widest text-coral">
                  <span>{article.category}</span>
                  <span className="w-1 h-1 rounded-full bg-sand" />
                  <span className="text-earth">{article.date}</span>
                </div>
                <h3 className="font-serif text-2xl text-charcoal group-hover:text-coral transition-colors">
                  <Link href="/journal">{article.title}</Link>
                </h3>
                <p className="text-earth line-clamp-2 leading-relaxed text-sm">
                  {article.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Load More */}
        <div className="text-center mt-20">
          <button className="btn-outline-white !text-charcoal !border-charcoal hover:!bg-charcoal hover:!text-white rounded-full">
            Load More Stories
          </button>
        </div>
      </div>
    </div>
  );
}
