import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  FileText, 
  Zap, 
  ShieldCheck, 
  DollarSign, 
  Users
} from "lucide-react";

const benefits = [
  {
    icon: Search,
    title: "Fokus auf Qualität & Reichweite",
    description: "Erfahrene Recruiter arbeiten gezielt für Sie - mit Fokus auf höchste Qualität, ohne eigenen Sourcing-Aufwand oder zusätzliche Tools."
  },
  {
    icon: FileText,
    title: "Detaillierte Bewerberdaten",
    description: "Erhalten Sie ausführliche Screening-Berichte, LinkedIn-Profile, Lebensläufe und bei Bedarf Sprachproben für deutschsprachige Positionen."
  },
  {
    icon: Zap,
    title: "Blitzschnelle Besetzung",
    description: "Unternehmen setzen auf schnelle Ergebnisse im Schnitt innerhalb von 30 Tagen - erste Bewerber bereits nach 3 bis 5 Tagen."
  },
  {
    icon: ShieldCheck,
    title: "Doppelte Qualitätssicherung",
    description: "Jede Bewerbung wird zweifach geprüft: zunächst durch den Recruiter, anschließend durch unsere interne Qualitätskontrolle."
  },
  {
    icon: DollarSign,
    title: "Bis zu 90% günstiger & flexibel",
    description: "Keine Abo-Gebühren und deutlich niedrigere Kosten als herkömmliche Ansätze - dank unseres dezentralen, effizienten Modells."
  },
  {
    icon: Users,
    title: "Geprüftes Recruiter-Netzwerk",
    description: "Wir verbinden Sie mit sorgfältig geprüften Experten, basierend auf einer transparenten Performance-Übersicht von hunderten spezialisierten Recruitern."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            SPAREN SIE ZEIT & GELD
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">10x effizienter</span> einstellen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Top-Talente zu finden war aufwendig und teuer - bis jetzt.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-primary">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;