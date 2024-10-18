import React, { useState, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonialsData = [
  {
    quote: "Unlike most IFAs, Rachit Consultants is not sales motivated. It is a refreshing change to deal with someone not motivated by selling products which do not necessarily meet my needs. Their proactive approach to financial assessment has already put me in a much stronger position. ",
    name: "Sahil Saluja, Entrepreneur"
  },
  {
    quote: "Rachit Consultants has helped me tremendously in managing my finances efficiently. Their personalized approach is what sets them apart from others.",
    name: "Priya Mehra, Business Owner"
  },
  {
    quote: "The level of professionalism and integrity exhibited by Rachit Consultants is commendable. I highly recommend their services.",
    name: "Amit Singh, Software Engineer"
  },
  {
    quote: "A truly trustworthy and reliable financial consulting service. They’ve exceeded my expectations in every way.",
    name: "Neha Verma, Marketing Manager"
  },
  {
    quote: "Great team, highly professional and very friendly. They helped me secure my future in ways I hadn't imagined.",
    name: "Rahul Kumar, Doctor"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Automatically change testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger the fade-out animation
      setIsFading(true);

      // Wait for the fade-out to complete before changing the text
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false); // Trigger fade-in animation
      }, 500); // The duration of the fade-out

    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const { quote, name } = testimonialsData[currentIndex];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-blue-700 mb-8">
          Testimonials
        </h2>

        {/* Testimonial Card */}
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
          <FaQuoteLeft className="text-5xl text-red-600 mb-4" />

          {/* Quote and Name Container */}
          <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'} ease-in-out`}>

            {/* Quote */}
            <p className="text-gray-600 text-lg italic mb-6 h-24">
              "{quote}"
            </p>

            {/* Name */}
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
