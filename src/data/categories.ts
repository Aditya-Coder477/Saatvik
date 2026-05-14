import { Category } from "@/types";

export const categories: Category[] = [
  {
    name: "New Arrivals",
    slug: "new-arrivals",
    description: "The latest bright and beautiful additions to our collection. Stay ahead of the trend.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    productCount: 12,
  },
  {
    name: "Festive Wear",
    slug: "festive-wear",
    description: "Luxury Indian festive fashion with rich accents, perfect for weddings and celebrations.",
    image: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=800&q=80",
    productCount: 8,
  },
  {
    name: "Kurtas",
    slug: "kurtas",
    description: "Elegant everyday ethnic wear featuring colorful prints, breathable cotton, and artisan details.",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80",
    productCount: 15,
  },
  {
    name: "Dresses",
    slug: "dresses",
    description: "Contemporary western fashion with modern bright campaigns, floral prints, and summer edits.",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
    productCount: 10,
  },
  {
    name: "Sarees",
    slug: "sarees",
    description: "Premium Indian elegance with luxurious silk and organza edits for timeless storytelling.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
    productCount: 10,
  },
];

export const subcategories = {
  "new-arrivals": ["Trending", "Just In", "Summer Collection"],
  "festive-wear": ["Lehengas", "Anarkalis", "Sharara Sets"],
  "kurtas": ["Cotton Kurtas", "Kurta Sets", "Short Kurtis"],
  "dresses": ["Maxi Dresses", "Floral Dresses", "Satin Dresses"],
  "sarees": ["Silk Sarees", "Organza Sarees", "Chiffon Sarees"],
};
