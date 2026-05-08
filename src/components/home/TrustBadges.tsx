"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, RefreshCw, Gem, Truck } from "lucide-react";

const badges = [
  { Icon: ShieldCheck, title: "Secure Checkout", desc: "256-bit SSL encryption" },
  { Icon: RefreshCw, title: "Easy Returns", desc: "15-day hassle-free returns" },
  { Icon: Gem, title: "Premium Quality", desc: "Handpicked fabrics & finishes" },
  { Icon: Truck, title: "Free Shipping", desc: "On orders above ₹2,999" },
];

export default function TrustBadges() {
  return (
    <section className="py-12 md:py-16 border-t border-sand">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <Icon size={28} className="mx-auto mb-3 text-gold" strokeWidth={1.5} />
              <h4 className="text-sm font-medium text-charcoal mb-1">{title}</h4>
              <p className="text-xs text-earth">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
