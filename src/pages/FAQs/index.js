import React from 'react';

const Index = () => {
  const scrollToAnswer = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-red-600 text-center mb-4">FAQs</h1>
      <ul className="list-decimal pl-5">
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('mutual-fund')}>
        What is Raktify?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('asset-management-company')}>
        How does Raktify work?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('types-of-mutual-fund-schemes')}>
        Is Raktify a government-backed initiative?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('open-ended-vs-closed-ended')}>
        Is Raktify free to use?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('prospectus')}>
        Who can use Raktify?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('nav')}>
        How can I register as a blood donor?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('dividends')}>
        How does Raktify match donors and recipients?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('investment-safety')}>
        Can I donate if I have a medical condition?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('mutual-fund-risks')}>
        How often can I donate blood?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('benefits')}>
        Does donating blood weaken my immune system? 

        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('assured-returns')}>
        How does Raktify ensure blood donation safety
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('making-money')}>
        Does Raktify track donation history?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('who-should-invest')}>
        What is the AI-based donor prioritization feature?
        </li>
        <li className="cursor-pointer text-blue-500" onClick={() => scrollToAnswer('small-investors')}>
        How does the SOS emergency feature work?
        </li>
      </ul>

      <div className="mt-10">
        <h2 id="mutual-fund" className="text-2xl font-bold text-red-600">Is Raktify free to use?</h2>
        <p> Raktify is an AI-driven blood donation platform that connects donors with recipients, optimizes blood supply chains, and enhances awareness through technology-driven solutions.  
        </p>

        <h2 id="asset-management-company" className="text-2xl font-bold text-red-600">Who can use Raktify?</h2>
        <p>Raktify uses AI-based donor matching, real-time tracking, and IoT-enabled storage to ensure efficient blood collection, storage, and delivery.  
        .</p>

        <h2 id="types-of-mutual-fund-schemes" className="text-2xl font-bold text-red-600">How can I register as a blood donor?</h2>
        <p>Raktify collaborates with government bodies and healthcare organizations but operates independently as a tech-enabled healthcare solution.  
        </p>

        <h2 id="open-ended-vs-closed-ended" className="text-2xl font-bold text-red-600">How does Raktify work?</h2>
        <p>Yes, Raktify is completely free for donors and recipients. The platform operates through public-private partnerships and healthcare collaborations.  </p>


        <h2 id="prospectus" className="text-2xl font-bold text-red-600">How does Raktify match donors and recipients</h2>
        <p>Anyone eligible to donate blood, recipients in need, hospitals, blood banks, and emergency response teams can use Raktify.</p>


        <h2 id="nav" className="text-2xl font-bold text-red-600">Can I donate if I have a medical condition?</h2>
        <p> Raktify’s AI-driven system matches donors based on location, blood type, and urgency, ensuring the fastest and safest donations.</p>

        <h2 id="dividends" className="text-2xl font-bold text-red-600">How often can I donate blood?</h2>
        <p>It depends on the condition. People with chronic illnesses, infections, or certain medications may not be eligible. The app provides a pre-screening checklist to help determine eligibility.</p>
        <h2 id="investment-safety" className="text-2xl font-bold text-red-600">Are investments in mutual fund units safe?</h2>
        <p>Whole blood donations can be made every 3 months for men and every 4 months for women. Platelet donations can be made every 15 days. </p> 

        <h2 id="mutual-fund-risks" className="text-2xl font-bold text-red-600">Does donating blood weaken my immune system</h2>
        <p>No, the body replenishes lost blood within a few weeks, and donation has no long-term negative effects on immunity.  </p>

        <h2 id="benefits" className="text-2xl font-bold text-red-600">How does Raktify ensure blood donation safety?</h2>
        <p>We integrate with certified blood banks and hospitals to ensure every donation meets safety guidelines and follows health regulations.  
        </p>
        

        <h2 id="assured-returns" className="text-2xl font-bold text-red-600">Does Raktify track donation history?</h2>
        <p>Yes, Raktify keeps a record of your past donations, upcoming eligibility, and impact reports to help you track your contributions.  
        </p>

        <h2 id="making-money" className="text-2xl font-bold text-red-600">What is the AI-based donor prioritization feature?</h2>
        <p>In emergencies, AI prioritizes active donors who are closest and most eligible, ensuring fast response times.  
        </p>

        <h2 id="who-should-invest" className="text-2xl font-bold text-red-600">How does the SOS emergency feature work?</h2>
        <p>In case of an urgent blood requirement, a one-tap SOS feature alerts nearby donors, hospitals, and emergency services.  
        .</p>

        
        <p>
Back to top


 Disclaimer - This contents above should not be considered as substitute for specialized professional advice and expert guidance may be sort before acting upon </p>
      </div>
    </div>
  );
};

export default Index;
