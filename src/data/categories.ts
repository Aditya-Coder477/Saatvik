import { Category } from "@/types";

export const categories: Category[] = [
  {
    name: "Traditional Collection",
    slug: "traditional",
    description: "Heritage weaves, artisan craftsmanship, and timeless silhouettes — reimagined for the modern woman.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
    productCount: 5,
  },
  {
    name: "Western Collection",
    slug: "western",
    description: "Contemporary cuts, premium fabrics, and refined minimalism — designed for every occasion.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    productCount: 5,
  },
];

export const subcategories = {
  traditional: ["Anarkalis", "Kurta Sets", "Sarees", "Organza Sets"],
  western: ["Maxi Dresses", "Co-ord Sets", "Slip Dresses", "Tops"],
};
