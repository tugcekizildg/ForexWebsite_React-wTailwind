import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className='container mx-auto px-4 py-20 relative bg-black'>
      <div
        className='absolute inset-0 opacity-30 rounded-lg'
        style={{
          backgroundImage: 'url("/pattern.png")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className='bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10 shadow-2xl shadow-indigo-500/30'>
        <h2 className='text-3xl md:text-4xl clash-display mb-4'>
          Start trading now
        </h2>
        <p className='text-lg mb-8 max-w-2xl mx-auto text-zinc-300/80'>
          Join thousands of happy traders and start trading with{' '}
          <span className='grad1 clash-display'>Forexxi</span>
        </p>
        <button className='group cursor-pointer centered-row mx-auto text-lg bg-gradient-to-r from-indigo-400 to-indigo-600 hover:-translate-y-1 duration-300 transition-all ease-in-out px-6 py-3 rounded-full text-zinc-50'>
          Get Started{' '}
          <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 duration-300' />
          {''}
        </button>
      </div>
    </section>
  );
};

export default CTASection;
