import React from 'react';

const Footer = () => {
    return (
        <div class="pt-14">
         
          <footer class="text-mainColorDark body-font bg-mainColorLight">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L18.5,170.7C36.9,181,74,203,111,202.7C147.7,203,185,181,222,165.3C258.5,149,295,139,332,122.7C369.2,107,406,85,443,74.7C480,64,517,64,554,85.3C590.8,107,628,149,665,181.3C701.5,213,738,235,775,240C812.3,245,849,235,886,208C923.1,181,960,139,997,106.7C1033.8,75,1071,53,1108,80C1144.6,107,1182,181,1218,181.3C1255.4,181,1292,107,1329,80C1366.2,53,1403,75,1422,85.3L1440,96L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z">
            </path>
            </svg>
  <div class="container px-5">
    <div class="flex flex-wrap md:text-left text-start order-first md:ml-20">
      <div class="lg:w-1/3 md:w-1/3 w-full px-4">
        <h2 class="title-font text-2xl font-bold text-gray-900 tracking-widest text-lg mb-3">About us</h2>
        <nav class="list-none  text-1xl font-medium">
          <li>
            <p class="text-mainColorDark ">Dhaka,Bangladesh</p>
          </li>
          <li>
            <p class="text-mainColorDark ">sunday - saturday (8am - 8pm)</p>
          </li>
          <li>
            <p class="text-mainColorDark ">wellnessSupport@gmail.com</p>
          </li>
          
        </nav>
      </div>
      
     
      <div class="lg:w-2/3 md:w-2/3  px-4 pt-5 md:pt-0 md:pl-44">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-lg mb-3 font-bold flex items-start">Connect with us</h2>
        <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-start items-start md:justify-start">
          <div class="relative w-full sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2 md:w-96 pb-2">

            <input type="text" id="footer-field" name=" focusfooter-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent:ring-2 focus:ring-mainColorDark focus:border-mainColorDark text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Enter your email..." required />
          </div>
        
          <button class="lg:mt-2 xl:mt-0 md: flex-shrink-0 inline-flex text-white bg-mainColorDark border-0 py-2 px-6 focus:outline-none  rounded">send</button>
        </div>
       
      </div>
    </div>
  </div>
  <div class="bg-gray-100 ">
    <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

      </a>
      <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2021 WellnessCenter —

      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

        </div>
    );
};

export default Footer;