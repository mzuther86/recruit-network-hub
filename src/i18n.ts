import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      login: "Login",
      getStarted: "Get Started",
      
      // Hero Section
      heroTitle: "Recruiting reimagined:",
      heroTitleHighlight: "Innovation",
      heroTitleEnd: "meets Speed",
      heroDescription: "Benefit from a power network of over 100 specialized recruiters – each with exclusive contacts and proven strategies. Find your top candidates lightning-fast, faster than any traditional agency.",
      startNow: "Start Now",
      
      // How It Works
      howItWorksTitle: "How It Works",
      
      // Benefits
      benefitsTitle: "Your Benefits",
      
      // CTA
      ctaTitle: "Ready to revolutionize your recruiting?",
      ctaDescription: "Join over 500 companies that have already discovered the power of our recruiting network.",
      
      // Footer
      footerDescription: "The leading platform for freelance recruiting specialists.",
    }
  },
  de: {
    translation: {
      // Navigation
      login: "Anmelden",
      getStarted: "Loslegen",
      
      // Hero Section
      heroTitle: "Recruiting neu gedacht:",
      heroTitleHighlight: "Innovation",
      heroTitleEnd: "trifft Geschwindigkeit",
      heroDescription: "Profitieren Sie von einem Power-Netzwerk aus über 100 spezialisierten Recruitern – jeder mit exklusiven Kontakten und praxiserprobten Strategien. So finden Sie Ihre Top-Kandidaten blitzschnell, schneller als jede traditionelle Agentur.",
      startNow: "Jetzt starten",
      
      // How It Works
      howItWorksTitle: "So funktioniert's",
      
      // Benefits
      benefitsTitle: "Ihre Vorteile",
      
      // CTA
      ctaTitle: "Bereit, Ihr Recruiting zu revolutionieren?",
      ctaDescription: "Schließen Sie sich über 500 Unternehmen an, die bereits die Kraft unseres Recruiting-Netzwerks entdeckt haben.",
      
      // Footer
      footerDescription: "Die führende Plattform für freiberufliche Recruiting-Spezialisten.",
    }
  },
  es: {
    translation: {
      // Navigation
      login: "Iniciar Sesión",
      getStarted: "Comenzar",
      
      // Hero Section
      heroTitle: "Reclutamiento reinventado:",
      heroTitleHighlight: "Innovación",
      heroTitleEnd: "encuentra Velocidad",
      heroDescription: "Benefíciese de una red poderosa de más de 100 reclutadores especializados, cada uno con contactos exclusivos y estrategias probadas. Encuentre a sus mejores candidatos a la velocidad del rayo, más rápido que cualquier agencia tradicional.",
      startNow: "Comenzar Ahora",
      
      // How It Works
      howItWorksTitle: "Cómo Funciona",
      
      // Benefits
      benefitsTitle: "Sus Beneficios",
      
      // CTA
      ctaTitle: "¿Listo para revolucionar su reclutamiento?",
      ctaDescription: "Únase a más de 500 empresas que ya han descubierto el poder de nuestra red de reclutamiento.",
      
      // Footer
      footerDescription: "La plataforma líder para especialistas en reclutamiento freelance.",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'de', // Default to German
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;