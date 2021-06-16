import React from 'react';
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import ContactUs from "../ContactUs/ContactUs.js";
import AboutUs from '../AboutUs/AboutUs.js';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const faqs = [
  {
    question: "What is the first step in buying a home?",
    answer:
      "Best first practice is to talk with a lender to find out what you qualify for. Once you have an idea of what you can afford, contact us and we will help find you something that will fit your budget that you will hopefully love!",
  },
  {
    question: "What area do you cover?",
    answer:
      "We are licensed in the state of Utah and we can help you with your real estate needs all across the state. Our main area of focus is the Uintah Basin from Jenson to Fruitland and everywhere in between!",
  },
  {
    question: "I've never bought a house before, what do I do?",
    answer:
      "No problem! Give us a call, or send us an email and we will guide you through the home buying process every step of the way. We can also help you find lenders who can provide you with how much you qualify for if needed!",
  },
  {
    question: "How much do you charge buyers?",
    answer:
      "The seller typically pays the fees, so buyers don't pay anything.",
  },
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div>
        <Header />
        <ScrollToTop />
        <AboutUs/>
        
    <div className="bg-gray-50" id="FAQ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <div>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-medium text-gray-900">{faq.question}</span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <ContactUs />
    <Footer />
    </div>
  )
}