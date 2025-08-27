import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, TrendingUp } from "lucide-react";
import { useTranslation } from 'react-i18next';
import heroImage from "@/assets/hero-recruiting.jpg";
const Hero = () => {
  const { t } = useTranslation();
  return <section className="pt-24 pb-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {t('heroTitle')} 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> {t('heroTitleHighlight')} </span>
                {t('heroTitleEnd')}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{t('heroDescription')}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant">
                {t('startNow')} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 opacity-20"></div>
            <img src={heroImage} alt="Professional recruiting network" className="relative rounded-2xl shadow-elegant w-full h-auto" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;