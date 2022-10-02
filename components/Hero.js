import React from 'react';
import { Popover } from '@headlessui/react';




const navigation = [
  { name: 'Sign up', href: '#'},
  
]

export default function hero({posts}) {
  return (
    <div>
        <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
        </div>
    </div>
        <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <div>
                      <img alt="Workflow" className="h-8 w-90 sm:h-10" src="https://res.cloudinary.com/dfloexajh/image/upload/v1660805777/Sybr/sybrLogoV1_guhzgg.png"/>
                      </div>
                    </a>
                    
                    <div className="flex items-center">
                      
            <div className="flex space-x-4">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-blue-700 bg-white border rounded-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search Sybr"
                />
                <button className="px-4 text-white bg-blue-600 rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  ))}
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                    Log in
                  </a>
                </div>
              </nav>
            </div>

              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                  <a href="#" className="block w-full px-5 py-3 text-center font-medium text-blue-600 bg-gray-50 hover:bg-gray-100"
>
                    Log in
                  </a>
                
              </Popover.Panel>
          </Popover>
        </div>
      </div>
      </div>
      </div>
  ) 
}
