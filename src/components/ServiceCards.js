// components/Services.js
import React from 'react';

const ServiceCards = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-6">Our Services</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="group p-8 bg-white shadow-lg rounded-lg text-center transition-transform transform hover:scale-105 duration-500"
          >
            <div
              className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full group-hover:shadow-xl group-hover:shadow-red-500/50 transition duration-500`}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="h-10 w-10"
              />
            </div>
            <h3
              className="text-black group-hover:text-red-600 mb-4 transition-colors duration-500"
            >
              {service.title}
            </h3>
            <p className="text-gray-500 mb-6">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Data for each service
const serviceData = [
  {
    title: 'Inclusive Community',
    description: '',
    icon: 'SC1.png',
  },
  {
    title: 'Blood Mascot',
    description: '',
    icon: 'SC2.png',
  },
  {
    title: 'Live Blood Requests',
    description: '',
    icon: 'SC3.png',
  },
  {
    title: 'Badges and LeaderBoards',
    description: '',
    icon: 'SC4.png',
  },
  {
    title: 'Advanced Slot booking system',
    description: '',
    icon: 'SC5.png',
  },
  {
    title: 'Donor Health Tracker',
    description: '',
    icon: 'SC6.png',
  },
];

export default ServiceCards;
