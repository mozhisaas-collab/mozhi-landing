"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone, Menu, X, Globe } from "lucide-react";
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
import { services } from "@/data/services";
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
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-sm transition-smooth bg-white/95 border-b border-black-subtle" 
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
                  className="flex items-center gap-1 font-medium text-black hover:text-red-500 focus:outline-none focus-visible:outline-none focus-visible:ring-0 border-0 bg-transparent cursor-pointer py-2 px-0"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-64 shadow-lg bg-white border border-black-subtle"
                  align="start"
                >
                  {services.slice(0, 8).map((service) => {
                    const IconComponent = serviceIconMap[service.icon] || FileText;
                    return (
                      <DropdownMenuItem 
                        key={service.id} 
                        asChild 
                        className="focus:bg-red-600/10"
                        onSelect={() => setServicesOpen(false)}
                      >
                        <Link
                          href={`/services/${service.id}`}
                          className="w-full px-4 py-2 flex items-center text-black hover:text-red-500"
                        >
                          <IconComponent className="mr-3 h-4 w-4 text-red-500" />
                          <span>{service.title}</span>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                  <DropdownMenuItem 
                    asChild 
                    className="focus:bg-red-600/10"
                    onSelect={() => setServicesOpen(false)}
                  >
                    <Link href="/services" className="w-full px-4 py-2 font-semibold text-red-500 hover:text-red-500">
                      View All Services →
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/services" className="flex items-center gap-1 font-medium text-black hover:text-red-500">
                <span>Services</span>
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
                  className="flex items-center gap-1 font-medium text-black hover:text-red-500 focus:outline-none focus-visible:outline-none focus-visible:ring-0 border-0 bg-transparent cursor-pointer py-2 px-0"
                >
                  <span>Industries</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`} />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-64 shadow-lg bg-white border border-black-subtle"
                  align="start"
                >
                  {industries.slice(0, 10).map((industry) => {
                    const IconComponent = iconMap[industry.icon] || Globe;
                    return (
                      <DropdownMenuItem 
                        key={industry.id} 
                        asChild 
                        className="focus:bg-red-600/10"
                        onSelect={() => setIndustriesOpen(false)}
                      >
                        <Link
                          href={`/industries/${industry.id}`}
                          className="w-full px-4 py-2 flex items-center text-black hover:text-red-500"
                        >
                          <IconComponent className="mr-3 h-4 w-4 text-red-500" />
                          <span>{industry.title}</span>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                  <DropdownMenuItem 
                    asChild 
                    className="focus:bg-red-600/10"
                    onSelect={() => setIndustriesOpen(false)}
                  >
                    <Link href="/industries" className="w-full px-4 py-2 font-semibold text-red-500 hover:text-red-500">
                      View All Industries →
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/industries" className="flex items-center gap-1 font-medium text-black hover:text-red-500">
                <span>Industries</span>
                <ChevronDown className="h-4 w-4" />
              </Link>
            )}

            <Link
              href="/languages"
              className={`font-medium text-black hover:text-red-500 focus:outline-none focus-visible:outline-none ${isActive("/languages") ? 'text-red-500' : ''}`}
            >
              Languages
            </Link>
            <Link
              href="/blog"
              className={`font-medium text-black hover:text-red-500 focus:outline-none focus-visible:outline-none ${(isActive("/blog") || pathname?.startsWith("/blog/")) ? 'text-red-500' : ''}`}
            >
              Resources
            </Link>
            <Link
              href="/about"
              className={`font-medium text-black hover:text-red-500 focus:outline-none focus-visible:outline-none ${isActive("/about") ? 'text-red-500' : ''}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`font-medium text-black hover:text-red-500 focus:outline-none focus-visible:outline-none ${isActive("/contact") ? 'text-red-500' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden lg:block text-right">
              <p className="text-sm font-medium text-black">
                +1 (555) 123-4567
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
                  <Button variant="ghost" size="icon" className="transition-smooth hover-lift focus:outline-none focus-visible:outline-none focus-visible:ring-0 border-0 text-black">
                    <Globe className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="shadow-lg animate-fade-in-down bg-white border border-black-subtle">
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
              <Button variant="ghost" size="icon" className="lg:hidden transition-smooth hover-lift focus:outline-none focus-visible:outline-none focus-visible:ring-0 border-0 text-black">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white border-l border-black-subtle">
              <SheetTitle asChild>
                <VisuallyHidden>Navigation Menu</VisuallyHidden>
              </SheetTitle>
              <SheetDescription asChild>
                <VisuallyHidden>Main site navigation menu with links to services, industries, and other pages</VisuallyHidden>
              </SheetDescription>
              <div className="flex flex-col gap-4 mt-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-black">Services</h3>
                  {services.slice(0, 6).map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      className="block px-3 py-2 text-sm rounded transition-smooth hover-lift text-black-subtle"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="hover-red">{service.title}</span>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="block px-3 py-2 text-sm font-medium rounded transition-smooth hover-lift text-red-500"
                    onClick={() => setIsOpen(false)}
                  >
                    View All Services →
                  </Link>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-black">Industries</h3>
                  {industries.slice(0, 6).map((industry) => (
                    <Link
                      key={industry.id}
                      href={`/industries/${industry.id}`}
                      className="block px-3 py-2 text-sm rounded transition-smooth hover-lift text-black-subtle"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="hover-red">{industry.title}</span>
                    </Link>
                  ))}
                  <Link
                    href="/industries"
                    className="block px-3 py-2 text-sm font-medium rounded transition-smooth hover-lift text-red-500"
                    onClick={() => setIsOpen(false)}
                  >
                    View All Industries →
                  </Link>
                </div>

                <div className="space-y-2 pt-4 border-t border-black-subtle">
                  <Link
                    href="/languages"
                    className="block px-3 py-2 text-sm rounded transition-smooth hover-lift hover-red text-black"
                    onClick={() => setIsOpen(false)}
                  >
                    Languages
                  </Link>
                  <Link
                    href="/blog"
                    className="block px-3 py-2 text-sm rounded transition-smooth hover-lift hover-red text-black"
                    onClick={() => setIsOpen(false)}
                  >
                    Resources
                  </Link>
                  <Link
                    href="/about"
                    className="block px-3 py-2 text-sm rounded transition-smooth hover-lift hover-red text-black"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-3 py-2 text-sm rounded transition-smooth hover-lift hover-red text-black"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>

                <div className="pt-4 border-t border-black-subtle">
                  <p className="text-sm font-medium text-black">
                     +1 (555) 123-4567
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
