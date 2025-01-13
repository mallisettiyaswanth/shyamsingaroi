import { HeroSection } from "./hero-section";
import { FashionSection } from "./fashion-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <FashionSection />
      </main>
    </div>
  );
}
