import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
const Navigation = () => {
  console.log("Navigation component rendering...");
  const location = useLocation();
  const { t } = useTranslation();
  return <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/43c8eddf-370b-4b15-883f-6cf73e8c66e6.png" 
            alt="HeadSourcing Logo" 
            className="h-8 w-auto"
          />
        </Link>
        
        

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <Button variant="ghost" size="sm">
            {t('login')}
          </Button>
          <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            {t('getStarted')}
          </Button>
        </div>
      </div>
    </nav>;
};
export default Navigation;