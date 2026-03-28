import { Layout } from "@/components/Layout";
import { AnimatedSection } from "@/components/AnimatedSection";
import { services } from "@/data/services";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft, TrendingUp } from "lucide-react";

const serviceImages = import.meta.glob("@/assets/services/*.jpg", { eager: true, import: "default" }) as Record<string, string>;

const getServiceImage = (slug: string) => {
  const key = Object.keys(serviceImages).find(k => k.includes(slug));
  return key ? serviceImages[key] : "";
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return (
      <Layout>
        <div className="py-24 text-center container mx-auto px-4">
          <h1 className="font-display text-3xl font-bold mb-4">Service Not Found</h1>
          <Button asChild variant="outline">
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const otherServices = services.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={getServiceImage(service.slug)}
          alt={service.title}
          className="w-full h-full object-cover"
          width={800}
          height={512}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 pb-8">
          <Link to="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center">
              <service.icon className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold">{service.title}</h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                {"longDescription" in service && (
                  <p className="text-muted-foreground leading-relaxed mb-8">{(service as any).longDescription}</p>
                )}
              </AnimatedSection>

              {/* Benefits */}
              {"benefits" in service && (
                <AnimatedSection delay={0.15} className="mb-10">
                  <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-primary" /> Impact & Results
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {((service as any).benefits as string[]).map((b: string) => (
                      <div key={b} className="flex items-start gap-3 p-4 glass-card rounded-lg">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{b}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              <AnimatedSection delay={0.2}>
                <h2 className="font-display text-2xl font-bold mb-6">Key Features & Capabilities</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map(f => (
                    <div key={f} className="flex items-center gap-3 p-4 glass-card rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="font-medium text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3} className="mt-12">
                <h2 className="font-display text-2xl font-bold mb-4">Our Approach</h2>
                <div className="space-y-4">
                  {["Discovery & Assessment", "Solution Design", "Implementation & Configuration", "Testing & QA", "Training & Go-Live", "Ongoing Support"].map((step, i) => (
                    <div key={step} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div className="space-y-6">
              <AnimatedSection delay={0.2}>
                <div className="gradient-bg rounded-xl p-8 text-primary-foreground">
                  <h3 className="font-display text-xl font-bold mb-3">Ready to Get Started?</h3>
                  <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed">
                    Schedule a free consultation to discuss how {service.title} can transform your business.
                  </p>
                  <Button asChild variant="secondary" className="w-full bg-background text-foreground hover:bg-background/90">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="glass-card rounded-xl p-6">
                  <h3 className="font-display font-semibold mb-4">Related Services</h3>
                  <div className="space-y-3">
                    {otherServices.map(s => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <s.icon className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">{s.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
