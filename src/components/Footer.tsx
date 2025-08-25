import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Network, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Network className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">RecruitNetwork</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Verbindung von Unternehmen mit Elite Freelance-Recruitern für schnellere, 
              effektivere Einstellungen in allen Branchen.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Unternehmen</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Startseite
              </Link>
              <Link to="/imprint" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Impressum
              </Link>
              <Link to="/terms" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                AGB
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Executive Search</p>
              <p>Tech-Recruiting</p>
              <p>Vertriebsrekrutierung</p>
              <p>Marketing-Spezialisten</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>mail@headsourcing.de</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+49 (0) 89-12014173</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Berlin, Germany</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 RecruitNetwork. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/imprint" className="hover:text-primary transition-colors">Datenschutz</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">AGB</Link>
            <span>Mit ❤️ in Deutschland entwickelt</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;