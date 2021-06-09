import Cards from "../Cards/Cards";

export default function ContactUs() {
    return (
      <div className="bg-white">
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
          Wether you are looking for a new home or looking to sell your current home. We are always a phone call away to assist you in your goals!
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <Cards />
      </section>
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