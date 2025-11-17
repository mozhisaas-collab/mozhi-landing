"use client"

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blogPosts";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section id="resources" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="flex justify-between items-end mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black">
              Latest Resources
            </h2>
            <p className="text-lg text-black-subtle">Industry insights and translation expertise</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05, x: 5 }}
          >
          <Link 
            href="/blog"
              className="text-red-500 hover:text-red-500 font-semibold transition-smooth"
          >
            View All Articles →
          </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="overflow-hidden hover-lift transition-smooth bg-white border border-black-subtle h-full flex flex-col">
                <motion.div 
                  className="relative w-full h-48"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                </motion.div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-black-subtle mb-3">
                    <Badge variant="secondary" className="mr-3 bg-red-600 text-white border-0">
                    {post.category}
                  </Badge>
                  <span>{post.publishedDate}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">
                  {post.title}
                </h3>
                  <p className="text-black-subtle mb-4 flex-1">
                  {post.excerpt}
                </p>
                  <motion.div
                    whileHover={{ x: 5 }}
                  >
                <Link 
                  href={`/blog/${post.id}`}
                      className="text-red-500 font-semibold hover:text-red-500 transition-smooth inline-flex items-center gap-1"
                >
                  Read More →
                </Link>
                  </motion.div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

