import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import FeaturesBar from "@/components/FeaturesBar";
import BridalLehengaSection from "@/components/BridalLehengaSection";
import DesignerSareeSection from "@/components/DesignerSareeSection";
import FeaturedCollection from "@/components/FeaturedCollection";
import LookbookBanner from "@/components/LookbookBanner";
import EditorialStrip from "@/components/EditorialStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* ── Above the fold – matches reference image exactly ── */}
      <Navbar />
      <Hero />
      <CategoryCards />
      <FeaturesBar />
      {/* ── Rich content sections below ── */}
      <BridalLehengaSection />
      <DesignerSareeSection />
      <FeaturedCollection />
      <LookbookBanner />
      <EditorialStrip />
      <Footer />
    </main>
  );
}
