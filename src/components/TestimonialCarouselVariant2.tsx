import React, { useState, useEffect } from "react";
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
    name: "Shachar Meir",
    title: "Data Advisor",
    company: "Shachar Meir",
    text: "DET is the community I wish I had when I started my career 20+ years ago! It helped me connect with awesome Data Engineers in my area and beyond, and with really awesome learning experiences.",
    avatar: "/lovable-uploads/f21cc6db-8b41-4c2a-b84e-26dafae1e589.png",
    linkedinUrl: "https://linkedin.com/in/shachar-meir"
  },
  {
    id: "2",
    name: "Yaakov Bressler",
    title: "Editor in Chief", 
    company: "Capital One",
    text: "DET makes me a better version of myself (and a better engineer). It provides an opportunity to give back to the tech community by building the exact resources I wish I had when I first started my career. Now, I can support the next generation of data engineers while also elevating the very writers who helped kickstart my own journey.",
    avatar: "/lovable-uploads/54d1b480-18dc-4e8a-af94-ab79640a49eb.png",
    linkedinUrl: "https://linkedin.com/in/yaakov-bressler"
  },
  {
    id: "3",
    name: "Shivananda D",
    title: "Data Engineer",
    company: "CVS Health",
    text: "The DET community is amazing - has connected me with excellent professionals whose energy is inspiring. Personally, Xinran's early encouragement and guidance gave me the confidence to grow as both an editor and writer - finding mentors like that is rare, and DET made it easy. Being part of the community has honed my writing skills in conveying technical topics more clearly.",
    avatar: "/lovable-uploads/d01ddb6e-79a9-4ce1-8ae5-73eb45c1f575.png",
    linkedinUrl: "https://linkedin.com/in/shivananda-d"
  },
  {
    id: "4",
    name: "Aminat Lawal",
    title: "Data Engineer",
    company: "Yaadang",
    text: "The community has helped me connect with people who have become not just peers but friends, and has given me access to incredible individuals across every corner of data engineering. DET has attracted some of the brightest minds in the field, and being able to tap into their knowledge, experience, and network has been invaluable.",
    avatar: "/lovable-uploads/96cb670e-8f6f-45a7-95c3-ffc0ad863d68.png",
    linkedinUrl: "https://linkedin.com/in/aminat-lawal"
  },
  {
    id: "5",
    name: "Nandini Raja",
    title: "Data Engineer",
    company: "Alef Education - Abu Dhabi",
    text: "Being part of DET has been a journey of growth, collaboration, and creativity. It gave me the space to try new ideas like co-founding the book club with Amina, where we not only explored two thought-provoking books but also connected with brilliant minds from across the data engineering world. The conversations, the exchange of real-world project experiences, and the diverse perspectives opened my mind in ways I didn't expect.",
    avatar: "/lovable-uploads/81e505bb-9d1c-4b20-8cb4-59d1096e53a6.png",
    linkedinUrl: "https://linkedin.com/in/nandini-raja"
  },
  {
    id: "6",
    name: "Vu Trinh",
    title: "Data Engineer",
    company: "Vu Trinh newsletter",
    text: "For me, Data Engineering Things is currently the leading data engineering community. With high-quality articles from skilled writers and a dedicated editorial team, it's my top recommendation for anyone looking to learn about data engineering. I submit nearly every article I write to this publication—it's the ideal place to share my experiences and learn from others.",
    avatar: "/lovable-uploads/29da5988-1717-4573-9821-cb648c769e84.png",
    linkedinUrl: "https://linkedin.com/in/vu-trinh"
  },
  {
    id: "7",
    name: "Praveen Bhushan",
    title: "Cloud Data Architect",
    company: "Rackspace Technology",
    text: "DET community has been a valuable partner in my learning journey — offering not just technical insights into modern data engineering practices, but also fresh perspectives on leading and mentoring teams. Through its events, discussions, and connections, I've been able to exchange real-world lessons with peers, discover innovative approaches and stay ahead on trends.",
    avatar: "/lovable-uploads/76b246ac-97ea-4e12-875a-14188c317b6f.png",
    linkedinUrl: "https://linkedin.com/in/praveen-bhushan"
  },
  {
    id: "8",
    name: "Michelle Winters",
    title: "Distinguished Architect, Data & AI Infrastructure",
    company: "eBay",
    text: "Data has never been more important—or more impactful—than it is today. DET is a welcoming community where we can connect with fellow data engineers, stay current on the latest trends and developments, learn from trusted experts, and accelerate our professional growth. I wholeheartedly encourage anyone working in data engineering or adjacent spaces to join this community.",
    avatar: "/lovable-uploads/aaff1d08-50e2-4a2d-99b2-84fb6dd3a9fc.png",
    linkedinUrl: "https://linkedin.com/in/michelle-winters"
  },
  {
    id: "9",
    name: "Jai Balani",
    title: "Data Engineer",
    company: "Netflix Inc",
    text: "I have found the newsletter and the conferences/workshops quite useful and a great way to connect with other Data Engineers. I also joined the community as a mentor and it was highly fulfilling to work with young talent in this space.",
    avatar: "/lovable-uploads/9a196fbf-b331-418f-b95a-f0d496b74282.png",
    linkedinUrl: "https://linkedin.com/in/jai-balani"
  },
  {
    id: "10",
    name: "Anurag Sengupta",
    title: "Senior Software Engineer",
    company: "Walmart Labs",
    text: "Two years ago, I met Xinran at a coffee shop in Los Gatos, and our warm conversation opened up resources and ideas that helped me navigate a transition from a mid-sized startup. One of the key takeaways was the book Designing Data-Intensive Applications, which truly shaped my thinking. That spark from the DET community has come full circle—today, I lead the data platforms at Walmart.",
    avatar: "/lovable-uploads/f7e3411c-0fba-4df8-88dc-ddd817106430.png",
    linkedinUrl: "https://linkedin.com/in/anurag-sengupta"
  }
];

