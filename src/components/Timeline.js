// components/Timeline.js
import React, { useState, useEffect } from 'react';

const Timeline = () => {
  const steps = [
    {
      step: 'Step One',
      bubble: 'Investment Research',
      text: 'In order to deliver top-notch services, we carry out extensive investment research on fund houses and their schemes. We also closely examine intangibles such as investment philosophy and management quality of the asset management companies.',
    },
    {
      step: 'Step Two',
      bubble: 'Risk Profiling',
      text: 'At Rachit Financial Services, we regard risk profiling as an enigma, and one of the cornerstones of our profession. We identify each client’s unique financial personality, life stage, and risk horizon to make informed investment choices.',
    },
    {
      step: 'Step Three',
      bubble: 'Fund Analysis',
      text: 'Our analysts use several tools to judge the performance of mutual fund schemes. Each scheme’s risk-return profile, sector weights, diversification strategy, and consistency in performance is monitored closely before making decisions.',
    },
    {
      step: 'Step Four',
      bubble: 'Fund Allocation',
      text: 'Once we understand your financial needs, we allocate funds into various mutual fund schemes tailored to your investment goals, regularly monitoring and adjusting the portfolio to reflect market conditions and your life changes.',
    },
    {
      step: 'Step Five',
      bubble: 'Portfolio Construction',
      text: 'We design portfolios aligned with your financial personality and objectives, treating each portfolio with utmost care and ensuring that it is customized to meet your needs, beyond just data and statistics.',
    },
    {
      step: 'Step Six',
      bubble: 'Portfolio Review',
      text: 'We review your portfolio regularly to ensure it is in line with your evolving financial needs. We stay in touch to make adjustments as your life situation or the financial market changes.',
    },
    {
      step: 'Step Seven',
      bubble: 'Rebalancing Portfolio',
      text: 'To maximize your returns while minimizing risk, we rebalance your portfolio whenever market conditions change or when your financial goals evolve, ensuring that your investment journey stays on track.',
    },
  ];

  // Animation state for visibility on scroll
  const [visibleStep, setVisibleStep] = useState(0);

  // Scroll event listener to trigger animations
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
    <div className="flex flex-col items-center py-12 px-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-green-600 mb-12">
        Our Modus Operandi
      </h1>
      <div className="relative w-full max-w-4xl">
        {steps.map((step, index) => (
          <div
            className={`flex items-center mb-10 w-full transition-all duration-500 ${
              visibleStep >= index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            key={index}
          >
            {/* Bubble */}
            <div className={`flex-shrink-0 w-14 h-14 flex justify-center items-center rounded-full ${
              index % 2 === 0 ? 'bg-blue-500' : 'bg-green-500'
            } text-white text-xl font-semibold shadow-lg`}>
              {index + 1}
            </div>

            {/* Line between steps */}
            {index < steps.length - 1 && (
              <div className="absolute left-7 top-16 w-1 h-20 bg-gray-300"></div>
            )}

            {/* Step content */}
            <div className="ml-8">
              <h2 className="text-2xl font-bold text-blue-600">{step.bubble}</h2>
              <p className="mt-2 text-gray-700">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
