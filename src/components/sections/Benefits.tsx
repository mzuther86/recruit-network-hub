import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Building2, Users, Target, Zap, CheckCircle2, TrendingDown, Shield } from "lucide-react";
const benefits = [{
  icon: Target,
  title: "Höchste Qualität & Maximale Reichweite",
  description: "Professionelle Recruiting-Spezialisten übernehmen die komplette Kandidatensuche für Sie - sofort einsatzbereit, ohne internen Aufwand oder kostspielige Software-Investitionen."
}, {
  icon: Users,
  title: "Vollständige Kandidatenprofile",
  description: "Sie erhalten ausführliche Bewertungen, professionelle Netzwerk-Profile, komplette Karrierehistorien und bei Bedarf Sprachfähigkeitsnachweise für deutsche Arbeitsplätze."
}, {
  icon: Zap,
  title: "Blitzschnelle Stellenbesetzung",
  description: "Firmen finden ihre idealen Kandidaten typischerweise in unter einem Monat - die ersten qualifizierten Bewerbungen erreichen Sie bereits in der ersten Woche."
}, {
  icon: CheckCircle2,
  title: "Doppelte Qualitätssicherung",
  description: "Jeder Kandidat durchläuft unser mehrstufiges Prüfverfahren: Erstbewertung durch Fachexperten, anschließend durch unser eigenes Qualitätssicherungsteam."
}, {
  icon: TrendingDown,
  title: "Drastische Kostensenkung & Volle Flexibilität",
  description: "Verzichten Sie auf teure Abonnements und reduzieren Sie Ihre Recruiting-Kosten erheblich - möglich durch unser innovatives, verteiltes Netzwerkmodell."
}, {
  icon: Shield,
  title: "Verifiziertes Expertenportfolio",
  description: "Wir verbinden Sie ausschließlich mit qualitätsgeprüften Recruiting-Profis, ausgewählt durch detaillierte Leistungsanalysen aus unserem Pool von hunderten Branchenspezialisten."
}];
const comparison = [{
  feature: "Anzahl der Netzwerke",
  traditional: "1 Agentur-Netzwerk",
  platform: "100+ Spezialistennetzwerke",
  highlight: true
}, {
  feature: "Recruiter-Spezialisierung",
  traditional: "Generalisten-Recruiter",
  platform: "Branchenspezialisten",
  highlight: true
}, {
  feature: "Zeit bis zum ersten Kandidaten",
  traditional: "2-3 Wochen",
  platform: "1 Woche",
  highlight: false
}, {
  feature: "Erfolgsquote",
  traditional: "70-80%",
  platform: "95%+",
  highlight: true
}, {
  feature: "Kostenstruktur",
  traditional: "Fest 20-30%",
  platform: "15-25%",
  highlight: false
}];
const Benefits = () => {
  return <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            RESSOURCEN OPTIMIEREN
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Recruiting</span> neu gedacht
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Qualifizierte Fachkräfte zu gewinnen muss nicht kompliziert oder kostspielig sein.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, index) => <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Process Comparison */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              PROZESS VEREINFACHEN
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Der direkte Pfad zu <span className="bg-gradient-primary bg-clip-text text-transparent">erstklassigen</span> Fachkräften
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Erhalten Sie die Expertise eines kompletten Recruiting-Netzwerks mit 100+ Spezialisten – mit nur einem zentralen Ansprechpartner.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Traditional Process */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-muted-foreground">die aktuelle Situation</h3>
                </div>
                <div className="h-150 bg-muted rounded-lg overflow-hidden">
                  <img src="/lovable-uploads/f1145198-bb3a-4932-a752-a8f69c40a11f.png" alt="Traditioneller Recruiting-Prozess mit vielen Schnittstellen und komplexer Kommunikation" className="w-full h-full object-cover" />
                </div>
                
              </CardContent>
            </Card>

            {/* Platform Process */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-primary">Unser Prozess</h3>
                </div>
                <div className="h-150 bg-muted rounded-lg overflow-hidden">
                  <img src="/lovable-uploads/6f2907db-525b-41d4-b608-1af94c3bd692.png" alt="Moderne Plattform mit zentraler Kommunikation und 100+ spezialisierten Recruitern" className="w-full h-full object-cover" />
                </div>
                
              </CardContent>
            </Card>
          </div>
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
                {comparison.map((item, index) => <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="py-4 px-4 text-center text-muted-foreground">{item.traditional}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="text-primary font-bold">
                        {item.platform}
                      </span>
                    </td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>;
};
export default Benefits;