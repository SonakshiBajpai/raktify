import React, { useState, useEffect } from 'react';

const Timeline = () => {
  const steps = [
    {
      bubble: 'Vision',
      text: 'Ensuring universal access to safe blood through AI-driven efficiency and engagement.',
    },
    {
      bubble: 'Mission',
      text: 'Empowering donors, optimizing logistics, and integrating technology for a seamless donation process',
    },
    {
      bubble: 'Core Values',
      text: ' Innovation, Inclusivity, Transparency, and Ethical Engagement.',
    },
    {
      bubble: 'Tech-Driven Approach',
      text: 'Leveraging AI, IoT, and real-time tracking to reduce wastage and enhance supply chain management.',
    },
    {
      bubble: 'Public-Private Collaboration',
      text: 'Partnering with healthcare institutions, government bodies, and corporate sectors for large-scale adoption',
    },
    {
      bubble: 'User-Centric Experience',
      text: 'Creating an engaging and rewarding donor journey through gamification, incentives, and awareness programs.',
    },
    {
      bubble: 'Future Roadmap',
      text: 'Expanding into organ and plasma donation, policy integration, and global AI-powered healthcare logistics.',
    },
  ];

  const [visibleStep, setVisibleStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const stepTrigger = Math.floor(scrollPosition / 200);
      setVisibleStep(stepTrigger);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center py-8 md:py-16 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-8 md:mb-16">
        Our Modus Operandi
      </h1>
      <div className="relative w-full max-w-4xl">
        {/* Mobile-only styling */}
        <div className="block md:hidden">
          {steps.map((step, index) => (
            <div
              className={`flex flex-col items-center w-full mb-16 transition-all duration-500 ${
                visibleStep >= index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              key={index}
            >
              <div className="relative w-16 h-16 bg-blue-500 text-white text-2xl font-semibold flex items-center justify-center rounded-full mb-4">
                {index + 1}
              </div>
              <h2 className="text-2xl font-bold text-blue-600 text-center">{step.bubble}</h2>
              <p className="mt-2 text-base text-gray-700 text-center mx-10">{step.text}</p>
            </div>
          ))}
        </div>

        {/* Desktop-only styling */}
        <div className="hidden md:block">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300"></div>
          {steps.map((step, index) => (
            <div
              className={`flex items-center w-full mb-24 transition-all duration-500 ${
                visibleStep >= index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              key={index}
            >
              {index % 2 === 0 ? (
                <div className="flex justify-between w-full">
                  <div className="w-1/2 pr-8 flex flex-col items-end">
                    <h2 className="text-3xl font-bold text-blue-600">{step.bubble}</h2>
                    <p className="mt-4 text-lg text-gray-700 text-right">{step.text}</p>
                  </div>
                  <div className="relative w-16 h-16 bg-blue-500 text-white text-2xl font-semibold flex items-center justify-center rounded-full shadow-lg">
                    {index + 1}
                    <div className="absolute right-full w-8 h-px bg-gray-300"></div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between w-full">
                  <div className="relative w-16 h-16 bg-red-500 text-white text-2xl font-semibold flex items-center justify-center rounded-full shadow-lg">
                    {index + 1}
                    <div className="absolute left-full w-8 h-px bg-gray-300"></div>
                  </div>
                  <div className="w-1/2 pl-8 flex flex-col items-start">
                    <h2 className="text-3xl font-bold text-blue-600">{step.bubble}</h2>
                    <p className="mt-4 text-lg text-gray-700 text-left">{step.text}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
