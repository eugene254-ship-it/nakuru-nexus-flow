import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  GraduationCap, 
  Heart, 
  Leaf, 
  MapPin, 
  Users,
  ArrowRight,
  Target
} from "lucide-react";

const Ecosystem = () => {
  const ecosystemAreas = [
    {
      icon: Building2,
      title: "County Services",
      description: "Digital payments for licenses, permits, and municipal services",
      features: ["Property rates", "Business permits", "Water bills", "Parking fees"],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: GraduationCap,
      title: "Education Hub",
      description: "Partnership with Egerton University and TVET colleges",
      features: ["Developer training", "Innovation labs", "Student projects", "Research grants"],
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "AEGIS dashboards for community health insights",
      features: ["Health metrics", "Emergency response", "Clinic payments", "Insurance claims"],
      color: "bg-success/10 text-success"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Atlas Sanctum RVE for carbon credits and green projects",
      features: ["Carbon trading", "Green investments", "Environmental monitoring", "Community rewards"],
      color: "bg-accent/10 text-accent"
    }
  ];

  const communities = [
    { name: "London Estate", population: "15K+", adoption: "78%" },
    { name: "Free Area", population: "12K+", adoption: "65%" },
    { name: "CBD Central", population: "8K+", adoption: "82%" },
    { name: "Wakulima Market", population: "5K+", adoption: "91%" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Target size={16} />
            Innovation Ecosystem
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Beyond Payments
          </h2>
          <p className="text-lg text-muted-foreground">
            Creating a comprehensive ecosystem that transforms how Nakuru operates, 
            learns, and grows together.
          </p>
        </div>

        {/* Ecosystem Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {ecosystemAreas.map((area, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 group">
              <div className="space-y-4">
                <div className={`inline-flex p-3 rounded-full ${area.color} group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon size={24} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{area.title}</h3>
                  <p className="text-muted-foreground">{area.description}</p>
                </div>

                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="ghost" className="group/btn">
                  Learn more
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Community Adoption */}
        <div className="bg-gradient-card rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Community Adoption</h3>
            <p className="text-muted-foreground">
              Local neighborhoods leading digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communities.map((community, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="relative">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div className="absolute -top-1 -right-1 bg-success text-white text-xs px-2 py-1 rounded-full">
                    {community.adoption}
                  </div>
                </div>
                <h4 className="font-semibold text-foreground">{community.name}</h4>
                <p className="text-sm text-muted-foreground">{community.population} residents</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scaling Strategy */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            From Nakuru to Africa
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our scaling strategy: Start local, expand countywide, then reach across Kenya and beyond. 
            If it works in Nakuru's matatus, markets, and farms → it can work anywhere in Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Users size={20} />
              Join Innovation Network
            </Button>
            <Button variant="outline" size="lg">
              <GraduationCap size={20} />
              Partner with Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;