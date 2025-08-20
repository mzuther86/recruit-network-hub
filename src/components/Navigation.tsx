import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  console.log("Navigation component rendering...");
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          RecruitNetwork
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Startseite
          </Link>
          <Link 
            to="/imprint" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === '/imprint' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Impressum
          </Link>
          <Link 
            to="/terms" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === '/terms' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            AGB
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Anmelden
          </Button>
          <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Loslegen
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;