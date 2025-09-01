import { Button } from '@/components/ui/button';
import leavesImage from '@/assets/leaves-bg.jpg';
import interiorPlantsImage from '@/assets/interior-plants.jpg';

const CraftingSection = () => {
  return (
    <section className="py-20 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg shadow-card">
                <img 
                  src={leavesImage} 
                  alt="Folhas verdes exuberantes - expertise em jardinagem"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-card">
                <img 
                  src={interiorPlantsImage} 
                  alt="Plantas ornamentais em ambiente interno - paisagismo residencial"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground uppercase tracking-wider text-sm font-medium">
                CRIANDO ESPAÇOS
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                CRIANDO OBRAS-PRIMAS<br />
                <span className="text-primary">VIVAS</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A LX Jardinagem especializa-se em criar paisagens únicas que combinam 
                funcionalidade, beleza natural e sustentabilidade para transformar 
                qualquer espaço externo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Desde projetos residenciais íntimos até paisagismo comercial, cada 
                jardim é cuidadosamente planejado e executado para refletir o estilo 
                de vida e preferências dos nossos clientes em Nova Palhoça e região.
              </p>
            </div>

            <Button 
              className="bg-gradient-accent hover:opacity-90 text-accent-foreground px-8 py-4 text-lg shadow-card"
            >
              VER PORTFÓLIO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftingSection;