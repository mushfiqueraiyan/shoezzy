import React from "react";

const Footer = () => {
  const countries = [
    { name: "Canada", flag: "🇨🇦" },
    { name: "United States", flag: "🇺🇸" },
    { name: "Saudi Arabia", flag: "🇸🇦" },
    { name: "United Kingdom", flag: "🇬🇧" },
    { name: "Brazil", flag: "🇧🇷" },
    { name: "Singapore", flag: "🇸🇬" },
  ];

  const stores = [
    "New York",
    "London SF",
    "Cockfosters BP",
    "Los Angeles",
    "Chicago",
    "Las Vegas",
    "Albano",
  ];

  const quickLinks = [
    "Support Center",
    "Term & Conditions",
    "Shipping",
    "Privacy Policy",
    "Help",
    "Products Return",
    "FAQS",
  ];

  return (
    <footer className="bg-gray-100 py-12 px-6 mt-15">
      <div className="max-w-7xl mx-auto">
        {/* Country Flags */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {countries.map((country, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 cursor-pointer transition-colors"
            >
              <span className="text-lg">{country.flag}</span>
              <span className="text-sm font-medium">{country.name}</span>
            </div>
          ))}
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Company guarante secured transaction by signing a debt guarantee
                guarantee contract with Bank for the amount of cash payment by
                the customer
              </p>
              <div className="text-gray-600 text-sm mb-4">
                <p>17 Princess Road, London, Greater</p>
                <p>London NW1 8JR, UK</p>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded text-sm font-medium transition-colors flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                View On Map
              </button>
            </div>
          </div>

          {/* Our Stores */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-gray-800 mb-6 text-lg">
              Our Stores
            </h3>
            <ul className="space-y-3">
              {stores.map((store, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
                  >
                    {store}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-gray-800 mb-6 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-gray-800 mb-6 text-lg">
              Subscribe
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Don't miss to subscribe to our new feeds, kindly fill the form
              below Company guarante secured transaction by signing a debt
              guarantee guarantee contract
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
