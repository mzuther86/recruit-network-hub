import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RecruiterRegistration = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Als Recruiter registrieren</h1>
            <p className="text-xl text-muted-foreground">
              Werden Sie Teil unseres Elite-Netzwerks von Freelance-Recruitern
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Registrierung</CardTitle>
              <CardDescription>
                Füllen Sie das folgende Formular aus, um sich als Recruiter zu registrieren.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Vorname</Label>
                  <Input id="firstName" placeholder="Ihr Vorname" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nachname</Label>
                  <Input id="lastName" placeholder="Ihr Nachname" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail-Adresse</Label>
                <Input id="email" type="email" placeholder="ihre.email@beispiel.de" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefonnummer</Label>
                <Input id="phone" type="tel" placeholder="+49 (0) 89-12014173" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience">Erfahrung im Recruiting (Jahre)</Label>
                <Input id="experience" type="number" placeholder="5" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="specialization">Spezialisierung/Branchen</Label>
                <Textarea 
                  id="specialization" 
                  placeholder="Beschreiben Sie Ihre Spezialisierung und Erfahrung in verschiedenen Branchen..."
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Zusätzliche Informationen</Label>
                <Textarea 
                  id="message" 
                  placeholder="Erzählen Sie uns mehr über sich und warum Sie Teil unseres Netzwerks werden möchten..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full" size="lg">
                Registrierung absenden
              </Button>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Haben Sie Fragen? Schauen Sie in unsere{" "}
              <Link to="/recruiter-faqs" className="text-primary hover:underline">
                Recruiter FAQ´s
              </Link>{" "}
              oder kontaktieren Sie uns direkt.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecruiterRegistration;