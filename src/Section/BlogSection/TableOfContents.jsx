import React, { useState, useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const TableOfContents = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  
  // Reference to the dropdown button and dropdown list
  const dropdownRef = useRef(null);

  // Toggle Sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle Dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown if click occurs outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown when clicking outside
      }
    };

    // Add event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex">
      {/* Toggle Sidebar Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-2 md:top-4 left-0 md:p-2 my-15 bg-gray-800 text-white rounded-md z-50"
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? (
          <FaTimes className="text-xl" />
        ) : (
          <IoIosArrowForward className="text-xl" />
        )}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-16 left-0 bottom-0 min-h-screen w-64 bg-gray-600 text-white p-6 overflow-auto transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:w-74 md:w-74 sm:w-74 md:py-15`}
      >
        <h3 className="text-2xl font-semibold text-white mb-6">
          Table of Contents
        </h3>
        <ul className="space-y-6">
          <li>
            <a
              href="#tip-1"
              className="text-sm font-semibold text-white hover:text-blue-400 hover:underline transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setIsDropdownOpen(false)} // Close dropdown when clicking a link
            >
              Research the Market
            </a>
          </li>

          {/* Custom Dropdown */}
          <li>
            <button
              onClick={toggleDropdown}
              ref={dropdownRef}
              className="text-sm font-semibold text-white w-full text-left flex items-center justify-between hover:text-blue-400 hover:underline transition duration-300 ease-in-out transform hover:scale-105"
            >
              Check for Dealer Offers and Discounts
              <span className="ml-2">{isDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {isDropdownOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li  >
                  <a
                    href="#tips-Popular"
                    className="text-sm text-white hover:text-blue-400"
                    onClick={(e) => e.stopPropagation()} // Prevent closing the dropdown when clicking inside
                  >
                    Popular Dealers and Their Offers:
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li>
            <a
              href="#tip-3"
              className="text-sm font-semibold text-white hover:text-blue-400 hover:underline transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setIsDropdownOpen(false)} // Close dropdown when clicking a link
            >
              Verify the Car’s Specs and Features
            </a>
          </li>
          <li>
            <a
              href="#tip-4"
              className="text-sm font-semibold text-white hover:text-blue-400 hover:underline transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setIsDropdownOpen(false)} // Close dropdown when clicking a link
            >
              Financing Options and Interest Rates
            </a>
          </li>
          <li>
            <a
              href="#tip-5"
              className="text-sm font-semibold text-white hover:text-blue-400 hover:underline transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setIsDropdownOpen(false)} // Close dropdown when clicking a link
            >
              Warranty and After-Sales Services
            </a>
          </li>
          <li>
            <a
              href="#tip-6"
              className="text-sm font-semibold text-white hover:text-blue-400 hover:underline transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setIsDropdownOpen(false)} // Close dropdown when clicking a link
            >
              Test Drive the Car
            </a>
          </li>
          <li>
            <a
              href="#tip-7"
              className="text-sm font-semibold text-white hover:text-blue-400 hover:underline transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setIsDropdownOpen(false)} // Close dropdown when clicking a link
            >
              Check the Registration and Insurance Costs
            </a>
          </li>
        </ul>
      </div>

      {/* Content Section */}
      {/* Content Section (Centered and Shifted Right) */}
      <div className="ml-0 sm:ml-0 md:ml-0 lg:ml-70 xl:ml-80 p-8 bg-gray-200 w-full max-w-6xl mx-auto   rounded-md shadow-lg">
        <section id="tip-1" className="mb-8 pt-20">
          <h3 className="text-xl md:text-2xl sm:text-2xl font-semibold mb-4 text-blue-600">
            Tip 1: Research the Market
          </h3>
          <p className="text-sm text-justify md:text-md sm:text-md text-gray-700 leading-relaxed mb-6">
            Before purchasing a new car in the UAE, thorough research is key.
            The UAE car market is vast and diverse, offering a wide variety of
            car models, makes, and prices. Taking the time to compare options
            will help you make an informed decision that suits your budget and
            preferences. Make use of multiple online resources to browse
            available cars from various dealerships and private sellers.
          </p>

          <h3 className="text-xl md:text-2xl sm:text-2xl font-medium mb-3 text-blue-600">
            Key Points to Consider:
          </h3>
          <ul className="list-disc pl-5 mb-6">
            <li className="text-sm md:text-md sm:text-md text-gray-700">
              <p>
                Compare prices across various platforms to find the best deal.
              </p>
            </li>
            <li className="text-sm md:text-md sm:text-md text-gray-700">
              <p>
                Look for discounts, promotions, and seasonal offers that may be
                available.
              </p>
            </li>
            <li className="text-sm md:text-md sm:text-md text-gray-700">
              <p>
                Research different car models for reviews and reliability
                ratings.
              </p>
            </li>
            <li className="text-sm md:text-md sm:text-md text-gray-700">
              <p>
                Take note of any additional costs like delivery, insurance, and
                taxes.
              </p>
            </li>
          </ul>

          <p className="text-sm md:text-md sm:text-md text-gray-700 mb-6">
            Some of the best platforms to start your research include:
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://www.dubizzle.com"
              target="_blank"
              className="bg-blue-500 font-semibold text-white p-3 rounded-md text-center hover:bg-blue-600 transition duration-300"
            >
              Dubizzle
            </a>
            <a
              href="https://www.carswitch.com"
              target="_blank"
              className="bg-green-500 font-semibold text-white p-3 rounded-md text-center hover:bg-green-600 transition duration-300"
            >
              CarSwitch
            </a>
            <a
              href="https://www.yallamotor.com"
              target="_blank"
              className="bg-yellow-500 font-semibold text-white p-3 rounded-md text-center hover:bg-yellow-600 transition duration-300"
            >
              YallaMotor
            </a>
            <a
              href="https://www.autotrader.com"
              target="_blank"
              className="bg-purple-500 font-semibold text-white p-3 rounded-md text-center hover:bg-purple-600 transition duration-300"
            >
              Autotrader
            </a>
          </div>

          <h3 className="text-xl md:text-2xl sm:text-2xl font-medium mt-6 mb-4 text-blue-600">
            Additional Research Tips:
          </h3>
          <ul className="list-disc pl-5 text-justify">
            <li className="text-sm md:text-md sm:text-md text-gray-700">
              <p>Check reviews and ratings for specific car models.</p>
            </li>
            <li className="text-sm md:text-md sm:text-md text-gray-700">
              <p>
                Consider the resale value of the car, which is important for
                future trade-ins or sales.
              </p>
            </li>
            <li className="text-sm md:text-md sm:text-md text-gray-700">
              <p>
                Don’t rush! Take your time to evaluate different options and
                make a decision based on your priorities.
              </p>
            </li>
          </ul>
        </section>

        <section id="tip-2" className="mb-8 pt-20">
          <h3 className="text-md md:text-2xl sm:text-2xl font-semibold mb-4 text-blue-600">
            Tip 2: Check for Dealer Offers and Discounts:
          </h3>
          <p className="text-sm md:text-md sm:text-md text-gray-700 leading-relaxed mb-6 text-justify">
            When purchasing a car, don't forget to check for dealer promotions,
            seasonal sales, and special discounts. Many dealerships in the UAE
            offer exclusive deals, such as extended warranties, free services,
            or discounts on car accessories. Taking advantage of these offers
            can help you save a significant amount on your purchase.
          </p>

          <h3 className="text-xl md:text-2xl sm:text-2xl font-medium mb-4 text-blue-600" id="tips-Popular">
            Popular Dealers and Their Offers:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {/* Al-Futtaim Automotive */}
            <div className="bg-white p-6 sm:h-75 xl:h-75 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xs sm:text-sm xl:text-md font-semibold text-gray-800 mb-2">
                Al-Futtaim Automotive
              </h3>
              <p className="text-gray-600 mb-2 text-xs sm:text-xs xl:text-sm text-justify tracking-wider">
                Al-Futtaim offers various promotional deals, including seasonal
                discounts, financing options, and after-sales services. They are
                known for their wide selection of car models, from luxury to
                everyday vehicles.
              </p>
              <a
                href="https://www.alfuttaim.com"
                target="_blank"
                className="text-blue-500 hover:text-blue-700 text-xs  hover:underline transition duration-300"
              >
                Check Offers on Al-Futtaim Automotive
              </a>
            </div>

            {/* Emirates Motors */}
            <div className="bg-white p-6 sm:h-75 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-md sm:text-sm xl:text-md font-semibold text-gray-800 mb-2">
                Emirates Motors
              </h3>
              <p className="text-gray-600 mb-2 text-xs sm:text-xs xl:text-sm text-justify tracking-wider">
                Emirates Motors regularly features limited-time promotions,
                including free maintenance packages, car insurance deals, and
                trade-in offers. Their dealership is trusted for its premium
                services and diverse vehicle range.
              </p>
              <a
                href="https://www.emiratesmotors.com"
                target="_blank"
                className="text-blue-500 hover:text-blue-700 text-xs hover:underline transition duration-300"
              >
                Check Offers on Emirates Motors
              </a>
            </div>

            {/* Other Dealership */}
            <div className="bg-white p-6 sm:h-75 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <h3 className="text-xs sm:text-sm xl:text-md font-semibold text-gray-800 mb-2">
                Other Local Dealerships
              </h3>
              <p className="text-gray-600 mb-2 text-xs sm:text-xs xl:text-sm tracking-wider text-justify">
                Many local dealerships also offer enticing discounts, especially
                around major holidays like Eid and the UAE National Day. Be sure
                to ask for any ongoing offers before finalizing your purchase.
              </p>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 text-xs hover:underline transition duration-300"
              >
                Browse More Deals at Local Dealerships
              </a>
            </div>
          </div>

          <h3 className="text-xl md:text-2xl sm:text-2xl font-medium mt-6 mb-4 text-blue-600">
            Tips for Finding the Best Offers:
          </h3>
          <ul className="list-disc pl-5 mb-6 text-sm md:text-md sm:text-md text-gray-700 text-justify">
            <li>
              <p>
                Visit dealership websites regularly for the latest updates on
                promotions.
              </p>
            </li>
            <li>
              <p>
                Sign up for email newsletters to receive exclusive offers and
                alerts.
              </p>
            </li>
            <li>
              <p>Check for loyalty discounts if you're a returning customer.</p>
            </li>
            <li>
              <p>
                Inquire about free service packages or extended warranty
                options.
              </p>
            </li>
          </ul>
        </section>

        <section id="tip-3" className="mb-12 pt-20 px-2">
          <h3 className="text-xl md:text-2xl sm:text-2xl font-semibold text-blue-600 mb-4">
            Tip 3: Verify the Car’s Specs and Features
          </h3>

          <p className="text-sm text-justify md:text-lg sm:text-md xl:text-lg text-gray-700 leading-relaxed mb-6">
            When buying a car, it is important to check its specifications and
            features to ensure that it meets your needs. Look for safety, fuel
            efficiency, and technology features that align with your driving
            habits and lifestyle.
          </p>

          {/* Section for Key Specifications */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-md md:text-2xl sm:text-2xl font-medium mb-4 text-blue-500">
              Key Specifications to Check:
            </h3>
            <ul className="list-disc pl-5 text-sm text-gray-700 text-justify">
              <li>
                <strong>Engine Performance:</strong>{" "}
                <p>
                  Check the engine size, horsepower, and torque. If you need a
                  car with better acceleration and power, look for higher specs
                  in these areas.
                </p>
              </li>
              <li>
                <strong>Fuel Efficiency:</strong>{" "}
                <p>
                  Verify the car’s fuel consumption, looking for good miles per
                  gallon (MPG) or liters per 100 km to minimize long-term fuel
                  costs.
                </p>
              </li>
              <li>
                <strong>Transmission Type:</strong>
                <p>
                  {" "}
                  Determine if the car is automatic or manual. Depending on your
                  preferences and driving style, choose accordingly.
                </p>
              </li>
              <li>
                <strong>Safety Features:</strong>
                <p>
                  {" "}
                  Ensure the car is equipped with airbags, ABS, stability
                  control, and driver-assist technologies like lane departure
                  warning and parking sensors.
                </p>
              </li>
              <li>
                <strong>Interior Features:</strong>
                <p>
                  {" "}
                  Check the interior space, seating capacity, and materials
                  used. Also, verify tech options like navigation systems,
                  Bluetooth, and Apple CarPlay or Android Auto.
                </p>
              </li>
            </ul>
          </div>

          {/* Section for Websites for Car Comparison */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl md:text-2xl sm:text-2xl font-medium mb-4 text-blue-500">
              Useful Websites for Car Comparisons:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Autotrader */}
              <div className="p-4 border rounded-lg shadow hover:shadow-xl transition duration-300">
                <h3 className="text-md font-semibold text-gray-800 mb-2">
                  Autotrader
                </h3>
                <p className="text-gray-600 mb-4 sm:text-sm text-xs text-justify tracking-wider">
                  Autotrader lets you compare car models based on
                  specifications, prices, and features. It's a great tool to
                  filter out cars according to your preferences.
                </p>
                <a
                  href="https://www.autotrader.com"
                  target="_blank"
                  className="text-blue-600 font-semibold text-xs hover:text-blue-700 hover:underline transition duration-300"
                >
                  Explore Autotrader
                </a>
              </div>

              {/* Motorshow UAE */}
              <div className="p-4 border rounded-lg shadow hover:shadow-xl transition duration-300">
                <h3 className="text-md font-semibold text-gray-800 mb-2">
                  Motorshow UAE
                </h3>
                <p className="text-gray-600 mb-4 sm:text-sm text-xs text-justify tracking-wider">
                  Motorshow UAE offers in-depth comparisons and reviews of the
                  latest cars in the UAE market, with clear specifications and
                  features to help you make the right decision.
                </p>
                <a
                  href="https://www.motorshowuae.com"
                  target="_blank"
                  className="text-blue-500 text-xs font-semibold hover:text-blue-700 hover:underline transition duration-300"
                >
                  Check Motorshow UAE
                </a>
              </div>

              {/* Additional Car Comparison Websites */}
              <div className="p-4 border rounded-lg shadow hover:shadow-xl transition duration-300">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  Other Car Comparison Websites
                </h3>
                <p className="text-gray-600 mb-4 sm:text-sm text-xs ">
                  Compare car models from various platforms, including{" "}
                  <a
                    href="https://www.carsguide.com.au"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    CarsGuide
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.autobahnautomobiles.com"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    Autobahn Automobiles
                  </a>
                  .
                </p>
                <a
                  href="#"
                  className="text-blue-500 text-xs font-semibold hover:text-blue-700 hover:underline transition duration-300"
                >
                  Explore More Car Comparison Sites
                </a>
              </div>
            </div>
          </div>

          {/* Section for How to Evaluate the Features */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl md:text2xl sm:text-2xl font-medium mb-4 text-blue-500">
              How to Evaluate the Features:
            </h3>
            <p className="text-sm md:text-md sm:text-md text-gray-700 mb-4 text-justify">
              Once you have narrowed down your options based on the specs,
              evaluate how these features meet your needs. For example, if
              you're looking for a family car, safety features like rear
              cameras, sensors, and lane assist should be prioritized.
            </p>
            <p className="text-sm md:text-md sm:text-md text-gray-700 mb-4 text-justify">
              If you're buying for daily commuting, fuel efficiency and comfort
              features like climate control, adjustable seats, and infotainment
              systems are key. Make sure you also check for the availability of
              parts and service centers to maintain your car easily.
            </p>
          </div>
        </section>

        <section id="tip-4" className="mb-8 pt-20 px-6">
          <h3 className="text-md md:text-2xl sm:text-2xl font-semibold text-blue-600 mb-4">
            Tip 4: Financing Options and Interest Rates
          </h3>

          <p className="text-sm xl:text-lg md:text-md text-gray-700 leading-relaxed mb-6 text-justify">
            Before finalizing your car purchase, it's crucial to compare
            interest rates and loan terms from different banks and financial
            institutions. Understanding your financing options will help you
            choose the best deal.
          </p>

          {/* Financing Options Box */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-sm md:text-2xl sm:text-2xl font-medium text-blue-500 mb-4">
              Top Banks Offering Car Financing:
            </h3>
            <ul className="list-disc pl-5 text-xs md:text-md sm:text-md text-gray-700">
              <li>
                <p>
                  <a
                    href="https://www.emiratesnbd.com"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    Emirates NBD Car Financing
                  </a>
                  : Offers competitive rates and flexible terms to help you
                  finance your new vehicle.
                </p>
              </li>
              <li>
                <p>
                  <a
                    href="https://www.adcb.com"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    ADCB Car Loans
                  </a>
                  : Provides tailored car loan solutions with attractive
                  interest rates.
                </p>
              </li>
            </ul>
          </div>

          {/* Additional Financing Resources */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl md:text-2xl sm:text-2xl font-medium text-blue-500 mb-4">
              Compare Loan Options:
            </h3>
            <p className="text-sm md:text-md sm:text-md text-gray-700 mb-4">
              You can also use online tools to compare loan options and interest
              rates from various banks. Websites like{" "}
              <a
                href="https://www.bankbazaar.com"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                BankBazaar
              </a>{" "}
              and{" "}
              <a
                href="https://www.compareit4me.com"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Compareit4me
              </a>{" "}
              can help you find the best offers.
            </p>
          </div>
        </section>

        <section id="tip-5" className="mb-8 pt-20 px-6">
          <h3 className="text-xl md:text-2xl sm:text-2xl font-semibold text-blue-600 mb-4">
            Tip 5: Warranty and After-Sales Services
          </h3>

          <p className="text-sm md:text-lg sm:text-lg text-gray-700 leading-relaxed mb-4 text-justify">
            Be sure to check the warranty period and after-sales services
            provided by the dealership. Many manufacturers offer extended
            warranties, so it's worth exploring.
          </p>

          {/* Warranty Website */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
            <p className="text-sm md:text-md sm:text-md text-gray-700 mb-4">
              For detailed warranty coverage, visit{" "}
              <a
                href="https://www.warranty.ae"
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Warranty.ae
              </a>{" "}
              for more information.
            </p>
          </div>

          {/* Additional Tip */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="text-sm md:text-md sm:text-md text-gray-700">
              Don't forget to ask about after-sales services like free
              maintenance, roadside assistance, and service packages. These
              could add significant value to your purchase.
            </p>
          </div>
        </section>

        <section id="tip-6" className="mb-8 pt-20 px-6">
          <h3 className="text-xl md:text-2xl sm:text-2xl font-semibold text-blue-600 mb-4">
            Tip 6: Test Drive the Car
          </h3>

          <p className="text-sm md:text-lg sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            Taking a test drive is essential before buying any car. It allows
            you to assess the comfort, visibility, handling, and overall driving
            experience. Pay attention to how the car feels on the road and
            whether the controls are intuitive.
          </p>

          {/* Test Drive Scheduling */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl md:text-2xl sm:text-2xl font-medium text-blue-500 mb-4">
              Schedule a Test Drive:
            </h3>
            <ul className="list-disc pl-5 text-xs md:text-md sm:text-md text-gray-700">
              <li>
                <p>
                  <a
                    href="https://www.altayermotors.com"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    Al Tayer Motors
                  </a>
                  : Book a test drive for a wide range of luxury cars.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  <a
                    href="https://www.honda.ae"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    Honda UAE
                  </a>
                  : Schedule a test drive for Honda's latest models and
                  experience their reliability and performance.
                </p>
              </li>
            </ul>
          </div>

          {/* Additional Test Drive Advice */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl md:text-2xl sm:text-2xl font-medium text-blue-500 mb-4">
              Test Drive Checklist:
            </h3>
            <ul className="list-disc pl-5 text-sm md:text-md sm:text-md text-gray-700">
              <li>
                <p>
                  Ensure the seat adjustments are comfortable for your driving
                  position.
                </p>
              </li>
              <li>
                <p>
                  Check the visibility from the driver's seat, including blind
                  spots.
                </p>
              </li>
              <li>
                <p>
                  Test out the car's handling, acceleration, and brakes on
                  various roads.
                </p>
              </li>
              <li>
                <p>
                  Listen for unusual noises while driving and pay attention to
                  any vibrations.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="tip-7" className="mb-8 pt-20 px-6">
          <h3 className="text-md md:text-2xl sm:text-2xl font-semibold text-blue-600 mb-4">
            Tip 7: Check the Registration and Insurance Costs
          </h3>

          <p className="text-sm md:text-lg sm:text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            While purchasing a car, don’t overlook the registration and
            insurance costs. These can add up and should be factored into your
            overall budget. Below is a breakdown of both costs.
          </p>

          {/* Registration & Insurance Cost Breakdown */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl md:text-2xl sm:text-2xl font-medium text-blue-500 mb-4">
              Cost Breakdown:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-4 text-sm text-gray-700">
              <div className="text-justify max-w-md ">
                <h3 className="font-semibold text-blue-500 mb-2">
                  Car Registration with RTA
                </h3>
                <p>
                  The registration fee varies depending on the car's age and
                  model. For detailed information, visit the{" "}
                  <a
                    href="https://www.rta.ae"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    RTA website
                  </a>
                  .
                </p>
              </div>
              <div className="text-justify max-w-sm">
                <h5 className="font-semibold text-blue-500">
                  Car Insurance Options
                </h5>
                <p>
                  Comparing insurance options can help you find the best
                  coverage. Popular options include:
                </p>
                <ul className="list-disc pl-5">
                  <li>
                    <a
                      href="https://www.axa-gulf.com"
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      AXA Insurance
                    </a>
                    : Comprehensive coverage packages.
                  </li>
                  <li>
                    <a
                      href="https://www.oic-uae.com"
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      OIC Insurance
                    </a>
                    : Customizable, affordable coverage.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Tip Box */}
          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h4 className="text-lg font-semibold text-blue-600 mb-4">
              Quick Tip:
            </h4>
            <p className="text-sm md:text-md sm:text-md text-justify text-gray-700 mb-4">
              When choosing insurance, consider the car’s safety rating and
              theft risk. Comprehensive coverage might be pricier but can save
              you a lot in the long run.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TableOfContents;
