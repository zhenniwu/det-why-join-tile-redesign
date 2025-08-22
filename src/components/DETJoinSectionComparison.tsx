import { useState } from "react";
import { Button } from "@/components/ui/button";
import TestimonialCarousel from "./TestimonialCarousel";
import TestimonialCarouselVariant1 from "./TestimonialCarouselVariant1";
import TestimonialCarouselVariant2 from "./TestimonialCarouselVariant2";

const TestimonialComparison = () => {
  const [activeVariant, setActiveVariant] = useState<'original' | 'variant1' | 'variant2'>('original');

  const variants = [
    { key: 'original' as const, label: 'Original - Infinite Scroll', component: TestimonialCarousel },
    { key: 'variant1' as const, label: 'Variant 1 - Static Grid with Arrows', component: TestimonialCarouselVariant1 },
    { key: 'variant2' as const, label: 'Variant 2 - Single Focus with Dots', component: TestimonialCarouselVariant2 },
  ];

  const ActiveComponent = variants.find(v => v.key === activeVariant)?.component || TestimonialCarousel;

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

export default TestimonialComparison;