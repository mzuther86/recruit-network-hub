import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, Users, CheckCircle } from "lucide-react";
const steps = [{
  icon: Search,
  title: "Anforderungen definieren",
  description: "Beschreiben Sie Ihren Wunschkandidaten, die Stellenspezifikationen und Unternehmenskultur. Wir teilen Ihre Ausschreibung mit über 100 erfahrenen Recruitern auf unserer Plattform.",
  step: "01"
}, {
  icon: Users,
  title: "Spezialistenteam startet die Suche",
  description: "Ein Team aus 2-5 Spezialisten für den gesuchten Bereich beginnt direkt mit der Suche nach den passenden Talenten auf über 50 verschiedenen Kanälen. Interessante Profile werden gezielt angesprochen und vorqualifiziert, nur die wirklich passenden Profile werden an Sie weitergeleitet.",
  step: "02"
}, {
  icon: CheckCircle,
  title: "Profile prüfen und einstellen",
  description: "Sie erhalten alle Profile in übersichtlicher Form mit allen relevanten Details in einer zentral Ansicht gesammelt und können die besten Kandidaten interviewen und einstellen.",
  step: "03"
}];
const HowItWorks = () => {
  return <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            So <span className="bg-gradient-primary bg-clip-text text-transparent">funktioniert es</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Wir verbinden Sie in nur drei einfachen Schritten mit den qualifiziertesten Recruitern und Kandidaten</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => <div key={index} className="relative">
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
              
              {index < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>}
            </div>)}
        </div>
      </div>
    </section>;
};
export default HowItWorks;