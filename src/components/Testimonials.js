import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonialsData = [
  {
    quote: "The Blood Mascot is so adorable, and the app's interactive design makes the process enjoyable. Raktify makes giving back feel rewarding!",
    name: "Sahil Saluja, Bangalore"
  },
  {
    quote: "As a regular donor, Raktify’s health tracker is a game-changer. It keeps me updated about my health and donation history. Highly recommend it!",
    name: "Priya Mehra,Mumbai"
  },
  {
    quote: "Thanks to Raktify, I found donors for my father within hours. The community here is amazing and super responsive!",
    name: "Amit Singh,Kanpur"
  },
  {
    quote: "The badges and leaderboards motivated me to donate more. Competing with friends while helping others? Brilliant idea!",
    name: "Karan Singh, Jaipur"
  },
  {
    quote: "The slot booking system is seamless! I scheduled my donation in minutes and even got a badge for my contribution. Love the gamified experience!",
    name: "Rahul Kumar,Delhi"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Automatically change testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { quote, name } = testimonialsData[currentIndex];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-8">Testimonials</h2>

        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
          <FaQuoteLeft className="text-5xl text-red-600 mb-4" />

          <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'} ease-in-out`}>
            <p className="text-gray-600 text-lg italic mb-4">
              "{quote}"
            </p>
            <h4 className="text-blue-700 font-bold text-xl">
              {name}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
