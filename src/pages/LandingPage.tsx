import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, FileText, Plus, Upload, Brain, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

const LandingPage = () => {
  const navigate = useNavigate();

  const domains = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Healthcare",
      description: "Medical contracts, compliance documents, and healthcare agreements",
      gradient: "from-red-500/10 to-pink-500/10",
      iconBg: "from-red-500 to-pink-500"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Land Registry",
      description: "Property deeds, land agreements, and real estate documentation",
      gradient: "from-green-500/10 to-emerald-500/10",
      iconBg: "from-green-500 to-emerald-500"
    },
    {
      icon: <Plus className="h-8 w-8" />,
      title: "Add New Domain",
      description: "Request a new specialized domain for your specific legal needs",
      gradient: "from-accent/10 to-accent/5",
      iconBg: "from-accent to-accent",
      isAdd: true
    }
  ];

  const steps = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "Upload File",
      description: "Drag & drop your .docx. We'll parse it instantly with enterprise-grade security."
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Processing",
      description: "AI analyzes clauses, flags risk, and suggests edits based on legal best practices."
    },
    {
      icon: <Download className="h-8 w-8" />,
      title: "Get Assistance",
      description: "Accept changes, download revised doc, or request a lawyer review for complex cases."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/10">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Choose Your Domain
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Select a specialized domain for AI-powered document review, drafting suggestions, and clause analysis
          </p>

          {/* Domain Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {domains.map((domain, index) => (
              <Card key={index} className={`relative overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 bg-gradient-to-br ${domain.gradient} border-border/50 group cursor-pointer`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="relative text-center pb-4">
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${domain.iconBg} rounded-2xl mb-4 mx-auto shadow-lg`}>
                    <div className="text-white">
                      {domain.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{domain.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {domain.description}
                  </p>
                  {domain.isAdd && (
                    <Button 
                      variant="outline" 
                      className="mt-4 hover:bg-accent/10 border-accent/30"
                    >
                      Request Domain
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="pb-20 px-6 bg-gradient-to-b from-transparent to-secondary/20">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to get professional legal document assistance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-accent z-10" />
                )}
                
                <Card className="relative shadow-card bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="pt-8 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
                        {index + 1}
                      </div>
                    </div>

                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary">
                        {step.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="inline-block shadow-elegant bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Join thousands of legal professionals using AI to streamline their document workflow.
                </p>
                <Button 
                  size="lg"
                  variant="hero"
                  onClick={() => navigate('/get-started')}
                  className="shadow-elegant hover:shadow-glow transition-all duration-300"
                >
                  Start Your Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;