"use client"

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { Search, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = ["All", "E-learning", "Legal", "Voice Over", "Technology", "Healthcare", "E-commerce"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
                Translation Industry Resources
              </motion.h1>
              <motion.p 
                className="text-xl text-black/70 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Expert insights, industry trends, and best practices to help you navigate the global marketplace. 
                Stay informed with the latest in translation and localization.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Search and Filter */}
        <section className="py-12 bg-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div 
              className="flex flex-col lg:flex-row gap-6 items-center justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/50 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border-black/10 text-black placeholder:text-black/50 focus:border-red-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={
                      selectedCategory === category
                        ? "bg-red-600 text-white hover:bg-red-600 border-0"
                        : "bg-white text-black border-black/10 hover:bg-black/5 hover:border-red-500"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {filteredPosts.length === 0 ? (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-black">No articles found</h3>
                <p className="text-black/70">Try adjusting your search or filter criteria.</p>
              </motion.div>
            ) : (
              <>
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-black/70">
                    Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                    {selectedCategory !== "All" && ` in ${selectedCategory}`}
                    {searchTerm && ` matching "${searchTerm}"`}
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <motion.div 
                      key={post.id} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <Card 
                        className="overflow-hidden bg-white border border-black/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group h-full flex flex-col"
                      >
                        <div className="relative overflow-hidden">
                          <div className="relative w-full h-48">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="absolute top-4 left-4">
                            <Badge 
                              className="bg-white/90 backdrop-blur text-red-500 border border-red-500"
                            >
                              {post.category}
                            </Badge>
                          </div>
                        </div>
                        
                        <CardContent className="p-6 flex flex-col flex-1">
                          <div className="flex items-center text-sm text-black/70 mb-3 gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{post.publishedDate}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime} min read</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-3 text-black group-hover:text-red-500 transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-black/70 mb-4 leading-relaxed flex-1">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag, index) => (
                              <Badge key={index} className="text-xs bg-black/5 text-black border border-black/10">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <Link 
                            href={`/blog/${post.id}`}
                            className="inline-flex items-center text-red-500 font-semibold hover:text-red-500 group-hover:translate-x-1 transition-all duration-300 mt-auto"
                          >
                            Read More →
                          </Link>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <motion.h2 
              className="text-3xl font-bold text-black mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Stay Updated with Industry Insights
            </motion.h2>
            <motion.p 
              className="text-xl text-black/70 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get the latest translation industry news, trends, and expert insights delivered to your inbox.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button asChild size="lg" className="bg-red-500 text-white hover:bg-red-500 transition-colors font-semibold">
                <Link href="/contact">Contact Us for Updates</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

