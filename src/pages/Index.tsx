import { Hero } from "@/components/Hero";
import { Promises } from "@/components/Promises";
import { TargetAudience } from "@/components/TargetAudience";
import { Authority } from "@/components/Authority";
import { FinalCta } from "@/components/FinalCta";
import { useRef } from "react";

const Index = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  const scrollToCta = () => {
    ctaRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      <Hero onCtaClick={scrollToCta} />
      <Promises />
      <TargetAudience />
      <Authority />
      <div ref={ctaRef}>
        <FinalCta />
      </div>
    </main>
  );
};

export default Index;
