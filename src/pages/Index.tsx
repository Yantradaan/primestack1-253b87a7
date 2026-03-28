import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Award, Clock, ChevronLeft, ChevronRight, Cloud, Bot, Code, Database, Settings, Headphones } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { CertificationsCarousel } from "@/components/CertificationsCarousel";
import { useState, useEffect, useCallback } from "react";

const stats = [
  { icon: Users, value: "200+", label: "Clients Served" },
  { icon: Award, value: "500+", label: "Projects Delivered" },
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: CheckCircle2, value: "99%", label: "Client Satisfaction" },
];

const serviceImages = import.meta.glob("@/assets/services/*.jpg", { eager: true, import: "default" }) as Record<string, string>;

const getServiceImage = (slug: string) => {
  const key = Object.keys(serviceImages).find(k => k.includes(slug));
  return key ? serviceImages[key] : "";
};

const heroWords = ["Salesforce Cloud", "Agentic AI", "Digital Transformation"];

const Index = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setWordIndex(i => (i + 1) % heroWords.length), 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => setTestimonialIndex(i => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, []);

  const prevTestimonial = useCallback(() => setTestimonialIndex(i => (i - 1 + testimonials.length) % testimonials.length), []);
  const nextTestimonial = useCallback(() => setTestimonialIndex(i => (i + 1) % testimonials.length), []);

  // Show 3 at a time on lg, 1 on mobile
  const getVisibleTestimonials = () => {
    const result = [];
    for (let offset = 0; offset < 3; offset++) {
      result.push(testimonials[(testimonialIndex + offset) % testimonials.length]);
    }
    return result;
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-screen flex items-center bg-background">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]"
            style={{
              background: "radial-gradient(ellipse at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, hsl(var(--accent) / 0.1) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, hsl(var(--primary) / 0.08) 0%, transparent 50%)",
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Animated orbs */}
        <motion.div
          className="absolute top-[10%] right-[15%] w-80 h-80 rounded-full bg-primary/20 blur-[100px]"
          animate={{ scale: [1, 1.3, 1], x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[10%] w-96 h-96 rounded-full bg-accent/15 blur-[120px]"
          animate={{ scale: [1, 1.4, 1], x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-[40%] left-[60%] w-64 h-64 rounded-full bg-primary/10 blur-[80px]"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Animated lines */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{ top: `${30 + i * 20}%`, left: 0, right: 0 }}
            animate={{ opacity: [0, 0.5, 0], x: ["-100%", "100%"] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, delay: i * 3, ease: "easeInOut" }}
          />
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm text-primary text-sm font-medium mb-8"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Salesforce Consulting Experts
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Transform Your
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Business with{" "}
              </motion.span>
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                    transition={{ duration: 0.5 }}
                    className="gradient-text inline-block"
                  >
                    {heroWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 rounded-full gradient-bg"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            >
              PrimeStack Solutions helps enterprises unlock the full potential of Salesforce with expert consulting, implementation, and managed services across every cloud product.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="gradient-bg border-0 text-primary-foreground font-semibold px-8 group relative overflow-hidden">
                <Link to="/services">
                  <motion.span
                    className="absolute inset-0 bg-white/10"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-semibold px-8 backdrop-blur-sm">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>

          {/* Floating service icons on right side */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px]">
            {[
              { icon: Cloud, label: "Salesforce Cloud" },
              { icon: Bot, label: "Agentic AI" },
              { icon: Code, label: "Development" },
              { icon: Database, label: "Data Cloud" },
              { icon: Settings, label: "Implementation" },
              { icon: Headphones, label: "Managed Services" },
            ].map((item, i) => {
              const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
              const radius = 150;
              const x = Math.cos(angle) * radius + 200;
              const y = Math.sin(angle) * radius + 200;
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className="absolute w-14 h-14 rounded-xl border border-primary/15 bg-background/60 backdrop-blur-md flex items-center justify-center shadow-lg group cursor-default"
                  style={{ left: x - 7, top: y - 7 }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ filter: "blur(0.5px)" }}>
              {[...Array(6)].map((_, i) => {
                const angle1 = (i / 6) * Math.PI * 2;
                const angle2 = ((i + 1) / 6) * Math.PI * 2;
                const r = 150;
                return (
                  <motion.line
                    key={i}
                    x1={Math.cos(angle1) * r + 206}
                    y1={Math.sin(angle1) * r + 206}
                    x2={Math.cos(angle2) * r + 206}
                    y2={Math.sin(angle2) * r + 206}
                    stroke="hsl(var(--primary) / 0.1)"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1.2 + i * 0.2 }}
                  />
                );
              })}
            </svg>
          </div>
        </div>

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: 2 + Math.random() * 4,
              height: 2 + Math.random() * 4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40 - Math.random() * 40, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{ duration: 4 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
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

      {/* Certifications */}
      <CertificationsCarousel />

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

      {/* Testimonials Slider */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Trusted by leading organizations across healthcare, finance, education, and technology.</p>
          </AnimatedSection>

          <div className="relative max-w-5xl mx-auto">
            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background border border-border shadow-lg flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Cards */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.4 }}
                  className="grid md:grid-cols-3 gap-6"
                >
                  {getVisibleTestimonials().map((t) => (
                    <div key={t.name} className="glass-card rounded-xl p-6 h-full flex flex-col">
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
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === testimonialIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
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
};

export default Index;
