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
              <span className="bg-gradient-primary bg-clip-text text-transparent">Impressum</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Rechtliche Informationen und Firmendetails
            </p>
          </div>

          <Card className="shadow-card">
            <CardContent className="space-y-6 p-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Angaben gemäß § 5 TMG</h3>
                <p className="text-muted-foreground">
                  Michael Zuther<br />
                  Schleißheimer Str. 219<br />
                  80809 München
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
                <p className="text-muted-foreground">
                  Telefon: 0176 – 62457759<br />
                  E-Mail: mail@headsourcing.de
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Umsatzsteuer-ID</h3>
                <p className="text-muted-foreground">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  DE267811402
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Redaktionell verantwortlich</h3>
                <p className="text-muted-foreground">
                  Michael Zuther
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">EU-Streitschlichtung</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <p className="text-muted-foreground text-xs">
                  Quelle: <a href="https://www.e-recht24.de" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.e-recht24.de</a>
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