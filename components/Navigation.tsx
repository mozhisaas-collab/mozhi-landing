"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { services } from "@/data/solutions";
import { industries } from "@/data/industries";
import { iconMap, serviceIconMap } from "@/lib/iconMap";
import { FileText } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
  { code: "zh", name: "中文" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [mounted, setMounted] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path: string) => pathname === path || pathname?.startsWith(path + "/");

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-sm transition-smooth bg-white/95" 
      suppressHydrationWarning
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          <Link href="/" className="flex items-center hover-scale transition-smooth" onClick={handleLogoClick}>
            <div className="bg-white rounded px-2 py-1">
              <Image
                src="/Mozhi@500x.png"
                alt="Mozhi Solutions Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </div>
          </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Services Dropdown */}
            {mounted ? (
              <DropdownMenu open={servicesOpen} onOpenChange={(open) => {
                setServicesOpen(open);
                if (open) setIndustriesOpen(false);
              }}>
                <DropdownMenuTrigger 
                  className="flex items-center gap-1 font-medium text-black hover:text-red-500   bg-transparent cursor-pointer py-2 px-0"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-[1000px] max-w-[95vw] p-8 shadow-2xl bg-white rounded-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
                  align="start"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                  <div className="grid grid-cols-4 gap-8">
                    {/* Category 1: Translation & Language Services */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <h3 className="font-bold text-black mb-4 text-sm uppercase tracking-wide cursor-pointer">Translation & Language Services</h3>
                      <div className="space-y-1.5">
                        {services
                          .filter(s => ["translation", "interpretation"].includes(s.id))
                          .map((service) => {
                    const IconComponent = serviceIconMap[service.icon] || FileText;
                    return (
                      <DropdownMenuItem 
                        key={service.id} 
                        asChild 
                                className="focus:bg-red-600/10 p-0"
                                onSelect={() => setServicesOpen(false)}
                              >
                                <Link
                                  href={`/solutions/${service.id}`}
                                  className="w-full px-3 py-2 flex items-center text-sm text-black hover:text-red-500 transition-all duration-200 rounded-md hover:bg-red-50 cursor-pointer"
                                >
                                  <IconComponent className="mr-2 h-4 w-4 text-red-500 transition-transform duration-200 group-hover:scale-110" />
                                  <span>{service.title === "Translation" ? "Document Translation" : service.title}</span>
                                </Link>
                              </DropdownMenuItem>
                            );
                          })}
                        <DropdownMenuItem 
                          asChild 
                          className="focus:bg-red-600/10 p-0"
                        onSelect={() => setServicesOpen(false)}
                      >
                        <Link
                            href={`/solutions/multimedia-solutions`}
                            className="w-full px-3 py-2 flex items-center text-sm text-black hover:text-red-500 transition-all duration-200 rounded-md hover:bg-red-50 cursor-pointer"
                          >
                            <FileText className="mr-2 h-4 w-4 text-red-500 transition-transform duration-200 group-hover:scale-110" />
                            <span>Transcription</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          asChild 
                          className="focus:bg-red-600/10 p-0"
                          onSelect={() => setServicesOpen(false)}
                        >
                          <Link
                            href={`/solutions/multimedia-solutions`}
                            className="w-full px-3 py-2 flex items-center text-sm text-black hover:text-red-500 transition-all duration-200 rounded-md hover:bg-red-50 cursor-pointer"
                          >
                            <FileText className="mr-2 h-4 w-4 text-red-500" />
                            <span>Video & Audio Translation</span>
                          </Link>
                        </DropdownMenuItem>
                      </div>
                    </motion.div>

                    {/* Category 2: Localization */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    >
                      <h3 className="font-bold text-black mb-4 text-sm uppercase tracking-wide cursor-pointer">Localization</h3>
                      <div className="space-y-1.5">
                        {[
                          { id: "elearning-localization", title: "E-Learning Localization" },
                          { id: "digital-localization", title: "Digital Localization" },
                          { id: "website-localization", title: "Website Localization" },
                          { id: "software-localization", title: "Software Localization" },
                          { id: "mobile-app-localization", title: "Mobile App Localization" },
                          { id: "localization-testing", title: "Multilingual QA & Testing" }
                        ].map((item) => {
                          const service = services.find(s => s.id === item.id);
                          const IconComponent = service ? (serviceIconMap[service.icon] || FileText) : FileText;
                          return (
                            <DropdownMenuItem 
                              key={item.id} 
                              asChild 
                              className="focus:bg-red-600/10 p-0"
                              onSelect={() => setServicesOpen(false)}
                            >
                              <Link
                                href={`/solutions/${item.id}`}
                                className="w-full px-3 py-2 flex items-center text-sm text-black hover:text-red-500 transition-all duration-200 rounded-md hover:bg-red-50 cursor-pointer"
                              >
                                <IconComponent className="mr-2 h-4 w-4 text-red-500 transition-transform duration-200 group-hover:scale-110" />
                                <span>{item.title}</span>
                              </Link>
                            </DropdownMenuItem>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Category 3: Globalization */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <h3 className="font-bold text-black mb-4 text-sm uppercase tracking-wide cursor-pointer">Globalization</h3>
                      <div className="space-y-1.5">
                        {[
                          { id: "language-training", title: "Language Training" },
                          { id: "globalization-consulting", title: "Globalization Consulting" },
                          { id: "language-staffing", title: "Multilingual Staffing" },
                          { id: "elearning-development", title: "Digital Learning" }
                        ].map((item) => {
                          const service = services.find(s => s.id === item.id);
                          const IconComponent = service ? (serviceIconMap[service.icon] || FileText) : FileText;
                          return (
                            <DropdownMenuItem 
                              key={item.id} 
                              asChild 
                              className="focus:bg-red-600/10 p-0"
                              onSelect={() => setServicesOpen(false)}
                            >
                              <Link
                                href={`/solutions/${item.id}`}
                                className="w-full px-3 py-2 flex items-center text-sm text-black hover:text-red-500 transition-all duration-200 rounded-md hover:bg-red-50 cursor-pointer"
                              >
                                <IconComponent className="mr-2 h-4 w-4 text-red-500 transition-transform duration-200 group-hover:scale-110" />
                                <span>{item.title}</span>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                      </div>
                    </motion.div>

                    {/* Category 4: Multimedia Solutions */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.25 }}
                    >
                      <h3 className="font-bold text-black mb-4 text-sm uppercase tracking-wide cursor-pointer">Multimedia Solutions</h3>
                      <div className="space-y-1.5">
                        <DropdownMenuItem 
                          asChild 
                          className="focus:bg-red-600/10 p-0"
                          onSelect={() => setServicesOpen(false)}
                        >
                          <Link
                            href={`/solutions/multimedia-solutions`}
                            className="w-full px-3 py-2 flex items-center text-sm text-black hover:text-red-500 transition-all duration-200 rounded-md hover:bg-red-50 cursor-pointer"
                          >
                            <FileText className="mr-2 h-4 w-4 text-red-500" />
                            <span>Subtitling</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          asChild 
                          className="focus:bg-red-600/10 p-0"
                          onSelect={() => setServicesOpen(false)}
                        >
                          <Link
                            href={`/solutions/multimedia-solutions`}
                            className="w-full px-3 py-2 flex items-center text-sm text-black hover:text-red-500 transition-all duration-200 rounded-md hover:bg-red-50 cursor-pointer"
                          >
                            <FileText className="mr-2 h-4 w-4 text-red-500" />
                            <span>Graphic adaptation</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          asChild 
                          className="focus:bg-red-600/10 p-0"
                          onSelect={() => setServicesOpen(false)}
                        >
                          <Link
                            href={`/solutions/multimedia-solutions`}
                            className="w-full px-3 py-2 flex items-center text-sm text-black hover:text-red-500 transition-all duration-200 rounded-md hover:bg-red-50 cursor-pointer"
                          >
                            <FileText className="mr-2 h-4 w-4 text-red-500" />
                            <span>Video Production</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          asChild 
                          className="focus:bg-red-600/10 p-0"
                          onSelect={() => setServicesOpen(false)}
                        >
                          <Link
                            href={`/solutions/multimedia-solutions`}
                            className="w-full px-3 py-2 flex items-center text-sm text-black hover:text-red-500 transition-all duration-200 rounded-md hover:bg-red-50 cursor-pointer"
                          >
                            <FileText className="mr-2 h-4 w-4 text-red-500" />
                            <span>Animation</span>
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          asChild 
                          className="focus:bg-red-600/10 p-0"
                          onSelect={() => setServicesOpen(false)}
                        >
                          <Link
                            href={`/solutions/multimedia-solutions`}
                            className="w-full px-3 py-2 flex items-center text-sm text-black hover:text-red-500 transition-all duration-200 rounded-md hover:bg-red-50 cursor-pointer"
                          >
                            <FileText className="mr-2 h-4 w-4 text-red-500" />
                            <span>Content Creation</span>
                          </Link>
                        </DropdownMenuItem>
                  <DropdownMenuItem 
                    asChild 
                          className="focus:bg-red-600/10 p-0"
                    onSelect={() => setServicesOpen(false)}
                        >
                          <Link
                            href={`/solutions/multimedia-solutions`}
                            className="w-full px-3 py-2 flex items-center text-sm text-black hover:text-red-500 transition-all duration-200 rounded-md hover:bg-red-50 cursor-pointer"
                          >
                            <FileText className="mr-2 h-4 w-4 text-red-500" />
                            <span>Explainer Videos</span>
                          </Link>
                        </DropdownMenuItem>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div 
                    className="mt-6 pt-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <DropdownMenuItem 
                      asChild 
                      className="focus:bg-red-600/10 p-0"
                      onSelect={() => setServicesOpen(false)}
                    >
                      <Link href="/solutions" className="w-full px-3 py-2 font-semibold text-sm text-red-500 hover:text-red-500 transition-colors cursor-pointer">
                        View All Solutions →
                    </Link>
                  </DropdownMenuItem>
                  </motion.div>
                  </motion.div>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/solutions" className="flex items-center gap-1 font-medium text-black hover:text-red-500 cursor-pointer">
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4" />
              </Link>
            )}

            {/* Industries Dropdown */}
            {mounted ? (
              <DropdownMenu open={industriesOpen} onOpenChange={(open) => {
                setIndustriesOpen(open);
                if (open) setServicesOpen(false);
              }}>
                <DropdownMenuTrigger 
                  className="flex items-center gap-1 font-medium text-black hover:text-red-500  bg-transparent cursor-pointer py-2 px-0"
                >
                  <span>Industries</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`} />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-[1000px] max-w-[95vw] p-8 shadow-2xl bg-white rounded-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
                  align="start"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                  <div className="grid grid-cols-4 gap-8">
                    {/* Column 1: Industries 1-4 */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <h3 className="font-bold text-black mb-4 text-sm uppercase tracking-wide cursor-pointer">Education & Healthcare</h3>
                      <div className="space-y-1.5">
                        {[
                          { id: "elearning", title: "E-Learning" },
                          { id: "life-sciences", title: "Life Sciences" },
                          { id: "retail-ecommerce", title: "Retail & E-Commerce" },
                          { id: "legal", title: "Legal" }
                        ].map((item) => {
                          const industry = industries.find(i => i.id === item.id);
                          const IconComponent = industry ? (iconMap[industry.icon] || Globe) : Globe;
                          return (
                            <DropdownMenuItem 
                              key={item.id} 
                              asChild 
                              className="focus:bg-red-600/10 p-0"
                              onSelect={() => setIndustriesOpen(false)}
                            >
                              <Link
                                href={`/industries/${item.id}`}
                                className="w-full px-3 py-2 flex items-center text-sm text-black hover:text-red-500 transition-all duration-200 rounded-md hover:bg-red-50 cursor-pointer"
                              >
                                <IconComponent className="mr-2 h-4 w-4 text-red-500 transition-transform duration-200 group-hover:scale-110" />
                                <span>{item.title}</span>
                              </Link>
                            </DropdownMenuItem>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Column 2: Industries 5-8 */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    >
                      <h3 className="font-bold text-black mb-4 text-sm uppercase tracking-wide cursor-pointer">Entertainment & Finance</h3>
                      <div className="space-y-1.5">
                        {[
                          { id: "media-entertainment", title: "Media & Entertainment" },
                          { id: "banking-finance", title: "Banking & Finance" },
                          { id: "travel-hospitality", title: "Travel & Hospitality" },
                          { id: "energy-mining", title: "Energy & Mining" }
                        ].map((item) => {
                          const industry = industries.find(i => i.id === item.id);
                          const IconComponent = industry ? (iconMap[industry.icon] || Globe) : Globe;
                          return (
                            <DropdownMenuItem 
                              key={item.id} 
                              asChild 
                              className="focus:bg-red-600/10 p-0"
                              onSelect={() => setIndustriesOpen(false)}
                            >
                              <Link
                                href={`/industries/${item.id}`}
                                className="w-full px-3 py-2 flex items-center text-sm text-black hover:text-red-500 transition-all duration-200 rounded-md hover:bg-red-50 cursor-pointer"
                              >
                                <IconComponent className="mr-2 h-4 w-4 text-red-500 transition-transform duration-200 group-hover:scale-110" />
                                <span>{item.title}</span>
                              </Link>
                            </DropdownMenuItem>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Column 3: Industries 9-12 */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <h3 className="font-bold text-black mb-4 text-sm uppercase tracking-wide cursor-pointer">Technology & Professional</h3>
                      <div className="space-y-1.5">
                        {[
                          { id: "technology", title: "Hardware, Software, Technology" },
                          { id: "government", title: "Government" },
                          { id: "advertising-marketing", title: "Advertising, Marketing, PR" },
                          { id: "industrial-manufacturing", title: "Industrial & Manufacturing" }
                        ].map((item) => {
                          const industry = industries.find(i => i.id === item.id);
                          const IconComponent = industry ? (iconMap[industry.icon] || Globe) : Globe;
                          return (
                            <DropdownMenuItem 
                              key={item.id} 
                              asChild 
                              className="focus:bg-red-600/10 p-0"
                              onSelect={() => setIndustriesOpen(false)}
                            >
                              <Link
                                href={`/industries/${item.id}`}
                                className="w-full px-3 py-2 flex items-center text-sm text-black hover:text-red-500 transition-all duration-200 rounded-md hover:bg-red-50 cursor-pointer"
                              >
                                <IconComponent className="mr-2 h-4 w-4 text-red-500 transition-transform duration-200 group-hover:scale-110" />
                                <span>{item.title}</span>
                              </Link>
                            </DropdownMenuItem>
                          );
                        })}
                      </div>
                    </motion.div>

                    {/* Column 4: Industries 13-15 */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.25 }}
                    >
                      <h3 className="font-bold text-black mb-4 text-sm uppercase tracking-wide cursor-pointer">Consumer & Digital</h3>
                      <div className="space-y-1.5">
                        {[
                          { id: "fmcg", title: "FMCG" },
                          { id: "telecom", title: "Telecom" },
                          { id: "gaming", title: "Gaming" }
                        ].map((item) => {
                          const industry = industries.find(i => i.id === item.id);
                          const IconComponent = industry ? (iconMap[industry.icon] || Globe) : Globe;
                    return (
                      <DropdownMenuItem 
                              key={item.id} 
                        asChild 
                              className="focus:bg-red-600/10 p-0"
                        onSelect={() => setIndustriesOpen(false)}
                      >
                        <Link
                                href={`/industries/${item.id}`}
                                className="w-full px-3 py-2 flex items-center text-sm text-black hover:text-red-500 transition-all duration-200 rounded-md hover:bg-red-50"
                        >
                                <IconComponent className="mr-2 h-4 w-4 text-red-500 transition-transform duration-200 group-hover:scale-110" />
                                <span>{item.title}</span>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                      </div>
                    </motion.div>
                  </div>
                    <motion.div 
                      className="mt-6 pt-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                  <DropdownMenuItem 
                    asChild 
                        className="focus:bg-red-600/10 p-0"
                    onSelect={() => setIndustriesOpen(false)}
                  >
                        <Link href="/industries" className="w-full px-3 py-2 font-semibold text-sm text-red-500 hover:text-red-500 transition-colors cursor-pointer">
                      View All Industries →
                    </Link>
                  </DropdownMenuItem>
                    </motion.div>
                  </motion.div>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/industries" className="flex items-center gap-1 font-medium text-black hover:text-red-500 cursor-pointer">
                <span>Industries</span>
                <ChevronDown className="h-4 w-4" />
              </Link>
            )}

            <Link
              href="/languages"
              className={`font-medium text-black hover:text-red-500 focus:outline-none focus-visible:outline-none cursor-pointer ${isActive("/languages") ? 'text-red-500' : ''}`}
            >
              Languages
            </Link>
            <Link
              href="/blog"
              className={`font-medium text-black hover:text-red-500 focus:outline-none focus-visible:outline-none cursor-pointer ${(isActive("/blog") || pathname?.startsWith("/blog/")) ? 'text-red-500' : ''}`}
            >
              Resources
            </Link>
            <Link
              href="/about"
              className={`font-medium text-black hover:text-red-500 focus:outline-none focus-visible:outline-none cursor-pointer ${isActive("/about") ? 'text-red-500' : ''}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`font-medium text-black hover:text-red-500 focus:outline-none focus-visible:outline-none cursor-pointer ${isActive("/contact") ? 'text-red-500' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden lg:block text-right">
              <p className="text-sm font-medium text-black">
                +91 9884068064
              </p>
              <p className="text-xs text-black-subtle">24/7 Support</p>
            </div>
            <Button asChild className="hover-lift transition-smooth focus:outline-none focus-visible:outline-none focus-visible:ring-0 bg-red-600 text-white">
              <Link href="/contact" className="text-white">Get Quote</Link>
            </Button>

            {/* Language Selector */}
            {mounted ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="transition-smooth hover-lift  text-black">
                    <Globe className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="shadow-lg animate-fade-in-down bg-white">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang.code);
                        console.log("Language changed to:", lang.name);
                      }}
                      className="transition-smooth hover-lift focus:outline-none focus-visible:outline-none focus-visible:ring-0 text-black"
                    >
                      <span className="hover-red">{lang.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="ghost" size="icon" asChild className="transition-smooth hover-lift text-black">
                <Link href="/languages">
                  <Globe className="h-5 w-5" />
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden transition-smooth hover-lift  text-black">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white overflow-y-auto">
              <SheetTitle asChild>
                <VisuallyHidden>Navigation Menu</VisuallyHidden>
              </SheetTitle>
              <SheetDescription asChild>
                <VisuallyHidden>Main site navigation menu with links to services, industries, and other pages</VisuallyHidden>
              </SheetDescription>
              <div className="flex flex-col gap-6 mt-6 pb-6">
                {/* Solutions Section */}
                <div className="space-y-4">
                  <h2 className="font-bold text-black text-base uppercase tracking-wide cursor-pointer">Solutions</h2>
                  
                  <div>
                    <h3 className="font-semibold text-black mb-2 text-sm uppercase cursor-pointer">Translation & Language Services</h3>
                    <div className="space-y-1">
                      {services
                        .filter(s => ["translation", "interpretation"].includes(s.id))
                        .map((service) => (
                    <Link
                      key={service.id}
                            href={`/solutions/${service.id}`}
                            className="block px-3 py-2 text-sm rounded transition-smooth hover-lift text-black-subtle cursor-pointer"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="hover-red">{service.title === "Translation" ? "Document Translation" : service.title}</span>
                          </Link>
                        ))}
                      <Link
                        href="/solutions/multimedia-solutions"
                        className="block px-3 py-2 text-sm rounded transition-smooth hover-lift text-black-subtle"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="hover-red">Transcription</span>
                      </Link>
                      <Link
                        href="/solutions/multimedia-solutions"
                        className="block px-3 py-2 text-sm rounded transition-smooth hover-lift text-black-subtle"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="hover-red">Video & Audio Translation</span>
                      </Link>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-black mb-2 text-sm uppercase cursor-pointer">Localization</h3>
                    <div className="space-y-1">
                      {[
                        { id: "elearning-localization", title: "E-Learning Localization" },
                        { id: "digital-localization", title: "Digital Localization" },
                        { id: "website-localization", title: "Website Localization" },
                        { id: "software-localization", title: "Software Localization" },
                        { id: "mobile-app-localization", title: "Mobile App Localization" },
                        { id: "localization-testing", title: "Multilingual QA & Testing" }
                      ].map((item) => (
                        <Link
                          key={item.id}
                          href={`/solutions/${item.id}`}
                          className="block px-3 py-2 text-sm rounded transition-smooth hover-lift text-black-subtle"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="hover-red">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-black mb-2 text-sm uppercase cursor-pointer">Globalization</h3>
                    <div className="space-y-1">
                      {[
                        { id: "language-training", title: "Language Training" },
                        { id: "globalization-consulting", title: "Globalization Consulting" },
                        { id: "language-staffing", title: "Multilingual Staffing" },
                        { id: "elearning-development", title: "Digital Learning" }
                      ].map((item) => (
                        <Link
                          key={item.id}
                          href={`/solutions/${item.id}`}
                          className="block px-3 py-2 text-sm rounded transition-smooth hover-lift text-black-subtle"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="hover-red">{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-black mb-2 text-sm uppercase cursor-pointer">Multimedia Solutions</h3>
                    <div className="space-y-1">
                      {["Subtitling", "Graphic adaptation", "Video Production", "Animation", "Content Creation", "Explainer Videos"].map((item) => (
                        <Link
                          key={item}
                          href="/solutions/multimedia-solutions"
                      className="block px-3 py-2 text-sm rounded transition-smooth hover-lift text-black-subtle"
                      onClick={() => setIsOpen(false)}
                    >
                          <span className="hover-red">{item}</span>
                    </Link>
                  ))}
                    </div>
                  </div>
                  
                  <Link
                    href="/solutions"
                    className="block px-3 py-2 text-sm font-medium rounded transition-smooth hover-lift text-red-500 mt-2 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    View All Solutions →
                  </Link>
                </div>

                {/* Industries Section */}
                <div className="space-y-4">
                  <h2 className="font-bold text-black text-base uppercase tracking-wide cursor-pointer">Industries</h2>
                  <div className="space-y-1">
                    {[
                      { id: "elearning", title: "E-Learning" },
                      { id: "life-sciences", title: "Life Sciences" },
                      { id: "retail-ecommerce", title: "Retail & E-Commerce" },
                      { id: "legal", title: "Legal" },
                      { id: "media-entertainment", title: "Media & Entertainment" },
                      { id: "banking-finance", title: "Banking & Finance" },
                      { id: "travel-hospitality", title: "Travel & Hospitality" },
                      { id: "energy-mining", title: "Energy & Mining" },
                      { id: "technology", title: "Hardware, Software, Technology" },
                      { id: "government", title: "Government" },
                      { id: "advertising-marketing", title: "Advertising, Marketing, PR" },
                      { id: "industrial-manufacturing", title: "Industrial & Manufacturing" },
                      { id: "fmcg", title: "FMCG" },
                      { id: "telecom", title: "Telecom" },
                      { id: "gaming", title: "Gaming" }
                    ].map((item) => (
                    <Link
                        key={item.id}
                        href={`/industries/${item.id}`}
                      className="block px-3 py-2 text-sm rounded transition-smooth hover-lift text-black-subtle"
                      onClick={() => setIsOpen(false)}
                    >
                        <span className="hover-red">{item.title}</span>
                    </Link>
                  ))}
                  <Link
                    href="/industries"
                      className="block px-3 py-2 text-sm font-medium rounded transition-smooth hover-lift text-red-500 mt-2 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    View All Industries →
                  </Link>
                  </div>
                </div>

                {/* Other Links Section */}
                <div className="space-y-2">
                  <h2 className="font-bold text-black text-base uppercase tracking-wide cursor-pointer">More</h2>
                  <div className="space-y-1">
                  <Link
                    href="/languages"
                    className="block px-3 py-2 text-sm rounded transition-smooth hover-lift hover-red text-black cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Languages
                  </Link>
                  <Link
                    href="/blog"
                    className="block px-3 py-2 text-sm rounded transition-smooth hover-lift hover-red text-black cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Resources
                  </Link>
                  <Link
                    href="/about"
                    className="block px-3 py-2 text-sm rounded transition-smooth hover-lift hover-red text-black cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-3 py-2 text-sm rounded transition-smooth hover-lift hover-red text-black cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="pt-2">
                  <p className="text-sm font-medium text-black">
                    +91 9884068064
                  </p>
                  <p className="text-xs text-black-subtle">24/7 Support</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
