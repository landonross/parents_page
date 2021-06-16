import React from 'react';
import Cards from "../Cards/Cards";
import office from './img/office.jpg';
import { useForm } from '@formspree/react';
import SubmitForm from '../SubmitForm/SubmitForm.js';

export default function ContactUs() {
  const [state, handleSubmit] = useForm("meqvkrgv");
  if (state.succeeded) {
      return (
        <div>
      <SubmitForm />
      <ContactUs />
      </div>
        );
  }
    return (
      <div id="Contact">
      <div className="bg-gray-900">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://www.quickenloans.com/blog/wp-content/uploads/2020/02/Stock-People-Shaking-Hands-With-Agent-AdobeStock_144960404.jpeg"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">Get in touch</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Whether you are looking for a new place to call home or looking to sell your current home. We are always a phone call away to assist you in your goals!
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-40 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
        </h2>
        <Cards />
      </section>
    </div>

    {/* lets work together portion */}
    <div className="relative bg-white -mt-96 sm:-mt-52">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src={office}
            alt=""
          />
        </div>
      </div>
      <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let's work together</h2>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              We’d love to hear from you! Send us a message using the following form, or email us by simply clicking the email button above.
            </p>
            <form action="#" method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="given-name"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <span id="phone_description" className="text-sm text-gray-500">
                    Optional
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    aria-describedby="phone_description"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label htmlFor="how_can_we_help" className="block text-sm font-medium text-gray-700">
                    What are your must haves in your home search?
                  </label>
                  <span id="how_can_we_help_description" className="text-sm text-gray-500">
                    Max. 500 characters
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    id="how_can_we_help"
                    name="how_can_we_help"
                    aria-describedby="how_can_we_help_description"
                    rows={4}
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>
              <fieldset className="sm:col-span-2">
                <legend className="block text-sm font-medium text-gray-700">Expected budget</legend>
                <div className="mt-4 grid grid-cols-1 gap-y-4">
                  <div className="flex items-center">
                    <input
                      id="budget_under_300k"
                      name="budget"
                      defaultValue="under_300k"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="budget_under_300k" className="ml-3">
                      <span className="block text-sm text-gray-700">Less than $300K</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="budget_300k-400k"
                      name="budget"
                      defaultValue="300k-400k"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="budget_300k-400k" className="ml-3">
                      <span className="block text-sm text-gray-700">$300K – 400K</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="budget_400k-500k"
                      name="budget"
                      defaultValue="400k-500k"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="budget_400k-500k" className="ml-3">
                      <span className="block text-sm text-gray-700">$400K – $500K</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="budget_over_500k"
                      name="budget"
                      defaultValue="over_500k"
                      type="radio"
                      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    />
                    <label htmlFor="budget_over_500k" className="ml-3">
                      <span className="block text-sm text-gray-700">$500K+</span>
                    </label>
                  </div>
                </div>
              </fieldset>
              <div className="sm:col-span-2">
                <label htmlFor="how_did_you_hear_about_us" className="block text-sm font-medium text-gray-700">
                  How did you hear about us?
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="how_did_you_hear_about_us"
                    id="how_did_you_hear_about_us"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="text-right sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
      
      // <div>
      // <div className="relative bg-indigo-800">
      //   <div className="absolute inset-0">
      //     <img
      //       className="w-full h-full object-cover"
      //       src="https://www.quickenloans.com/blog/wp-content/uploads/2020/02/Stock-People-Shaking-Hands-With-Agent-AdobeStock_144960404.jpeg"
      //       alt=""
      //     />
      //     <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
      //   </div>
      //   <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      //     <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Get in touch</h1>
      //     <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
      //       Wether you are looking for a new home or looking to sell your current home. We are always a phone call away to assist you in your goals!
      //     </p>
      //   </div>
      //   <section>
      //   <Cards />
      //   </section>
      // </div>

    )
  }