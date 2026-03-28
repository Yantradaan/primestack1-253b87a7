import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Users, Target, Lightbulb, Shield } from "lucide-react";

const values = [
  { icon: Target, title: "Client-Focused", desc: "Every solution is tailored to your unique business challenges and goals." },
  { icon: Lightbulb, title: "Innovation-Driven", desc: "We stay ahead of the curve with the latest Salesforce technologies and best practices." },
  { icon: Shield, title: "Quality Assured", desc: "Rigorous testing and QA processes ensure reliable, production-ready solutions." },
  { icon: Users, title: "Collaborative", desc: "We work as an extension of your team, ensuring knowledge transfer and long-term success." },
];

const team = [
  { name: "Alexandra Rivera", role: "CEO & Founder", bio: "15+ years of Salesforce ecosystem experience. Former Salesforce MVB." },
  { name: "David Kim", role: "CTO", bio: "Architect of 100+ enterprise Salesforce implementations across industries." },
  { name: "Sarah Chen", role: "VP of Consulting", bio: "Health Cloud & Financial Cloud specialist with deep domain expertise." },
  { name: "James Park", role: "Head of Engineering", bio: "Leads our QA automation and DevOps practices for Salesforce delivery." },
];

const About = () => (
  <Layout>
    <section className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">About CloudPulse</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Your Trusted <span className="gradient-text">Salesforce Partner</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded in 2016, CloudPulse has grown from a boutique consultancy to a leading Salesforce implementation partner. We've helped over 200 organizations across healthcare, finance, education, and technology transform their operations with Salesforce.
          </p>
        </AnimatedSection>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-6 text-center h-full">
                <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Team */}
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Certified Salesforce experts with decades of combined experience.</p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="glass-card rounded-xl p-6 text-center h-full">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="font-display font-semibold">{t.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{t.role}</p>
                <p className="text-sm text-muted-foreground">{t.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
