import { useRef } from 'react';
import { testimonials } from '../assets/data';

const TestimonialsSection = () => {
  const marqueeRef = useRef(null);

  const handleMouseEnter = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.setProperty('--marquee-play-state', 'paused');
    }
  };
  const handleMouseLeave = () => {
    if (marqueeRef.current) {
      marqueeRef.current.style.setProperty('--marquee-play-state', 'running');
    }
  };
  return (
    <section className='py-20 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-5xl md:text-6xl font-normal mb-4 clash-display'>
            Trusted by <span className='grad1 clash-display'>1000+ people</span>
          </h2>

          <p className='text-zinc-400/90 text-lg'>
            Join thousands of happy traders and start trading with Forexxi
          </p>
        </div>

        {/* Marquee */}
        <div className='relative flex flex-col antialiased'>
          <div ref={marqueeRef} className='relative flex overflow-hidden py-4'>
            {/* Moving Part */}
            <div
              className='animate-marquee flex min-w-full shrink-0 items-stretch gap-8'
              style={{
                animationPlayState: 'var(--marquee-play-state, running)',
              }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className='w-[400px] shrink-0 cursor-pointer rounded-3xl border-2 border-white/5 bg-black/40 p-8 backdrop-blur-xl transition-all duration-300 ease-in-out hover:border-white/10'>
                  {/* Top */}
                  <div className='centered-row gap-4 mb-6'>
                    <div className='w-12 h-12 overflow-clip rounded-full text-xl center-item text-center bg-indigo-500'>
                      {!testimonial.image ? (
                        testimonial.name[0]
                      ) : (
                        <img src={testimonial.image} alt={testimonial.name} />
                      )}
                    </div>

                    <div>
                      <h4 className='text-lg font-medium clash-display text-white/90'>
                        {testimonial.name}
                      </h4>

                      <p className='text-sm text-white/60'>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className='text-white/70 text-sm leading-relaxed'>
                    {testimonial.description}
                  </p>
                </div>
              ))}
            </div>
            {/* Moving Part */}
            <div
              className='animate-marquee flex min-w-full shrink-0 items-stretch gap-8'
              style={{
                animationPlayState: 'var(--marquee-play-state, running)',
              }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className='w-[400px] shrink-0 cursor-pointer rounded-3xl border-2 border-white/5 bg-black/40 p-8 backdrop-blur-xl transition-all duration-300 ease-in-out hover:border-white/10'>
                  {/* Top */}
                  <div className='centered-row gap-4 mb-6'>
                    <div className='w-12 h-12 overflow-clip rounded-full text-xl center-item text-center bg-indigo-500'>
                      {!testimonial.image ? (
                        testimonial.name[0]
                      ) : (
                        <img src={testimonial.image} alt={testimonial.name} />
                      )}
                    </div>

                    <div>
                      <h4 className='text-lg font-medium clash-display text-white/90'>
                        {testimonial.name}
                      </h4>

                      <p className='text-sm text-white/60'>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className='text-white/70 text-sm leading-relaxed'>
                    {testimonial.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='absolute h-full w-20 md:w-50 bg-gradient-to-r from-black to-transparent -left-1'></div>
          <div className='absolute h-full w-20 md:w-50 bg-gradient-to-l from-black to-transparent -right-1'></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
