import { useState } from 'react';

const InvestmentPage = () => {
  const [activeTab, setActiveTab] = useState('financial-assessment');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 p-6 bg-white shadow-lg">
        <nav className="space-y-4">
          <button
            onClick={() => handleTabChange('financial-assessment')}
            className={`block text-left w-full px-4 py-2 border-l-4 ${activeTab === 'financial-assessment' ? 'border-red-500 bg-red-100 text-red-600 font-semibold' : 'border-gray-200 hover:bg-gray-100'} transition-colors duration-300`}
          >
            Rakt Rozgar Yojna
          </button>
          <button
            onClick={() => handleTabChange('mutual-funds')}
            className={`block text-left w-full px-4 py-2 border-l-4 ${activeTab === 'mutual-funds' ? 'border-red-500 bg-red-100 text-red-600 font-semibold' : 'border-gray-200 hover:bg-gray-100'} transition-colors duration-300`}
          >
            Rakt Yatri Yojna
          </button>
          <button
            onClick={() => handleTabChange('about-sip')}
            className={`block text-left w-full px-4 py-2 border-l-4 ${activeTab === 'about-sip' ? 'border-red-500 bg-red-100 text-red-600 font-semibold' : 'border-gray-200 hover:bg-gray-100'} transition-colors duration-300`}
          >
            Challenges
          </button>
          
        </nav>
      </div>

      {/* Content */}
      <div className="w-full md:w-3/4 p-10">
      {activeTab === 'financial-assessment' && (
  <div className="space-y-6">
    <h1 className="text-4xl font-bold text-red-600 mb-6">
      JEEVAN (Rakt Rozgar Yojana) – A Lifeline Through Blood & Employment
    </h1>
    <p><strong>Introduction:</strong></p>
    <p>
      JEEVAN (Rakt Rozgar Yojana) is a <em>blood donation-linked employment initiative</em> designed to provide <em>job opportunities for donors</em> while ensuring a <em>continuous and reliable blood supply</em>. This incentive-based scheme connects <strong>government and corporate employment programs</strong> with verified blood donors, promoting <em>social responsibility, financial stability, and healthcare security</em>.
    </p>
    <h2 className="text-lg font-semibold">Feasibility:</h2>
    <ul>
      <li><strong>Public-Private Partnerships:</strong> Collaboration with MSMEs, Skill India, and PM Rozgar Yojana to facilitate employment.</li>
      <li><strong>Digital Integration:</strong> Employment tracking & verification via Raktify App ensures efficient and fraud-free execution.</li>
      <li><strong>Health-Centric Approach:</strong> Only healthy individuals can donate at medically safe intervals (56 days for whole blood, 112 days for RBCs).</li>
    </ul>
    <h2 className="text-lg font-semibold">Impact:</h2>
    <ul>
      <li>Reduces unemployment by offering priority hiring in government & CSR jobs.</li>
      <li>Encourages voluntary donation, ensuring hospitals always have sufficient lifesaving blood supply.</li>
      <li>Enhances skill development, linking donors with free courses & upskilling programs.</li>
      <li>Boosts healthcare security, offering free medical checkups, insurance, and donor health benefits.</li>
    </ul>
    <h2 className="text-lg font-semibold">Implementation Stages & Donor Incentives:</h2>
    <h3 className="text-md font-semibold">🩸 Donor Levels & Benefits (JEEVAN Scheme)</h3>
    <table className="table-auto border-collapse border border-gray-400 w-full">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Donor Level</th>
          <th className="border border-gray-300 px-4 py-2">Benefits</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">First-Time Donors (Level 1)</td>
          <td className="border border-gray-300 px-4 py-2">
            ✅ Digital Blood Donor Work Pass for employment preference in government & CSR jobs.<br />
            ✅ Access to Online Skill Development (Skill India, NSDC, Udemy, etc.).<br />
            ✅ Free health check-up, basic insurance coverage.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Second-Time Donors (Level 2)</td>
          <td className="border border-gray-300 px-4 py-2">
            ✅ Priority in Semi-Skilled & Skilled Job Portals (electricians, technicians, retail staff, etc.).<br />
            ✅ Scholarship Benefits for Technical Training.<br />
            ✅ Discounts on Transport, Healthcare & Essentials.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Third-Time Donors & Regular Contributors (Level 3)</td>
          <td className="border border-gray-300 px-4 py-2">
            ✅ Fast-Track Job Placement in Public & Private Sectors.<br />
            ✅ Eligibility for Small Business Grants & Loans under MSME schemes.<br />
            ✅ Higher Insurance & Pension Benefits.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)}


{activeTab === 'mutual-funds' && (
  <div className="space-y-6">
    <h1 className="text-4xl font-bold text-red-600 mb-6">Rakt-Yatri Yojana – Incentive-Based Blood Donation for Vehicle Owners</h1>

    <h2 className="text-2xl font-semibold">🔹 Introduction</h2>
    <p>
      Rakt-Yatri Yojana is an <em>innovative voluntary blood donation scheme</em> designed for <em>vehicle owners</em>, encouraging <strong>road safety awareness, community welfare, and regular blood donation</strong>. The initiative provides <strong>incentives for healthy drivers</strong> who donate blood at regular intervals while ensuring a <em>steady blood supply</em> for medical emergencies.
    </p>

    <hr className="border-gray-300 my-4" />

    <h2 className="text-2xl font-semibold">📌 Feasibility & Impact</h2>

    <h3 className="text-lg font-semibold">✔ Feasibility:</h3>
    <ul className="list-disc pl-6">
      <li><strong>Not a Mandatory Requirement</strong> – Completely <em>voluntary with attractive incentives</em>.</li>
      <li><strong>Integrated with Raktify App</strong> for <em>real-time tracking & reward system</em>.</li>
      <li><strong>Collaboration with Transport Authorities</strong> – Link with <em>RTOs, Toll Plazas & Ride-Sharing Companies</em> for outreach.</li>
    </ul>

    <h3 className="text-lg font-semibold">📊 Impact:</h3>
    <ul className="list-disc pl-6">
      <li>✔ <em>Encourages safe driving practices</em> by ensuring drivers are medically fit.</li>
      <li>✔ <em>Provides transport discounts, insurance & fuel benefits</em> for donors.</li>
      <li>✔ <em>Promotes community responsibility</em>, strengthening the medical emergency network.</li>
      <li>✔ <em>Expands the national blood bank reserves</em>, making life-saving transfusions more accessible.</li>
    </ul>

    <hr className="border-gray-300 my-4" />

    <h2 className="text-2xl font-semibold">🔹 Implementation Stages & Donor Incentives</h2>

    <h3 className="text-lg font-semibold">🩸 Donor Levels & Benefits (Rakt-Yatri Scheme)</h3>
    <table className="table-auto w-full border-collapse border border-gray-300 text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2">Donor Level</th>
          <th className="border border-gray-300 px-4 py-2">Benefits</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">First-Time Donors (Level 1)</td>
          <td className="border border-gray-300 px-4 py-2">
            ✅ Digital Certificate for verified blood donation. <br />
            ✅ Toll Fee Discounts & Fuel Cashback (limited usage). <br />
            ✅ Medical Checkup & Road Safety Awareness Session.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Second-Time Donors (Level 2)</td>
          <td className="border border-gray-300 px-4 py-2">
            ✅ 50% Discount on Driving License Renewal Fees. <br />
            ✅ Priority in Public Transport Pass Schemes. <br />
            ✅ Insurance Coverage & Vehicle Maintenance Benefits.
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Third-Time Donors & Regular Contributors (Level 3)</td>
          <td className="border border-gray-300 px-4 py-2">
            ✅ Tax Benefits on Vehicle Purchase & Loan EMI Reductions. <br />
            ✅ Special Fast Lane & Parking Benefits in Government Spaces. <br />
            ✅ Recognition & Rewards for Social Impact.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
)}


{activeTab === 'about-sip' && (
  <div className="space-y-6">
    <h1 className="text-4xl font-bold text-red-600 mb-6">Challenges & Solutions</h1>
   
    <h2 className="text-lg font-semibold">🔴 Challenges</h2>
    <ul className="list-disc list-inside">
      <li><strong>Health Risks for Donors:</strong> Repeated donation may lead to fatigue, requiring proper health monitoring.</li>
      <li><strong>Fraud & Fake Donors:</strong> Individuals may attempt to donate under false pretenses to gain benefits.</li>
      <li><strong>Employment Mismatch:</strong> Not all donors may have the required skills for available jobs.</li>
      <li><strong>Logistical & Infrastructure Issues:</strong> Efficient coordination is needed for tracking donations and job allocation.</li>
      <li><strong>Public Acceptance:</strong> Some may see this as commercialization of blood donation rather than a social initiative.</li>
    </ul>
    
    <h2 className="text-lg font-semibold">🟢 Solutions</h2>
    <ul className="list-disc list-inside">
      <li>✔ <strong>Medical Screening & Health Checks:</strong> Regular health assessments before every donation ensure donor fitness.</li>
      <li>✔ <strong>AI-Based Verification on Raktify App:</strong> Advanced technology prevents fraud and ensures authenticity of donors.</li>
      <li>✔ <strong>Upskilling & Training Programs:</strong> Provide donors with the necessary skills to match available jobs effectively.</li>
      <li>✔ <strong>Smart Database & Employment Matching System:</strong> Streamlines donation tracking and job allocation.</li>
      <li>✔ <strong>Awareness Campaigns:</strong> Promote the ethical and social value of the initiative to gain public support.</li>
    </ul>
  </div>
)}



    
         
      </div>
    </div>
  );
};

export default InvestmentPage;
