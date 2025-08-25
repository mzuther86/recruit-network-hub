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
              <span className="bg-gradient-primary bg-clip-text text-transparent">Datenschutzerklärung</span>
            </h1>
          </div>

          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>1. Datenschutz auf einen Blick</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold">Allgemeine Hinweise</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                    Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, 
                    mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema 
                    Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>2. Hosting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold">Strato</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Anbieter ist die Strato AG, Otto-Ostrowski-Straße 7, 10249 Berlin (nachfolgend „Strato"). 
                    Wenn Sie unsere Website besuchen, erfasst Strato verschiedene Logfiles inklusive Ihrer IP-Adressen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Weitere Informationen entnehmen Sie der Datenschutzerklärung von Strato: 
                    <a href="https://www.strato.de/datenschutz/" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                      https://www.strato.de/datenschutz/
                    </a>.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>3. Allgemeine Hinweise und Pflichtinformationen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold">Hinweis zur verantwortlichen Stelle</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <p className="text-muted-foreground">
                    Michael Zuther<br />
                    Schleißheimer Str. 219<br />
                    80809 München<br />
                    Telefon: 0176 – 62457759<br />
                    E-Mail: mail@headsourcing.de
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam 
                    mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten 
                    (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>4. Datenerfassung auf dieser Website</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold">Cookies</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete 
                    und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für 
                    die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem 
                    Endgerät gespeichert.
                  </p>
                  
                  <h4 className="font-semibold">Kontaktformular</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                    Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                    der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                    wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>5. Ihre Rechte</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck 
                    Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, 
                    die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur 
                    Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft 
                    widerrufen.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung 
                    Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht 
                    bei der zuständigen Aufsichtsbehörde zu.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>6. SSL- bzw. TLS-Verschlüsselung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, 
                  wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, 
                  eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, 
                  dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem 
                  Schloss-Symbol in Ihrer Browserzeile.
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