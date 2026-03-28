import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="PrimeStack Solutions" className="h-8 w-auto" />
            <h3 className="font-display text-lg font-bold gradient-text">PrimeStack</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            PrimeStack Solutions Pvt. Ltd. — Your trusted Salesforce consulting partner. Scale without limits.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Health Cloud", "Sales Cloud", "Service Cloud", "Education Cloud", "Financial Cloud", "QA Automation"].map(s => (
              <li key={s}><Link to={`/services/${s.toLowerCase().replace(/ /g, "-")}`} className="hover:text-primary transition-colors">{s}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@cloudpulse.io</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> San Francisco, CA</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} PrimeStack Solutions Private Limited. All rights reserved.
      </div>
    </div>
  </footer>
);
