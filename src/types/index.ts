// ── Saatvik Type Definitions ──

export interface ProductColor {
  name: string;
  hex: string;
  swatch: string;
}

export interface ProductSize {
  label: string;
  available: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "traditional" | "western";
  subcategory: string;
  price: number;
  originalPrice?: number;
  description: string;
  fabricDetails: string;
  careInstructions: string;
  fitNotes: string;
  occasion: string[];
  images: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
  rating: number;
  reviewCount: number;
  badges: ("new" | "best-seller")[];
  inStock: boolean;
  deliveryDays: number;
  fabric: string;
  fit: string;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  title: string;
  body: string;
  photos: string[];
  fitFeedback: "true-to-size" | "runs-small" | "runs-large";
  helpful: number;
  size: string;
}

export interface CartItem {
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TrustBadge {
  icon: string;
  title: string;
  description: string;
}

export interface FilterState {
  sizes: string[];
  colors: string[];
  priceRange: [number, number];
  fabrics: string[];
  occasions: string[];
  fits: string[];
}

export type SortOption =
  | "popularity"
  | "newest"
  | "price-low"
  | "price-high";
