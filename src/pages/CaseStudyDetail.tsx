import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { caseStudies } from "@/data/caseStudies";
import { ArrowLeft, Calendar, Building2, Layers } from "lucide-react";

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return (
      <Layout>
        <div className="py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-primary hover:underline">
            ← Back to Case Studies
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <img src={cs.image} alt={cs.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Case Studies
          </Link>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-3">
            {cs.title}
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mb-8">
            {cs.subtitle}
          </p>
          <div className="flex flex-wrap gap-6 text-primary-foreground/70 text-sm">
            <span className="flex items-center gap-2">
              <Building2 className="h-4 w-4" /> {cs.client}
            </span>
            <span className="flex items-center gap-2">
              <Layers className="h-4 w-4" /> {cs.platform}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> {cs.year}
            </span>
          </div>
        </div>
      </section>

      {/* Tech tags */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {cs.technologies.map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {cs.sections.map((section, i) => (
            <AnimatedSection key={i} delay={i * 0.06} className="mb-12 last:mb-0">
              <div className="flex items-start gap-4 mb-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl font-bold">{section.title}</h2>
              </div>

              <div className="pl-12">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {section.content}
                </p>

                {section.bullets && (
                  <ul className="space-y-3 mb-4">
                    {section.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {section.table && (
                  <div className="overflow-x-auto rounded-lg border border-border/50 mb-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-primary/5">
                          {section.table.headers.map((h) => (
                            <th
                              key={h}
                              className="px-4 py-3 text-left font-semibold text-foreground"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, ri) => (
                          <tr
                            key={ri}
                            className="border-t border-border/30 hover:bg-muted/30 transition-colors"
                          >
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className="px-4 py-3 text-muted-foreground"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h3 className="font-display text-2xl font-bold mb-4">
              Ready to Build Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Let's discuss how we can create similar results for your organization.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyDetail;
