import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const DETJoinSection = () => {
  const tiles = [
    {
      title: "Active Slack Community",
      description: "Connect with 7.5K+ data engineers across channels, regions, and topics",
      emoji: "💬",
      href: "#slack",
      cta: "Join Slack",
    },
    {
      title: "DET Newsletter", 
      description: "Monthly updates, resources, events, and community news",
      emoji: "📧",
      href: "#newsletter",
      cta: "Subscribe Now",
    },
    {
      title: "Read on Medium",
      description: "Technical deep dives and career stories from DET members",
      emoji: "📖",
      href: "#medium",
      cta: "Read Articles",
    },
    {
      title: "DET Resource Hub",
      description: "Learn data engineering with recommended books, tools, and frameworks",
      emoji: "🛠️",
      href: "#resources",
      cta: "Browse Resources",
    },
    {
      title: "Webinars & Events",
      description: "Attend regular webinars and events featuring domain experts in data engineering",
      emoji: "📅",
      href: "#events",
      cta: "View Events",
    },
    {
      title: "Networking & Support",
      description: "Build meaningful connections, get support, and grow together with a welcoming community of data professionals",
      emoji: "🤝",
      href: "#networking",
      cta: "Get Connected",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-opensans text-foreground mb-4">
          Why Join DET?
        </h2>
        <p className="text-lg font-lora text-muted-foreground max-w-2xl mx-auto">
          Discover the benefits of being part of a vibrant, supportive, and growing data engineering community.
        </p>
      </div>

      {/* Tiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiles.map((tile, index) => {
          return (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-hover transition-all duration-200 cursor-pointer"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-200">
                    <span className="text-xl">{tile.emoji}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-opensans font-extrabold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {tile.title}
                    </h3>
                    <p className="text-sm font-lora text-muted-foreground leading-relaxed">
                      {tile.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="w-full"
                    asChild
                  >
                    <a href={tile.href} className="flex items-center justify-center gap-2">
                      {tile.cta}
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