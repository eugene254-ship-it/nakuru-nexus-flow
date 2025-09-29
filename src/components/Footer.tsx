import { QrCode, Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "QR Payments", href: "#payments" },
        { label: "Merchant Portal", href: "#merchants" },
        { label: "API Documentation", href: "#api" },
        { label: "Developer Tools", href: "#developers" }
      ]
    },
    {
      title: "Ecosystem",
      links: [
        { label: "County Services", href: "#county" },
        { label: "Education Hub", href: "#education" },
        { label: "Healthcare", href: "#health" },
        { label: "Sustainability", href: "#sustainability" }
      ]
    },
    {
      title: "Community",
      links: [
        { label: "Innovation Labs", href: "#labs" },
        { label: "Youth Programs", href: "#youth" },
        { label: "Cultural Heritage", href: "#culture" },
        { label: "Partner Network", href: "#partners" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#help" },
        { label: "Contact Us", href: "#contact" },
        { label: "Status Page", href: "#status" },
        { label: "Security", href: "#security" }
      ]
    }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <QrCode className="text-primary-foreground" size={18} />
              </div>
              <span className="font-bold text-lg">Nakuru Innovation</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Building Africa's first smart-finance ecosystem, starting with Nakuru.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-secondary-foreground/80">
                <MapPin size={14} />
                Nakuru, Kenya
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground/80">
                <Phone size={14} />
                +254 700 000 000
              </div>
              <div className="flex items-center gap-2 text-secondary-foreground/80">
                <Mail size={14} />
                hello@nakuruinnovation.co.ke
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Github size={16} />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-secondary-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-secondary-foreground/80">
              © 2024 Nakuru Innovation. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;