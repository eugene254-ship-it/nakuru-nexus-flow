import { Button } from "@/components/ui/button";
import { QrCode, Smartphone, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-qr-payment.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium animate-pulse-glow">
                <QrCode size={16} />
                Kenya's Digital Trade Capital
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                Nakuru Innovation
                <span className="block text-accent">Ecosystem</span>
              </h1>
              
              <p className="text-xl text-primary-foreground/90 max-w-lg">
                Transforming payments, empowering communities. From matatus to markets, 
                farmers to fintech - building Africa's first smart-finance ecosystem.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="animate-float">
                <Smartphone size={20} />
                Try QR Payments
              </Button>
              <Button variant="secondary" size="lg">
                <Users size={20} />
                Join Community
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">10K+</div>
                <div className="text-sm text-primary-foreground/70">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">500+</div>
                <div className="text-sm text-primary-foreground/70">Merchants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">24/7</div>
                <div className="text-sm text-primary-foreground/70">Support</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src={heroImage} 
                alt="QR Payment Innovation in Nakuru" 
                className="rounded-2xl shadow-card w-full max-w-md mx-auto"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-success text-white p-3 rounded-full shadow-glow animate-pulse">
              <TrendingUp size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-warning text-accent-foreground p-3 rounded-full shadow-glow animate-pulse">
              <QrCode size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;