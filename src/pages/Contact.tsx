import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
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
                <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input required placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input required placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input required type="email" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company</label>
                    <Input placeholder="Your Company" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea required rows={5} placeholder="Tell us about your project..." />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full gradient-bg border-0 text-primary-foreground font-semibold">
                    <Send className="h-4 w-4 mr-2" />
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </AnimatedSection>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", value: "hello@cloudpulse.io" },
                { icon: Phone, title: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, title: "Office", value: "123 Market St, Suite 400\nSan Francisco, CA 94105" },
              ].map((c, i) => (
                <AnimatedSection key={c.title} delay={i * 0.1}>
                  <div className="glass-card rounded-xl p-6">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-3">
                      <c.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold mb-1">{c.title}</h3>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{c.value}</p>
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
