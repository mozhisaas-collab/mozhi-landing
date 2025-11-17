import { getServiceById } from "@/data/services";
import { notFound } from "next/navigation";
import { ServiceDetailClient } from "./ServiceDetailClient";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = getServiceById(id);
  
  if (!service) {
    return {
      title: "Service Not Found - Mozhi Solutions",
      description: "The requested service page could not be found.",
    };
  }
  
  return {
    title: `${service.title} - Mozhi Solutions`,
    description: service.fullDescription || `${service.title} services with professional translation and localization expertise.`,
    keywords: `${service.title}, translation services, localization, ${service.industries.join(", ")}, professional translation`,
    openGraph: {
      title: `${service.title} - Mozhi Solutions`,
      description: service.fullDescription || `${service.title} services with professional translation and localization expertise.`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} - Mozhi Solutions`,
      description: service.fullDescription || `${service.title} services with professional translation and localization expertise.`,
    },
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}

