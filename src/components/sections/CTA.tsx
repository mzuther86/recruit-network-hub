import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
const CTA = () => {
  return <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Bereit, Ihren Einstellungsprozess zu transformieren?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Schließen Sie sich Hunderten von Unternehmen an, die ihr Recruiting mit unserem Spezialisten-Netzwerk beschleunigt haben. Finden Sie noch heute bessere Kandidaten in kürzester Zeit.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 shadow-glow">
              Kostenlos testen <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Demo vereinbaren
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/20">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-5 w-5" />
              <span>+49 (0) 123 456 789</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-5 w-5" />
              <span>hello@recruitnetwork.com</span>
            </div>
          </div>

          <div className="mt-8 text-sm opacity-75">
            
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;