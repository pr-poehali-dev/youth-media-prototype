import MainHeader from "@/components/MainHeader";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import FeaturedArticles from "@/components/FeaturedArticles";
import NewsletterSection from "@/components/NewsletterSection";
import MainFooter from "@/components/MainFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />
      <main className="flex-grow">
        <HeroSection />
        <CategorySection />
        <FeaturedArticles />
        <NewsletterSection />
      </main>
      <MainFooter />
    </div>
  );
};

export default Index;
