"use client"

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { serviceIconMap } from "@/lib/iconMap";
import { CheckCircle, ArrowRight, ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceDetailClientProps {
  service: {
    id: string;
    title: string;
    fullDescription: string;
    features: string[];
    benefits: string[];
    industries: string[];
    icon: string;
  };
}

export function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const IconComponent = serviceIconMap[service.icon] || FileText;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        {/* Breadcrumb */}
        <section className="bg-black/5 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-black/80 hover:text-red-500 transition-colors font-medium">Home</Link>
              <span className="text-black/60">/</span>
              <Link href="/solutions" className="text-black/80 hover:text-red-500 transition-colors font-medium">Solutions</Link>
              <span className="text-black/70">/</span>
              <span className="text-black">{service.title}</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <motion.section 
          className="bg-gray-50 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-4xl">
              <motion.div 
                className="w-20 h-20 bg-red-500 rounded-lg flex items-center justify-center mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <IconComponent className="text-white h-10 w-10" />
              </motion.div>
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {service.title}
              </motion.h1>
              <motion.p 
                className="text-xl text-black/70 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {service.fullDescription}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button asChild size="lg" className="bg-red-500 text-white hover:bg-red-500 transition-colors font-semibold">
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Service Details */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Features */}
                <motion.div 
                  className="mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-black">Solution Features</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {service.features.map((feature, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-6 w-6 text-red-500 mt-0.5 shrink-0" />
                        <span className="text-black/90 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Benefits */}
                <motion.div 
                  className="mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-black">Key Benefits</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {service.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="border-l-4 border-l-red-500 bg-white border border-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                          <CardContent className="p-6">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                              <span className="font-semibold text-black/90">{benefit}</span>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Industries */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-black">Relevant Industries</h2>
                  <div className="flex flex-wrap gap-3">
                    {service.industries.map((industry, index) => (
                      <Badge key={index} className="text-sm bg-red-500 text-white font-medium">
                        {industry}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Quick Contact */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <Card className="bg-gray-50 border-2 border-red-500">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4 text-black">Ready to Get Started?</h3>
                        <p className="text-black/80 mb-6">Contact our experts for a personalized consultation and quote.</p>
                        <div className="space-y-3">
                          <Button asChild className="w-full bg-red-500 text-white hover:bg-red-500 transition-colors font-semibold" size="lg">
                            <Link href="/contact">Get Free Quote</Link>
                          </Button>
                          <div className="text-center">
                            <p className="text-sm text-black/70">Or call us directly</p>
                            <p className="text-lg font-semibold text-red-500">+91 9884068064</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Service Stats */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Card className="bg-white border border-black/10">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4 text-black">Solution Stats</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-black/70">Languages Supported</span>
                            <span className="font-bold text-red-500 text-lg">150+</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-black/70">Expert Linguists</span>
                            <span className="font-bold text-red-500 text-lg">1000+</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-black/70">Typical Turnaround</span>
                            <span className="font-bold text-red-500 text-lg">24-48h</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-black/70">Quality Rating</span>
                            <span className="font-bold text-red-500 text-lg">99.8%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="bg-black/5 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center">
              <Button asChild variant="outline" className="border-black/10 text-black hover:bg-black/5">
                <Link href="/solutions">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  All Solutions
                </Link>
              </Button>
              <Button asChild className="bg-red-500 text-white hover:bg-red-500 transition-colors font-semibold">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

