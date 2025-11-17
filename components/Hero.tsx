"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

export default function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/world_map_global_con_7143728f.jpg"
          alt="Global connectivity"
          fill
          className="object-cover"
          priority
        />
      </div>
      <motion.div 
        className="absolute inset-0 bg-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6"
              variants={itemVariants}
            >
              Professional Translation & Localization Services
            </motion.h1>
            <motion.p 
              className="text-xl text-white/95 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Bridge language barriers and expand your global reach with our expert translation services. 
              Trusted by Fortune 500 companies across 14+ industries.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <Button 
                asChild
                size="lg" 
                  className="bg-white text-red-500 hover:bg-white/90 min-h-12 px-8 font-semibold"
              >
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white/30 text-white backdrop-blur-sm hover:bg-white/20 min-h-12 px-8"
              >
                <Link href="/blog">View Our Work</Link>
              </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-white/90 text-sm"
              variants={itemVariants}
            >
              {[
                { text: "ISO 17100 Certified" },
                { text: "24/7 Support" },
                { text: "150+ Languages" }
              ].map((item, index) => (
                <motion.div 
                  key={item.text}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-red-500" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
         
        </motion.div>
      </div>
    </section>
  );
}
