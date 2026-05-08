"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { instagramPosts } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      {/* Instagram Strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">Follow us</p>
          <h3 className="font-serif text-2xl text-cream mb-8">@saatvik.official</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {instagramPosts.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden img-zoom">
                <img
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-serif text-2xl tracking-[0.15em] text-cream mb-4">SAATVIK</h2>
            <p className="text-sm text-cream/60 leading-relaxed mb-6">
              Pure, premium, curated. Blending the timeless elegance of Indian heritage with contemporary fashion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-cream/40 hover:text-gold transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Shop</h4>
            <ul className="space-y-3">
              {["New Arrivals", "Traditional", "Western", "Best Sellers"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-cream/60 hover:text-cream transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Help</h4>
            <ul className="space-y-3">
              {["Size Guide", "Shipping & Returns", "FAQs", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-cream/60 hover:text-cream transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-1 text-gold/60" />
                <span className="text-sm text-cream/60">hello@saatvik.in</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="mt-1 text-gold/60" />
                <span className="text-sm text-cream/60">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 text-gold/60" />
                <span className="text-sm text-cream/60">Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            &copy; 2026 Saatvik. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
              <Link key={item} href="#" className="text-xs text-cream/40 hover:text-cream/60 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
