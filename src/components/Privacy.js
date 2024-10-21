import { useState } from 'react';

const PrivacyPolicy = () => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 sm:px-10 lg:px-24 text-gray-800">
      <div className="max-w-6xl mx-auto bg-white shadow-lg p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-red-600 mb-6">Privacy Policy</h1>
        <p className="text-lg mb-4">
          This privacy policy sets out how Rachit Financial Services uses and protects any information that you share when you use this website. We are committed to ensuring that your privacy is protected at all times. Should we ask you to provide certain information by which you can be identified, you can be assured that it will only be used in accordance with this privacy statement.
        </p>

        <p className="text-lg mb-4">
          Rachit Financial Services may change this policy from time to time by updating this page. This policy is effective from June 1, 2018.
        </p>

        <div className={`${readMore ? '' : 'h-56 overflow-hidden'} relative`}>
          <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">Information We Collect</h2>
          <p className="mb-4">
            We may collect the following information:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Name and contact details</li>
            <li>Personal information, including date of birth, Aadhaar Number, and PAN</li>
            <li>Demographic information such as gender and income</li>
            <li>Other information that can help us improve our services</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">What We Do with the Information</h2>
          <p className="mb-4">
            We use the information we gather for the following purposes:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>To conduct Know-Your-Customer registration as required by SEBI and/or other regulatory bodies</li>
            <li>To perform compliance checks and maintain internal records</li>
            <li>To use the information to improve our products and services</li>
            <li>To periodically send emails about your investments or other information you may find interesting</li>
            <li>For market research purposes via phone or email</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">Security</h2>
          <p className="mb-4">
            We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
          </p>

          {/* More Content */}
          {readMore && (
            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">Links to Other Websites</h2>
              <p className="mb-4">
                Our website may contain links to other websites of interest. However, once you use these links to leave our site, we do not have control over third-party websites. We cannot be responsible for the protection and privacy of any information you provide while visiting these sites.
              </p>

              <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">Controlling Your Personal Information</h2>
              <p className="mb-4">
                If you believe that any information we hold about you is incorrect or incomplete, please email us at rachit_portfolio@yahoo.com. We will promptly correct any information found to be incorrect.
              </p>

              <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-4">Security Certificates</h2>
              <p className="mb-4">
                Rachit Financial Services fully recognizes and understands the security implications of being a service provider with whom people trust their money. We adopt various technical and structural safeguards to ensure your data is stored safely and securely.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Your data is stored safely and securely – passwords are one-way encrypted for high security.</li>
                <li>All communication with you or service providers is encrypted using the highest standards.</li>
                <li>Your data is not shared with anyone unless you explicitly request us to fulfill a transaction request.</li>
              </ul>
              <p className="mb-4">
                All our communications are encrypted by 256-bit encryption, and our data is hosted with top-tier hosting service providers.
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
          If you have any questions about this privacy policy or your data, please contact us at rachit_portfolio@yahoo.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
