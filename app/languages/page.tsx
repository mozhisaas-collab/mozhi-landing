"use client"

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const languageRegions = [
  {
    region: "Indian",
    icon: "🇮🇳",
    count: 15,
    languages: [
      "Assamese", "Bengali", "Gujarati", "Hindi", "Kannada", "Malayalam", 
      "Manipuri", "Marathi", "Oriya", "Punjabi", "Sanskrit", "Sindhi", 
      "Tamil", "Telugu", "Urdu"
    ]
  },
  {
    region: "African",
    icon: "🌍",
    count: 9,
    languages: [
      "Amharic", "Ghanian", "Hausa", "Malagasy", "Nigerian", "Somali", 
      "Swahili", "Tigrinya", "Yoruba"
    ]
  },
  {
    region: "European",
    icon: "🇪🇺",
    count: 35,
    languages: [
      "Albanian", "Algerian", "Armenian", "Azeri", "Bosnian", "Bulgarian", 
      "Byelorussian", "Croatian", "Czech", "Danish", "Dutch", "Estonian", 
      "Finnish", "French", "German", "Greek", "Hebrew", "Hungarian", 
      "Italian", "Kazakh", "Latvian", "Lithuanian", "Macedonian", "Norwegian", 
      "Polish", "Portuguese", "Romanian", "Russian", "Serbian", "Slovak", 
      "Slovenian", "Spanish", "Swedish", "Turkish", "Turkmen", "Ukrainian"
    ]
  },
  {
    region: "American",
    icon: "🌎",
    count: 3,
    languages: [
      "Spanish (Latin American)", "French (Canadian)", "Portuguese (Brazilian Portuguese)"
    ]
  },
  {
    region: "Asian",
    icon: "🌏",
    count: 18,
    languages: [
      "Pashto", "Arabic", "Baha Malay", "Khmer", "Chinese", "Dari", "Farsi", 
      "Hmong", "Indonesian", "Japanese", "Korean", "Lao", "Nepalese", 
      "Mongolian", "Singhalese", "Kurdish", "Thai", "Vietnamese"
    ]
  }
];

const stats = [
  { number: "150+", label: "Total Languages", icon: Globe },
  { number: "80+", label: "Major Languages", icon: CheckCircle },
  { number: "1000+", label: "Native Linguists", icon: Users },
  { number: "5", label: "Continents", icon: Globe }
];

export default function Languages() {
  const totalLanguages = languageRegions.reduce((sum, region) => sum + region.count, 0);

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
                Languages We Support
              </motion.h1>
              <motion.p 
                className="text-xl text-black/70 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Professional translation services across {totalLanguages}+ major languages with native expert linguists 
                from every continent. From the most spoken to the most specialized languages.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button asChild size="lg" className="bg-red-500 text-white hover:bg-red-500 transition-colors font-semibold">
                  <Link href="/contact">Get Quote in Your Language</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors font-semibold">
                  <Link href="/solutions">View Our Solutions</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <section className="py-16 bg-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="text-center bg-white border border-black/10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-red-500 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-black/70 font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Languages by Region */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-black">Languages by Region</h2>
              <p className="text-xl text-black/70 max-w-3xl mx-auto">
                Our comprehensive language coverage spans across all continents with native speakers and certified translators
              </p>
            </motion.div>

            <div className="space-y-12">
              {languageRegions.map((region, regionIndex) => (
                <motion.div
                  key={regionIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: regionIndex * 0.1 }}
                >
                  <Card className="bg-white border border-black/10 shadow-lg transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl">
                            {region.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-black">
                              {region.region} Languages
                            </h3>
                            <p className="text-black/70">
                              {region.count} languages supported
                            </p>
                          </div>
                        </div>
                        <Badge className="text-lg px-4 py-2 bg-red-600 text-white border border-red-500 font-medium">
                          {region.count} Languages
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                        {region.languages.map((language, langIndex) => (
                          <motion.div
                            key={langIndex}
                            className="bg-black/5 px-4 py-3 rounded-lg text-center hover:bg-red-600 hover:text-white transition-colors cursor-pointer group border border-black/10 hover:border-red-500"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: langIndex * 0.01 }}
                          >
                            <span className="text-sm font-medium">{language}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section className="bg-black/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-black">Native Expert Linguists</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Certified Native Speakers",
                      description: "All our linguists are native speakers with professional certification and industry specialization."
                    },
                    {
                      title: "Cultural Expertise",
                      description: "Deep understanding of cultural nuances and local business practices for accurate localization."
                    },
                    {
                      title: "Industry Specialization",
                      description: "Specialists in legal, medical, technical, and business translations for your specific sector."
                    },
                    {
                      title: "Quality Assurance",
                      description: "Multiple quality checks and linguistic review process."
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CheckCircle className="h-6 w-6 text-red-500 mt-1 shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-black">{item.title}</h3>
                        <p className="text-black/70">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
                  alt="Diverse team of professional linguists"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-xl w-full h-auto"
                />
                <motion.div 
                  className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-2xl border-2 border-black/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">1000+</div>
                    <div className="text-sm text-black/70 font-medium">Expert Linguists</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Popular Language Pairs */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-black">Popular Language Pairs</h2>
              <p className="text-xl text-black/70 max-w-3xl mx-auto">
                Most requested translation combinations for business and professional content
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "English ↔ Spanish",
                "English ↔ French",
                "English ↔ German",
                "English ↔ Chinese",
                "English ↔ Japanese",
                "English ↔ Arabic",
                "English ↔ Portuguese",
                "English ↔ Russian",
                "English ↔ Hindi"
              ].map((pair, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="text-center bg-white border border-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-red-500">
                    <CardContent className="p-6">
                      <div className="text-lg font-semibold text-black group-hover:text-red-500">{pair}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-black/70 mb-6">
                Don't see your language pair? We support all combinations between our {totalLanguages}+ languages.
              </p>
              <Button asChild size="lg" className="bg-red-600 text-white hover:bg-red-600 transition-colors font-semibold">
                <Link href="/contact">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
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
              className="text-3xl font-bold text-black mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Communicate Globally?
            </motion.h2>
            <motion.p 
              className="text-xl text-black/70 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get professional translation services in any language combination with our expert native linguists.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
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
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" variant="outline" className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors font-semibold">
                  <Link href="/industries">View Industries</Link>
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

