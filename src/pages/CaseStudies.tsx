import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { caseStudies } from "@/data/caseStudies";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Accessibility } from "lucide-react";

const icons = [Shield, Accessibility];

const CaseStudies = () => (
  <Layout>
    <section className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Case Studies
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Real-World <span className="gradient-text">Success Stories</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover how we've helped organizations solve complex challenges with tailored Salesforce solutions.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((cs, i) => {
            const Icon = icons[i] || Shield;
            return (
              <AnimatedSection key={cs.slug} delay={i * 0.12}>
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="glass-card rounded-xl overflow-hidden block group hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  {/* Header band */}
                  <div className="relative h-44 overflow-hidden gradient-bg flex items-end p-6">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02em0wLTEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-primary-foreground/70 text-xs font-medium uppercase tracking-wider mb-1">
                          {cs.focus}
                        </p>
                        <h3 className="font-display text-xl font-bold text-primary-foreground leading-tight">
                          {cs.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {cs.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {cs.technologies.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">{cs.client}</span> · {cs.year}
                      </div>
                      <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
);

export default CaseStudies;
