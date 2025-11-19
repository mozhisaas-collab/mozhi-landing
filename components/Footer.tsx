"use client"

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { industries } from "@/data/industries";
import { services } from "@/data/solutions";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

export default function Footer() {
  return (
    <motion.footer 
      id="contact" 
      className="border-t border-black/20 bg-black/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
            <Link href="/" className="flex items-center gap-2 mb-4 hover-scale transition-smooth">
              <Image
                src="/Mozhi@500x.png"
                alt="Mozhi Solutions Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            </motion.div>
            <p className="mb-6 text-black/70">
              Professional translation and localization services helping businesses succeed in global markets since 2009.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Linkedin, href: "https://linkedin.com/company/mozhi", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com/mozhi", label: "Twitter" },
                { icon: Facebook, href: "https://facebook.com/mozhi", label: "Facebook" }
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button variant="ghost" size="icon" asChild className="text-black/70 hover:text-red-600 transition-colors">
                      <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                        <Icon className="h-5 w-5" />
                </a>
              </Button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4 text-black">Solutions</h3>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 6).map((service) => (
                <motion.li 
                  key={service.id}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href={`/solutions/${service.id}`} 
                    className="px-2 py-1 rounded transition-smooth text-black-subtle hover:text-red-500 block"
                  >
                    {service.title}
                </Link>
              </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Industries */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4 text-black">Industries</h3>
            <ul className="space-y-2 text-sm">
              {industries.slice(0, 6).map((industry) => (
                <motion.li 
                  key={industry.id}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href={`/industries/${industry.id}`} 
                    className="px-2 py-1 rounded transition-smooth text-black-subtle hover:text-red-500 block"
                  >
                    {industry.title}
                </Link>
              </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold mb-4 text-black">Company</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About Us", href: "/about" },
                { name: "Languages", href: "/languages" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href={link.href} 
                    className="px-2 py-1 rounded transition-smooth text-black-subtle hover:text-red-500 block"
                  >
                    {link.name}
                </Link>
              </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="pt-8 border-t border-black/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-black/70">
              © {new Date().getFullYear()} Mozhi Solutions. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
