import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const DETJoinSectionVariant2 = () => {
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold font-opensans text-foreground mb-4">
          Why Join DET?
        </h2>
        <p className="text-lg font-lora text-muted-foreground max-w-2xl mx-auto">
          Discover the benefits of being part of a vibrant, supportive, and growing data engineering community.
        </p>
      </div>

      {/* Compact Border-Separated Layout */}
      <div className="space-y-6">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className="group flex items-center justify-between p-6 border border-border rounded-lg hover:border-primary/30 hover:bg-background/50 transition-all duration-200"
          >
            <div className="flex items-center gap-6 flex-1">
              <div className="flex-shrink-0 text-2xl">
                {tile.emoji}
              </div>
              <div className="flex-1">
                <h3 className="font-opensans font-extrabold text-lg text-foreground mb-1">
                  {tile.title}
                </h3>
                <p className="text-sm font-lora text-muted-foreground">
                  {tile.description}
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 ml-4">
              <Button 
                variant="primary" 
                size="sm"
                className="w-44"
                asChild
              >
                <a href={tile.href} className="flex items-center justify-center gap-2">
                  {tile.cta}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DETJoinSectionVariant2;