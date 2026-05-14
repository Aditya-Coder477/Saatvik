"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { instagramPosts } from "@/data/site";

export default function InstagramSection() {
  return (
    <section className="py-14 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.35em] text-earth mb-3 font-medium">Follow Us</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-2">
            <span className="gradient-text-coral">@saatvik</span>
            <span className="text-charcoal">.official</span>
          </h2>
          <p className="text-sm text-earth">Join our community of fashion lovers</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {instagramPosts.map((src, i) => (
            <motion.a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-xl block ${
                i % 2 === 0 ? "aspect-[4/5]" : "aspect-[9/16]"
              }`}
            >
              <img
                src={src}
                alt={`Saatvik Instagram post ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
              />

              {/* Coral hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-coral/70 to-peach/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                <Instagram size={24} className="text-white" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-coral rounded-full px-7 py-3"
          >
            <Instagram size={15} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
