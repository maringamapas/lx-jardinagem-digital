import { ExternalLink } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Jardim Zen Residencial",
      category: "Paisagismo Moderno",
      location: "Nova Palhoça",
      image: project1,
      description: "Transformação completa de área externa com design zen e plantas ornamentais."
    },
    {
      id: 2,
      title: "Projeto Residencial Premium",
      category: "Jardim Familiar",
      location: "Palhoça Centro",
      image: project2,
      description: "Criação de espaço familiar integrado com área de lazer e jardim funcional."
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium mb-4">
            NOSSO PORTFÓLIO
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            TRABALHOS<br />
            <span className="text-primary">MAIS RECENTES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos nossos projetos mais recentes de jardinagem e paisagismo 
            realizados em Nova Palhoça e região.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-hover transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-section-dark/90 via-section-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <div className="space-y-2">
                  <p className="text-sm text-primary-foreground/80 font-medium">{project.category}</p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-primary-foreground/90">{project.description}</p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-primary-foreground/80">{project.location}</span>
                    <ExternalLink className="w-5 h-5 text-primary-foreground/80" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/48988358929?text=Gostaria%20de%20ver%20mais%20projetos!"
            className="inline-flex items-center px-8 py-4 bg-gradient-service hover:bg-service-hover text-primary-foreground rounded-lg font-semibold transition-all duration-300 shadow-card hover:shadow-hover"
          >
            VER MAIS PROJETOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;