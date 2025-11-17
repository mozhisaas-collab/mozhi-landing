"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "VP of International, TechCorp",
    avatar: "SJ",
    rating: 5,
    content: "Mozhi's translation quality exceeded our expectations. Their team understood our technical requirements perfectly and delivered on time."
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "CEO, EduTech Solutions",
    avatar: "MC",
    rating: 5,
    content: "The localization of our e-learning platform was seamless. Students from different countries now have a consistent learning experience."
  },
  {
    id: 3,
    name: "Anna Rodriguez",
    title: "Partner, Global Law Firm",
    avatar: "AR",
    rating: 5,
    content: "Their legal document translation services are unmatched. Attention to detail and accuracy are exceptional."
  },
  // {
  //   id: 4,
  //   name: "James Park",
  //   title: "Product Manager, CloudSync Solutions",
  //   avatar: "JP",
  //   rating: 5,
  //   content: "From initial consultation to final delivery, the entire process was smooth. The team understood our technical requirements perfectly."
  // }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
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

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-black-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
            What Our Clients Say
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-black-subtle">
            Trusted by leading companies worldwide for quality translations
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="hover-lift transition-smooth bg-white border border-black-subtle h-full flex flex-col">
                <CardContent className="pt-6 flex-1 flex flex-col">
                  <motion.div 
                    className="flex gap-1 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                  {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.1, type: "spring" }}
                      >
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                  ))}
                  </motion.div>
                  <blockquote className="text-base mb-6 text-black flex-1">
                  "{testimonial.content}"
                </blockquote>
                  <div className="flex items-center gap-3 mt-auto">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                  <Avatar>
                    <AvatarFallback className="font-semibold bg-red-600 text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                    </motion.div>
                  <div>
                    <div className="font-semibold text-black">{testimonial.name}</div>
                      <div className="text-sm text-black-subtle">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
