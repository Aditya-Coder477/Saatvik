import { Review } from "@/types";

export const reviews: Review[] = [
  {
    id: "r1", productId: "1", author: "Priya M.", avatar: "PM",
    rating: 5, date: "2026-04-15", title: "Absolutely stunning!",
    body: "The Chanderi silk is incredibly soft and the gold border catches light beautifully. Wore this to my cousin's wedding and received so many compliments. The fit is perfect — true to size.",
    photos: ["https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=400&q=80"],
    fitFeedback: "true-to-size", helpful: 24, size: "M",
  },
  {
    id: "r2", productId: "1", author: "Ananya S.", avatar: "AS",
    rating: 5, date: "2026-04-10", title: "Worth every rupee",
    body: "Premium quality fabric and beautiful finishing. The anarkali has a regal flow that photographs incredibly well. Packaging was also very premium.",
    photos: [], fitFeedback: "true-to-size", helpful: 18, size: "S",
  },
  {
    id: "r3", productId: "6", author: "Ritika K.", avatar: "RK",
    rating: 5, date: "2026-04-20", title: "My go-to summer dress",
    body: "This maxi dress is everything. The viscose fabric is so breathable and the block print details are gorgeous. I've worn it to two brunches already and it still looks brand new.",
    photos: ["https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80"],
    fitFeedback: "true-to-size", helpful: 31, size: "M",
  },
  {
    id: "r4", productId: "8", author: "Meera J.", avatar: "MJ",
    rating: 4, date: "2026-03-28", title: "Beautiful drape",
    body: "The satin quality is excellent and the cowl neck is very flattering. I sized up as suggested and it drapes perfectly. Only wish it came in more colours!",
    photos: [], fitFeedback: "runs-small", helpful: 15, size: "L",
  },
  {
    id: "r5", productId: "3", author: "Kavya R.", avatar: "KR",
    rating: 5, date: "2026-04-05", title: "Game changer for saree lovers",
    body: "As someone who struggles with draping, this pre-draped saree is a lifesaver. It looks completely authentic and takes 2 minutes to put on. The handloom quality is evident.",
    photos: ["https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80"],
    fitFeedback: "true-to-size", helpful: 42, size: "Free Size",
  },
  {
    id: "r6", productId: "7", author: "Nisha P.", avatar: "NP",
    rating: 4, date: "2026-04-18", title: "Perfect work wear",
    body: "The linen quality is superb. Love the oversized blazer fit paired with the high-waisted trousers. Very polished look.",
    photos: [], fitFeedback: "true-to-size", helpful: 12, size: "S",
  },
  {
    id: "r7", productId: "2", author: "Deepa G.", avatar: "DG",
    rating: 5, date: "2026-04-22", title: "Exquisite craftsmanship",
    body: "You can tell each Chikankari stitch is done by hand. The cotton mull fabric is incredibly breathable. Perfect for summer.",
    photos: [], fitFeedback: "true-to-size", helpful: 20, size: "M",
  },
  {
    id: "r8", productId: "4", author: "Sanya T.", avatar: "ST",
    rating: 5, date: "2026-04-25", title: "Felt like royalty",
    body: "The Gota-Patti work on this organza set is extraordinary. Wore it to a sangeet and it was the talk of the evening. The champagne gold colour is divine.",
    photos: ["https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80"],
    fitFeedback: "true-to-size", helpful: 28, size: "M",
  },
];

export function getReviewsByProductId(productId: string): Review[] {
  return reviews.filter((r) => r.productId === productId);
}

export function getAverageRating(productId: string): number {
  const productReviews = getReviewsByProductId(productId);
  if (productReviews.length === 0) return 0;
  return productReviews.reduce((sum, r) => sum + r.rating, 0) / productReviews.length;
}

export function getFeaturedReviews(limit = 4): Review[] {
  return [...reviews].sort((a, b) => b.helpful - a.helpful).slice(0, limit);
}
