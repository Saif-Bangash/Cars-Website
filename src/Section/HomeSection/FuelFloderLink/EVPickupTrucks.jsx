import React from "react";

const EVPickupTrucks = () => {
  // Array of EV Pickup Truck models
  const evPickupTrucks = [
    {
      title: "Rivian R1T",
      description:
        "The Rivian R1T is a powerful all-electric pickup truck that combines performance, rugged capability, and luxury features. With a 314-mile range, it’s perfect for adventurous road trips.",
      image:
        "https://dolubatarya.com/uploads/2021/10/rivian-r1t-battery-capacity-21.jpeg",
    },
    {
      title: "Ford F-150 Lightning",
      description:
        "The Ford F-150 Lightning is a fully electric version of America's best-selling truck. It offers impressive towing capacity, advanced tech, and a zero-emissions future, making it a game-changer in the truck industry.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHFYFwgQFYol2aByI2Bv2qj0IKu0v9eFKNlQ&s",
    },
    {
      title: "Cybertruck by Tesla",
      description:
        "Tesla’s Cybertruck is a futuristic electric pickup with a unique design, unbreakable exoskeleton, and ultra-high performance. With its strong build and off-road capabilities, it’s setting new standards in the EV truck market.",
      image:
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/tesla-cybertruck-review-2024-01-front-tracking.jpg",
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center w-full h-70 md:h-96 sm:h-75"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1733342421852-3bce709563e4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container max-w-xs md:max-w-4xl sm:max-w-3xl mx-auto text-center text-white relative py-24">
          <h1 className="text-lg font-bold mb-4 md:text-4xl sm:text-3xl">
            EV Pickup Trucks: The Future of Driving
          </h1>
          <p className="text-xs md:text-md sm:text-sm mb-8">
            Powerful, efficient, and sustainable – these trucks are about to
            revolutionize the industry.
          </p>
        </div>
      </section>

      {/* EV Pickup Trucks Section */}
      <section className="container mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-xl md:text-3xl font-semibold text-blue-900 text-center">
          The Hottest EV Pickup Trucks Right Now
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {evPickupTrucks.map((truck, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-40 object-cover  md:h-45 sm:h-60"
                src={truck.image}
                alt={truck.title}
              />
              <div className="p-6">
                <h3 className="text-md md:text-lg sm:text-xl font-semibold text-blue-900">
                  {truck.title}
                </h3>
                <p className="text-gray-600 mt-4 text-justify tracking-wide text-sm md:text-[16px] sm:text-[18px]">
                  {truck.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EVPickupTrucks;
