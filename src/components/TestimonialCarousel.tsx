import React, { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LinkedinIcon } from "lucide-react";

// Import all testimonial photos
import shacharMeirPhoto from '@/assets/shachar-meir.png';
import yaakovBresslerPhoto from '@/assets/yaakov-bressler.png';
import shivanandaDPhoto from '@/assets/shivananda-d.png';
import aminatLawalPhoto from '@/assets/aminat-lawal.png';
import nandiniRajaPhoto from '@/assets/nandini-raja.png';
import vuTrinhPhoto from '@/assets/vu-trinh.png';
import praveenBhushanPhoto from '@/assets/praveen-bhushan.png';
import michelleWintersPhoto from '@/assets/michelle-winters.png';
import jaiBalaniPhoto from '@/assets/jai-balani.png';
import anuragSenguptaPhoto from '@/assets/anurag-sengupta.png';

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
    name: "Shachar Meir",
    title: "Data Advisor",
    company: "Shachar Meir",
    text: "DET is the community I wish I had when I started my career 20+ years ago! It helped me connect with awesome Data Engineers in my area and beyond, and with really awesome learning experiences.",
    avatar: shacharMeirPhoto,
    linkedinUrl: "https://linkedin.com/in/shachar-meir"
  },
  {
    id: "2",
    name: "Yaakov Bressler",
    title: "Editor in Chief", 
    company: "Capital One",
    text: "DET makes me a better version of myself (and a better engineer). It provides an opportunity to give back to the tech community by building the exact resources I wish I had when I first started my career. Now, I can support the next generation of data engineers while also elevating the very writers who helped kickstart my own journey.",
    avatar: yaakovBresslerPhoto,
    linkedinUrl: "https://linkedin.com/in/yaakov-bressler"
  },
  {
    id: "3",
    name: "Shivananda D",
    title: "Data Engineer",
    company: "CVS Health",
    text: "The DET community is amazing - has connected me with excellent professionals whose energy is inspiring. Personally, Xinran's early encouragement and guidance gave me the confidence to grow as both an editor and writer - finding mentors like that is rare, and DET made it easy. Being part of the community has honed my writing skills in conveying technical topics more clearly.",
    avatar: shivanandaDPhoto,
    linkedinUrl: "https://linkedin.com/in/shivananda-d"
  },
  {
    id: "4",
    name: "Aminat Lawal",
    title: "Data Engineer",
    company: "Yaadang",
    text: "The community has helped me connect with people who have become not just peers but friends, and has given me access to incredible individuals across every corner of data engineering. DET has attracted some of the brightest minds in the field, and being able to tap into their knowledge, experience, and network has been invaluable.",
    avatar: aminatLawalPhoto,
    linkedinUrl: "https://linkedin.com/in/aminat-lawal"
  },
  {
    id: "5",
    name: "Nandini Raja",
    title: "Data Engineer",
    company: "Alef Education - Abu Dhabi",
    text: "Being part of DET has been a journey of growth, collaboration, and creativity. It gave me the space to try new ideas like co-founding the book club with Amina, where we not only explored two thought-provoking books but also connected with brilliant minds from across the data engineering world. The conversations, the exchange of real-world project experiences, and the diverse perspectives opened my mind in ways I didn't expect.",
    avatar: nandiniRajaPhoto,
    linkedinUrl: "https://linkedin.com/in/nandini-raja"
  },
  {
    id: "6",
    name: "Vu Trinh",
    title: "Data Engineer",
    company: "Vu Trinh newsletter",
    text: "For me, Data Engineering Things is currently the leading data engineering community. With high-quality articles from skilled writers and a dedicated editorial team, it's my top recommendation for anyone looking to learn about data engineering. I submit nearly every article I write to this publication—it's the ideal place to share my experiences and learn from others.",
    avatar: vuTrinhPhoto,
    linkedinUrl: "https://linkedin.com/in/vu-trinh"
  },
  {
    id: "7",
    name: "Praveen Bhushan",
    title: "Cloud Data Architect",
    company: "Rackspace Technology",
    text: "DET community has been a valuable partner in my learning journey — offering not just technical insights into modern data engineering practices, but also fresh perspectives on leading and mentoring teams. Through its events, discussions, and connections, I've been able to exchange real-world lessons with peers, discover innovative approaches and stay ahead on trends.",
    avatar: praveenBhushanPhoto,
    linkedinUrl: "https://linkedin.com/in/praveen-bhushan"
  },
  {
    id: "8",
    name: "Michelle Winters",
    title: "Distinguished Architect, Data & AI Infrastructure",
    company: "eBay",
    text: "Data has never been more important—or more impactful—than it is today. DET is a welcoming community where we can connect with fellow data engineers, stay current on the latest trends and developments, learn from trusted experts, and accelerate our professional growth. I wholeheartedly encourage anyone working in data engineering or adjacent spaces to join this community.",
    avatar: michelleWintersPhoto,
    linkedinUrl: "https://linkedin.com/in/michelle-winters"
  },
  {
    id: "9",
    name: "Jai Balani",
    title: "Data Engineer",
    company: "Netflix Inc",
    text: "I have found the newsletter and the conferences/workshops quite useful and a great way to connect with other Data Engineers. I also joined the community as a mentor and it was highly fulfilling to work with young talent in this space.",
    avatar: jaiBalaniPhoto,
    linkedinUrl: "https://linkedin.com/in/jai-balani"
  },
  {
    id: "10",
    name: "Anurag Sengupta",
    title: "Senior Software Engineer",
    company: "Walmart Labs",
    text: "Two years ago, I met Xinran at a coffee shop in Los Gatos, and our warm conversation opened up resources and ideas that helped me navigate a transition from a mid-sized startup. One of the key takeaways was the book Designing Data-Intensive Applications, which truly shaped my thinking. That spark from the DET community has come full circle—today, I lead the data platforms at Walmart.",
    avatar: anuragSenguptaPhoto,
    linkedinUrl: "https://linkedin.com/in/anurag-sengupta"
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
            What Members Are Saying
          </h2>
          <p className="font-lora text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from real data engineers about how DET has supported their growth, learning, and connection in the community.
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