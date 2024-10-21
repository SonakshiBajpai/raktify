import { useState } from 'react';

const TermsConditions = () => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 sm:px-10 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto bg-white shadow-lg p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-red-600 mb-6">Terms & Conditions</h1>
        <p className="text-lg mb-4">
          Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our ‘Privacy Policy’, govern Rachit Financial Services relationship with you.
        </p>
        <p className="text-lg mb-4">
          The term “Rachit Financial Services” (or “us”/“we”/”our”) refers to the owner of the website. The term “you” refers to the user or viewer of our website.
        </p>

        <div className={`${readMore ? '' : 'h-56 overflow-hidden'} relative`}>
          <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">The use of this website is subject to the following terms:</h2>

          <p className="mb-4">
            You understand and accept that Rachit Financial Services maintains the website – rachitfinancialservices.com, or related websites (referred to as “site” or “website” on this page) to provide visitors with information about us, our services, and products, and to enable visitors to avail of our services.
          </p>
          <p className="mb-4">
            You also accept that visitors to the site are required to read the below terms, and the use of the site constitutes your acceptance and agreement to be bound by such terms. You will also be bound by changes therein to the terms from time to time as communicated and made available on the website.
          </p>

          <p className="mb-4">
            You are aware and accept that all information, content, materials, products (including, but not limited to text, content, photographs, graphics, video, and audio content) on the website is protected by copyright in favour of Rachit Financial Services under the applicable copyright laws and the general intellectual property law.
          </p>

          <p className="mb-4">
            You understand and accept that all information submitted by you on the site shall be deemed the property of Rachit Financial Services, and we shall be free to use any ideas, concepts, know-how, or techniques provided by you in any manner whatsoever.
          </p>

          <p className="mb-4">
            On initiating contact through the site, you agree to being contacted by Rachit Financial Services, or any other entities with whom Rachit Financial Services has entered into an arrangement, via email, phone call, SMS, or any other means.
          </p>

          {/* More Content */}
          {readMore && (
            <div>
              <p className="mb-4">
                You agree that you shall not copy, reproduce, sell, redistribute, publish, enter into a database, display, perform, modify, transmit, license, create derivatives from, transfer, or in any way exploit, any part of any information, content, materials, services available on or through the site, except that which you may download for your own personal, non-commercial use.
              </p>
              <p className="mb-4">
                You agree that you will not use Rachit Financial Services’ website for any purpose that is unlawful, or prohibited by these terms. You also agree you will not use the site in any manner that could damage, disable or impair the website, or interfere with any other party’s use, or enjoyment of the website.
              </p>
              <p className="mb-4">
                You acknowledge that the software and hardware underlying the site, as well as other Internet-related software required for accessing the website, are the legal property of the respective vendors. The permission given by Rachit Financial Services to access the website will not convey any proprietary or ownership rights in the above software/hardware.
              </p>
              <p className="mb-4">
                You understand and accept that not all products and services offered on this website are available in all geographic areas, and you may not be eligible for all the products or services offered by Rachit Financial Services on the site.
              </p>
              <p className="mb-4">
                You understand and accept that Rachit Financial Services is not responsible for the availability of content, or other services on third-party sites linked from the website.
              </p>
              <p className="mb-4">
                Rachit Financial Services shall not be liable if any transaction does not fructify, or may not be completed, or for any failure on our part to perform any of our obligations due to a Force Majeure event. 
              </p>
              <h2 className="text-xl font-semibold text-blue-600 mt-6 mb-4">Force Majeure Event</h2>
              <p className="mb-4">
                A Force Majeure Event refers to events like unavailability of communication systems, sabotage, fire, flood, explosion, acts of God, civil commotions, strikes, riots, war, government actions, etc., beyond the reasonable control of Rachit Financial Services.
              </p>
            </div>
          )}

          <div
            className={`absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent ${
              readMore ? 'hidden' : 'block'
            }`}
          />
        </div>

        <button
          onClick={toggleReadMore}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
        >
          {readMore ? 'Show Less' : 'Read More'}
        </button>

        <p className="mt-10 text-gray-600">
          By using Rachit Financial Services’ website, you accept the changed terms and conditions, and agree that disputes shall be governed by the courts in Chennai, India.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
