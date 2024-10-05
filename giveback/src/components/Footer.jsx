import React from 'react';

export function Footer(){
  return (
    <footer className="bg-[#F7EFE5]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
            <img
              src={`${process.env.PUBLIC_URL}/apple-touch-icon.png`}
              alt="IIT  Logo"
              className="w-12 h-12 mr-3"
            />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-primary font-suse">
                Indian Institute of Technology Jodhpur
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-base font-semibold text-primary uppercase font-suse">
                Useful Links
              </h2>
              <ul className="text-gray-500 font-medium font-suse">
                <li className='mb-1'>
                  <a href="#why-give" className="hover:underline">
                    About
                  </a>
                </li>
                <li className='mb-1'>
                  <a
                    href="#ways-to-give"
                    className="hover:underline"
                  >
                    Ways to Give
                  </a>
                </li>
                <li className='mb-1'>
                  <a
                    href="donate"
                    className="hover:underline"
                  >
                    Donate
                  </a>
                </li>
                <li className='mb-1'>
                  <a
                    href="#faq"
                    className="hover:underline"
                  >
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-base font-semibold text-primary uppercase font-suse">
                Get In Touch
              </h2>
              <ul className="text-gray-500 font-medium font-suse">
                <li className="mb-4">
                    0291-280-1036
                </li>
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=dora@iitj.ac.in&su=Subject&body=Message"
                    className="hover:underline"
                  >
                    dora@iitj.ac.in
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-base font-semibold text-primary uppercase font-suse">
                Dean of Resources and Alumni Office
              </h2>
              <ul className="text-gray-500 font-medium">
                <li>
                    IIT Jodhpur - 342037
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-900 sm:text-center font-suse">
            © 2024{' '}
              Designed and Developed by 
            Society of Alumni Affairs.
          </span>
        </div>
      </div>
    </footer>
  );
};
