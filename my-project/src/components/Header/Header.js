import { Fragment } from 'react'
import { Disclosure} from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import './index.css';
import Form from "./Form.js";

const navigation = ['Home', 'Zillow', 'About', 'Contact']
// const profile = ['Your Profile', 'Settings', 'Sign out']

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Header() {
  return (
    <div>
      <div className="bg-gray-800 pb-32">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="border-b border-gray-700">
                  <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10"
                          src="./btr.png"
                          alt="BTR"
                        />
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                          {navigation.map((item, itemIdx) =>
                            itemIdx === 0 ? (
                              <Fragment key={item}>
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                <a href="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                                  {item}
                                </a>
                              </Fragment>
                            ) : (
                              <a
                                key={item}
                                href="/"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                              >
                                {item}
                              </a>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="ml-3">
                <div className="text-base font-medium leading-none text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-flex items-center" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
</svg>: (801)380-4617</div>
                </div>
                    {/* <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        <button className="bg-gray-800 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        
                        <Menu as="div" className="ml-3 relative">
                          {({ open }) => (
                            <>
                              <div>
                                <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                  <span className="sr-only">Open user menu</span>
                                  <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                  />
                                </Menu.Button>
                              </div>
                              <Transition
                                show={open}
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items
                                  static
                                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                >
                                  {profile.map((item) => (
                                    <Menu.Item key={item}>
                                      {({ active }) => (
                                        <a
                                          href="/"
                                          className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700'
                                          )}
                                        >
                                          {item}
                                        </a>
                                      )}
                                    </Menu.Item>
                                  ))}
                                </Menu.Items>
                              </Transition>
                            </>
                          )}
                        </Menu>
                      </div>
                    </div> */}
                    <div className="-mr-2 flex md:hidden">
                     
                      <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="border-b border-gray-700 md:hidden">
                <div className="px-2 py-3 space-y-1 sm:px-3">
                  {navigation.map((item, itemIdx) =>
                    itemIdx === 0 ? (
                      <Fragment key={item}>
                        <a href="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                          {item}
                        </a>
                      </Fragment>
                    ) : (
                      <a
                        key={item}
                        href="/"
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        {item}
                      </a>
                    )
                  )}
                </div>
                {/* <div className="pt-4 pb-3 border-t border-gray-700"> */}
                  {/* <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">Tom Cook</div>
                      <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                    </div>
                    <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div> */}
                  {/* <div className="mt-3 px-2 space-y-1">
                    {profile.map((item) => (
                      <a
                        key={item}
                        href="/"
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item}
                      </a>
                    ))}
                  </div> */}
                {/* </div> */}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          </div>
        </header>
      </div>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            <Form />
            
  {/* <div id="zillow-large-search-box-widget-container"><h2 id="zillow-2">Find Homes</h2><div style={{float:"right"}}><a href="https://www.zillow.com/" target="_blank" rel="noreferrer"><img alt="Zillow Real Estate Information" style={{border:0}} src="https://www.zillow.com/widgets/GetVersionedResource.htm?path=/static/images/powered-by-zillow.gif"></img></a></div><iframe scrolling="no" src="https://www.zillow.com/widgets/search/LargeSearchBoxWidget.htm?did=zillow-large-search-box-iframe-widget&type=iframe&rgname=Seattle+WA&shvi=yes" width="430" frameborder="0" height="400"></iframe><table id="zillow-tnc-widget-footer-links" width="100%"><tbody style={{margin:0 ,padding:0}}><tr style={{margin:0, padding:0}}><td style={{fontWeight:"bold", fontSize:10, color:"#555", textAlign:"left", margin:0, padding:0}}>QUICK LINKS:</td></tr><tr style={{margin:0, padding:0}}><td style={{margin:0, padding:0}}><span id="widgetFooterLink" className="regionBasedLink"><a href="https://www.zillow.com/salt-wa/" target="_blank" rel="noReferrer" style={{color:"#36b", fontFamily:"verdana,arial,sans-serif", fontSize:"10px", margin:"0 5px 0 0", padding:0, textDecoration:"none"}}><span className="region">Seattle</span> Real Estate Listing</a></span></td><td style={{margin:0, padding:0}}><span id="widgetFooterLink"><a href="https://www.zillow.com/mortgage-rates/" target="_blank" rel="noReferrer" style={{color:"#36b", fontFamily:"verdana,arial,sans-serif", fontSize:"10px", margin:"0 5px 0 0", padding:0, textDecoration:"none"}}>Mortgage Rates</a></span></td><td style={{margin:0, padding:0}}><span id="widgetFooterLink"><a href="https://www.zillow.com/refinance/" target="_blank" rel="noReferrer" style={{color:"#36b", fontFamily:"verdana,arial,sans-serif", fontSize:"10px", margin:"0 5px 0 0", padding:0, textDecoration:"none"}}>Refinancing</a></span></td></tr><tr style={{margin:0, padding:0}}><td style={{margin:0, padding:0}}><span id="widgetFooterLink" className="regionBasedLink"><a href="https://www.zillow.com/seattle-wa/foreclosures/" target="_blank" rel="noReferrer" style={{color:"#36b", fontSize:"10px", margin:"0 5px 0 0", padding:0, textDecoration:"none"}}><span className="region">Seattle</span> Foreclosures</a></span></td><td style={{margin:0, padding:0}}><span id="widgetFooterLink"><a href="https://www.zillow.com/mortgage-calculator/" target="_blank" rel="noReferrer" style={{color:"#36b", fontSize:"10px", margin:"0 5px 0 0", padding:0, textDecoration:"none"}}>Mortgage Calculators</a></span></td><td style={{margin:0, padding:0}}><span id="widgetFooterLink"><a href="https://www.zillow.com/mortgage-rates/" target="_blank" rel="noReferrer" style={{color:"#36b", fontSize:"10px", margin:"0 5px 0 0", padding:0, textDecoration:"none"}}>Purchase Loans</a></span></td></tr></tbody></table></div> */}
            {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" /> */}
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>
  )
}