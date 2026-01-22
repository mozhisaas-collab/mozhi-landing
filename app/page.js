"use client"

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import BlogSection from "@/components/BlogSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Tag, Users, Shield, Clock, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <main className="pt-16">
        <Hero />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Services />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Industries />
        </motion.div>

        {/* Why Choose Us */}
        <motion.section 
          className="py-20 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.h2 
                  className="text-4xl font-bold mb-6 text-black"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                Why Choose Mozhi Solution
                </motion.h2>
                <motion.p 
                  className="text-xl mb-8 text-black-subtle"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                 With over 5 years of experience, we deliver accurate, culturally-adapted translations that help businesses succeed in global markets.
                </motion.p>

                <div className="space-y-6">
                  {[
                    { icon: Tag, title: "Native Expert Linguists", desc: "1000+ certified translators with domain-specific expertise" },
                    { icon: Users, title: "Data Security & Confidentiality", desc: "Strict confidentiality and NDA adherence for every project" },
                    { icon: Clock, title: "Fast Turnaround Times", desc: "Rush projects completed within 24 hours when needed" },
                    { icon: Shield, title: "Multi-Industry Expertise", desc: "Ensures accurate terminology and compliance with industry standards" },
                    { icon: Globe, title: "End-to-End Localization Services", desc: "One-stop solution for E-Learning, websites, software, apps, and global content" }
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div 
                        key={item.title}
                        className="flex items-start gap-4 hover-lift transition-smooth p-4 rounded-lg bg-white border border-black-subtle"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <motion.div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-smooth bg-red-600"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </motion.div>
                    <div>
                          <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
                          <p className="text-black-subtle">{item.desc}</p>
                    </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop" 
                  alt="International business meeting with diverse professionals" 
                  className="rounded-xl shadow-xl w-full h-auto hover-scale transition-smooth"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Stats overlay */}
                <motion.div 
                  className="absolute -bottom-8 -left-8 p-6 rounded-xl shadow-2xl bg-white border border-black-muted"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <motion.p 
                        className="text-2xl font-bold text-red-500"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1, type: "spring" }}
                      >
                        15+
                      </motion.p>
                      <p className="text-sm text-black-subtle">Years Experience</p>
                    </div>
                    <div>
                      <motion.p 
                        className="text-2xl font-bold text-red-500"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.1, type: "spring" }}
                      >
                        150+
                      </motion.p>
                      <p className="text-sm text-black-subtle">Languages</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Testimonials />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BlogSection />
        </motion.div>
      </main>
      <Footer />
    </motion.div>
  );
}
