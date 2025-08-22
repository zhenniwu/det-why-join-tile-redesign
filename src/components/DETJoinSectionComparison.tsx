import { useState } from "react";
import { Button } from "@/components/ui/button";
import DETJoinSection from "./DETJoinSection";
import DETJoinSectionVariant1 from "./DETJoinSectionVariant1";
import DETJoinSectionVariant2 from "./DETJoinSectionVariant2";

const DETJoinSectionComparison = () => {
  const [activeVariant, setActiveVariant] = useState<'original' | 'variant1' | 'variant2'>('original');

  const variants = [
    { key: 'original' as const, label: 'Original - Card Grid', component: DETJoinSection },
    { key: 'variant1' as const, label: 'Variant 1 - Minimal List', component: DETJoinSectionVariant1 },
    { key: 'variant2' as const, label: 'Variant 2 - Horizontal Layout', component: DETJoinSectionVariant2 },
  ];

  const ActiveComponent = variants.find(v => v.key === activeVariant)?.component || DETJoinSection;

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