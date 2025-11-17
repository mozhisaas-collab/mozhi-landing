export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  industries: string[];
}

export const services: Service[] = [
  {
    id: "translation",
    title: "Translation",
    shortDescription: "Professional document translation by native linguists with industry expertise",
    fullDescription: "Our professional translation services provide accurate, culturally-adapted translations across 150+ languages. Our certified native linguists specialize in various industries, ensuring your content maintains its meaning, tone, and cultural relevance in every target market.",
    icon: "FileText",
    features: [
      "Native linguist translators",
      "ISO 17100 certified process",
      "Industry specialization",
      "Quality assurance review",
      "Cultural adaptation",
      "Rush delivery available"
    ],
    benefits: [
      "Accurate translations",
      "Cultural relevance",
      "Industry expertise",
      "Quality guaranteed",
      "Fast turnaround",
      "Competitive pricing"
    ],
    industries: ["Legal", "Medical", "Technical", "Marketing", "Financial"]
  },
  {
    id: "voice-over",
    title: "Voice Over",
    shortDescription: "Professional voice over services for multimedia content and marketing materials",
    fullDescription: "Our professional voice over services bring your content to life with native speakers who understand the nuances of their language and culture. From e-learning modules to marketing videos, we provide high-quality audio that resonates with your target audience.",
    icon: "Mic",
    features: [
      "Native voice talent",
      "Professional recording studios",
      "Multiple voice options",
      "Lip-sync capabilities",
      "Background music integration",
      "Multi-format delivery"
    ],
    benefits: [
      "Professional quality",
      "Native pronunciation",
      "Emotional connection",
      "Brand consistency",
      "Quick delivery",
      "Multiple formats"
    ],
    industries: ["E-learning", "Media & Entertainment", "Marketing", "Corporate"]
  },
  {
    id: "website-localization",
    title: "Website Localization",
    shortDescription: "Complete website adaptation for global markets including cultural nuances",
    fullDescription: "Our website localization services go beyond translation to create truly localized experiences. We adapt your website's content, design, and functionality to meet the cultural and technical requirements of each target market.",
    icon: "Globe",
    features: [
      "Content translation",
      "UI/UX adaptation",
      "Cultural customization",
      "SEO optimization",
      "Technical testing",
      "Multi-region deployment"
    ],
    benefits: [
      "Global reach",
      "Cultural relevance",
      "Better user experience",
      "Improved SEO",
      "Higher conversion",
      "Brand consistency"
    ],
    industries: ["E-commerce", "Technology", "Travel", "Healthcare"]
  },
  {
    id: "elearning-localization",
    title: "E-Learning Localization",
    shortDescription: "Educational content adaptation for international learning platforms",
    fullDescription: "Transform your educational content for global learners with our comprehensive e-learning localization services. We adapt courses, training materials, and educational software while maintaining pedagogical effectiveness across cultures.",
    icon: "GraduationCap",
    features: [
      "Course content translation",
      "Interactive element adaptation",
      "Cultural learning adaptation",
      "LMS integration",
      "Multimedia localization",
      "Assessment translation"
    ],
    benefits: [
      "Global accessibility",
      "Cultural relevance",
      "Better learning outcomes",
      "Increased engagement",
      "Compliance adherence",
      "Scalable delivery"
    ],
    industries: ["Education", "Corporate Training", "Healthcare", "Technology"]
  },
  {
    id: "elearning-development",
    title: "E-Learning Development",
    shortDescription: "Custom e-learning course creation and development services",
    fullDescription: "We create engaging, interactive e-learning experiences from scratch or enhance existing content. Our team combines instructional design expertise with technical proficiency to deliver courses that educate and engage learners worldwide.",
    icon: "Wrench",
    features: [
      "Instructional design",
      "Interactive content creation",
      "Multimedia integration",
      "SCORM compliance",
      "Mobile optimization",
      "Analytics integration"
    ],
    benefits: [
      "Custom solutions",
      "Engaging content",
      "Multi-device support",
      "Tracking capabilities",
      "Cost-effective",
      "Scalable platform"
    ],
    industries: ["Corporate", "Healthcare", "Education", "Manufacturing"]
  },
  {
    id: "localization-testing",
    title: "Localization Testing",
    shortDescription: "Comprehensive testing to ensure localized products function perfectly",
    fullDescription: "Our localization testing services ensure that your localized products work flawlessly in every target market. We test functionality, linguistics, cultural appropriateness, and user experience across different languages and regions.",
    icon: "TestTube",
    features: [
      "Functional testing",
      "Linguistic testing",
      "Cultural validation",
      "UI/UX testing",
      "Performance testing",
      "Compatibility testing"
    ],
    benefits: [
      "Quality assurance",
      "Cultural accuracy",
      "User experience",
      "Brand protection",
      "Market readiness",
      "Risk mitigation"
    ],
    industries: ["Software", "Gaming", "Mobile Apps", "Web Applications"]
  },
  {
    id: "language-training",
    title: "Language Training",
    shortDescription: "Corporate language training programs for global teams",
    fullDescription: "Empower your team with professional language training programs designed for business success. Our courses focus on practical communication skills needed for international business environments.",
    icon: "Languages",
    features: [
      "Business-focused curriculum",
      "Native instructor-led classes",
      "Flexible scheduling",
      "Progress tracking",
      "Industry-specific content",
      "Certification programs"
    ],
    benefits: [
      "Improved communication",
      "Global collaboration",
      "Career development",
      "Business growth",
      "Cultural understanding",
      "Team confidence"
    ],
    industries: ["Corporate", "Technology", "Healthcare", "Finance"]
  },
  {
    id: "multimedia-solutions",
    title: "Multimedia Solutions",
    shortDescription: "Video, audio, and interactive content localization services",
    fullDescription: "Bring your multimedia content to global audiences with our comprehensive localization services. From subtitling and dubbing to interactive media adaptation, we ensure your message resonates across cultures.",
    icon: "Video",
    features: [
      "Video subtitling",
      "Audio dubbing",
      "Interactive content",
      "Animation localization",
      "Graphic adaptation",
      "Technical conversion"
    ],
    benefits: [
      "Global engagement",
      "Cultural connection",
      "Professional quality",
      "Brand consistency",
      "Multiple formats",
      "Quick delivery"
    ],
    industries: ["Media & Entertainment", "E-learning", "Marketing", "Gaming"]
  },
  {
    id: "language-staffing",
    title: "Language Staffing",
    shortDescription: "Specialized recruitment for multilingual professionals",
    fullDescription: "Find the right multilingual talent for your organization with our specialized staffing services. We connect you with qualified professionals who combine language skills with industry expertise.",
    icon: "Users",
    features: [
      "Multilingual recruitment",
      "Industry specialization",
      "Skills assessment",
      "Cultural fit evaluation",
      "Contract & permanent roles",
      "Global talent network"
    ],
    benefits: [
      "Quality candidates",
      "Industry expertise",
      "Cultural fit",
      "Time savings",
      "Global reach",
      "Flexible arrangements"
    ],
    industries: ["Technology", "Healthcare", "Finance", "Legal"]
  },
  {
    id: "software-localization",
    title: "Software Localization",
    shortDescription: "Application and software interface localization for global user experience",
    fullDescription: "Make your software truly global with our comprehensive localization services. We adapt user interfaces, help documentation, and user experiences to meet local market expectations and technical requirements.",
    icon: "Code",
    features: [
      "UI/UX localization",
      "Code internationalization",
      "Help documentation",
      "Testing & QA",
      "Platform adaptation",
      "App store optimization"
    ],
    benefits: [
      "Global market access",
      "User adoption",
      "Competitive advantage",
      "Revenue growth",
      "Brand recognition",
      "Market penetration"
    ],
    industries: ["Software", "Mobile Apps", "SaaS", "Gaming"]
  },
  {
    id: "globalization-consulting",
    title: "Globalization Consulting",
    shortDescription: "Strategic guidance for international expansion and localization",
    fullDescription: "Navigate the complexities of global expansion with our expert consulting services. We provide strategic guidance on internationalization, localization strategies, and market entry approaches tailored to your business objectives.",
    icon: "TrendingUp",
    features: [
      "Market analysis",
      "Localization strategy",
      "Cultural consulting",
      "Process optimization",
      "Technology recommendations",
      "ROI analysis"
    ],
    benefits: [
      "Strategic direction",
      "Risk mitigation",
      "Cost optimization",
      "Market insights",
      "Competitive advantage",
      "Faster time-to-market"
    ],
    industries: ["Technology", "E-commerce", "Manufacturing", "Healthcare"]
  },
  {
    id: "interpretation",
    title: "Interpretation",
    shortDescription: "Real-time interpretation services for meetings, conferences, and events",
    fullDescription: "Bridge communication gaps with our professional interpretation services. Our certified interpreters provide real-time language support for meetings, conferences, legal proceedings, and business events.",
    icon: "MessageSquare",
    features: [
      "Simultaneous interpretation",
      "Consecutive interpretation",
      "Remote interpretation",
      "Equipment provision",
      "Technical support",
      "Specialized interpreters"
    ],
    benefits: [
      "Real-time communication",
      "Professional quality",
      "Cultural sensitivity",
      "Technical expertise",
      "Flexible delivery",
      "Global reach"
    ],
    industries: ["Legal", "Medical", "Business", "Government"]
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

