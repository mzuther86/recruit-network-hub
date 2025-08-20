import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Network, 
  Clock, 
  DollarSign, 
  Users, 
  Target, 
  Trophy,
  Building2,
  UserX
} from "lucide-react";

const benefits = [
  {
    icon: Network,
    title: "Vielfältige Spezialistennetzwerke",
    description: "Jeder Recruiter bringt seine einzigartigen Branchennetzwerke und spezialisierten Verbindungen mit",
    traditional: "Begrenzt auf agenturinterne Netzwerke",
    ourWay: "100+ spezialisierte Netzwerke kombiniert"
  },
  {
    icon: Clock,
    title: "Schnellere Einstellungszeit",
    description: "Mehrere Recruiter, die gleichzeitig arbeiten, beschleunigen den gesamten Prozess",
    traditional: "Ein Recruiter, sequenzieller Prozess",
    ourWay: "Paralleles Recruiting = 3x schneller"
  },
  {
    icon: DollarSign,
    title: "Wettbewerbsfähige Preise",
    description: "Recruiter konkurrieren um Ihr Geschäft und sorgen für wettbewerbsfähige Preise",
    traditional: "Feste Agenturgebühren (20-30%)",
    ourWay: "Wettbewerbliches Bieten (15-25%)"
  },
  {
    icon: Target,
    title: "Höhere Erfolgsquoten",
    description: "Spezialisierte Expertise in bestimmten Branchen und Rollen",
    traditional: "Generalistischer Ansatz",
    ourWay: "Branchenspezifische Spezialisten"
  }
];

const comparison = [
  {
    feature: "Anzahl der Netzwerke",
    traditional: "1 Agentur-Netzwerk",
    platform: "100+ Spezialistennetzwerke",
    highlight: true
  },
  {
    feature: "Recruiter-Spezialisierung",
    traditional: "Generalisten-Recruiter",
    platform: "Branchenspezialisten",
    highlight: true
  },
  {
    feature: "Zeit bis zum ersten Kandidaten",
    traditional: "2-3 Wochen",
    platform: "1 Woche",
    highlight: false
  },
  {
    feature: "Erfolgsquote",
    traditional: "70-80%",
    platform: "95%+",
    highlight: true
  },
  {
    feature: "Kostenstruktur",
    traditional: "Fest 20-30%",
    platform: "Wettbewerblich 15-25%",
    highlight: false
  }
];

const Benefits = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Warum unsere <span className="bg-gradient-primary bg-clip-text text-transparent">Plattform</span> wählen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sehen Sie, wie unser Freelance-Recruiter-Netzwerk traditionelle Agenturen übertrifft
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4">{benefit.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <UserX className="h-4 w-4 text-destructive" />
                        <span className="text-sm text-muted-foreground">{benefit.traditional}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{benefit.ourWay}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Plattform vs. Traditionelle Agenturen</h3>
            <p className="text-muted-foreground">Sehen Sie die klaren Vorteile unseres Ansatzes</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Merkmal</th>
                  <th className="text-center py-4 px-4 font-semibold">
                    <div className="flex items-center justify-center space-x-2">
                      <Building2 className="h-5 w-5" />
                      <span>Traditionelle Agentur</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4 font-semibold">
                    <div className="flex items-center justify-center space-x-2">
                      <Network className="h-5 w-5 text-primary" />
                      <span className="text-primary">Unsere Plattform</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="py-4 px-4 font-medium">{item.feature}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{item.traditional}</td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center space-x-2">
                        <span className={item.highlight ? "text-primary font-medium" : ""}>
                          {item.platform}
                        </span>
                        {item.highlight && (
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            Besser
                          </Badge>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;