"use client"

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/industries";
import { iconMap } from "@/lib/iconMap";
import { Globe, ArrowRight, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Industries() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

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
        {/* Hero Section */}
        <motion.section 
          className="bg-gray-50 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-4xl">
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Industries We Serve
              </motion.h1>
              <motion.p 
                className="text-xl text-black/70 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Specialized translation expertise across diverse sectors with deep industry knowledge 
                and understanding of sector-specific requirements and regulations.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Industries Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {industries.map((industry) => {
                const IconComponent = iconMap[industry.icon] || Globe;
                return (
                  <motion.div key={industry.id} variants={itemVariants}>
                    <Card className="h-full flex flex-col bg-white border border-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
                      <CardContent className="p-8 flex flex-col flex-1">
                        <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="h-8 w-8 text-white group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-black">{industry.title}</h3>
                        <p className="text-black/70 mb-6 leading-relaxed flex-1">{industry.description}</p>
                        
                        {/* Key Challenges */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 text-black">Key Challenges:</h4>
                          <ul className="space-y-1">
                            {industry.challenges.slice(0, 3).map((challenge, index) => (
                              <li key={index} className="text-sm text-black/70 flex items-center">
                                <AlertTriangle className="w-4 h-4 text-red-500 mr-2 shrink-0" />
                                {challenge}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Our Solutions */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 text-black">Our Solutions:</h4>
                          <ul className="space-y-1">
                            {industry.solutions.slice(0, 2).map((solution, index) => (
                              <li key={index} className="text-sm text-black/70 flex items-center">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 shrink-0"></div>
                                {solution}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link 
                          href={`/industries/${industry.id}`}
                          className="inline-flex items-center text-red-500 font-semibold hover:text-red-500 group-hover:translate-x-1 transition-all duration-300 mt-auto"
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Don't See Your Industry?
            </motion.h2>
            <motion.p 
              className="text-xl text-black/70 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We work with businesses across all sectors. Contact us to discuss your specific industry requirements and how we can help.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button asChild size="lg" className="bg-red-500 text-white hover:bg-red-500 transition-colors font-semibold">
                <Link href="/contact">
                  Discuss Your Requirements <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

