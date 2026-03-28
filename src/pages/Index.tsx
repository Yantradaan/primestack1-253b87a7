import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Award, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Users, value: "200+", label: "Clients Served" },
  { icon: Award, value: "500+", label: "Projects Delivered" },
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: CheckCircle2, value: "99%", label: "Client Satisfaction" },
];

// Import all service images
const serviceImages = import.meta.glob("@/assets/services/*.jpg", { eager: true, import: "default" }) as Record<string, string>;

const getServiceImage = (slug: string) => {
  const key = Object.keys(serviceImages).find(k => k.includes(slug));
  return key ? serviceImages[key] : "";
};

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      </div>
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Salesforce Consulting Experts
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Transform Your Business with{" "}
            <span className="gradient-text">Salesforce Cloud</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            PrimeStack Solutions helps enterprises unlock the full potential of Salesforce with expert consulting, implementation, and managed services across every cloud product. Scale without limits.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gradient-bg border-0 text-primary-foreground font-semibold px-8">
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-semibold px-8">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 border-y border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
              <s.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="font-display text-3xl font-bold mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Salesforce Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">End-to-end Salesforce solutions tailored to your industry and business needs.</p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.slug} delay={i * 0.08}>
              <Link
                to={`/services/${s.slug}`}
                className="glass-card rounded-xl overflow-hidden block group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={getServiceImage(s.slug)}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={800}
                    height={512}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                      <s.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.short}</p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Trusted by leading organizations across healthcare, finance, education, and technology.</p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-6 h-full flex flex-col">
                <p className="text-muted-foreground leading-relaxed flex-1 mb-4">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="gradient-bg rounded-2xl p-12 md:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
              Let's discuss how our Salesforce expertise can drive growth for your organization.
            </p>
            <Button asChild size="lg" variant="secondary" className="font-semibold px-8 bg-background text-foreground hover:bg-background/90">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Index;
