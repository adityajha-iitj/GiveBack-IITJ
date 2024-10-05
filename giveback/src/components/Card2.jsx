import React, { useState } from 'react';

export default function Card2() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative h-[400px] w-[300px] rounded-md overflow-hidden transform transition-transform duration-300 m-10 ${
        isHovered ? 'shadow-xl' : 'shadow-md'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered
          ? 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))'
          : 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
        boxShadow: isHovered
          ? '0px 4px 12px #910707' // Brown shadow color
          : '0px 4px 8px #910707', // Default shadow color
        transition: 'background 1s ease, box-shadow 0.5s ease'
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/card3.jpg`}
        alt="AirMax Pro"
        className={`z-0 h-full w-full rounded-md object-cover ${
          isHovered ? 'opacity-20' : 'opacity-100'
        } transition-opacity duration-1000`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent transition-opacity duration-1000 ${
          isHovered ? 'opacity-70' : 'opacity-0'
        }`}
      >  
      
        
      </div>

      {/* Text container */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ paddingBottom: '2rem' }}
      >
        <p
          className={`text-white text-center transition-opacity font-suse duration-1000 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          You can give back to your alma mater by sharing your expertise, knowledge, and experience. 
          <br/>We would like to benefit from your teaching skills, academic know-how, and potential collaboration opportunities.
        </p>
      </div>

      {/* Title container */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-1000 ${
          isHovered ? 'transform translate-y-[calc(50%-2rem)]' : 'transform translate-y-0'
        }`}
        style={{ paddingBottom: '2rem' }}
      >
        <h1 className="text-lg font-bold text-gray-200 font-suse">Academic Contribution</h1>
      </div>
    </div>
    
    
  );
}

