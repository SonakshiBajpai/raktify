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
              className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full group-hover:shadow-xl group-hover:shadow-${service.color}-500/50 transition duration-500`}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="h-10 w-10"
              />
            </div>
            <h3
              className={`text-xl font-bold text-${service.color}-600 mb-4 transition-colors duration-500`}
            >
              {service.title}
            </h3>
            <p className="text-gray-500 mb-6">{service.description}</p>
            <a
              href="#"
              className={`inline-block px-6 py-2 rounded-md text-white bg-${service.color}-600 hover:bg-${service.color}-700 transition duration-300`}
            >
              Know More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

// Data for each service
const serviceData = [
  {
    title: 'Mutual Funds',
    description: 'A mutual fund is simply a financial intermediary that allows a group of...',
    icon: 'http://www.rachitconsultants.com/images/privateWealthManagement.png',
    color: 'blue',
  },
  {
    title: 'Financial Planning',
    description: 'We have a proven and unique approach in providing our services in...',
    icon: 'http://www.rachitconsultants.com/images/familyFinancialPlanning.png',
    color: 'red',
  },
  {
    title: 'Insurance',
    description: 'Insurance is one of the most important financial topics in today’s...',
    icon: 'http://www.rachitconsultants.com/images/familyProtectionPlanning.png',
    color: 'yellow',
  },
  {
    title: 'SIP',
    description: 'This is a simple strategy for accumulating wealth over a period of time...',
    icon: 'http://www.rachitconsultants.com/images/realestate.png',
    color: 'orange',
  },
  {
    title: 'Financial Calculators',
    description: 'Goal Calculator, Education Calculator, Retirement Calculator...',
    icon: 'http://www.rachitconsultants.com/images/loanMortgage.png',
    color: 'green',
  },
  {
    title: 'Tax Planning & Advisory',
    description: 'We have a team of tax professionals providing advice to a diverse...',
    icon: 'http://www.rachitconsultants.com/images/taxPlanningAdvisory.png',
    color: 'purple',
  },
];

export default ServiceCards;
