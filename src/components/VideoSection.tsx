import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import videoThumb from '@/assets/garden-video-thumb.jpg';
const VideoSection = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Thumbnail */}
          <div className="relative group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg shadow-card">
              <img src={videoThumb} alt="Profissional de jardinagem da LX Jardinagem trabalhando em jardim" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                NOSSO COMPROMISSO
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                NOSSO COMPROMISSO COM A<br />
                <span className="text-primary">EXCELÊNCIA</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Na LX Jardinagem, nos dedicamos a criar e manter jardins excepcionais 
                que reflitam a beleza natural e atendam às necessidades específicas de cada cliente.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa equipe qualificada utiliza técnicas modernas e produtos de qualidade 
                para garantir resultados duradouros e satisfação total. Cada projeto é uma 
                oportunidade de transformar espaços externos em verdadeiros refúgios verdes.
              </p>
            </div>

            <Button className="bg-gradient-service hover:bg-service-hover text-primary-foreground px-8 py-4 text-lg shadow-card">
              VER NOSSO TRABALHO
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default VideoSection;