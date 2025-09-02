import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center bg-hero-bg overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Beautiful garden landscaping by LX Jardinagem" loading="lazy" className="w-full h-full object-cover opacity-20 " />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                ESPECIALISTAS EM JARDINAGEM
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                JARDIM LINDO<br />
                <span className="text-primary">NOSSA EXPERTISE</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Criamos e mantemos jardins excepcionais em Nova Palhoça e região. 
                Nossa equipe qualificada transforma espaços externos em ambientes 
                únicos e deslumbrantes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-service hover:bg-service-hover text-primary-foreground px-8 py-4 text-lg shadow-card">
                NOSSOS SERVIÇOS
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg">
                VER PORTFÓLIO
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="lg:flex lg:justify-end">
            <div className="bg-card/95 backdrop-blur-sm p-8 rounded-lg shadow-card border border-border max-w-sm">
              <div className="text-center space-y-4">
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    ANOS DE EXPERIÊNCIA
                  </div>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                  <p>
                    Oferecemos serviços completos de jardinagem e paisagismo, 
                    criando espaços verdes únicos para residências em Santa Catarina.
                  </p>
                  <p>
                    Da manutenção básica à revitalização completa, 
                    cuidamos do seu jardim com dedicação e profissionalismo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-32 h-32 bg-gradient-accent opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-24 h-24 bg-gradient-service opacity-10 rounded-full blur-2xl"></div>
    </section>;
};
export default Hero;