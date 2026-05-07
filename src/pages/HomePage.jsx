import HeroSection from '../sections/HeroSection';
import LogoCarousel from '../sections/LogoCarousel';
import FeaturesSection from '../sections/FeaturesSection';

const HomePage = () => {
  return (
    <div className='bg-black max-auto'>
      <HeroSection />
      <LogoCarousel />
      <FeaturesSection />
    </div>
  );
};

export default HomePage;
