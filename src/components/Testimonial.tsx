import { Quote, Star } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="py-20 bg-hero-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="space-y-8">
            <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed">
              "Experiência incomparável de luxo e serviço personalizado na LX Jardinagem, 
              onde cada projeto é uma jornada em sofisticação, conforto e 
              memórias inesquecíveis."
            </blockquote>

            {/* Star Rating */}
            <div className="flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-primary fill-current" />
              ))}
            </div>

            {/* Client Info */}
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-service flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">MC</span>
              </div>
              <div>
                <p className="font-semibold text-foreground text-lg">Maria Clara</p>
                <p className="text-muted-foreground">Cliente Satisfeita</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-accent opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-service opacity-10 rounded-full blur-lg"></div>
    </section>
  );
};

export default Testimonial;