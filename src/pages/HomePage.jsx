import HeroSection from '../sections/HeroSection';
import LogoCarousel from '../sections/LogoCarousel';
import FeaturesSection from '../sections/FeaturesSection';
import PricingSection from '../sections/PricingSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import CTASection from '../sections/CTASection';

const HomePage = () => {
  return (
    <div className='bg-black max-auto'>
      <HeroSection />
      <LogoCarousel />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
