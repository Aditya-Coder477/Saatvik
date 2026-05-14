"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const slides = [
  {
    id: 0,
    badge: "🌸 New Season Drop",
    headline: "Where Heritage",
    highlight: "Meets Modernity",
    sub: "Curated fashion that blends the richness of Indian artistry with contemporary elegance. Pure, premium, refined.",
    cta: "Shop The Collection",
    ctaHref: "/category/festive-wear",
    secondaryCta: "View Lookbook",
    secondaryHref: "/our-story",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1800&q=85",
    overlay: "from-charcoal/70 via-charcoal/35 to-transparent",
    tint: "",
  },
  {
    id: 1,
    badge: "☀️ Summer Edit 2026",
    headline: "Effortlessly",
    highlight: "Chic & Radiant",
    sub: "Discover our summer western edit — light fabrics, bold silhouettes, breezy elegance for every occasion.",
    cta: "Explore Dresses",
    ctaHref: "/category/dresses",
    secondaryCta: "New Arrivals",
    secondaryHref: "/category/dresses?sort=newest",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1800&q=85",
    overlay: "from-[#2D1A0E]/75 via-[#2D1A0E]/30 to-transparent",
    tint: "after:absolute after:inset-0 after:bg-peach/10",
  },
  {
    id: 2,
    badge: "✨ Festive Season",
    headline: "Celebrate in",
    highlight: "Pure Grandeur",
    sub: "From Lucknowi Chikankari to Chanderi silk — wear India's finest artisan traditions this festive season.",
    cta: "Shop Sarees",
    ctaHref: "/category/sarees",
    secondaryCta: "Our Story",
    secondaryHref: "/our-story",
    image: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=1800&q=85",
    overlay: "from-[#1A0E2D]/75 via-[#1A0E2D]/30 to-transparent",
    tint: "",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goTo = (i: number) => {
    setCurrent(i);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const slide = slides[current];

  return (
    <section className="relative h-[90vh] md:h-[92vh] overflow-hidden bg-charcoal">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt="Saatvik Collection"
            className="w-full h-full object-cover object-center"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />
          {/* warm color accent strip at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-coral via-peach to-lavender opacity-80" />
        </motion.div>
      </AnimatePresence>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute top-6 right-6 md:top-10 md:right-10 z-20 float-anim"
      >
        <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-md text-white border border-white/25 px-4 py-2 rounded-full text-xs tracking-wider font-medium">
          <Sparkles size={12} className="text-peach" />
          {slide.badge}
        </span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-peach mb-5 font-sans font-medium">
                Saatvik • Premium Fashion
              </p>

              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-[1.05] mb-2">
                {slide.headline}
              </h1>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] mb-7">
                <span className="italic" style={{
                  background: "linear-gradient(135deg, #E8614A, #F4A57B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  {slide.highlight}
                </span>
              </h1>

              <p className="text-cream/85 text-base md:text-lg mb-10 leading-relaxed font-light max-w-lg">
                {slide.sub}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={slide.ctaHref} className="btn-coral group">
                  {slide.cta}
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href={slide.secondaryHref} className="btn-outline-white">
                  {slide.secondaryCta}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          onClick={() => goTo((current - 1 + slides.length) % slides.length)}
          className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-white/25 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-400 rounded-full ${
                i === current
                  ? "w-8 h-2 bg-coral"
                  : "w-2 h-2 bg-white/45 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => goTo((current + 1) % slides.length)}
          className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-white/25 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Progress bar */}
      <motion.div
        key={current}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 5.5, ease: "linear" }}
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-coral to-peach origin-left z-20"
      />
    </section>
  );
}
