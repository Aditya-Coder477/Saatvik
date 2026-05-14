import { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "New Arrivals", href: "/category/new-arrivals" },
  { label: "Festive Wear", href: "/category/festive-wear" },
  { label: "Kurtas", href: "/category/kurtas" },
  { label: "Dresses", href: "/category/dresses" },
  { label: "Sarees", href: "/category/sarees" },
  { label: "About Us", href: "/about-us" },
  { label: "Journal", href: "/journal" },
  { label: "Account", href: "/account" },
];

export const trustBadges = [
  { icon: "shield-check", title: "Secure Checkout", description: "256-bit SSL encryption" },
  { icon: "refresh-cw", title: "Easy Returns", description: "15-day hassle-free returns" },
  { icon: "gem", title: "Premium Quality", description: "Handpicked fabrics & finishes" },
  { icon: "truck", title: "Free Shipping", description: "On orders above ₹2,999" },
];

export const sizeChart = {
  headers: ["Size", "Bust (in)", "Waist (in)", "Hip (in)", "Length (in)"],
  rows: [
    ["XS", "32", "26", "35", "52"],
    ["S", "34", "28", "37", "52.5"],
    ["M", "36", "30", "39", "53"],
    ["L", "38", "32", "41", "53.5"],
    ["XL", "40", "34", "43", "54"],
    ["XXL", "42", "36", "45", "54.5"],
  ],
};

export const instagramPosts = [
  "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=300&q=80",
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80",
  "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&q=80",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&q=80",
  "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&q=80",
];
