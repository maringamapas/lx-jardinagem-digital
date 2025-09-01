import { Scissors, TreePine, Brush, Sparkles, Users, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Experiência e Excelência",
      description: "Nossa equipe possui anos de experiência em jardinagem e paisagismo, garantindo serviços de alta qualidade para seu jardim.",
      isMainService: false
    },
    {
      icon: TreePine,
      title: "Serviço Personalizado",
      description: "Cada projeto é único e desenvolvido conforme suas necessidades específicas, respeitando o estilo e orçamento desejado.",
      isMainService: false
    },
    {
      icon: Brush,
      title: "Soluções Abrangentes",
      description: "Oferecemos desde manutenção básica até projetos completos de paisagismo, cobrindo todas as suas necessidades.",
      isMainService: false
    },
    {
      icon: Scissors,
      title: "Corte de Grama",
      description: "Serviço profissional de corte e aparagem de grama, mantendo seu jardim sempre bem cuidado e com aspecto impecável.",
      isMainService: true
    },
    {
      icon: TreePine,
      title: "Poda",
      description: "Poda técnica e estética de árvores, arbustos e plantas ornamentais, promovendo crescimento saudável e forma adequada.",
      isMainService: true
    },
    {
      icon: Brush,
      title: "Limpeza de Pátio",
      description: "Limpeza completa de pátios, remoção de folhas, detritos e manutenção geral de áreas externas.",
      isMainService: true
    },
    {
      icon: Sparkles,
      title: "Revitalização de Jardins",
      description: "Transformação completa de jardins existentes, desde replantio até redesign paisagístico para renovar seu espaço verde.",
      isMainService: true
    },
    {
      icon: Users,
      title: "Atendimento de Qualidade",
      description: "Atendimento personalizado e acompanhamento de cada projeto, garantindo total satisfação do cliente.",
      isMainService: false
    },
    {
      icon: Shield,
      title: "Garantia de Satisfação",
      description: "Trabalhamos com compromisso total até que você fique 100% satisfeito com o resultado final do seu jardim.",
      isMainService: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium mb-4">
            NOSSOS SERVIÇOS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Cuidamos do Seu Jardim<br />
            <span className="text-primary">Com Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos serviços completos de jardinagem e paisagismo para manter seu espaço verde 
            sempre bonito e bem cuidado em Nova Palhoça e região.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-lg transition-all duration-300 hover:shadow-hover hover:-translate-y-1 ${
                  service.isMainService 
                    ? 'bg-gradient-service text-primary-foreground shadow-card' 
                    : 'bg-card shadow-card hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    service.isMainService 
                      ? 'bg-primary-foreground/20' 
                      : 'bg-primary/10 group-hover:bg-primary-foreground/20'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      service.isMainService 
                        ? 'text-primary-foreground' 
                        : 'text-primary group-hover:text-primary-foreground'
                    }`} />
                  </div>
                  
                  <h3 className={`text-xl font-semibold ${
                    service.isMainService 
                      ? 'text-primary-foreground' 
                      : 'text-foreground group-hover:text-primary-foreground'
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed ${
                    service.isMainService 
                      ? 'text-primary-foreground/80' 
                      : 'text-muted-foreground group-hover:text-primary-foreground/80'
                  }`}>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/48988358929?text=Solicito%20informações!"
            className="inline-flex items-center px-8 py-4 bg-gradient-accent hover:opacity-90 text-accent-foreground rounded-lg font-semibold transition-all duration-300 shadow-card hover:shadow-hover"
          >
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;