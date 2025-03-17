import React from "react";

const FuelCostUAE = () => {
  // List of ways to avoid high fuel costs
  const waysToAvoidFuelCosts = [
    {
      title: "Carpooling and Ride-Sharing",
      description:
        "Sharing rides with others can drastically reduce the number of vehicles on the road and save fuel. Consider using ride-sharing apps for convenience.",
    },
    {
      title: "Opt for Fuel-Efficient Vehicles",
      description:
        "If possible, switch to a fuel-efficient car that uses less fuel per kilometer. This is a long-term investment that can save you money.",
    },
    {
      title: "Maintain Your Vehicle",
      description:
        "Regularly service your car to ensure it’s running efficiently. Proper tire pressure and engine maintenance can improve fuel economy.",
    },
    {
      title: "Drive Smart",
      description:
        "Avoid sudden accelerations and hard braking. Driving at moderate speeds and maintaining a constant pace can save fuel.",
    },
    {
      title: "Use Public Transportation",
      description:
        "Opting for buses, metros, or trains is an eco-friendly and cost-effective alternative to driving.",
    },
    {
      title: "Plan Efficient Routes",
      description:
        "Plan your trips to avoid congestion and long detours. This will help you save time and fuel.",
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center w-full h-60 md:h-96"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1663100569221-c5379d8abbee?q=80&w=2118&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover", // Ensures the image covers the entire section
          backgroundPosition: "center", // Centers the image
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center text-white relative py-18 md:py-24">
          <h1 className="text-xl md:text-5xl font-bold mb-4">
            The Rising Cost of Fuel in the UAE
          </h1>
          <p className="text-md mb-8">And How You Can Avoid It</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-xl md:text-3xl font-semibold text-blue-900">
          Why Fuel Costs are Rising
        </h1>
        <p className="mt-4 text-sm md:text-lg text-gray-600">
          Fuel prices in the UAE have been steadily increasing over the past few
          years. Several factors, including global market trends, taxes, and
          local demand, are contributing to the rising costs. Here's a closer
          look at why this is happening.
        </p>
      </section>

      {/* Reasons for Rising Fuel Costs */}
      <section className="container mx-auto px-6 py-12 bg-gray-100 rounded-lg shadow-md max-w-6xl">
        <h1 className="text-xl md:text-3xl font-semibold text-blue-900">
          Reasons for Rising Fuel Costs
        </h1>
        <ul className="mt-6 space-y-4 text-sm md:text-lg text-gray-600">
          <li className="flex items-start">
            <span className="text-xl text-blue-900">&#10003;</span>
            <p className="ml-3">Global crude oil price fluctuations.</p>
          </li>
          <li className="flex items-start">
            <span className="text-xl text-blue-900">&#10003;</span>
            <p className="ml-3">Government fuel subsidy reductions.</p>
          </li>
          <li className="flex items-start">
            <span className="text-xl text-blue-900">&#10003;</span>
            <p className="ml-3">Supply and demand imbalances.</p>
          </li>
          <li className="flex items-start">
            <span className="text-xl text-blue-900">&#10003;</span>
            <p className="ml-3">
              Rising transportation and distribution costs.
            </p>
          </li>
        </ul>
      </section>

      {/* Ways to Avoid High Fuel Costs */}
      <section className="container mx-auto px-6 py-12 max-w-6xl">
        <h1 className="text-xl md:text-3xl font-semibold text-blue-900">
          Ways to Avoid High Fuel Costs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {waysToAvoidFuelCosts.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 ">
              <h3 className="text-md md:text-md  font-semibold text-blue-900">{`${
                index + 1
              }. ${item.title}`}</h3>
              <p className="text-gray-600 mt-4 text-sm md:text-[16px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FuelCostUAE;
