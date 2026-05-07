/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { features } from '../assets/data';

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  //Provide autoplay
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
      }, 5000);
      return () => clearInterval(intervalRef.current);
    }
  }, [isPaused]);

  //Pause autoplay on hover
  const handleMouseEnter = (index) => {
    setIsPaused(true);
    setActiveIndex(index);
  };
  const handleMouseLeave = () => setIsPaused(false);
  return (
    <section className='container mx-auto px-4 py-24'>
      <div className='max-w-2xl mb-20'>
        <h2 className='text-5xl md:text-6xl mb-6 tracking-tight clash-display text-left'>
          Advanced Trading
          <br />
          <span className='font-medium clash-display grad1'>
            Features and Tools
          </span>
        </h2>
        <p className='text-lg text-zinc-300/80 text-left'>
          Experience the power of forex trading with our platform and take your
          trading skills to the next level.
        </p>
      </div>
      <div className='w-full'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-12'>
          <div className='md:col-span-5 space-y-3'>
            <div className='col w-full h-auto p-0 space-y-3'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave}
                  onClick={() => setActiveIndex(index)}
                  className={`centered-row gap-4 cursor-pointer hover:bg-indigo-500/10 p-2 transition-all duration-300 ease-in-out border rounded-xl ${activeIndex === index ? 'border-indigo-400/40 bg-indigo-500/10' : 'border-transparent'}`}>
                  <div className=''>{feature.icon}</div>
                  <div className='col gap-1'>
                    <h3 className='text-base clash-display text-indigo-300'>
                      {feature.title}
                    </h3>
                    <p className='text-sm text-zinc-300/80'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='md:col-span-7 min-h-[320px] centered-row'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={features[activeIndex].title}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className='glass rounded-xl overflow-hidden w-full relative'>
                <div className='bg-gradient-to-br from-indigo-500 to-transparent'>
                  <img
                    src={features[activeIndex].image}
                    alt='feature image'
                    className='w-full h-full object-contain relative z-10'
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
