import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Imprint = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Imprint</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Rechtliche Informationen und Firmendetails
            </p>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Firmeninformationen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">RecruitNetwork GmbH</h3>
                <p className="text-muted-foreground">
                  Musterstraße 123<br />
                  10115 Berlin<br />
                  Germany
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Kontakt</h3>
                <p className="text-muted-foreground">
                  Phone: +49 (0) 123 456 789<br />
                  Email: legal@recruitnetwork.com<br />
                  Website: www.recruitnetwork.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Rechtliche Informationen</h3>
                <p className="text-muted-foreground">
                  Managing Director: Max Mustermann<br />
                  Commercial Register: HRB 123456 B<br />
                  Registration Court: Amtsgericht Berlin-Charlottenburg<br />
                  VAT ID: DE123456789
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Verantwortlich für den Inhalt</h3>
                <p className="text-muted-foreground">
                  Max Mustermann<br />
                  RecruitNetwork GmbH<br />
                  Musterstraße 123<br />
                  10115 Berlin, Germany
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Haftungsausschluss</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                  Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                  Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                  fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                  rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Urheberrecht</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                  Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Imprint;