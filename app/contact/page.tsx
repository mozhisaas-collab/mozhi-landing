"use client"

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "24/7 Support Available"],
    link: "tel:+15551234567"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@mozhi-solutions.com", "quotes@mozhi-solutions.com"],
    link: "mailto:info@mozhi-solutions.com"
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Business Ave, Suite 100", "New York, NY 10001"],
    link: "#"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Fri: 8:00 AM - 8:00 PM EST", "Sat-Sun: 10:00 AM - 4:00 PM EST"],
    link: "#"
  }
];

const responsePromises = [
  "Free project consultation within 2 hours",
  "Custom pricing tailored to your needs",
  "No obligation quote with transparent pricing",
  "Expert recommendations for your project"
];

export default function Contact() {
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
                Ready to Go Global?
              </motion.h1>
              <motion.p 
                className="text-xl text-black/70 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Get a free quote for your translation project. Our experts will respond within 2 hours 
                during business days with a customized solution for your needs.
              </motion.p>
              <motion.div 
                className="grid md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {responsePromises.slice(0, 2).map((promise, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-red-500 h-5 w-5 shrink-0" />
                    <span className="text-black/70">{promise}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-black">Get in Touch</h2>
                <p className="text-xl text-black-subtle mb-12">
                  Our team of language experts is ready to help you expand your global reach. 
                  Contact us today to discuss your project requirements.
                </p>

                {/* Contact Methods */}
                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="bg-white border border-black-subtle transition-smooth hover-lift">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <motion.div 
                              className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center shrink-0"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            >
                              <info.icon className="h-6 w-6 text-white" />
                            </motion.div>
                            <div>
                              <h3 className="text-lg font-semibold mb-2 text-black">
                                {info.title}
                              </h3>
                              {info.details.map((detail, detailIndex) => (
                                <p key={detailIndex} className="text-black-subtle">
                                  {info.link !== "#" && detailIndex === 0 ? (
                                    <a href={info.link} className="text-red-500 hover:text-red-500 transition-smooth">
                                      {detail}
                                    </a>
                                  ) : (
                                    detail
                                  )}
                                </p>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Promises */}
                <motion.div 
                  className="bg-gray-50 border-2 border-red-500 p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-lg font-semibold mb-4 text-black">What You Can Expect:</h3>
                  <div className="space-y-3">
                    {responsePromises.map((promise, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-red-500 h-5 w-5 mt-0.5 shrink-0" />
                        <span className="text-black/80">{promise}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="bg-black/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-black">Our Global Presence</h2>
              <p className="text-xl text-black-subtle max-w-3xl mx-auto">
                With offices and partners worldwide, we provide localized service and support across all time zones.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "United States",
                  details: ["123 Business Ave, Suite 100", "New York, NY 10001"],
                  label: "Headquarters"
                },
                {
                  title: "Europe",
                  details: ["Regional Office", "London, United Kingdom"],
                  label: "EU Operations"
                },
                {
                  title: "Asia Pacific",
                  details: ["Regional Office", "Singapore"],
                  label: "APAC Operations"
                }
              ].map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center bg-white border border-black-subtle transition-smooth hover-lift">
                    <CardContent className="p-8">
                      <motion.div 
                        className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <MapPin className="h-8 w-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-4 text-black">{location.title}</h3>
                      <div className="text-black-subtle space-y-1">
                        {location.details.map((detail, i) => (
                          <p key={i}>{detail}</p>
                        ))}
                        <p className="text-red-500 font-semibold">{location.label}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-black">Frequently Asked Questions</h2>
              <p className="text-xl text-black-subtle">
                Quick answers to common questions about our services
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  question: "How quickly can you deliver my translation?",
                  answer: "Standard projects are typically completed within 24-48 hours. For urgent requests, we offer rush delivery within 24 hours. Timeline depends on project size, complexity, and language pair."
                },
                {
                  question: "What languages do you support?",
                  answer: "We support 150+ languages including all major European, Asian, African, and American languages. Our network includes native speakers and certified translators for each language pair."
                },
                {
                  question: "How do you ensure translation quality?",
                  answer: "We follow ISO 17100 standards with a multi-step process: translation by certified native speakers, review by a second linguist, and final quality assurance check. All projects include terminology management and consistency checks."
                },
                {
                  question: "Is my content secure and confidential?",
                  answer: "Absolutely. We're SOC 2 compliant and all team members sign strict confidentiality agreements. We use secure file transfer protocols and can accommodate specific security requirements for sensitive projects."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white border border-black-subtle transition-smooth hover-lift">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold mb-4 text-black">{faq.question}</h3>
                      <p className="text-black-subtle leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

