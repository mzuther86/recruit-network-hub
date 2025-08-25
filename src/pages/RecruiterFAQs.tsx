import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RecruiterFAQs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Recruiter FAQ´s</h1>
            <p className="text-xl text-muted-foreground">
              Häufig gestellte Fragen für Freelance-Recruiter
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Allgemeine Informationen</CardTitle>
              <CardDescription>
                Alles was Sie über die Zusammenarbeit mit RecruitNetwork wissen müssen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Wie funktioniert die Zusammenarbeit mit RecruitNetwork?</AccordionTrigger>
                  <AccordionContent>
                    Als Freelance-Recruiter werden Sie Teil unseres Elite-Netzwerks. Wir vermitteln Ihnen passende Projekte von Unternehmen, die auf der Suche nach qualifizierten Kandidaten sind. Sie arbeiten selbstständig und flexibel an den Projekten, die zu Ihrer Expertise passen.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Welche Voraussetzungen muss ich erfüllen?</AccordionTrigger>
                  <AccordionContent>
                    Wir suchen erfahrene Recruiter mit mindestens 3-5 Jahren Berufserfahrung, nachgewiesenen Erfolgen in der Kandidatensuche und Spezialisierung in bestimmten Branchen oder Positionen. Ein professioneller Auftritt und exzellente Kommunikationsfähigkeiten sind ebenfalls wichtig.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Wie hoch ist die Vergütung?</AccordionTrigger>
                  <AccordionContent>
                    Die Vergütung erfolgt erfolgsbezogen und variiert je nach Position und Projekt. Typischerweise bewegt sich die Provision zwischen 15-25% des Jahresgehalts der erfolgreich vermittelten Kandidaten. Detaillierte Informationen erhalten Sie nach der Registrierung.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>Wie schnell erhalte ich Projekte nach der Registrierung?</AccordionTrigger>
                  <AccordionContent>
                    Nach erfolgreicher Registrierung und Freischaltung Ihres Profils erhalten Sie in der Regel innerhalb von 1-2 Wochen erste Projektanfragen. Die Häufigkeit hängt von Ihrer Spezialisierung und der aktuellen Nachfrage ab.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>Kann ich parallel zu anderen Plattformen arbeiten?</AccordionTrigger>
                  <AccordionContent>
                    Ja, Sie können parallel zu anderen Plattformen und Kunden arbeiten. Wir erwarten lediglich, dass Sie die übernommenen Projekte professionell und termingerecht bearbeiten.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>Welche Tools und Unterstützung bietet RecruitNetwork?</AccordionTrigger>
                  <AccordionContent>
                    Wir stellen Ihnen Zugang zu unserer Plattform, Marketing-Materialien, Best-Practice-Guides und regelmäßige Schulungen zur Verfügung. Zusätzlich haben Sie einen direkten Ansprechpartner für alle Fragen und Projekte.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-7">
                  <AccordionTrigger>Wie erfolgt die Abrechnung?</AccordionTrigger>
                  <AccordionContent>
                    Die Abrechnung erfolgt nach erfolgreicher Vermittlung und bestandener Probezeit des Kandidaten. Die Zahlung wird in der Regel innerhalb von 30 Tagen nach Rechnungsstellung überwiesen.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-8">
                  <AccordionTrigger>Was passiert, wenn ein Kandidat die Probezeit nicht besteht?</AccordionTrigger>
                  <AccordionContent>
                    Bei einer Kündigung während der ersten 6 Monate erfolgt eine anteilige Rückerstattung der Provision. Nach 6 Monaten gilt die Vermittlung als erfolgreich abgeschlossen.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold">Bereit loszulegen?</h2>
            <p className="text-muted-foreground">
              Registrieren Sie sich noch heute und werden Sie Teil unseres Elite-Netzwerks
            </p>
            <Button asChild size="lg">
              <Link to="/recruiter-registration">
                Jetzt als Recruiter registrieren
              </Link>
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Weitere Fragen? Kontaktieren Sie uns unter{" "}
              <a href="mailto:mail@headsourcing.de" className="text-primary hover:underline">
                mail@headsourcing.de
              </a>{" "}
              oder{" "}
              <a href="tel:+4989120141873" className="text-primary hover:underline">
                +49 (0) 89-12014173
              </a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecruiterFAQs;