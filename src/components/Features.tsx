import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, Shield, Smartphone, Users, TrendingUp, Zap } from "lucide-react";
import farmersImage from "@/assets/farmers-market.jpg";
import matatuImage from "@/assets/matatu-digital.jpg";

const Features = () => {
  const features = [
    {
      icon: QrCode,
      title: "QR Payment Rails",
      description: "Instant, secure payments for everyone from farmers to matatu drivers",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Micro-Insurance",
      description: "SecureFuture embedded protection for all transactions",
      color: "text-success"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Built for Nakuru's diverse communities - Bantu, Nilote, Cushite",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      title: "Innovation Labs",
      description: "Youth-driven development with Egerton University partnerships",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Instant Settlements",
      description: "Real-time payments with micro-rewards and loyalty credits",
      color: "text-warning"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Designed for everyone, accessible on any device",
      color: "text-primary-glow"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Fintech Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground">
            From QR payments to regenerative value exchange, we're building the infrastructure 
            for Nakuru's digital transformation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group">
              <div className="space-y-4">
                <div className={`inline-flex p-3 rounded-full bg-muted/50 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Use Cases */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Empowering Local Markets
            </h3>
            <p className="text-lg text-muted-foreground">
              Transform Wakulima and other open-air markets with digital payments. 
              Farmers get instant settlements, customers enjoy seamless transactions.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-foreground">Instant payment verification</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-foreground">Built-in micro-insurance</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-foreground">Community loyalty rewards</span>
              </li>
            </ul>
            <Button variant="default" size="lg">
              <Users size={20} />
              Join Market Network
            </Button>
          </div>
          <div className="relative">
            <img 
              src={farmersImage} 
              alt="Farmers using digital payments in market" 
              className="rounded-2xl shadow-card w-full"
            />
          </div>
        </div>

        {/* Transport Integration */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative lg:order-1">
            <img 
              src={matatuImage} 
              alt="Digital payment integration in matatu transport" 
              className="rounded-2xl shadow-card w-full"
            />
          </div>
          <div className="space-y-6 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Smart Transport Solutions
            </h3>
            <p className="text-lg text-muted-foreground">
              Matatu SACCOs get transparent QR-based fare collection, 
              improving accountability and passenger experience.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-foreground">Transparent fare tracking</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-foreground">Automated revenue sharing</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-foreground">Real-time analytics</span>
              </li>
            </ul>
            <Button variant="secondary" size="lg">
              <Smartphone size={20} />
              Connect Transport
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;