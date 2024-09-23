import React from 'react';

export function Footer(){
  return (
    <footer className="bg-[#910707] text-white py-0 ">
      <div className="container mx-auto flex justify-between items-start py-6">
        {/* Left Section */}
        <div className="w-1/2">
          <div className="flex items-center mb-4">
            <img
              src={`${process.env.PUBLIC_URL}/Screenshot (466).png`}
              alt="IIT  Logo"
              className="w-12 h-12 mr-3"
            />
            <div>
              <h1 className="text-lg font-bold">IIT JODHPUR</h1>
              <p>Indian Institute of Technology Jodhpur</p>
            </div>
          </div>

          <div className="text-gray-300">
            <p className="font-bold">GET IN TOUCH</p>
            <p>+91-512-259-7289</p>
            <p><a href="mailto:Dora_desk@iitj.ac.in" className="text-red-400 ">Dora_desk@iitj.ac.in</a></p>
            <p>Dean of Resources and Alumni Office</p>
            <p>Room no. 269, Faculty Building</p>
            <p>IIT Jodhpur - 208016</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/4">
          <ul className="text-gray-300 space-y-2 text-left">
            <li className="text-lg font-bold">Useful Links</li>
            <li><a href="#" className="hover:text-red-400">About</a></li>
            <li><a href="#" className="hover:text-red-400">Resources</a></li>
            <li><a href="#" className="hover:text-red-400">Time</a></li>
            <li><a href="#" className="hover:text-red-400">Voices of Impact</a></li>
            <li><a href="#" className="hover:text-red-400">FAQs</a></li>
          </ul>

          <button className="mt-6 bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded">
            Donate Now
          </button>
        </div>
      </div>

      <div className="border-t border-white-700 pt-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-gray-400">Copyright © IITJ 2024 All rights reserved.</p>
          <ul className="flex space-x-4 text-gray-400">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
    
  );
};