import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-section-dark text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm16 0c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-service rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">LX</span>
                  </div>
                  <span className="text-xl font-bold">LX Jardinagem</span>
                </div>
                <p className="text-primary-foreground/80 text-sm leading-relaxed">
                  Especialistas em jardinagem e paisagismo, criando espaços verdes únicos 
                  e bem cuidados em Nova Palhoça e região há mais de 5 anos.
                </p>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/48988358929" className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors duration-300">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Company */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Empresa</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Sobre nós</a></li>
                <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Serviços</a></li>
                <li><a href="#portfolio" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Portfólio</a></li>
                <li><a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contato</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Nossos Serviços</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Corte de Grama</a></li>
                <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Poda de Plantas</a></li>
                <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Limpeza de Pátio</a></li>
                <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Revitalização de Jardins</a></li>
                <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Paisagismo</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Contato</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-primary-foreground/80 leading-relaxed">
                      R. Hercílio Jorge da Silva, 49<br />
                      Nova Palhoça, Palhoça - SC<br />
                      CEP: 88131-576
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <a href="tel:+5548988358929" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    (48) 98835-8929
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                  <div className="text-primary-foreground/80">
                    <p>Segunda a Sábado</p>
                    <p>08:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2024 LX Jardinagem. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Termos de Serviço
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;