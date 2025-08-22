import { useState } from "react";
import { Button } from "@/components/ui/button";
import DETJoinSection from "./DETJoinSection";
import DETJoinSectionVariant1 from "./DETJoinSectionVariant1";
import DETJoinSectionVariant2 from "./DETJoinSectionVariant2";
import TestimonialCarousel from "./TestimonialCarousel";
import TestimonialCarouselVariant1 from "./TestimonialCarouselVariant1";
import TestimonialCarouselVariant2 from "./TestimonialCarouselVariant2";

const CombinedVersion1 = () => (
  <>
    <DETJoinSection />
    <TestimonialCarousel />
  </>
);

const CombinedVersion2 = () => (
  <>
    <DETJoinSectionVariant1 />
    <TestimonialCarouselVariant1 />
  </>
);

const CombinedVersion3 = () => (
  <>
    <DETJoinSectionVariant2 />
    <TestimonialCarouselVariant2 />
  </>
);

const DETJoinSectionComparison = () => {
  const [activeVariant, setActiveVariant] = useState<'original' | 'variant1' | 'variant2'>('original');

  const variants = [
    { key: 'original' as const, label: 'Original - Card Grid + Infinite Scroll', component: CombinedVersion1 },
    { key: 'variant1' as const, label: 'Variant 1 - Minimal List + Static Grid', component: CombinedVersion2 },
    { key: 'variant2' as const, label: 'Variant 2 - Horizontal + Single Focus', component: CombinedVersion3 },
  ];

  const ActiveComponent = variants.find(v => v.key === activeVariant)?.component || CombinedVersion1;

  return (
    <div className="min-h-screen bg-background">
      {/* Variant Selector */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-10 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {variants.map((variant) => (
              <Button
                key={variant.key}
                variant={activeVariant === variant.key ? "primary" : "outline"}
                size="sm"
                onClick={() => setActiveVariant(variant.key)}
              >
                {variant.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Variant Display */}
      <ActiveComponent />
    </div>
  );
};

export default DETJoinSectionComparison;