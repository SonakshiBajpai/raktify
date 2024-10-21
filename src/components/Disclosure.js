const Disclosure = () => {
    return (
      <div className="bg-gray-100 min-h-screen py-12 px-6 sm:px-10 lg:px-24 text-gray-800">
        <div className="max-w-6xl mx-auto bg-white shadow-lg p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-red-600 mb-6">Disclosure</h1>
  
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 border-b font-semibold text-left">Scheme Type</th>
                  <th className="py-3 px-4 border-b font-semibold text-left">Up-Front</th>
                  <th className="py-3 px-4 border-b font-semibold text-left">Trail - 1st Year</th>
                  <th className="py-3 px-4 border-b font-semibold text-left">Trail - 2nd Year onwards</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { scheme: "Liquid/Ultra Short Term Schemes", upFront: "0.00% - 0.05%", trail1: "0.20% - 0.65%", trail2: "0.20% - 0.50%" },
                  { scheme: "Short Term Income Funds", upFront: "0.00% - 0.50%", trail1: "0.00% - 0.50%", trail2: "0.20% - 0.50%" },
                  { scheme: "Income Funds", upFront: "0.25% - 1.00%", trail1: "0.00% - 0.65%", trail2: "0.25% - 0.75%" },
                  { scheme: "Gilt Funds", upFront: "0.00% - 0.50%", trail1: "0.00% - 0.60%", trail2: "0.25% - 0.50%" },
                  { scheme: "Hybrid Debt/Monthly Income Plans", upFront: "0.25% - 1.00%", trail1: "0.00% - 0.65%", trail2: "0.40% - 1.00%" },
                  { scheme: "Arbitrage Funds", upFront: "0.05% - 0.40%", trail1: "0.05% - 0.60%", trail2: "0.05% - 0.60%" },
                  { scheme: "Fund of Funds", upFront: "0.50% - 1.25%", trail1: "0.25% - 0.50%", trail2: "0.25% - 0.50%" },
                  { scheme: "ELSS", upFront: "0.50% - 3.00%", trail1: "0.00% - 0.75%", trail2: "0.00% - 0.75%" },
                  { scheme: "Index Funds", upFront: "Nil", trail1: "0.00% - 0.75%", trail2: "0.10% - 0.30%" },
                  { scheme: "Equity/Hybrid Equity/Balance Funds", upFront: "0.50% - 0.75%", trail1: "0.40% - 0.75%", trail2: "0.40% - 0.75%" },
                  { scheme: "Fixed Maturity Plans", upFront: "0.05% - 0.75%", trail1: "Nil", trail2: "Nil" },
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">{item.scheme}</td>
                    <td className="py-3 px-4 border-b">{item.upFront}</td>
                    <td className="py-3 px-4 border-b">{item.trail1}</td>
                    <td className="py-3 px-4 border-b">{item.trail2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          <p className="text-lg mt-8">
            Rachit Financial Services could also get reimbursements towards promotion and marketing-related activities conducted on behalf of AMCs. These reimbursements are event-based and may or may not be received from AMCs in a particular period. 
          </p>
          <p className="text-lg mt-4">
            Further, since such activities may be carried out at the AMC level, reimbursement amounts cannot be attributed to any specific scheme offered by such AMC.
          </p>
          <p className="text-lg mt-4">
            Details of scheme-level commissions on mutual funds are available with the Relationship Managers and would be provided on demand.
          </p>
          <p className="text-lg mt-4">
            This is a best-effort basis, and rates are updated as and when actual rates are received from AMCs.
          </p>
        </div>
      </div>
    );
  };
  
  export default Disclosure;
  