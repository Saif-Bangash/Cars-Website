import React from "react";
import CarDetails from "./CarDetails ";

// Genesis Car Data
const genesisCarData = [
  {
    model: "2021 Genesis GV80 2.5T",
    type: "Luxury Performance SUV",
    engine: "2.5L Turbocharged 4-Cylinder",
    power: "300 hp",
    torque: "311 lb-ft",
    transmission: "8-Speed Automatic",
    driveType: "AWD",
    fuelEconomy: "21 MPG City / 25 MPG Hwy",
    description:
      "The 2021 Genesis GV80 2.5T is a premium luxury SUV that combines cutting-edge technology, sleek design, and exceptional performance...",
    features: [
      "Premium Leather Upholstery",
      "12.3-Inch Infotainment Display",
      "Adaptive Cruise Control",
      "Panoramic Sunroof",
      "Advanced Safety Features",
      "Premium Sound System",
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iPHOU6ZDpmzovzT8VHczeezhl6rR640Mcg&s",
      "https://vehicle-images.dealerinspire.com/510c-110005347/KMUHBDSB4MU046915/6426c632fcff1644950275b9566ea357.jpg",
      "https://vehicle-images.dealerinspire.com/b6b5-110005347/KMUHBDSB4MU046915/6a7abb8f72fab4e633d5d54b051523aa.jpg",
      "https://vehicle-images.dealerinspire.com/f0bb-110005347/KMUHBDSB4MU046915/08f256e0ada927d08bcfa56fc62f510e.jpg",
      "https://vehicle-images.dealerinspire.com/c299-110005347/KMUHBDSB4MU046915/efeb685c070319ed8ca8b13adbf4841d.jpg",
      "https://vehicle-images.dealerinspire.com/1785-110005347/KMUHBDSB4MU046915/547a1332057c3c516692e1f96142c9ef.jpg",
    ],
  },
];

const Genesis = () => {
  return (
    <>
      <div>
        {genesisCarData.map((car, index) => (
          <div>
            <CarDetails key={index} car={car} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Genesis;
