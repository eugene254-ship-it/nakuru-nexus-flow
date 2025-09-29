import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, QrCode, Users, Building2, BookOpen } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "QR Payments", href: "#payments", icon: QrCode },
    { label: "Community", href: "#community", icon: Users },
    { label: "Ecosystem", href: "#ecosystem", icon: Building2 },
    { label: "Learn", href: "#learn", icon: BookOpen },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <QrCode className="text-primary-foreground" size={18} />
            </div>
            <span className="font-bold text-lg text-foreground">Nakuru Innovation</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <item.icon size={16} />
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">Sign In</Button>
            <Button variant="hero">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 p-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon size={18} />
                  {item.label}
                </a>
              ))}
              <div className="pt-3 space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Sign In
                </Button>
                <Button variant="hero" className="w-full justify-start">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;