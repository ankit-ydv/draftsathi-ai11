import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, UserPlus, LogIn, Sparkles, Shield, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

const GetStarted = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant AI Analysis",
      description: "Upload your document and get AI-powered analysis in seconds"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Your documents are protected with bank-level encryption"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Smart Suggestions",
      description: "Get intelligent recommendations based on legal best practices"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/10">
      <Header showBack />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-6">
            <Sparkles className="h-6 w-6 text-primary mr-2" />
            <span className="text-sm font-semibold text-primary">Get Started Today</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Start Your Legal AI Journey
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Join thousands of legal professionals who trust DraftSathi AI for intelligent document review and analysis. Choose how you'd like to begin.
          </p>
        </div>
      </section>

      {/* Main Action Cards */}
      <section className="pb-16 px-6">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Create Account Card */}
            <Card className="relative overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 bg-gradient-to-br from-card to-card/50 border-primary/20 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary-glow rounded-2xl mb-4 mx-auto">
                  <UserPlus className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl text-center">Create New Account</CardTitle>
              </CardHeader>
              <CardContent className="relative text-center space-y-4">
                <p className="text-muted-foreground">
                  New to DraftSathi AI? Create your account and get instant access to AI-powered legal document analysis.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Free tier with basic document analysis</li>
                  <li>• Secure document processing</li>
                  <li>• Access to specialized legal domains</li>
                  <li>• 24/7 customer support</li>
                </ul>
                <Button 
                  size="lg"
                  variant="hero"
                  onClick={() => navigate('/create-id')}
                  className="w-full mt-6 group shadow-elegant hover:shadow-glow transition-all duration-300"
                >
                  Create Account
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Login Card */}
            <Card className="relative overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 bg-gradient-to-br from-card to-card/50 border-border/50 group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-muted/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader className="relative">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary to-muted rounded-2xl mb-4 mx-auto">
                  <LogIn className="h-8 w-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl text-center">Login to Account</CardTitle>
              </CardHeader>
              <CardContent className="relative text-center space-y-4">
                <p className="text-muted-foreground">
                  Already have an account? Login to continue with your document analysis and access your saved work.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Access your saved documents</li>
                  <li>• Continue previous analysis</li>
                  <li>• View your account history</li>
                  <li>• Manage subscription settings</li>
                </ul>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/login')}
                  className="w-full mt-6 group hover:bg-secondary/50 transition-all duration-300"
                >
                  Login Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-20 px-6">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose DraftSathi AI?</h2>
            <p className="text-muted-foreground">
              Experience the future of legal document processing with our advanced AI technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-card bg-gradient-to-br from-card to-card/50 border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl mb-4 mx-auto">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="mt-12 text-center shadow-elegant bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Ready to Transform Your Legal Workflow?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join the revolution in legal document processing. Get started today and experience the power of AI-driven legal assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  variant="hero"
                  onClick={() => navigate('/create-id')}
                  className="shadow-elegant hover:shadow-glow transition-all duration-300"
                >
                  Start Free Trial
                  <Sparkles className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/faq')}
                  className="hover:bg-secondary/50 transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;