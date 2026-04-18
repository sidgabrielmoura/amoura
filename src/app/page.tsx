import { HeroSection } from "@/components/sections/HeroSection";
import { CataloguePreview } from "@/components/sections/CataloguePreview";
import { BrandStory } from "@/components/sections/BrandStory";
import { TechnicalSpecs } from "@/components/sections/TechnicalSpecs";
import { InstallationJourney } from "@/components/sections/InstallationJourney";
import { SocialProof } from "@/components/sections/SocialProof";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <CataloguePreview />
      <BrandStory />
      <TechnicalSpecs />
      <InstallationJourney />
      <SocialProof />
      <Footer />
    </main>
  );
}
