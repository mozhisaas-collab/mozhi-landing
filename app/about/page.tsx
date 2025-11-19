"use client"

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Globe, Target, Shield, Clock, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { number: "15+", label: "Years Experience", icon: Award },
  { number: "1000+", label: "Expert Linguists", icon: Users },
  { number: "150+", label: "Languages", icon: Globe },
  { number: "10K+", label: "Projects Completed", icon: Target }
];

const values = [
  {
    icon: Shield,
    title: "Quality & Accuracy",
    description: "We maintain the highest standards with rigorous quality assurance processes."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our network of native linguists and industry specialists ensures authentic, culturally-appropriate translations."
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Meeting deadlines while maintaining quality. Our clients trust us with their most critical projects."
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Your success is our mission. We build long-term partnerships and deliver solutions that drive results."
  }
];

const certifications = [
  "GDPR Compliant Data Processing",
  "ATA Corporate Member",
  "GALA Associate Member"
];

const team = [
  {
    name: "Sarah Martinez",
    role: "CEO & Founder",
    bio: "15+ years in international business and localization strategy",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop"
  },
  {
    name: "Dr. Michael Chen",
    role: "Chief Language Officer",
    bio: "PhD in Linguistics, former UN interpreter with 20+ years experience",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
  },
  {
    name: "Anna Rodriguez",
    role: "VP of Quality Assurance",
    bio: "Certified translator with expertise in legal and medical translations",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop"
  }
];

export default function About() {
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
                About Mozhi Solutions
              </motion.h1>
              <motion.p 
                className="text-xl text-black/70 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Since 2009, we've been bridging language barriers and helping businesses expand globally. 
                Our passion for languages and commitment to excellence has made us a trusted partner for 
                Fortune 500 companies worldwide.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button asChild size="lg" className="bg-red-500 text-white hover:bg-red-500 transition-colors font-semibold">
                  <Link href="/contact">Start Your Global Journey</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
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
                  <Card className="text-center bg-white border border-black-subtle shadow-lg transition-smooth hover-lift">
                    <CardContent className="p-8">
                      <motion.div 
                        className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <stat.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="text-3xl font-bold text-red-500 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-black-subtle font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Company Story */}
        <section className="bg-black/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-black">Our Story</h2>
                <div className="space-y-6 text-black leading-relaxed">
                  <p className="text-black-subtle">
                    Founded in 2009 by a team of linguists and technology experts, Mozhi Solutions began 
                    with a simple mission: to break down language barriers that prevent businesses from reaching 
                    their full global potential.
                  </p>
                  <p className="text-black-subtle">
                    What started as a small translation agency has grown into a comprehensive localization partner, 
                    serving clients across 14+ industries. Our success is built on a foundation of quality, 
                    innovation, and an unwavering commitment to our clients' success.
                  </p>
                  <p className="text-black-subtle">
                    Today, we're proud to have a global network of over 1000 
                    expert linguists, helping businesses communicate effectively in 150+ languages.
                  </p>
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
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                  alt="Mozhi Solutions team collaboration"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-xl w-full h-auto"
                />
                <motion.div 
                  className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-2xl border-2 border-black-subtle"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">2009</div>
                    <div className="text-sm text-black-subtle font-medium">Founded</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-black">Our Values</h2>
              <p className="text-xl text-black-subtle max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white border border-black-subtle shadow-lg transition-smooth hover-lift">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center shrink-0"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <value.icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-black">
                            {value.title}
                          </h3>
                          <p className="text-black-subtle leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-black/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-black">Leadership Team</h2>
              <p className="text-xl text-black-subtle max-w-3xl mx-auto">
                Meet the experts leading our global language solutions
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center bg-white border border-black-subtle shadow-lg transition-smooth hover-lift">
                    <CardContent className="p-8">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-2 border-black-subtle"
                        />
                      </motion.div>
                      <h3 className="text-xl font-bold mb-2 text-black">
                        {member.name}
                      </h3>
                      <p className="text-red-500 font-semibold mb-4">
                        {member.role}
                      </p>
                      <p className="text-black-subtle text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-black">Certifications & Compliance</h2>
              <p className="text-xl text-black-subtle max-w-3xl mx-auto">
                Industry-leading standards and certifications that ensure the highest quality
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 bg-white p-6 rounded-lg shadow-sm border border-black-subtle transition-smooth hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Shield className="h-6 w-6 text-red-500 shrink-0" />
                  <span className="text-black font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <motion.h2 
              className="text-3xl font-bold text-black mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Go Global with Us?
            </motion.h2>
            <motion.p 
              className="text-xl text-black/70 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Join thousands of businesses who trust Mozhi Solutions for their international communication needs.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button asChild size="lg" className="bg-red-500 text-white hover:bg-red-500 transition-colors font-semibold">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors font-semibold">
                <Link href="/solutions">View Our Solutions</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

