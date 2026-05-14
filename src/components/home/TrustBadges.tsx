"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, RefreshCw, Gem, Truck } from "lucide-react";

const badges = [
  {
    Icon: ShieldCheck,
    title: "Secure Checkout",
    desc: "256-bit SSL encryption",
    color: "#7FAF8A",
    bg: "from-[#7FAF8A]/20 to-[#A3C9AD]/10",
  },
  {
    Icon: RefreshCw,
    title: "Easy Returns",
    desc: "15-day hassle-free returns",
    color: "#E8829A",
    bg: "from-[#E8829A]/20 to-[#F5A0B5]/10",
  },
  {
    Icon: Gem,
    title: "Premium Quality",
    desc: "Handpicked fabrics & finishes",
    color: "#A78BCA",
    bg: "from-[#A78BCA]/20 to-[#C4AEDE]/10",
  },
  {
    Icon: Truck,
    title: "Free Shipping",
    desc: "On orders above ₹2,999",
    color: "#E8614A",
    bg: "from-[#E8614A]/20 to-[#F4A57B]/10",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-14 md:py-18 bg-section-ivory border-t border-sand/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {badges.map(({ Icon, title, desc, color, bg }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="text-center p-5 md:p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon container */}
              <div
                className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${bg} flex items-center justify-center`}
              >
                <Icon size={26} style={{ color }} strokeWidth={1.5} />
              </div>
              <h4 className="text-sm font-semibold text-charcoal mb-1">{title}</h4>
              <p className="text-xs text-earth">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
