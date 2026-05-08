import HeroBanner from "@/components/home/HeroBanner";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import NewArrivals from "@/components/home/NewArrivals";
import BestSellers from "@/components/home/BestSellers";
import StoryTeaser from "@/components/home/StoryTeaser";
import ReviewsPreview from "@/components/home/ReviewsPreview";
import TrustBadges from "@/components/home/TrustBadges";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturedCategories />
      <NewArrivals />
      <BestSellers />
      <StoryTeaser />
      <ReviewsPreview />
      <TrustBadges />
    </>
  );
}
