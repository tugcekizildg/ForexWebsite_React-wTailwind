import { pricingData } from '../assets/data';
import PricingTier from '../components/PricingTier';

const PricingSection = () => {
  return (
    <section className='container mx-auto px-4 py-24'>
      <div className='max-w-2xl mx-auto text-center mb-12'>
        <h2 className='text-5-xl md:text-6xl mb-6 clash-display'>
          Choose Your <span className='grad1 clash-display'>Trading Plan</span>
        </h2>

        <p className='text-lg text-zinc-300/80 '>
          We offer a wide range of trading plans to suit your trading needs.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6-xl mx-auto'>
        {pricingData.map(
          ({ _id, isPopular, name, price, features, description }) => (
            <PricingTier
              key={_id}
              name={name}
              price={price}
              isPopular={isPopular}
              features={features}
              description={description}
            />
          ),
        )}
      </div>
    </section>
  );
};

export default PricingSection;
