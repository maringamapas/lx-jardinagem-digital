import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import VideoSection from '@/components/VideoSection';
import CraftingSection from '@/components/CraftingSection';
import Testimonial from '@/components/Testimonial';
import Portfolio from '@/components/Portfolio';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  console.log('Index component is rendering');
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <VideoSection />
      <CraftingSection />
      <Testimonial />
      <Portfolio />
      <MapSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
