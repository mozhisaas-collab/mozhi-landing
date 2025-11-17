export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: string[];
  services: string[];
  caseStudy?: {
    title: string;
    description: string;
    results: string[];
  };
}

export const industries: Industry[] = [
  {
    id: "elearning",
    title: "E-learning",
    description: "Educational platforms & content localization for global learning experiences",
    icon: "fas fa-laptop",
    challenges: [
      "Cultural learning differences",
      "Educational system variations",
      "Interactive content adaptation",
      "Multimedia synchronization",
      "Assessment localization"
    ],
    solutions: [
      "Culturally-adapted learning methodologies",
      "Region-specific educational standards",
      "Interactive element localization",
      "Multimedia content adaptation",
      "Localized assessment tools"
    ],
    services: ["E-Learning Localization", "E-Learning Development", "Voice Over", "Translation"],
    caseStudy: {
      title: "Global University Platform",
      description: "Localized online courses for 50+ countries, increasing student engagement by 150%",
      results: [
        "150% increase in student engagement",
        "40% improvement in course completion rates",
        "Expanded to 25 new markets"
      ]
    }
  },
  {
    id: "life-sciences",
    title: "Life Sciences",
    description: "Healthcare & pharmaceutical content requiring regulatory compliance and precision",
    icon: "fas fa-heartbeat",
    challenges: [
      "Regulatory compliance",
      "Medical terminology accuracy",
      "Clinical trial documentation",
      "Patient safety materials",
      "Multi-country approvals"
    ],
    solutions: [
      "Regulatory-compliant translations",
      "Medical expert linguists",
      "Clinical documentation services",
      "Patient material localization",
      "Regulatory submission support"
    ],
    services: ["Translation", "Localization Testing", "Globalization Consulting"],
    caseStudy: {
      title: "Pharmaceutical Global Launch",
      description: "Supported regulatory approval in 15 countries for new diabetes medication",
      results: [
        "100% regulatory compliance",
        "6-month faster market entry",
        "$50M revenue in first year"
      ]
    }
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-Commerce",
    description: "Online stores & retail platforms for global market expansion",
    icon: "fas fa-shopping-cart",
    challenges: [
      "Product catalog translation",
      "Cultural shopping preferences",
      "Payment system integration",
      "Customer service localization",
      "SEO optimization"
    ],
    solutions: [
      "E-commerce platform localization",
      "Cultural shopping adaptation",
      "Multi-currency integration",
      "Customer support translation",
      "Local SEO optimization"
    ],
    services: ["Website Localization", "Translation", "Software Localization"],
    caseStudy: {
      title: "Fashion Brand Expansion",
      description: "Localized e-commerce platform for European markets, achieving 300% sales growth",
      results: [
        "300% increase in online sales",
        "80% improvement in conversion rates",
        "Successful launch in 12 countries"
      ]
    }
  },
  {
    id: "legal",
    title: "Legal",
    description: "Legal documents & contracts requiring absolute precision and confidentiality",
    icon: "fas fa-gavel",
    challenges: [
      "Legal system differences",
      "Terminology precision",
      "Confidentiality requirements",
      "Deadline pressures",
      "Court documentation"
    ],
    solutions: [
      "Legal specialist translators",
      "Certified translations",
      "Confidentiality protocols",
      "Rush delivery services",
      "Court-ready documentation"
    ],
    services: ["Translation", "Interpretation", "Language Staffing"],
    caseStudy: {
      title: "International Merger",
      description: "Translated 10,000+ legal documents for billion-dollar merger in 30 days",
      results: [
        "100% accuracy maintained",
        "30-day deadline met",
        "Zero compliance issues"
      ]
    }
  },
  {
    id: "media-entertainment",
    title: "Media & Entertainment",
    description: "Content & multimedia localization for global audiences",
    icon: "fas fa-film",
    challenges: [
      "Content censorship variations",
      "Cultural humor adaptation",
      "Audio-visual synchronization",
      "Celebrity voice matching",
      "Release schedule coordination"
    ],
    solutions: [
      "Cultural content adaptation",
      "Creative transcreation",
      "Professional dubbing services",
      "Voice talent matching",
      "Coordinated global releases"
    ],
    services: ["Voice Over", "Multimedia Solutions", "Translation"],
    caseStudy: {
      title: "Streaming Platform Launch",
      description: "Localized 500+ hours of content for Asian market launch",
      results: [
        "2M subscribers in 6 months",
        "95% viewer satisfaction",
        "Award-winning localization"
      ]
    }
  },
  {
    id: "banking-finance",
    title: "Banking & Finance",
    description: "Financial services requiring compliance and security expertise",
    icon: "fas fa-university",
    challenges: [
      "Financial regulation compliance",
      "Security documentation",
      "Complex financial products",
      "Risk disclosure accuracy",
      "Customer communication"
    ],
    solutions: [
      "Financial expert translators",
      "Regulatory compliance review",
      "Secure document handling",
      "Risk communication clarity",
      "Customer education materials"
    ],
    services: ["Translation", "Localization Testing", "Language Training"],
    caseStudy: {
      title: "Digital Banking Platform",
      description: "Localized mobile banking app for Latin American markets",
      results: [
        "500K app downloads",
        "40% increase in digital adoption",
        "Regulatory approval in 8 countries"
      ]
    }
  },
  {
    id: "travel-hospitality",
    title: "Travel & Hospitality",
    description: "Tourism and hospitality services for international travelers",
    icon: "fas fa-plane",
    challenges: [
      "Cultural travel preferences",
      "Booking system integration",
      "Customer service availability",
      "Destination information accuracy",
      "Emergency communication"
    ],
    solutions: [
      "Travel content localization",
      "Booking platform adaptation",
      "24/7 customer support",
      "Local destination expertise",
      "Emergency protocol translation"
    ],
    services: ["Website Localization", "Voice Over", "Interpretation"],
    caseStudy: {
      title: "Hotel Chain Expansion",
      description: "Localized booking platform and services for 20 countries",
      results: [
        "200% increase in bookings",
        "95% customer satisfaction",
        "Expanded to 50 new locations"
      ]
    }
  },
  {
    id: "energy-mining",
    title: "Energy & Mining",
    description: "Technical documentation and safety materials for energy sector",
    icon: "fas fa-bolt",
    challenges: [
      "Technical specification accuracy",
      "Safety protocol compliance",
      "Environmental regulations",
      "Equipment documentation",
      "Training material updates"
    ],
    solutions: [
      "Technical expert translators",
      "Safety-focused translations",
      "Regulatory compliance review",
      "Equipment manual localization",
      "Training content adaptation"
    ],
    services: ["Translation", "Language Training", "Multimedia Solutions"],
    caseStudy: {
      title: "Renewable Energy Project",
      description: "Translated technical documentation for solar farm installations",
      results: [
        "Zero safety incidents",
        "30% faster installation",
        "International certification achieved"
      ]
    }
  },
  {
    id: "technology",
    title: "Hardware, Software, Technology",
    description: "Software & hardware localization for global technology markets",
    icon: "fas fa-microchip",
    challenges: [
      "Technical terminology consistency",
      "UI/UX cultural adaptation",
      "Documentation complexity",
      "Version control management",
      "User adoption barriers"
    ],
    solutions: [
      "Technology specialist linguists",
      "UI/UX localization expertise",
      "Documentation management systems",
      "Agile localization processes",
      "User experience optimization"
    ],
    services: ["Software Localization", "Translation", "Localization Testing"],
    caseStudy: {
      title: "SaaS Platform Globalization",
      description: "Localized enterprise software for 25 international markets",
      results: [
        "400% increase in international sales",
        "90% user satisfaction rating",
        "Market leader in 15 countries"
      ]
    }
  },
  {
    id: "government",
    title: "Government",
    description: "Public sector communication and citizen service localization",
    icon: "fas fa-landmark",
    challenges: [
      "Official document accuracy",
      "Citizen service accessibility",
      "Multi-language requirements",
      "Cultural sensitivity needs",
      "Compliance with standards"
    ],
    solutions: [
      "Certified official translations",
      "Citizen service localization",
      "Multi-language support",
      "Cultural adaptation services",
      "Compliance assurance"
    ],
    services: ["Translation", "Interpretation", "Language Training"],
    caseStudy: {
      title: "Digital Government Services",
      description: "Localized online citizen services for multilingual population",
      results: [
        "300% increase in digital service usage",
        "50% reduction in processing time",
        "98% citizen satisfaction"
      ]
    }
  },
  {
    id: "advertising-marketing",
    title: "Advertising, Marketing, PR",
    description: "Creative content adaptation for global marketing campaigns",
    icon: "fas fa-bullhorn",
    challenges: [
      "Brand message consistency",
      "Cultural creative adaptation",
      "Campaign timing coordination",
      "Local market insights",
      "ROI measurement"
    ],
    solutions: [
      "Creative transcreation services",
      "Cultural marketing adaptation",
      "Global campaign coordination",
      "Local market research",
      "Performance analytics"
    ],
    services: ["Translation", "Voice Over", "Globalization Consulting"],
    caseStudy: {
      title: "Global Brand Campaign",
      description: "Localized marketing campaign across 30 countries for tech product launch",
      results: [
        "250% increase in brand awareness",
        "180% boost in product sales",
        "Award-winning campaign recognition"
      ]
    }
  },
  {
    id: "industrial-manufacturing",
    title: "Industrial & Manufacturing",
    description: "Technical documentation and training materials for manufacturing",
    icon: "fas fa-industry",
    challenges: [
      "Technical manual complexity",
      "Safety regulation compliance",
      "Training material standardization",
      "Equipment specification accuracy",
      "Quality control documentation"
    ],
    solutions: [
      "Technical documentation services",
      "Safety compliance translations",
      "Standardized training materials",
      "Equipment localization",
      "Quality assurance protocols"
    ],
    services: ["Translation", "Language Training", "Multimedia Solutions"],
    caseStudy: {
      title: "Manufacturing Equipment Export",
      description: "Localized technical documentation for global equipment sales",
      results: [
        "50% increase in international sales",
        "Zero technical support issues",
        "Expanded to 20 new markets"
      ]
    }
  },
  {
    id: "fmcg",
    title: "FMCG",
    description: "Fast-moving consumer goods packaging and marketing localization",
    icon: "fas fa-box",
    challenges: [
      "Packaging space limitations",
      "Regulatory label requirements",
      "Brand consistency maintenance",
      "Local taste preferences",
      "Distribution channel adaptation"
    ],
    solutions: [
      "Packaging design optimization",
      "Regulatory compliance review",
      "Brand guideline adherence",
      "Market preference research",
      "Distribution strategy adaptation"
    ],
    services: ["Translation", "Website Localization", "Globalization Consulting"],
    caseStudy: {
      title: "Consumer Brand Expansion",
      description: "Localized product line for emerging markets across Asia",
      results: [
        "400% sales growth in new markets",
        "Market leader position achieved",
        "Successful brand recognition"
      ]
    }
  },
  {
    id: "telecom",
    title: "Telecom",
    description: "Telecommunications services and customer communication localization",
    icon: "fas fa-signal",
    challenges: [
      "Technical service complexity",
      "Customer support scaling",
      "Regulatory compliance variety",
      "Service plan communication",
      "Network technology explanation"
    ],
    solutions: [
      "Technical communication clarity",
      "Multilingual customer support",
      "Regulatory documentation",
      "Service plan localization",
      "Technical education materials"
    ],
    services: ["Translation", "Voice Over", "Language Training"],
    caseStudy: {
      title: "5G Service Launch",
      description: "Localized 5G service introduction across multiple countries",
      results: [
        "90% customer understanding",
        "300% service adoption rate",
        "Successful 15-country launch"
      ]
    }
  }
];

export const getIndustryById = (id: string): Industry | undefined => {
  return industries.find(industry => industry.id === id);
};
