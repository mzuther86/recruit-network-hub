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
              Legal information and company details
            </p>
          </div>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
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
                <h3 className="font-semibold mb-2">Contact</h3>
                <p className="text-muted-foreground">
                  Phone: +49 (0) 123 456 789<br />
                  Email: legal@recruitnetwork.com<br />
                  Website: www.recruitnetwork.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Legal Information</h3>
                <p className="text-muted-foreground">
                  Managing Director: Max Mustermann<br />
                  Commercial Register: HRB 123456 B<br />
                  Registration Court: Amtsgericht Berlin-Charlottenburg<br />
                  VAT ID: DE123456789
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Responsible for Content</h3>
                <p className="text-muted-foreground">
                  Max Mustermann<br />
                  RecruitNetwork GmbH<br />
                  Musterstraße 123<br />
                  10115 Berlin, Germany
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Disclaimer</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The contents of our pages have been created with the utmost care. However, we cannot guarantee 
                  the contents' accuracy, completeness or topicality. According to statutory provisions, we are 
                  furthermore responsible for our own content on these web pages. In this matter, please note 
                  that we are not under obligation to supervise merely the transmitted or saved information of 
                  third parties, or investigate circumstances pointing to illegal activity.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Copyright</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The content and works on these pages created by the site operators are subject to German 
                  copyright law. Duplication, processing, distribution, or any form of commercialization of 
                  such material beyond the scope of the copyright law shall require the prior written consent 
                  of its respective author or creator.
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