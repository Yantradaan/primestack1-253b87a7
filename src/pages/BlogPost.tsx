import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { blogs } from "@/data/blogs";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogs.find(b => b.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="py-24 text-center container mx-auto px-4">
          <h1 className="font-display text-3xl font-bold mb-4">Post Not Found</h1>
          <Button asChild variant="outline"><Link to="/blog">Back to Blog</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">{post.category}</span>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
              <span>{post.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-display prose-a:text-primary">
              {post.content.split("\n\n").map((p, i) => {
                if (p.startsWith("## ")) return <h2 key={i} className="text-2xl font-bold mt-8 mb-4">{p.replace("## ", "")}</h2>;
                if (p.startsWith("**") && p.endsWith("**")) return <h3 key={i} className="text-lg font-semibold mt-6 mb-2">{p.replace(/\*\*/g, "")}</h3>;
                if (p.trim() === "") return null;
                return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>;
              })}
            </div>
          </AnimatedSection>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
