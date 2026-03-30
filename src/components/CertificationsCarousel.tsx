import { motion } from "framer-motion";
import { AnimatedSection } from "./AnimatedSection";

import sfadAdmin from "@/assets/certs/Advanced-Administrator.png";
import sfpd1 from "@/assets/certs/Platform-Developer-I.png";
import sfpd2 from "@/assets/certs/Salesforce-Platform-Developer-II-badge-Salesforce.png";
import sfsales from "@/assets/certs/Sales-Cloud-Consultant.png";
import sfservice from "@/assets/certs/Service-Cloud-Consultant.png";
import sfExpCloud from "@/assets/certs/Experience-Cloud-Consultant.png";
import sfOmniStudio from "@/assets/certs/OmniStudio-Developer.png";
import sfagentforce from "@/assets/certs/2025-02_Badge_SF-Certified_Agentforce-Specialist_High-Res.png";

const certifications = [
  { name: "Advanced Administrator", image: sfadAdmin },
  { name: "Platform Dev 1", image: sfpd1 },
  { name: "Platform Dev 2", image: sfpd2 },
  { name: "Sales Cloud Consultant", image: sfsales },
  { name: "Service Cloud Consultant", image: sfservice },
  { name: "Experience Cloud", image: sfExpCloud },
  { name: "OmniStudio Developer", image: sfOmniStudio },
  { name: "Agentforce Specialist", image: sfagentforce },
];

// Double the items for seamless infinite scroll
const doubled = [...certifications, ...certifications];

export const CertificationsCarousel = () => (
  <section className="py-20 overflow-hidden">
    <div className="container mx-auto px-4">
      <AnimatedSection className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Our Expertise
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Salesforce Certifications
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our team holds industry-leading Salesforce certifications, ensuring expert-level delivery across every project.
        </p>
      </AnimatedSection>
    </div>

    {/* Infinite scrolling track */}
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-12 items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((cert, i) => (
          <div
            key={`${cert.name}-${i}`}
            className="flex flex-col items-center gap-3 min-w-[140px]"
          >
            <div className="w-28 h-28 flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-full object-contain drop-shadow-lg"
                loading="lazy"
                width={112}
                height={112}
              />
            </div>
            <span className="text-xs text-muted-foreground font-medium text-center max-w-[120px]">
              {cert.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);
