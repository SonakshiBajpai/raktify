import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 body-font mt-0">
      <div className="container px-5 py-8 mx-auto flex items-center justify-between">
        <div className="flex flex-col text-left">
          <p className="text-sm">
            <span className="text-red-500 font-semibold">Disclaimer:</span> Raktify is a platform to connect donors and recipients for blood donation. We do not guarantee the availability of donors or the quality of donations. Please follow all necessary health and safety guidelines when donating or receiving blood.
          </p>
          <p className="text-xs mt-4">
            Registered Blood Donation Platform | Established: 14 February 2024
          </p>
          <p className="text-xs mt-2">
            Grievance Officer: <span className="text-red-500">Raktify Support</span>, Phone: <a href="tel:+919876543210" className="text-blue-400">+91 98765 43210</a>, Email: <a href="mailto:support@raktify.com" className="text-blue-400">support@raktify.com</a>
          </p>
        </div>

        <div className="flex flex-col text-sm">
          <p className="text-xs mb-2">
            <a href="about" className="hover:text-red-500">About Us</a> | <a href="FAQs" className="hover:text-red-500">FAQ</a> | <a href="privacy" className="hover:text-red-500">Privacy Policy</a> | <a href="terms" className="hover:text-red-500">Terms & Conditions</a>
          </p>
          <p className="text-xs">
            <span className="text-blue-400">+91 98765 43210</span> | <a href="mailto:support@raktify.com" className="text-blue-400 hover:underline">support@raktify.com</a>
          </p>
        </div>
      </div>

      <div className="bg-gray-700 py-4">
        <div className="container mx-auto flex justify-center">
          <p className="text-sm text-gray-400">
            &copy; 2024 Raktify. Saving lives, one drop at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
