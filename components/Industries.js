"use client"

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/industries";
import { iconMap } from "@/lib/iconMap";
import { Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Industries() {
  const featuredIndustries = industries.slice(0, 7);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 1 },
      },
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="industries" className="py-16 md:py-20 bg-black-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
            Industries We Serve
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-black-subtle">
            Specialized translation expertise across diverse sectors with industry-specific knowledge
          </p>
        </motion.div>

        <div className="relative mb-12">
          <motion.button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-red-600 hover:text-white transition-smooth border border-black-subtle hover:border-red-500"
            aria-label="Previous"
            whileHover={{ scale: 1.1, boxShadow: "0 8px 20px rgba(239, 68, 68, 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6 text-black transition-colors" />
          </motion.button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {featuredIndustries.map((industry, index) => {
                const IconComponent = iconMap[industry.icon] || Globe;
                return (
                  <motion.div
                    key={industry.id}
                    className="flex-[0_0_20%] min-w-[280px] md:min-w-[300px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.div
                      whileHover={{ y: -8, scale: 1.05 }}
                      className="h-full"
                  >
                      <Link
                        href={`/industries/${industry.id}`}
                        className="flex flex-col justify-between rounded-lg p-6 hover-lift transition-smooth text-center group bg-white border border-black-subtle h-full min-h-[200px] hover:border-red-500"
                      >
                        <div>
                          <motion.div 
                            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 transition-smooth bg-red-600"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <IconComponent className="h-7 w-7 transition-smooth text-white" />
                          </motion.div>
                          <h3 className="font-semibold text-base mb-2 text-black min-h-[40px] flex items-center justify-center">{industry.title}</h3>
                      </div>
                        <p className="text-xs text-black-subtle leading-relaxed">{industry.description}</p>
                    </Link>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-red-600 hover:text-white transition-smooth border border-black-subtle hover:border-red-500"
            aria-label="Next"
            whileHover={{ scale: 1.1, boxShadow: "0 8px 20px rgba(239, 68, 68, 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6 text-black transition-colors" />
          </motion.button>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
            <Link href="/industries" className="text-white">Explore All Industries</Link>
          </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
