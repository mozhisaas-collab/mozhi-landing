"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, TrendingUp, Globe } from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    category: "Guide",
    title: "Complete Guide to Website Localization",
    description: "Learn best practices for adapting your website for global markets, including technical considerations and cultural nuances.",
    readTime: "8 min read",
  },
  {
    icon: FileText,
    category: "Case Study",
    title: "How TechGlobal Expanded to 15 Countries",
    description: "Discover how we helped a SaaS company successfully launch in European and Asian markets with comprehensive localization.",
    readTime: "6 min read",
  },
  {
    icon: TrendingUp,
    category: "Industry Report",
    title: "2024 Translation Industry Trends",
    description: "Stay ahead with insights on AI integration, market growth, and emerging language pairs in the translation industry.",
    readTime: "10 min read",
  },
  {
    icon: Globe,
    category: "Best Practices",
    title: "Choosing the Right Translation Partner",
    description: "Essential factors to consider when selecting a translation service provider for your business needs.",
    readTime: "5 min read",
  },
];

export default function Resources() {
  const scrollToQuote = () => {
    const element = document.querySelector("#quote");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="resources" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Resources & Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert guides, case studies, and industry insights to help you succeed globally
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <resource.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary">{resource.category}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{resource.readTime}</span>
                </div>
                <CardTitle className="text-xl">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {resource.description}
                </CardDescription>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-muted/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Translation Project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get expert advice and a detailed quote for your specific needs. Our team is standing by to help you break language barriers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToQuote}>
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

