"use client"

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { iconMap } from "@/lib/iconMap";
import { CheckCircle, ArrowRight, ArrowLeft, AlertTriangle, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface IndustryDetailClientProps {
  industry: {
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
  };
  relatedPosts: Array<{
    id: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
  }>;
}

export function IndustryDetailClient({ industry, relatedPosts }: IndustryDetailClientProps) {
  const IconComponent = iconMap[industry.icon] || Globe;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

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
              <Link href="/industries" className="text-black/80 hover:text-red-500 transition-colors font-medium">Industries</Link>
              <span className="text-black/70">/</span>
              <span className="text-black">{industry.title}</span>
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
                {industry.title} Translation Services
              </motion.h1>
              <motion.p 
                className="text-xl text-black/70 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {industry.description}. Our specialized linguists understand the unique requirements 
                and regulations of the {industry.title.toLowerCase()} sector.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button asChild size="lg" className="bg-red-500 text-white hover:bg-red-500 transition-colors font-semibold">
                  <Link href="/contact">Get Industry-Specific Quote</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Industry Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Challenges */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-black">Industry Challenges</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {industry.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="border-l-4 border-l-red-500 bg-white border border-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-3">
                              <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                              <span className="text-black">{challenge}</span>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Solutions */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-black">Our Solutions</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {industry.solutions.map((solution, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-6 w-6 text-red-500 mt-0.5 shrink-0" />
                        <span className="text-black/90 font-medium">{solution}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-8 text-black">Recommended Services</h2>
                  <div className="flex flex-wrap gap-3">
                    {industry.services.map((service, index) => (
                      <Badge key={index} className="text-sm bg-red-500 text-white border border-red-500 font-medium">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </motion.div>

                {/* Case Study */}
                {industry.caseStudy && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold mb-8 text-black">Success Story</h2>
                    <Card className="bg-gray-50 border-2 border-red-500">
                      <CardContent className="p-8">
                        <h3 className="text-xl font-bold mb-4 text-black">{industry.caseStudy.title}</h3>
                        <p className="text-black/80 mb-6">{industry.caseStudy.description}</p>
                        <div>
                          <h4 className="font-semibold mb-4 text-black">Results Achieved:</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            {industry.caseStudy.results.map((result, index) => (
                              <motion.div 
                                key={index} 
                                className="bg-white p-4 rounded-lg border border-black/10"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                              >
                                <div className="flex items-center gap-2">
                                  <CheckCircle className="h-5 w-5 text-red-500 shrink-0" />
                                  <span className="font-semibold text-black">{result}</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
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
                        <h3 className="text-xl font-bold mb-4 text-black">Get Industry-Specific Quote</h3>
                        <p className="text-black/80 mb-6">Our {industry.title.toLowerCase()} experts are ready to help with your project.</p>
                        <div className="space-y-3">
                          <Button asChild className="w-full bg-red-500 text-white hover:bg-red-500 transition-colors font-semibold" size="lg">
                            <Link href="/contact">Get Free Quote</Link>
                          </Button>
                          <div className="text-center">
                            <p className="text-sm text-black/70">Or call our specialists</p>
                            <p className="text-lg font-semibold text-red-500">+1 (555) 123-4567</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Industry Stats */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Card className="bg-white border border-black/10">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4 text-black">Industry Expertise</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-black/70">Projects Completed</span>
                            <span className="font-bold text-red-500 text-lg">500+</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-black/70">Specialist Linguists</span>
                            <span className="font-bold text-red-500 text-lg">100+</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-black/70">Years Experience</span>
                            <span className="font-bold text-red-500 text-lg">15+</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-black/70">Client Satisfaction</span>
                            <span className="font-bold text-red-500 text-lg">99.5%</span>
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

        {/* Related Resources */}
        {relatedPosts.length > 0 && (
          <section className="bg-black/5 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <motion.h2 
                className="text-3xl font-bold mb-12 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Related Resources
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.slice(0, 3).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden bg-white border border-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full flex flex-col">
                      <div className="relative w-full h-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6 flex flex-col flex-1">
                        <Badge className="mb-3 bg-red-500 text-white border border-red-500 w-fit">{post.category}</Badge>
                        <h3 className="text-lg font-bold mb-3 text-black">{post.title}</h3>
                        <p className="text-black/70 mb-4 text-sm flex-1">{post.excerpt}</p>
                        <Link 
                          href={`/blog/${post.id}`}
                          className="text-red-500 font-semibold hover:text-red-500 text-sm transition-colors"
                        >
                          Read More →
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="bg-black/5 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center">
              <Button asChild variant="outline" className="border-black/10 text-black hover:bg-black/5 transition-colors">
                <Link href="/industries">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  All Industries
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

