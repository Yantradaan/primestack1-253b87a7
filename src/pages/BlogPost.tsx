import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { blogs } from "@/data/blogs";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, Copy, Check } from "lucide-react";
import { useState } from "react";

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-border group">
      <div className="flex items-center justify-between px-4 py-2 bg-muted/80 border-b border-border">
        <span className="text-xs font-mono text-muted-foreground">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
          aria-label="Copy code"
        >
          {copied ? (
            <><Check className="h-3.5 w-3.5 text-primary" /> Copied!</>
          ) : (
            <><Copy className="h-3.5 w-3.5" /> Copy</>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto bg-muted/30">
        <code className="text-sm font-mono text-foreground leading-relaxed">{code}</code>
      </pre>
    </div>
  );
};

const renderContent = (content: string) => {
  const parts = content.split(/(```[\s\S]*?```)/g);

  return parts.map((part, i) => {
    // Code block
    if (part.startsWith("```")) {
      const match = part.match(/```(\w*)\n([\s\S]*?)```/);
      if (match) {
        return <CodeBlock key={i} language={match[1] || "code"} code={match[2].trim()} />;
      }
    }

    // Regular text paragraphs
    return part.split("\n\n").map((p, j) => {
      const trimmed = p.trim();
      if (!trimmed) return null;
      if (trimmed.startsWith("## "))
        return <h2 key={`${i}-${j}`} className="text-2xl font-bold mt-10 mb-4 font-display">{trimmed.replace("## ", "")}</h2>;
      if (trimmed.startsWith("**") && trimmed.endsWith("**"))
        return <h3 key={`${i}-${j}`} className="text-lg font-semibold mt-6 mb-2">{trimmed.replace(/\*\*/g, "")}</h3>;
      // Handle inline bold and code
      const rendered = trimmed.split(/(`[^`]+`)/).map((seg, k) => {
        if (seg.startsWith("`") && seg.endsWith("`")) {
          return <code key={k} className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono text-primary">{seg.slice(1, -1)}</code>;
        }
        // Bold
        return seg.split(/(\*\*[^*]+\*\*)/).map((s, l) => {
          if (s.startsWith("**") && s.endsWith("**")) {
            return <strong key={`${k}-${l}`}>{s.slice(2, -2)}</strong>;
          }
          return s;
        });
      });
      return <p key={`${i}-${j}`} className="text-muted-foreground leading-relaxed mb-4">{rendered}</p>;
    });
  });
};

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
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1"><User className="h-4 w-4" /> {post.author}</span>
              <span>{post.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
            </div>
          </AnimatedSection>

          {/* Cover Image */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-xl overflow-hidden mb-10">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-80 object-cover"
                width={800}
                height={600}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-display prose-a:text-primary">
              {renderContent(post.content)}
            </div>
          </AnimatedSection>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