const TestimonialCarouselVariant2: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentTestimonial = testimonials[currentIndex];
  const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  const nextIndex = (currentIndex + 1) % testimonials.length;

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
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

        {/* Main Testimonial Display */}
        <div className="relative">
          {/* Side Testimonials (Preview) */}
          <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-24 opacity-30 scale-75">
            <div className="w-64 bg-card rounded-lg p-4 shadow-card border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={testimonials[prevIndex].avatar} alt={testimonials[prevIndex].name} />
                  <AvatarFallback className="bg-secondary text-secondary-foreground font-opensans font-semibold">
                    {testimonials[prevIndex].name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h5 className="font-opensans font-semibold text-sm truncate">
                    {testimonials[prevIndex].name}
                  </h5>
                  <p className="font-opensans text-xs text-muted-foreground truncate">
                    {testimonials[prevIndex].company}
                  </p>
                </div>
              </div>
              <p className="font-lora text-xs text-foreground line-clamp-3">
                "{testimonials[prevIndex].text}"
              </p>
            </div>
          </div>

          <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-24 opacity-30 scale-75">
            <div className="w-64 bg-card rounded-lg p-4 shadow-card border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={testimonials[nextIndex].avatar} alt={testimonials[nextIndex].name} />
                  <AvatarFallback className="bg-secondary text-secondary-foreground font-opensans font-semibold">
                    {testimonials[nextIndex].name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h5 className="font-opensans font-semibold text-sm truncate">
                    {testimonials[nextIndex].name}
                  </h5>
                  <p className="font-opensans text-xs text-muted-foreground truncate">
                    {testimonials[nextIndex].company}
                  </p>
                </div>
              </div>
              <p className="font-lora text-xs text-foreground line-clamp-3">
                "{testimonials[nextIndex].text}"
              </p>
            </div>
          </div>

          {/* Featured Testimonial */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-lg p-8 shadow-card border-2 border-primary/20 transition-all duration-500">
              {/* Avatar and Info */}
              <div className="flex items-center justify-center mb-6">
                <div className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={currentTestimonial.avatar} alt={currentTestimonial.name} />
                    <AvatarFallback className="bg-secondary text-secondary-foreground font-opensans font-semibold text-xl">
                      {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="font-opensans font-semibold text-lg text-foreground mb-1">
                    {currentTestimonial.name}
                  </h4>
                  <p className="font-opensans text-sm text-muted-foreground mb-1">
                    {currentTestimonial.title}
                  </p>
                  <p className="font-opensans text-sm text-muted-foreground mb-3">
                    {currentTestimonial.company}
                  </p>
                  <a
                    href={currentTestimonial.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary-hover transition-colors duration-200 p-2 rounded-full hover:bg-secondary"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              {/* Testimonial Text */}
              <div className="text-center">
                <p className="font-lora text-lg text-foreground leading-relaxed italic">
                  "{currentTestimonial.text}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-110' 
                  : 'bg-muted hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-4">
          <p className="text-xs text-muted-foreground">
            {isAutoPlaying ? 'Auto-advancing every 5 seconds' : 'Auto-play paused'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarouselVariant2;