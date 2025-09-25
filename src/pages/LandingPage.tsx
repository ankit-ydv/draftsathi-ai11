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
      iconBg: "from-red-500 to-pink-500",
      isActive: true
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Land Registry",
      description: "Property deeds, land agreements, and real estate documentation",
      gradient: "from-green-500/10 to-emerald-500/10",
      iconBg: "from-green-500 to-emerald-500",
      isActive: true
    }
  ];

  const newDomains = [
    {
      icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3.09 8.26L4 9.27L12 3.27L20 9.27L20.91 8.26L12 2ZM12 4.15L6.5 8.61V19H9.5V13H14.5V19H17.5V8.61L12 4.15Z"/></svg>,
      title: "Real Estate",
      description: "Lease agreements, property contracts, and housing documentation",
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconBg: "from-blue-500 to-cyan-500",
      isActive: true
    },
    {
      icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>,
      title: "Corporate Law",
      description: "Business contracts, employment agreements, and corporate governance",
      gradient: "from-purple-500/10 to-indigo-500/10",
      iconBg: "from-purple-500 to-indigo-500",
      isActive: true
    },
    {
      icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.67 2 3 2.67 3 3v16c0 .33.27.6.6.6h16.8c.33 0 .6-.27.6-.6V3c0-.33-.27-.6-.6-.6zM19 19H5V8h14v11z"/></svg>,
      title: "Family Law",
      description: "Divorce agreements, custody documents, and family legal matters",
      gradient: "from-orange-500/10 to-red-500/10",
      iconBg: "from-orange-500 to-red-500",
      isActive: true
    },
    {
      icon: <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
      title: "Intellectual Property",
      description: "Patents, trademarks, copyrights, and IP licensing agreements",
      gradient: "from-teal-500/10 to-green-500/10",
      iconBg: "from-teal-500 to-green-500",
      isActive: true
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

          {/* Main Domain Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {domains.map((domain, index) => (
              <Card key={index} className={`relative overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 bg-gradient-to-br ${domain.gradient} border-border/50 group cursor-pointer`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg" />
                </div>
                <CardHeader className="relative text-center pb-4">
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${domain.iconBg} rounded-2xl mb-4 mx-auto shadow-lg`}>
                    <div className="text-white">
                      {domain.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{domain.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative text-center">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {domain.description}
                  </p>
                  <Button 
                    variant="hero" 
                    size="sm"
                    onClick={() => navigate('/get-started')}
                    className="shadow-card hover:shadow-elegant transition-all duration-300"
                  >
                    Start Analysis
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Domains Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              More Specialized Domains
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {newDomains.map((domain, index) => (
                <Card key={index} className={`relative overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 bg-gradient-to-br ${domain.gradient} border-border/50 group cursor-pointer`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="relative text-center pb-2">
                    <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${domain.iconBg} rounded-xl mb-3 mx-auto shadow-md`}>
                      <div className="text-white">
                        {domain.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{domain.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative text-center">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {domain.description}
                    </p>
                    {domain.isAdd ? (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="hover:bg-accent/10 border-accent/30"
                      >
                        Request Domain
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => navigate('/get-started')}
                        className="hover:bg-secondary/50 transition-all duration-300"
                      >
                        Get Started
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
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

      {/* Footer Section */}
      <footer className="bg-gradient-to-br from-card/50 to-muted/30 border-t border-border/50">
        <div className="container max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                DraftSathi AI
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                AI-powered legal document analysis and drafting assistance for professionals worldwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.739.099.120.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.614 0 11.99-5.367 11.99-11.988C24.007 5.367 18.631.001.012.001z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Integrations</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 DraftSathi AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Status
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Security
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Documentation
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;