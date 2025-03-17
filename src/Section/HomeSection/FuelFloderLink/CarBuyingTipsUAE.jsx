import React from "react";

const CarBuyingTipsUAE = () => {
  // Array of tips with images
  const tips = [
    {
      title: "Do Your Research",
      description:
        "Before buying a car, do some research on the make, model, and pricing. Consider your needs, whether you need an SUV, sedan, or hatchback, and compare prices from multiple dealerships.",
    },
    {
      title: "Consider Fuel Economy",
      description:
        "Fuel efficiency is important for long-term savings. Check the fuel consumption of the car you’re considering to ensure you make an economical choice, especially with rising fuel prices in the UAE.",
    },
    {
      title: "Check for Warranty & Service Plans",
      description:
        "Ensure the car comes with a good warranty and service plan. Many car brands in the UAE offer extended warranties, free service packages, or maintenance for a limited time.",
    },
    {
      title: "Evaluate Safety Features",
      description:
        "Safety should be a top priority when buying a new car. Check for modern safety features such as airbags, lane-keeping assist, automatic emergency braking, and a good crash-test rating.",
    },
    {
      title: "Factor in Insurance Costs",
      description:
        "Insurance premiums can vary depending on the car model. Be sure to get an estimate for your insurance costs before finalizing the purchase to avoid surprises later.",
    },
    {
      title: "Understand the Financing Options",
      description:
        "Many dealerships offer financing options, but it’s important to compare interest rates and loan terms. Choose the plan that suits your budget and avoid any hidden fees.",
    },
    {
      title: "Consider Resale Value",
      description:
        "Some cars retain their value better than others. Choose a car that has a good resale value, especially if you plan to upgrade or sell the car in the future.",
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center w-full h-60 sm:h-65 md:h-75 lg:h-96"
        style={{
          backgroundImage:
            "url(https://d3jvxfsgjxj1vz.cloudfront.net/news/wp-content/uploads/2019/08/29112851/Rajab-Motors-Showroom-Pictures-4.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center text-white relative py-18 md:py-24 flex flex-col justify-center items-center">
          <h1 className="text-md md:text-4xl lg:text-5xl sm:text-2xl font-bold mb-4">
            7 Tips When Buying a New Car in the UAE
          </h1>
          <p className="text-xs mb-8 lg:text-xl sm:text-sm max-w-xs md:max-w-md  ">
            Make sure you're making the right choice with these expert tips!
          </p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="container mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-lg md:text-3xl font-semibold text-blue-900 text-center mb-6">
          7 Expert Tips for Buying a Car in the UAE
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 flex">
              <div>
                <h3 className="text-md md:text-xl font-semibold text-blue-900">
                  {tip.title}
                </h3>
                <p className="text-gray-600 mt-4 text-sm md:text-[16px]">
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CarBuyingTipsUAE;
