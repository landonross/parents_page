import React from 'react';
import realtors from './img/couplePhoto.JPG';

export default function Example() {
  return (
    <div className="relative bg-gray-800" id="About">
      <div className="h-56 bg-gray-200 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/3">
        <img
          className="w-full h-full object-scale-down"
          src={realtors}
          alt=""
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">First class realtors</h2>
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">Who are BTR realtors?</p>
          <p className="mt-3 text-lg text-gray-300">
            Our love of real estate began while working in the construction industry. 
            We love helping people find what they are looking for as well as helping owners sell their property in a timely manner.  
            We work together in order to help ensure the process runs smoothly for you and it allows us to be available to assist you within your availability window!
          </p>
        </div>
      </div>
    </div>
  )
}