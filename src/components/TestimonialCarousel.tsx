import React, { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LinkedinIcon } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  text: string;
  avatar: string;
  linkedinUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "Senior Data Engineer",
    company: "Netflix",
    text: "DET has been instrumental in advancing my career. The community discussions around real-world data architecture challenges have given me insights I couldn't find anywhere else.",
    avatar: "/api/placeholder/64/64",
    linkedinUrl: "https://linkedin.com/in/sarah-chen-de"
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    title: "Lead Data Platform Engineer", 
    company: "Spotify",
    text: "The depth of technical knowledge shared in DET is unmatched. From pipeline optimization to cloud architecture, the community always delivers practical solutions.",
    avatar: "/api/placeholder/64/64",
    linkedinUrl: "https://linkedin.com/in/marcus-rodriguez-data"
  },
  {
    id: "3",
    name: "Jennifer Park",
    title: "Staff Data Engineer",
    company: "Airbnb",
    text: "DET helped me transition from software engineering to data engineering. The mentorship and resources available through the community made all the difference.",
    avatar: "/api/placeholder/64/64",
    linkedinUrl: "https://linkedin.com/in/jennifer-park-eng"
  },
  {
    id: "4",
    name: "Ahmed Hassan",
    title: "Principal Data Engineer",
    company: "Uber",
    text: "Being part of DET has connected me with brilliant engineers worldwide. The knowledge sharing and collaboration opportunities have elevated my entire team's capabilities.",
    avatar: "/api/placeholder/64/64",
    linkedinUrl: "https://linkedin.com/in/ahmed-hassan-data"
  },
  {
    id: "5",
    name: "Elena Vasquez",
    title: "Data Engineering Manager",
    company: "Shopify",
    text: "DET provides the perfect balance of technical depth and practical application. The discussions here have directly influenced how we architect our data systems.",
    avatar: "/api/placeholder/64/64", 
    linkedinUrl: "https://linkedin.com/in/elena-vasquez-data"
  },
  {
    id: "6",
    name: "David Kim",
    title: "Senior Data Engineer",
    company: "Snowflake",
    text: "The quality of content and discussions in DET is exceptional. It's become my go-to resource for staying current with data engineering best practices.",
    avatar: "/api/placeholder/64/64",
    linkedinUrl: "https://linkedin.com/in/david-kim-snowflake"
  },
  {
    id: "7",
    name: "Rachel Thompson",
    title: "Data Platform Lead",
    company: "Stripe",
    text: "DET has been crucial for my professional growth. The community's willingness to share real experiences and lessons learned is incredibly valuable.",
    avatar: "/api/placeholder/64/64",
    linkedinUrl: "https://linkedin.com/in/rachel-thompson-stripe"
  },
  {
    id: "8",
    name: "Carlos Mendoza",
    title: "Principal Data Architect",
    company: "Databricks",
    text: "The technical discussions in DET are top-notch. I've implemented several architectural patterns I learned from community members with great success.",
    avatar: "/api/placeholder/64/64",
    linkedinUrl: "https://linkedin.com/in/carlos-mendoza-databricks"
  },
  {
    id: "9",
    name: "Priya Sharma",
    title: "Senior Data Engineer",
    company: "Meta",
    text: "DET offers insights you can't get from documentation alone. The real-world problem-solving discussions have saved my team countless hours.",
    avatar: "/api/placeholder/64/64",
    linkedinUrl: "https://linkedin.com/in/priya-sharma-meta"
  },
  {
    id: "10",
    name: "Tom Mitchell",
    title: "Data Engineering Director",
    company: "LinkedIn",
    text: "The DET community has become an extension of my team. The collective knowledge and support available here is unparalleled in the data engineering space.",
    avatar: "/api/placeholder/64/64",
    linkedinUrl: "https://linkedin.com/in/tom-mitchell-linkedin"
  }
];

const TestimonialCard: React.FC<{ 
  testimonial: Testimonial; 
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}> = ({ testimonial, isHovered, onHover, onLeave }) => {
  return (
    <div
      className={`
        flex-shrink-0 w-80 bg-card border border-border rounded-lg p-6 shadow-card
        transition-all duration-300 ease-out cursor-default
        ${isHovered ? 'scale-105 shadow-hover' : ''}
      `}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="flex flex-col h-full">
        {/* Header with avatar and info */}
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="w-16 h-16 flex-shrink-0">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback className="bg-secondary text-secondary-foreground font-opensans font-semibold text-lg">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h4 className="font-opensans font-semibold text-foreground text-sm truncate">
                  {testimonial.name}
                </h4>
                <p className="font-opensans text-xs text-muted-foreground truncate">
                  {testimonial.title}
                </p>
                <p className="font-opensans text-xs text-muted-foreground truncate">
                  {testimonial.company}
                </p>
              </div>
              
              <a
                href={testimonial.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 text-primary hover:text-primary-hover transition-colors duration-200 p-1 rounded hover:bg-secondary"
                onClick={(e) => e.stopPropagation()}
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Testimonial text */}
        <div className="flex-1">
          <p className="font-lora text-sm text-foreground leading-relaxed">
            "{testimonial.text}"
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const animationRef = useRef<number>();

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const startAutoScroll = () => {
    if (!scrollContainerRef.current || isPaused) return;

    const container = scrollContainerRef.current;
    const scrollStep = 0.5; // Slow, smooth scrolling
    
    const scroll = () => {
      if (container && !isPaused) {
        container.scrollLeft += scrollStep;
        
        // Reset to beginning when we've scrolled past halfway point for seamless loop
        const singleSetWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= singleSetWidth) {
          container.scrollLeft = 0;
        }
      }
      
      if (!isPaused) {
        animationRef.current = requestAnimationFrame(scroll);
      }
    };
    
    animationRef.current = requestAnimationFrame(scroll);
  };

  const stopAutoScroll = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  useEffect(() => {
    startAutoScroll();
    
    return () => {
      stopAutoScroll();
    };
  }, [isPaused]);

  const handleCardHover = (cardId: string) => {
    setHoveredCard(cardId);
    setIsPaused(true);
    stopAutoScroll();
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
    setIsPaused(false);
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-opensans font-extrabold text-3xl text-foreground mb-4">
            Success Stories from Our Community
          </h2>
          <p className="font-lora text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from data engineers who've accelerated their careers and expertise through DET
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth [&::-webkit-scrollbar]:hidden"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${Math.floor(index / testimonials.length)}`}
                testimonial={testimonial}
                isHovered={hoveredCard === `${testimonial.id}-${Math.floor(index / testimonials.length)}`}
                onHover={() => handleCardHover(`${testimonial.id}-${Math.floor(index / testimonials.length)}`)}
                onLeave={handleCardLeave}
              />
            ))}
          </div>
          
          {/* Fade gradients */}
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;