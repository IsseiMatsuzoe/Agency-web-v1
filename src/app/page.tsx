import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import MembersPreview from "@/components/sections/MembersPreview";
import NewsPreview from "@/components/sections/NewsPreview";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MissionSection />
      <MembersPreview />
      <NewsPreview />
      <Footer />
    </main>
  );
}
