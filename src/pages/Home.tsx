import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import ProblemSection from '@/sections/ProblemSection';
import ChaosSection from '@/sections/ChaosSection';
import IlmoraReveal from '@/sections/IlmoraReveal';
import PlatformSection from '@/sections/PlatformSection';
import JourneySection from '@/sections/JourneySection';
import ProgramsSection from '@/sections/ProgramsSection';
import UniversitiesSection from '@/sections/UniversitiesSection';
import TrustSection from '@/sections/TrustSection';
import ServicesSection from '@/sections/ServicesSection';
import DashboardDemo from '@/sections/DashboardDemo';
import CTASection from '@/sections/CTASection';

export default function Home() {
  return (
    <main className="relative bg-[#0A0F2C]">
      <div className="grain-overlay" />
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <ChaosSection />
      <IlmoraReveal />
      <PlatformSection />
      <JourneySection />
      <ProgramsSection />
      <UniversitiesSection />
      <TrustSection />
      <ServicesSection />
      <DashboardDemo />
      <CTASection />
      <Footer />
    </main>
  );
}
