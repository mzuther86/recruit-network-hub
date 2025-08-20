import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, Users, CheckCircle, Zap } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Anforderungen definieren",
    description: "Beschreiben Sie Ihren Wunschkandidaten, Stellenspezifikationen und Unternehmenskultur. Unsere KI findet die passendsten Recruiter für Sie.",
    step: "01"
  },
  {
    icon: Users,
    title: "Mit Spezialisten vernetzen",
    description: "Erhalten Sie Vorschläge von 3-5 Recruitern, die auf Ihre Branche spezialisiert sind, jeder mit einzigartigen Netzwerken und bewährten Erfolgsbilanzen.",
    step: "02"
  },
  {
    icon: Zap,
    title: "Recruiter konkurrieren für Sie",
    description: "Mehrere Recruiter arbeiten gleichzeitig mit ihren spezialisierten Tools und Netzwerken, um Ihre perfekten Kandidaten zu finden.",
    step: "03"
  },
  {
    icon: CheckCircle,
    title: "Beste Talente einstellen",
    description: "Überprüfen Sie geprüfte Kandidaten aus verschiedenen Quellen und treffen Sie Ihre Wahl. Bezahlen Sie nur bei erfolgreicher Einstellung.",
    step: "04"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            So <span className="bg-gradient-primary bg-clip-text text-transparent">funktioniert es</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unser optimierter Prozess verbindet Sie in nur vier einfachen Schritten mit den richtigen Recruitern und Kandidaten
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {step.step}
                    </div>
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;