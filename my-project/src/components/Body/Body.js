import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import ContactUs from "../ContactUs/ContactUs.js";


export default function Body() {
    return (
        <div>
            <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{
            <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-3 bg-white text-lg font-medium text-gray-900">About Us</span>
            </div>
          </div>
          
        }</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{ 
        <div className="flex py-7">
        <div className="mr-4 flex-shrink-0">
          <svg
            className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
            preserveAspectRatio="none"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
          </svg>
        </div>
        <div>
          <h4 className="text-lg font-bold">Lorem ipsum</h4>
          <p className="mt-1">
            Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
            quidem ipsam quia iusto.
          </p>
  
          <div className="mt-6 flex">
            <div className="mr-4 flex-shrink-0">
              <svg
                className="h-12 w-12 border border-gray-300 bg-white text-gray-300"
                preserveAspectRatio="none"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 200 200"
                aria-hidden="true"
              >
                <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold">Lorem ipsum</h4>
              <p className="mt-1">
                Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
                quidem ipsam quia iusto.
              </p>
            </div>
          </div>
          <div className="mt-6 flex">
            <div className="mr-4 flex-shrink-0">
              <svg
                className="h-12 w-12 border border-gray-300 bg-white text-gray-300"
                preserveAspectRatio="none"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 200 200"
                aria-hidden="true"
              >
                <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold">Lorem ipsum</h4>
              <p className="mt-1">
                Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
                quidem ipsam quia iusto.
              </p>
            </div>
          </div>
        </div>
      </div>
        }</div>
        <ContactUs />
        <Footer />
      </div>
    )
  }