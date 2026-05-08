import HeroSection from '../sections/HeroSection';
import LogoCarousel from '../sections/LogoCarousel';
import FeaturesSection from '../sections/FeaturesSection';
import PricingSection from '../sections/PricingSection';

const HomePage = () => {
  return (
    <div className='bg-black max-auto'>
      <HeroSection />
      <LogoCarousel />
      <FeaturesSection />
      <PricingSection />
    </div>
  );
};

export default HomePage;
