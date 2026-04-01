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
  { name: "Sourabh Goyal", role: "CEO & Founder", bio: "Founder and Salesforce Expert with 12+ Years of Technical Excellence Across Cloud Solutions." },
  { name: "Vishal Dixit", role: "Head of Operations", bio: "7+ Years of Expertise in Operational Excellence and Business Process Optimization." },
  { name: "Pankaj", role: "Head of Quality Assurance & Testing", bio: "Delivering Quality Through 10+ Years of Manual & Automation Testing" },
  { name: "Rajneesh Yadav", role: "Head of Marketing Cloud", bio: "Marketing Cloud Leader with 10+ Years of Expertise in Personalized Customer Engagement." },
  
];

const About = () => (
  <Layout>
    <section className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">About PrimeStack Solutions</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Your Trusted <span className="gradient-text">Salesforce Partner</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded in 2026, PrimeStack Solutions has quickly established itself as a cutting-edge Salesforce implementation partner. We help organizations across healthcare, finance, education, and technology transform their operations with Salesforce.
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
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Our Expertise Team</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Certified Salesforce experts with decades of combined experience.</p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
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
