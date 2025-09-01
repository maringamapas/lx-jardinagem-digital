const MapSection = () => {
  return (
    <section className="py-20 bg-section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossa <span className="text-primary">Localização</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos localizados em Nova Palhoça, atendendo toda a região de Palhoça e Grande Florianópolis.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.3669656280836!2d-48.67089!3d-27.636667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273b8b0d8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sR.%20Herc%C3%ADlio%20Jorge%20da%20Silva%2C%2049%20-%20Nova%20Palho%C3%A7a%2C%20Palho%C3%A7a%20-%20SC%2C%2088131-576!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da LX Jardinagem - R. Hercílio Jorge da Silva, 49 - Nova Palhoça, Palhoça - SC"
            ></iframe>
          </div>
          
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Endereço</h3>
              <p className="text-muted-foreground text-sm">
                R. Hercílio Jorge da Silva, 49<br />
                Nova Palhoça, Palhoça - SC<br />
                CEP: 88131-576
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Telefone</h3>
              <p className="text-muted-foreground text-sm">
                <a href="tel:+5548988358929" className="hover:text-primary transition-colors">
                  (48) 98835-8929
                </a>
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Atendimento</h3>
              <p className="text-muted-foreground text-sm">
                Segunda a Sábado<br />
                08:00 - 18:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;