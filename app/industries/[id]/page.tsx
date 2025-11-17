import { getIndustryById } from "@/data/industries";
import { getBlogPostsByIndustry } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import { IndustryDetailClient } from "./IndustryDetailClient";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const industry = getIndustryById(id);
  
  if (!industry) {
    return {
      title: "Industry Not Found - Mozhi Solutions",
      description: "The requested industry page could not be found.",
    };
  }
  
  return {
    title: `${industry.title} Translation Services - Mozhi Solutions`,
    description: `Professional translation and localization services for ${industry.title}. ${industry.description}`,
    keywords: `${industry.title}, translation services, localization, ${industry.services.join(", ")}, industry-specific translation`,
    openGraph: {
      title: `${industry.title} Translation Services - Mozhi Solutions`,
      description: `Professional translation and localization services for ${industry.title}. ${industry.description}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${industry.title} Translation Services - Mozhi Solutions`,
      description: `Professional translation and localization services for ${industry.title}. ${industry.description}`,
    },
  };
}

export default async function IndustryDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const industry = getIndustryById(id);
  const relatedPosts = getBlogPostsByIndustry(id);

  if (!industry) {
    notFound();
  }

  return <IndustryDetailClient industry={industry} relatedPosts={relatedPosts} />;
}

