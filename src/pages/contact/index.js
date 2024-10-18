import React from 'react'

export default function index() {
  return (
    <div className="max-w-screen-lg mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-semibold text-center my-8">Contact Us</h1>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Address</h2>
          <p className="text-gray-600">
            Office No. 206-207, KAN Chambers,<br />
            14/113 Civil Lines,<br />
            KANPUR - 208 001
          </p>
          <p className="mt-4">
            <strong>Mobile:</strong> 0512-2304044
          </p>
          <p>
            <strong>Email:</strong> 
            <a href="mailto:rachit_portfolio@yahoo.com" className="text-blue-500">
              rachit_portfolio@yahoo.com
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Ask a Query</h2>
          <form className="space-y-4">
            <input 
              className="w-full border rounded-md p-3" 
              type="text" 
              placeholder="Your Name" 
              required 
            />
            <input 
              className="w-full border rounded-md p-3" 
              type="email" 
              placeholder="Your Email" 
              required 
            />
            <input 
              className="w-full border rounded-md p-3" 
              type="tel" 
              placeholder="Your Number" 
              required 
            />
            <textarea 
              className="w-full border rounded-md p-3" 
              placeholder="Your Query" 
              required 
            />
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-md transition-colors hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
