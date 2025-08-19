import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Terms & Conditions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Allgemeine Geschäftsbedingungen (AGB)
            </p>
          </div>

          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>§ 1 Geltungsbereich</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der RecruitNetwork GmbH 
                  und ihren Kunden über die Vermittlung von Freelance-Recruitern und die Nutzung der Plattform. 
                  Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, der Geltung wird 
                  ausdrücklich schriftlich zugestimmt.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>§ 2 Vertragsgegenstand</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  RecruitNetwork vermittelt qualifizierte Freelance-Recruiter an Unternehmen zur Besetzung offener 
                  Stellen. Die Plattform bietet Zugang zu einem Netzwerk von über 100 spezialisierten Recruitern 
                  verschiedener Branchen. Der Vertrag kommt durch die Annahme eines Recruiter-Vorschlags zustande.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>§ 3 Leistungen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>RecruitNetwork erbringt folgende Leistungen:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Vermittlung qualifizierter Freelance-Recruiter</li>
                    <li>Matching-Service basierend auf Anforderungsprofilen</li>
                    <li>Qualitätskontrolle der Recruiter im Netzwerk</li>
                    <li>Technische Plattform für die Kommunikation</li>
                    <li>Support während des gesamten Recruiting-Prozesses</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>§ 4 Vergütung</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>Die Vergütung erfolgt nach dem "Success Fee" Modell:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Zahlung nur bei erfolgreicher Besetzung der Position</li>
                    <li>Provision von 15-25% des Bruttojahresgehalts</li>
                    <li>Transparente Preisgestaltung durch Recruiter-Wettbewerb</li>
                    <li>Keine versteckten Kosten oder Setup-Gebühren</li>
                  </ul>
                  <p>Die Zahlung ist nach Vertragsabschluss mit dem Kandidaten fällig.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>§ 5 Gewährleistung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  RecruitNetwork gewährleistet eine Wiederbeschaffungsgarantie von 6 Monaten. Sollte der vermittelte 
                  Kandidat innerhalb dieser Zeit kündigen oder gekündigt werden, wird kostenfrei eine Nachbesetzung 
                  angeboten. Ausgenommen sind betriebsbedingte Kündigungen oder Kündigungen aufgrund von 
                  Umstrukturierungen beim Kunden.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>§ 6 Datenschutz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Alle personenbezogenen Daten werden gemäß DSGVO verarbeitet. RecruitNetwork verpflichtet sich 
                  zur Vertraulichkeit aller übermittelten Informationen. Kandidatendaten werden nur mit 
                  ausdrücklicher Zustimmung weitergegeben. Detaillierte Informationen finden Sie in unserer 
                  Datenschutzerklärung.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>§ 7 Haftung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Die Haftung von RecruitNetwork ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. 
                  Eine Haftung für mittelbare Schäden, entgangenen Gewinn oder Folgeschäden ist ausgeschlossen, 
                  soweit gesetzlich zulässig. Die Haftung für Vermögensschäden ist auf die Höhe der 
                  vereinbarten Vergütung beschränkt.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>§ 8 Schlussbestimmungen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist Berlin. 
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der 
                  übrigen Bestimmungen unberührt. Änderungen bedürfen der Schriftform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;