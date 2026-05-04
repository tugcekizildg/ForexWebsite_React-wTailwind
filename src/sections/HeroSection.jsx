import { ArrowRight, Command } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className='relative container mx-auto px-4 pt-40 pb-20'>
      <div className='flex w-fit py-2 mb-4 px-4 cursor-pointer rounded-full glass'>
        <span className='text-sm font-medium text-xinc-300'>
          <Command className='w-4 h-4 inline-block mr-2' />
          High potential forex trading platform
        </span>
      </div>
      <div className='max-w-4xl relative z-10'>
        <h1 className='text-5xl md:text-7xl mb-4 tracking-tight text-left'>
          <span className='clash-display grad1'>Trade forex with </span>
          <br />
          <span className='text-zinc-50 font-medium clash-display'>
            confidence and security
          </span>
        </h1>
        <p className='text-lg text-zinc-400 mb-8 max-w-2xl text-left'>
          Experience the power of forex trading with our platform. Trade with
          confidence and security, and take your trading skills to the next
          level.
          <span className='text-zinc-200'>Start trading today with us.</span>
        </p>
        <div className='col sm:flex-row gap-4 items-start'>
          <button className='bg-indigo-500 text-base clash-display px-4 py-3 rounded-full cursor-pointer hover:-translate-y-1 hover:bg-indigo-500/50 duration-300 transition-all ease-in-out'>
            Start Trading Now
          </button>
          <button className='group text-zinc-50 gap-2 text-base clash-display glass px-4 py-3 rounded-full centered-row cursor-pointer hover:-translate-y-1 hover:bg-indigo-500/50 duration-300 transition-all ease-in-out'>
            View Markets{' '}
            <ArrowRight className='group-hover:translate-x-1 duration-300' />
          </button>
        </div>
      </div>
      <div className='relative mx-auto max-w-5xl mt-20'>
        <div className='glass rounded-xl overflow-hidden'>
          <img src='/chart2.png' alt='chart image' className='w-full h-auto' />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
