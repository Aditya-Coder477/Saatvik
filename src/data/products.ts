import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Regal Chanderi Anarkali",
    slug: "regal-chanderi-anarkali",
    category: "festive-wear",
    subcategory: "Anarkalis",
    price: 8499,
    originalPrice: 10999,
    description:
      "A timeless Chanderi silk anarkali that flows like poetry. Hand-finished with delicate gold thread borders, this piece captures the regality of heritage Indian craftsmanship while maintaining an effortlessly modern silhouette.",
    fabricDetails:
      "Pure Chanderi silk with gold zari border. Lined with soft cotton for comfort. Hand-finished selvage edges.",
    careInstructions:
      "Dry clean only. Store flat or on padded hangers. Keep away from direct sunlight to preserve colour integrity.",
    fitNotes:
      "Relaxed A-line silhouette. Comfortable through the bust, flares gently from the waist. Ankle length.",
    occasion: ["Festive", "Wedding", "Ceremony"],
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80",
      "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=800&q=80",
    ],
    colors: [
      { name: "Ivory Gold", hex: "#F5E6C8", swatch: "#F5E6C8" },
      { name: "Blush Pink", hex: "#F0C4C4", swatch: "#F0C4C4" },
      { name: "Sage Green", hex: "#C5CFC6", swatch: "#C5CFC6" },
    ],
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: true },
      { label: "XXL", available: false },
    ],
    rating: 4.8,
    reviewCount: 124,
    badges: ["best-seller"],
    inStock: true,
    deliveryDays: 5,
    fabric: "Chanderi Silk",
    fit: "Relaxed",
  },
  {
    id: "2",
    name: "Lucknowi Chikankari Kurta Set",
    slug: "lucknowi-chikankari-kurta-set",
    category: "kurtas",
    subcategory: "Kurta Sets",
    price: 6299,
    originalPrice: 7999,
    description:
      "Hand-embroidered Lucknowi Chikankari on the finest cotton mull. Each stitch tells a story of artisan heritage. Paired with matching palazzo pants for a contemporary fusion look.",
    fabricDetails:
      "100% cotton mull with hand-done Chikankari embroidery. Palazzo in matching cotton with elasticated waist.",
    careInstructions:
      "Gentle hand wash in cold water. Air dry in shade. Light iron on reverse side.",
    fitNotes:
      "Straight-cut kurta with side slits. Palazzo sits at natural waist. Regular fit.",
    occasion: ["Casual", "Office", "Brunch"],
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
      "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=800&q=80",
    ],
    colors: [
      { name: "Pearl White", hex: "#FAF7F2", swatch: "#FAF7F2" },
      { name: "Powder Blue", hex: "#B8D4E3", swatch: "#B8D4E3" },
      { name: "Soft Peach", hex: "#FDDCB5", swatch: "#FDDCB5" },
    ],
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: true },
      { label: "XXL", available: true },
    ],
    rating: 4.6,
    reviewCount: 89,
    badges: ["new"],
    inStock: true,
    deliveryDays: 4,
    fabric: "Cotton Mull",
    fit: "Regular",
  },
  {
    id: "3",
    name: "Handloom Wrap Saree",
    slug: "handloom-wrap-saree",
    category: "sarees",
    subcategory: "Sarees",
    price: 5799,
    originalPrice: 6999,
    description:
      "A pre-draped handloom saree that takes the complexity out of draping while keeping all the elegance intact. Woven on traditional looms, every thread carries the warmth of artisan craft.",
    fabricDetails:
      "Handloom cotton-silk blend. Pre-stitched pleats with concealed hooks. Pallu with contrast border.",
    careInstructions:
      "Dry clean recommended for first wash. Subsequently, gentle hand wash in cold water.",
    fitNotes:
      "Pre-draped for effortless wear. Adjustable waist with hooks. One size fits most (adjustable).",
    occasion: ["Festive", "Wedding", "Reception"],
    images: [
      "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=800&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80",
    ],
    colors: [
      { name: "Rust Orange", hex: "#C4734F", swatch: "#C4734F" },
      { name: "Deep Teal", hex: "#2C6E63", swatch: "#2C6E63" },
      { name: "Wine", hex: "#722F37", swatch: "#722F37" },
    ],
    sizes: [
      { label: "Free Size", available: true },
    ],
    rating: 4.9,
    reviewCount: 67,
    badges: ["best-seller"],
    inStock: true,
    deliveryDays: 6,
    fabric: "Cotton-Silk",
    fit: "Free Size",
  },
  {
    id: "4",
    name: "Gota-Patti Organza Set",
    slug: "gota-patti-organza-set",
    category: "festive-wear",
    subcategory: "Organza Sets",
    price: 9999,
    originalPrice: 12999,
    description:
      "Exquisite organza kurta adorned with handcrafted Gota-Patti work. The sheer elegance of organza meets the festive sparkle of traditional Rajasthani craftsmanship.",
    fabricDetails:
      "Pure organza with Gota-Patti appliqué. Inner slip in soft cotton. Dupatta with scattered gota motifs.",
    careInstructions:
      "Dry clean only. Handle with care — delicate fabric. Store in muslin cover.",
    fitNotes:
      "Semi-fitted bodice, A-line flare. Comes with matching slip, pants, and dupatta.",
    occasion: ["Wedding", "Festive", "Sangeet"],
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
      "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80",
    ],
    colors: [
      { name: "Champagne Gold", hex: "#F7E7CE", swatch: "#F7E7CE" },
      { name: "Dusty Rose", hex: "#DCAE96", swatch: "#DCAE96" },
    ],
    sizes: [
      { label: "XS", available: false },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: true },
      { label: "XXL", available: false },
    ],
    rating: 4.7,
    reviewCount: 45,
    badges: ["new"],
    inStock: true,
    deliveryDays: 7,
    fabric: "Organza",
    fit: "Semi-fitted",
  },
  {
    id: "5",
    name: "Heritage Banarasi Dupatta Set",
    slug: "heritage-banarasi-dupatta-set",
    category: "kurtas",
    subcategory: "Kurta Sets",
    price: 7499,
    description:
      "A minimally elegant kurta paired with a rich Banarasi silk dupatta. The contemporary silhouette of the kurta balances beautifully with the traditional opulence of the woven dupatta.",
    fabricDetails:
      "Kurta in premium cotton-silk. Dupatta in Banarasi silk with antique gold motifs. Pants in soft lycra cotton.",
    careInstructions:
      "Dupatta: dry clean only. Kurta and pants: gentle machine wash cold.",
    fitNotes:
      "Straight kurta with minimal flare. Mid-calf length. Pants with elastic waist.",
    occasion: ["Festive", "Puja", "Ceremony"],
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80",
      "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=800&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
    ],
    colors: [
      { name: "Midnight Blue", hex: "#1B3A5C", swatch: "#1B3A5C" },
      { name: "Maroon", hex: "#6B2737", swatch: "#6B2737" },
      { name: "Emerald", hex: "#2D6A4F", swatch: "#2D6A4F" },
    ],
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: false },
      { label: "XXL", available: false },
    ],
    rating: 4.5,
    reviewCount: 38,
    badges: [],
    inStock: true,
    deliveryDays: 5,
    fabric: "Cotton-Silk / Banarasi",
    fit: "Straight",
  },
  {
    id: "6",
    name: "Boho-Chic Maxi Dress",
    slug: "boho-chic-maxi-dress",
    category: "dresses",
    subcategory: "Maxi Dresses",
    price: 4299,
    originalPrice: 5499,
    description:
      "Effortless bohemian elegance in a floor-length silhouette. Crafted in breathable viscose with artisanal block-print details, this maxi dress moves beautifully from brunch to sunset soirées.",
    fabricDetails:
      "100% viscose rayon with block-printed details. Fully lined bodice. Adjustable spaghetti straps.",
    careInstructions:
      "Machine wash cold, gentle cycle. Hang to dry. Iron on low heat if needed.",
    fitNotes:
      "Relaxed fit through body. Tiered skirt adds volume. True to size — take your regular size.",
    occasion: ["Casual", "Brunch", "Beach", "Travel"],
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
    ],
    colors: [
      { name: "Terracotta", hex: "#C87941", swatch: "#C87941" },
      { name: "Ocean Blue", hex: "#5B8FB9", swatch: "#5B8FB9" },
      { name: "Olive", hex: "#808A5C", swatch: "#808A5C" },
    ],
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: true },
      { label: "XXL", available: true },
    ],
    rating: 4.7,
    reviewCount: 156,
    badges: ["best-seller"],
    inStock: true,
    deliveryDays: 3,
    fabric: "Viscose Rayon",
    fit: "Relaxed",
  },
  {
    id: "7",
    name: "Structured Linen Co-ord Set",
    slug: "structured-linen-coord-set",
    category: "new-arrivals",
    subcategory: "Co-ord Sets",
    price: 5499,
    description:
      "Modern power dressing meets natural luxury. This structured blazer and trouser set in premium linen makes a statement at the boardroom and beyond. Impeccably tailored for the contemporary woman.",
    fabricDetails:
      "Premium European linen blend (70% linen, 30% cotton). Half-lined blazer. Trousers with side zip and hook closure.",
    careInstructions:
      "Dry clean or machine wash cold, gentle cycle. Iron while slightly damp for best results.",
    fitNotes:
      "Blazer is slightly oversized for a modern fit. Trousers are high-waisted with a straight leg.",
    occasion: ["Office", "Formal", "Date Night"],
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
    ],
    colors: [
      { name: "Sand", hex: "#D4C5A9", swatch: "#D4C5A9" },
      { name: "Charcoal", hex: "#4A4A4A", swatch: "#4A4A4A" },
      { name: "Off-White", hex: "#F5F0EB", swatch: "#F5F0EB" },
    ],
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: false },
      { label: "XXL", available: false },
    ],
    rating: 4.4,
    reviewCount: 72,
    badges: ["new"],
    inStock: true,
    deliveryDays: 4,
    fabric: "Linen Blend",
    fit: "Modern",
  },
  {
    id: "8",
    name: "Satin Slip Dress",
    slug: "satin-slip-dress",
    category: "dresses",
    subcategory: "Slip Dresses",
    price: 3799,
    originalPrice: 4599,
    description:
      "The ultimate evening essential. Our signature satin slip dress drapes like liquid gold, skimming the body with effortless sensuality. Adjustable straps and a cowl neckline create timeless allure.",
    fabricDetails:
      "Premium satin with matte finish. Bias-cut construction for natural drape. Adjustable spaghetti straps.",
    careInstructions:
      "Hand wash in cold water with mild detergent. Do not wring. Lay flat to dry.",
    fitNotes:
      "Bias-cut — skims the body without clinging. Midi length (hits below knee). Consider sizing up for a looser drape.",
    occasion: ["Date Night", "Party", "Evening"],
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
    ],
    colors: [
      { name: "Champagne", hex: "#F7E7CE", swatch: "#F7E7CE" },
      { name: "Black", hex: "#1A1A1A", swatch: "#1A1A1A" },
      { name: "Dusty Rose", hex: "#D4A5A5", swatch: "#D4A5A5" },
    ],
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: true },
      { label: "XXL", available: false },
    ],
    rating: 4.8,
    reviewCount: 203,
    badges: ["best-seller"],
    inStock: true,
    deliveryDays: 3,
    fabric: "Satin",
    fit: "Slim",
  },
  {
    id: "9",
    name: "Corset-Style Bustier Top",
    slug: "corset-style-bustier-top",
    category: "new-arrivals",
    subcategory: "Tops",
    price: 2999,
    description:
      "Structured yet feminine, this corset-inspired bustier top features boning details and a sweetheart neckline. Layer under blazers or style solo for a bold evening look.",
    fabricDetails:
      "Cotton-spandex blend with boning inserts. Smocked back panel for comfortable stretch. Invisible side zip.",
    careInstructions:
      "Hand wash cold. Reshape while damp. Do not tumble dry.",
    fitNotes:
      "Fitted and structured. Boning provides support. Smocked back allows 1-2 inches of stretch.",
    occasion: ["Party", "Date Night", "Cocktail"],
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
    ],
    colors: [
      { name: "Ivory", hex: "#FFFFF0", swatch: "#FFFFF0" },
      { name: "Black", hex: "#1A1A1A", swatch: "#1A1A1A" },
    ],
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: false },
      { label: "XXL", available: false },
    ],
    rating: 4.3,
    reviewCount: 51,
    badges: ["new"],
    inStock: true,
    deliveryDays: 3,
    fabric: "Cotton-Spandex",
    fit: "Fitted",
  },
  {
    id: "10",
    name: "Oversized Blazer Set",
    slug: "oversized-blazer-set",
    category: "new-arrivals",
    subcategory: "Co-ord Sets",
    price: 6799,
    originalPrice: 8499,
    description:
      "Commanding presence meets effortless style. Our oversized blazer set features a relaxed double-breasted blazer paired with tailored wide-leg trousers. A wardrobe investment piece.",
    fabricDetails:
      "Poly-viscose blend with subtle texture. Fully lined blazer with padded shoulders. Trousers with pressed creases.",
    careInstructions:
      "Dry clean recommended. Steam to remove wrinkles. Store on broad-shouldered hangers.",
    fitNotes:
      "Blazer is intentionally oversized — take your regular size. Trousers have a high rise with wide leg.",
    occasion: ["Office", "Formal", "Event"],
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    ],
    colors: [
      { name: "Camel", hex: "#C19A6B", swatch: "#C19A6B" },
      { name: "Navy", hex: "#1B2A4A", swatch: "#1B2A4A" },
      { name: "Cream", hex: "#FAF7F2", swatch: "#FAF7F2" },
    ],
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: true },
      { label: "XXL", available: true },
    ],
    rating: 4.6,
    reviewCount: 94,
    badges: [],
    inStock: true,
    deliveryDays: 4,
    fabric: "Poly-Viscose",
    fit: "Oversized",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.badges.includes("best-seller"));
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.badges.includes("new"));
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter((p) => p.id !== productId && p.category === product.category)
    .slice(0, limit);
}

export function getCompleteTheLook(productId: string, limit = 3): Product[] {
  const product = getProductById(productId);
  if (!product) return [];
  return products
    .filter((p) => p.id !== productId && p.category !== product.category)
    .slice(0, limit);
}
