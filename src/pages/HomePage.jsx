import HeroSection from '../sections/HeroSection';
import LogoCarousel from '../sections/LogoCarousel';
import FeaturesSection from '../sections/FeaturesSection';
import PricingSection from '../sections/PricingSection';
import TestimonialsSection from '../sections/TestimonialsSection';

const HomePage = () => {
  return (
    <div className='bg-black max-auto'>
      <HeroSection />
      <LogoCarousel />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
