import { Button } from "@/components/ui/button";
import { Scale, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface HeaderProps {
  showBack?: boolean;
}

const Header = ({ showBack = false }: HeaderProps) => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAboutClick = () => {
    navigate('/');
    setTimeout(() => scrollToSection('how-it-works'), 100);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Left: Back + Logo */}
        <div className="flex items-center gap-3">
          {showBack && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="hover:bg-secondary/50"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
          <Link to="/" className="flex items-center space-x-2">
            <div className="rounded-lg bg-gradient-to-r from-primary to-primary-glow p-2">
              <Scale className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DraftSathi AI
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Home
          </Link>
          <button
            onClick={handleAboutClick}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            About
          </button>
          <Link 
            to="/faq" 
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            FAQ
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="hero"
            onClick={() => navigate('/get-started')}
            className="shadow-elegant hover:shadow-glow transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden px-6 pb-4">
        <nav className="flex flex-col space-y-2">
          <Link 
            to="/" 
            className="text-foreground hover:text-primary transition-colors font-medium py-2"
          >
            Home
          </Link>
          <button
            onClick={handleAboutClick}
            className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
          >
            About
          </button>
          <Link 
            to="/faq" 
            className="text-foreground hover:text-primary transition-colors font-medium py-2"
          >
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;