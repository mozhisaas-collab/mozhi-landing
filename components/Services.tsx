"use client"

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { services } from "@/data/solutions";
import { serviceIconMap } from "@/lib/iconMap";
import { FileText } from "lucide-react";
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
  const featuredServices = services.slice(0, 6);

  return (
    <section id="services" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
          Our Services
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-black-subtle">
          Comprehensive language solutions tailored to your business needs across all industries and platforms
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredServices.map((service) => {
            const IconComponent = serviceIconMap[service.icon] || FileText;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="hover-lift transition-smooth bg-white border border-black-subtle h-full flex flex-col">
                  <CardHeader className="shrink-0">
                    <motion.div 
                      className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 transition-smooth bg-red-600"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl text-black min-h-[56px]">{service.title}</CardTitle>
                </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="text-base mb-4 text-black-subtle flex-1">
                    {service.shortDescription}
                  </CardDescription>
                  <Link 
                    href={`/solutions/${service.id}`}
                      className="font-semibold text-sm inline-flex items-center gap-1 transition-smooth hover-red text-red-500 mt-auto"
                  >
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          <Button 
            size="lg" 
            asChild
              className="hover-lift transition-smooth bg-red-600 text-white"
          >
              <Link href="/solutions" className="text-white">View All Solutions</Link>
          </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
