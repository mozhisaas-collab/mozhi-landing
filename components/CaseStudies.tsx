"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "TechGlobal SaaS Platform - European Expansion",
    client: "TechGlobal Inc.",
    industry: "Technology",
    challenge: "Launch SaaS platform across 12 European markets with localized interfaces and documentation",
    solution: "Complete software localization including UI strings, help documentation, and marketing materials in 12 languages",
    results: [
      "300% increase in European user acquisition",
      "95% user satisfaction with localized experience",
      "Launched in all target markets within 6 months"
    ],
    metrics: {
      languages: "12",
      words: "150,000+",
      timeframe: "6 months"
    }
  },
  {
    title: "GlobalMed Clinical Trial Documentation",
    client: "MedLife Research",
    industry: "Healthcare",
    challenge: "Translate complex clinical trial protocols and patient consent forms for multi-country research study",
    solution: "Medical translation by certified healthcare translators with regulatory compliance review",
    results: [
      "100% regulatory approval across all countries",
      "Zero protocol deviations due to translation issues",
      "Accelerated trial enrollment by 40%"
    ],
    metrics: {
      languages: "8",
      words: "75,000+",
      timeframe: "3 months"
    }
  },
  {
    title: "LegalPro International Contract Suite",
    client: "Horizon Law Group",
    industry: "Legal",
    challenge: "Translate and localize contract templates for international business expansion",
    solution: "Certified legal translation with jurisdiction-specific terminology and format adaptation",
    results: [
      "Successfully supported 200+ international deals",
      "Zero legal disputes related to translation",
      "Reduced contract review time by 60%"
    ],
    metrics: {
      languages: "6",
      words: "45,000+",
      timeframe: "2 months"
    }
  }
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from companies that trusted us with their global expansion
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-muted/30">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{study.client}</Badge>
                      <Badge variant="outline">{study.industry}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{study.metrics.languages}</div>
                      <div className="text-muted-foreground">Languages</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{study.metrics.words}</div>
                      <div className="text-muted-foreground">Words</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{study.metrics.timeframe}</div>
                      <div className="text-muted-foreground">Timeframe</div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-primary">Challenge</span>
                    </h4>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-primary">Solution</span>
                    </h4>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="text-primary">Results</span>
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => {
              const element = document.querySelector("#quote");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Your Success Story
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

