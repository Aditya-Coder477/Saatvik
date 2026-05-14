"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&q=80"
          alt="Saatvik Story"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-peach-light mb-4">Our Story</p>
            <h1 className="font-serif text-4xl md:text-5xl text-white">The Saatvik Journey</h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-coral mb-4">Who We Are</p>
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">Pure. Premium. Curated.</h2>
          <div className="w-16 h-[1px] bg-coral mx-auto mb-6" />
          <p className="text-earth leading-relaxed">
            Saatvik was born from a deep reverence for India&apos;s textile heritage and a passion for contemporary design. We believe that fashion should honour its origins while moving forward — that purity and modernity can coexist in every stitch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=600&q=80" alt="Artisan weaving" className="w-full aspect-[4/5] object-cover rounded-xl shadow-xl" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="font-serif text-2xl text-charcoal mb-4">Rooted in Craft</h3>
            <p className="text-earth leading-relaxed mb-4">
              We partner with master artisans from Lucknow, Chanderi, Banaras, and Jaipur — families who have perfected their craft across generations. From the intricate threads of Chikankari to the luminous weave of Chanderi silk, every technique we celebrate has a story centuries deep.
            </p>
            <p className="text-earth leading-relaxed">
              Our collections honour these traditions while reimagining them for the modern wardrobe — creating pieces that are equally at home at a festive celebration and a contemporary soirée.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 md:order-1">
            <h3 className="font-serif text-2xl text-charcoal mb-4">Designed for Today</h3>
            <p className="text-earth leading-relaxed mb-4">
              Our western collection brings the same ethos of quality and refinement to contemporary silhouettes. Premium linens, luxurious satins, and thoughtfully structured designs — each piece is an investment in timeless personal style.
            </p>
            <p className="text-earth leading-relaxed">
              We believe in buying less but buying better. Every Saatvik piece is designed to be worn, loved, and kept — not discarded after a season.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 md:order-2">
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80" alt="Modern fashion" className="w-full aspect-[4/5] object-cover rounded-xl shadow-xl" />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center bg-cream p-10 md:p-16 rounded-2xl shadow-sm border border-sand">
          <h3 className="font-serif text-2xl text-charcoal mb-4">The Saatvik Promise</h3>
          <div className="w-16 h-[1px] bg-coral mx-auto mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Purity", desc: "Every fabric is ethically sourced and carefully selected for quality, comfort, and longevity." },
              { title: "Craft", desc: "We support artisan communities by commissioning handcrafted work and paying fair wages." },
              { title: "Elegance", desc: "Our designs balance heritage richness with modern minimalism — understated, never overdone." },
            ].map((item) => (
              <div key={item.title}>
                <h4 className="font-serif text-lg text-coral mb-2">{item.title}</h4>
                <p className="text-sm text-earth leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
