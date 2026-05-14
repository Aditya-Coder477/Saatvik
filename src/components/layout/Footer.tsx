"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Instagram, Mail, MapPin, Phone, ArrowRight, Send } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-charcoal text-cream/80">
      {/* Newsletter Strip */}
      <div className="relative overflow-hidden">
        <div
          className="py-12 px-4"
          style={{
            background: "linear-gradient(135deg, #C94830 0%, #E8614A 40%, #D4A72C 100%)",
          }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-white/75 mb-2 font-medium">Stay in the Loop</p>
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-3">
              Get Exclusive Offers & <span className="italic">Style Updates</span>
            </h3>
            <p className="text-white/70 text-sm mb-7">
              Be the first to know about new collections, festive drops, and members-only deals.
            </p>
            {subscribed ? (
              <p className="text-white font-medium text-sm">
                🎉 Thank you! You're on the list.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex max-w-md mx-auto gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-3.5 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full text-white placeholder-white/50 text-sm focus:outline-none focus:border-white/60 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-white text-coral px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-cream transition-colors"
                >
                  <Send size={14} />
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2
              className="font-serif text-2xl tracking-[0.18em] mb-4"
              style={{
                background: "linear-gradient(135deg, #E8614A, #F4A57B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              SAATVIK
            </h2>
            <p className="text-sm text-cream/55 leading-relaxed mb-6">
              Pure, premium, curated. Blending the timeless elegance of Indian heritage with contemporary fashion.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-cream/40 hover:text-coral hover:border-coral/50 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-cream/40 hover:text-coral hover:border-coral/50 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-coral mb-5 font-semibold">Shop</h4>
            <ul className="space-y-3">
              {[
                { label: "New Arrivals", href: "/category/new-arrivals" },
                { label: "Festive Wear", href: "/category/festive-wear" },
                { label: "Kurtas", href: "/category/kurtas" },
                { label: "Dresses", href: "/category/dresses" },
                { label: "Sarees", href: "/category/sarees" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/55 hover:text-coral transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-coral mb-5 font-semibold">Help</h4>
            <ul className="space-y-3">
              {["Size Guide", "Shipping & Returns", "FAQs", "Contact Us", "Track Order"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-cream/55 hover:text-coral transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-coral mb-5 font-semibold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={14} className="mt-0.5 text-coral/60" />
                <span className="text-sm text-cream/55">hello@saatvik.in</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} className="mt-0.5 text-coral/60" />
                <span className="text-sm text-cream/55">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-0.5 text-coral/60" />
                <span className="text-sm text-cream/55">Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/35">
            © 2026 Saatvik. All rights reserved. Crafted with love in India.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
              <Link key={item} href="#" className="text-xs text-cream/35 hover:text-coral/70 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
