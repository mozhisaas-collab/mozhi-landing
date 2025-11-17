import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getBlogPostById, blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Calendar, Clock, Share2, Tag } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getBlogPostById(id);
  if (!post) {
    return {
      title: "Article Not Found - Mozhi Solutions Blog",
    };
  }
  return {
    title: `${post.title} - Mozhi Solutions Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getBlogPostById(id);
  
  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Breadcrumb */}
        <section className="bg-muted/30 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary">Home</Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground truncate">{post.title.length > 50 ? post.title.substring(0, 50) + '...' : post.title}</span>
            </div>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{post.publishedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{post.readTime} min read</span>
                </div>
                <button 
                  className="flex items-center gap-2 text-primary hover:text-primary/80"
                >
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:font-bold prose-p:text-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary/80 prose-strong:text-foreground prose-ul:text-foreground prose-li:text-foreground"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="h-5 w-5 text-muted-foreground" />
                    <span className="font-semibold">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Share */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Share this article</h3>
                      <div className="space-y-3">
                        <button className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded">
                          Share on LinkedIn
                        </button>
                        <button className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded">
                          Share on Twitter
                        </button>
                        <button className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded">
                          Copy Link
                        </button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTA */}
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Need Translation Services?</h3>
                      <p className="text-muted-foreground mb-4 text-sm">
                        Get expert translation services tailored to your industry needs.
                      </p>
                      <Button asChild size="sm" className="w-full">
                        <Link href="/contact">Get Free Quote</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="bg-muted/30 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <h2 className="text-3xl font-bold mb-12">Related Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="overflow-hidden hover-elevate transition-all duration-300">
                    <div className="relative w-full h-48">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="secondary" className="mb-3">{relatedPost.category}</Badge>
                      <h3 className="text-lg font-bold mb-3">{relatedPost.title}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{relatedPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{relatedPost.readTime} min read</span>
                        <Link 
                          href={`/blog/${relatedPost.id}`}
                          className="text-primary font-semibold hover:text-primary/80 text-sm"
                        >
                          Read More →
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center">
              <Button asChild variant="outline">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contact">Contact Our Experts</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

