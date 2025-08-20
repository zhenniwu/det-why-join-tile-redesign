import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Mail, BookOpen, Database, Heart, Calendar } from "lucide-react";

const DETJoinSection = () => {
  const tiles = [
    {
      title: "Join the Slack",
      description: "Connect with 7.5K+ data engineers across channels, regions, and topics",
      icon: Users,
      href: "#slack",
    },
    {
      title: "Subscribe to the Newsletter", 
      description: "Monthly updates, resources, events, and community news",
      icon: Mail,
      href: "#newsletter",
    },
    {
      title: "Read on Medium",
      description: "Technical deep dives and career stories from DET members",
      icon: BookOpen,
      href: "#medium",
    },
    {
      title: "DET Resource Hub",
      description: "Curated tools, talks, templates, and open source projects",
      icon: Database,
      href: "#resources",
    },
    {
      title: "Community Highlights",
      description: "Meet fellow members and see what others are building",
      icon: Heart,
      href: "#highlights",
    },
    {
      title: "Networking & Support",
      description: "Find peer support, join casual meetups, or attend regional socials",
      icon: Calendar,
      href: "#networking",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Why Join DET?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A community of working data engineers sharing knowledge, tools, and support to advance our careers together.
        </p>
      </div>

      {/* Tiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiles.map((tile, index) => {
          const Icon = tile.icon;
          return (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-200 cursor-pointer"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {tile.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tile.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:border-primary group-hover:text-primary transition-all duration-200"
                    asChild
                  >
                    <a href={tile.href} className="flex items-center justify-center gap-2">
                      Get Started
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DETJoinSection;