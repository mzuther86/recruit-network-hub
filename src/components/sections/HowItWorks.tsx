import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, Users, CheckCircle, Zap } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Post Your Requirements",
    description: "Describe your ideal candidate, role specifications, and company culture. Our AI matches you with the most suitable recruiters.",
    step: "01"
  },
  {
    icon: Users,
    title: "Get Matched with Specialists",
    description: "Receive proposals from 3-5 recruiters specialized in your industry, each with their unique networks and proven track records.",
    step: "02"
  },
  {
    icon: Zap,
    title: "Recruiters Compete for You",
    description: "Multiple recruiters work simultaneously using their specialized tools and networks to find your perfect candidates.",
    step: "03"
  },
  {
    icon: CheckCircle,
    title: "Hire the Best Talent",
    description: "Review vetted candidates from multiple sources and make your choice. Pay only when you hire successfully.",
    step: "04"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How It <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process connects you with the right recruiters and candidates in just four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {step.step}
                    </div>
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;