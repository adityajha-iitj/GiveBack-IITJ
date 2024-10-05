import React, { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

export const FaqThree = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  const [openNewFaq, setOpenNewFaq] = useState(false) // New state for the independent FAQ

  const toggleFaq = (index) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null) // Close the currently open FAQ
    } else {
      setOpenFaqIndex(index) // Open the selected FAQ
    }
  }

  const toggleNewFaq = () => {
    setOpenNewFaq((prev) => !prev); // Toggle the new FAQ's state
  }

  return (
    <section className="mx-auto max-w-7xl px-2 py-10 md:px-0" id='faq'>
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl font-suse">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          <div className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
              onClick={() => toggleFaq(0)} // Toggle FAQ index 0
            >
              <span className="flex text-start text-lg font-semibold text-black font-suse">
                How will my contribution be used?
              </span>

              {openFaqIndex === 0 ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openFaqIndex === 0 && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p className="text-gray-500 font-suse">
                  Your contribution will be used to support various initiatives, such as scholarships, campus infrastructure, 
                  faculty development, and more. The purpose for which the funds will be utilized will be decided unanimously
                  by the batch.
                </p>
              </div>
            )}
          </div>
          {Array.from({ length: 1 }).map((_, i) => (
            <div
              key={i}
              className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200"
            >
              <button
                type="button"
                className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                onClick={() => toggleFaq(i + 1)} // Toggle based on index
              >
                <span className="flex text-start text-lg font-semibold text-black font-suse">
                  How can I make a contribution in memory of someone?
                </span>
                {openFaqIndex === i + 1 ? (
                  <ChevronUp className="hidden h-5 w-5 text-gray-500 md:block" />
                ) : (
                  <ChevronDown className="hidden h-5 w-5 text-gray-500 md:block" />
                )}
              </button>
              {openFaqIndex === i + 1 && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-500 font-suse">
                    Many people choose to give to IITJ in memory—or in honour—of a family member, classmate, faculty member, 
                    or friend. Please drop us a mail at Dora_desk@iitj.ac.in and we will be glad to share and explore the 
                    possibilities.
                  </p>
                </div>
              )}
            </div>
          ))}
          {/* New independent FAQ */}
          <div className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200">
            <button
              type="button"
              className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
              onClick={toggleNewFaq} // Toggle new FAQ
            >
              <span className="flex text-start text-lg font-semibold text-black font-suse">
              Can I get updates on the impact of my contribution and how it benefits the institution?
              </span>
              {openNewFaq ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openNewFaq && (
              <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                <p className="text-gray-500 font-suse">
                Yes, the institute provides regular updates and reports on how contributions are used 
                and their impacts on the instituion and its students.
                </p>
              </div>
            )}
          </div>
        </div>
        <p className="textbase mt-6 text-center text-gray-600 font-suse">
          Can&apos;t find what you&apos;re looking for?{' '}
          <p className="font-semibold text-black">
            Contact our support
          </p>
        </p>
      </div>
    </section>
  )
}
