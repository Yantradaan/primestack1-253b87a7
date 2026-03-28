import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, Clock, ArrowRight, Mail, Users, Rocket, Heart } from "lucide-react";
import { motion } from "framer-motion";

const openings = [
  {
    title: "Senior Salesforce Developer",
    location: "Remote / Hybrid",
    type: "Full-time",
    department: "Engineering",
    description: "Build custom Salesforce solutions using Apex, LWC, and integrations for enterprise clients.",
  },
  {
    title: "Salesforce Consultant",
    location: "Remote",
    type: "Full-time",
    department: "Consulting",
    description: "Work directly with clients to gather requirements, design solutions, and lead implementations.",
  },
  {
    title: "Agentic AI Engineer",
    location: "Remote",
    type: "Full-time",
    department: "AI & Innovation",
    description: "Design and deploy autonomous AI agents using Agentforce, Einstein, and custom LLM integrations.",
  },
  {
    title: "QA Automation Engineer",
    location: "Remote / Hybrid",
    type: "Full-time",
    department: "Quality Assurance",
    description: "Build automated test frameworks and CI/CD pipelines for Salesforce implementations.",
  },
  {
    title: "Business Analyst",
    location: "Remote",
    type: "Full-time",
    department: "Consulting",
    description: "Bridge the gap between business needs and technical solutions across Salesforce cloud products.",
  },
];

const perks = [
  { icon: Rocket, title: "Growth First", desc: "Salesforce certifications, conferences, and continuous learning fully sponsored." },
  { icon: Users, title: "Remote Culture", desc: "Work from anywhere with flexible hours and async-first communication." },
  { icon: Heart, title: "Wellbeing", desc: "Comprehensive health insurance, mental wellness support, and paid time off." },
  { icon: Briefcase, title: "Impact", desc: "Work on transformative projects for enterprises across healthcare, finance, and education." },
];

const Careers = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            We're Hiring
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
            Build the Future of <span className="gradient-text">Salesforce</span> with Us
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join PrimeStack Solutions and work on cutting-edge Salesforce implementations, Agentic AI, and cloud solutions that transform enterprises worldwide.
          </p>
          <Button asChild size="lg" className="gradient-bg border-0 text-primary-foreground font-semibold px-8">
            <a href="#openings">View Open Positions</a>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Perks */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Why PrimeStack?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">We invest in our people because great teams build great solutions.</p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-6 text-center h-full">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <p.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Open Positions */}
    <section id="openings" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Don't see a role that fits? Send us your resume anyway — we're always looking for talented people.</p>
        </AnimatedSection>
        <div className="max-w-3xl mx-auto space-y-4">
          {openings.map((job, i) => (
            <AnimatedSection key={job.title} delay={i * 0.08}>
              <div className="glass-card rounded-xl p-6 group hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">{job.department}</span>
                    <h3 className="font-display font-semibold text-lg mt-2 mb-1">{job.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{job.type}</span>
                    </div>
                  </div>
                  <Button asChild className="gradient-bg border-0 text-primary-foreground font-semibold shrink-0">
                    <a href={`mailto:contact@primestack.in?subject=Application: ${encodeURIComponent(job.title)}&body=Hi PrimeStack Team,%0D%0A%0D%0AI am interested in the ${encodeURIComponent(job.title)} position.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ARegards`}>
                      Apply Now <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* General Application */}
        <AnimatedSection delay={0.3} className="mt-12">
          <div className="gradient-bg rounded-2xl p-10 md:p-14 text-center max-w-3xl mx-auto">
            <Mail className="h-10 w-10 text-primary-foreground mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">
              Don't See Your Role?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
              We're always looking for exceptional talent. Send your resume and a short intro to our team.
            </p>
            <Button asChild variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold">
              <a href="mailto:contact@primestack.in?subject=General Application - PrimeStack Solutions&body=Hi PrimeStack Team,%0D%0A%0D%0AI'd like to explore opportunities at PrimeStack Solutions.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ARegards">
                Send Your Resume
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Careers;
