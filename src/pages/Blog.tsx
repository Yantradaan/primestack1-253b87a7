import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { blogs } from "@/data/blogs";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

const Blog = () => (
  <Layout>
    <section className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">Blog</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Insights & <span className="gradient-text">Thought Leadership</span>
          </h1>
          <p className="text-lg text-muted-foreground">Expert perspectives on Salesforce best practices, industry trends, and digital transformation.</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blogs.map((b, i) => (
            <AnimatedSection key={b.slug} delay={i * 0.1}>
              <Link to={`/blog/${b.slug}`} className="glass-card rounded-xl overflow-hidden block group hover:-translate-y-1 transition-all duration-300">
                <div className="h-2 gradient-bg" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{b.category}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {b.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{b.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{b.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">{b.author}</span> · {b.date}
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Blog;
