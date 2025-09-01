import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-service rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">LX</span>
            </div>
            <span className="text-xl font-bold text-primary">LX Jardinagem</span>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-accent" />
              <span>(48) 98835-8929</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Nova Palhoça, Palhoça - SC</span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">HOME</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">SERVIÇOS</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">PORTFÓLIO</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">SOBRE</a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">BLOG</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">CONTATO</a>
          </nav>

          {/* CTA Button - Desktop */}
          <Button className="hidden md:flex bg-gradient-service hover:bg-service-hover text-primary-foreground">
            ORÇAMENTO
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4 mb-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">HOME</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">SERVIÇOS</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">PORTFÓLIO</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">SOBRE</a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors">BLOG</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">CONTATO</a>
            </nav>
            
            <div className="space-y-2 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>(48) 98835-8929</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Nova Palhoça, Palhoça - SC</span>
              </div>
            </div>
            
            <Button className="w-full bg-gradient-service hover:bg-service-hover text-primary-foreground">
              ORÇAMENTO
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;