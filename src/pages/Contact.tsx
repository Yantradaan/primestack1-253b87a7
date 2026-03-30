import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const firstName = data.get("firstName") as string;
    const lastName = data.get("lastName") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const message = data.get("message") as string;

    const subject = `Contact from ${firstName} ${lastName} - ${company || "N/A"}`;
    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company || "N/A"}\n\nMessage:\n${message}`;

    window.location.href = `mailto:contact@primestack.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast.success("Opening your email client to send the message!");
    form.reset();
  };

  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">Contact Us</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something <span className="gradient-text">Amazing Together</span>
            </h1>
            <p className="text-lg text-muted-foreground">Ready to start your Salesforce journey? Reach out and we'll respond within 24 hours.</p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <form ref={formRef} onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input required name="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input required name="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input required name="email" type="email" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company</label>
                    <Input name="company" placeholder="Your Company" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea required name="message" rows={5} placeholder="Tell us about your project..." />
                  </div>
                  <Button type="submit" className="w-full gradient-bg border-0 text-primary-foreground font-semibold">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </AnimatedSection>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "contact@primestack.in", href: "mailto:contact@primestack.in" },
                { icon: Phone, title: "Phone", value: "+91-8744823411" },
                { icon: MapPin, title: "Office", value: "IHDP BUsiness Park, Noida (UP), India" },
              ].map((c, i) => (
                <AnimatedSection key={c.title} delay={i * 0.1}>
                  <div className="glass-card rounded-xl p-6">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-3">
                      <c.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold mb-1">{c.title}</h3>
                    {c.href ? (
                      <a href={c.href} className="text-sm text-primary hover:underline">{c.value}</a>
                    ) : (
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{c.value}</p>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
