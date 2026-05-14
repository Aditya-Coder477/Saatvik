import HeroBanner from "@/components/home/HeroBanner";
import CampaignCards from "@/components/home/CampaignCards";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import NewArrivals from "@/components/home/NewArrivals";
import BestSellers from "@/components/home/BestSellers";
import JournalSection from "@/components/home/JournalSection";
import ReviewsPreview from "@/components/home/ReviewsPreview";
import InstagramSection from "@/components/home/InstagramSection";
import TrustBadges from "@/components/home/TrustBadges";
import StoryTeaser from "@/components/home/StoryTeaser";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturedCategories />
      <NewArrivals />
      <BestSellers />
      <JournalSection />
      <StoryTeaser />
      <ReviewsPreview />
      <InstagramSection />
      <TrustBadges />
    </>
  );
}
