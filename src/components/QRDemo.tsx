import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QrCode, Smartphone, CheckCircle, DollarSign } from "lucide-react";

const QRDemo = () => {
  const [amount, setAmount] = useState("250");
  const [step, setStep] = useState(1);

  const handlePayment = () => {
    setStep(2);
    setTimeout(() => setStep(3), 2000);
    setTimeout(() => setStep(1), 4000);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Try QR Payments Now
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the future of payments in Nakuru. Simple, fast, secure.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Payment Interface */}
            <Card className="p-8 bg-card shadow-card">
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Matatu Fare</h3>
                  <p className="text-muted-foreground">Nakuru Town - Egerton University</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Amount (KSh)</label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                      <Input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="pl-10 text-lg font-semibold"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>

                  {step === 1 && (
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full" 
                      onClick={handlePayment}
                    >
                      <QrCode size={20} />
                      Generate QR Code
                    </Button>
                  )}

                  {step === 2 && (
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center gap-2 text-warning font-medium">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-warning border-t-transparent"></div>
                        Processing payment...
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center gap-2 text-success font-medium">
                        <CheckCircle size={20} />
                        Payment successful!
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Transaction ID: NKR-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                      </p>
                    </div>
                  )}
                </div>

                {step === 1 && (
                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Base fare</span>
                      <span className="text-foreground">KSh {amount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Service fee</span>
                      <span className="text-foreground">KSh 0</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span className="text-foreground">Total</span>
                      <span className="text-foreground">KSh {amount}</span>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* QR Code Display */}
            <Card className="p-8 bg-gradient-card text-center">
              <div className="space-y-6">
                {step === 1 && (
                  <>
                    <div className="mx-auto w-48 h-48 bg-white rounded-xl flex items-center justify-center shadow-soft">
                      <QrCode size={120} className="text-muted-foreground/30" />
                    </div>
                    <p className="text-muted-foreground">Click "Generate QR Code" to create payment</p>
                  </>
                )}

                {(step === 2 || step === 3) && (
                  <>
                    <div className="mx-auto w-48 h-48 bg-white rounded-xl flex items-center justify-center shadow-soft">
                      <div className="grid grid-cols-8 gap-1 p-4">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 ${
                              Math.random() > 0.5 ? 'bg-primary' : 'bg-white'
                            } rounded-sm`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium text-foreground">Scan to Pay KSh {amount}</p>
                      <p className="text-sm text-muted-foreground">
                        Use your mobile money app to scan
                      </p>
                    </div>
                  </>
                )}

                <div className="flex items-center justify-center gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Smartphone size={16} />
                    Mobile Ready
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={16} />
                    Secure
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRDemo;