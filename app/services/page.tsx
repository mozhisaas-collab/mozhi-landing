"use client"

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { serviceIconMap } from "@/lib/iconMap";
import { FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

export default function Services() {
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
                Comprehensive Translation Services
              </motion.h1>
              <motion.p 
                className="text-xl text-black/70 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Professional language solutions tailored to your business needs. From document translation 
                to complete localization projects, we deliver excellence across 150+ languages.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service) => {
                const IconComponent = serviceIconMap[service.icon] || FileText;
                return (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <Card className="hover-lift transition-smooth bg-white border border-black-subtle h-full flex flex-col group">
                      <CardContent className="p-8 flex-1 flex flex-col">
                        <motion.div 
                          className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mb-6 transition-smooth"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="h-8 w-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold mb-4 text-black">{service.title}</h3>
                        <p className="text-black-subtle mb-6 leading-relaxed flex-1">{service.shortDescription}</p>
                        
                        {/* Key Features */}
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 text-black">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <motion.li 
                                key={index} 
                                className="text-sm text-black-subtle flex items-center"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                              >
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <motion.div
                          whileHover={{ x: 5 }}
                        >
                          <Link 
                            href={`/services/${service.id}`}
                            className="inline-flex items-center text-red-500 font-semibold hover:text-red-500 transition-smooth"
                          >
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          className="bg-gray-50 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p 
              className="text-xl text-black/70 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Contact us today for a free consultation and custom quote for your translation project.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="bg-red-500 text-white hover:bg-red-500 transition-colors font-semibold">
                  <Link href="/contact">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}

