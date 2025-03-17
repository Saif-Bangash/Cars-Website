import React from "react";
import CarDetails from "../CardsFloder/CarDetails ";

const SubaruData = [
  {
    model: "2020 Subaru Ascent Touring 7-Passenger",
    type: "Mid-Size SUV",
    engine: "2.4L Turbocharged Inline-4",
    power: "260 horsepower @ 5,600 rpm",
    torque: "277 lb-ft @ 2,000-4,800 rpm",
    transmission: "Continuously Variable Transmission (CVT)",
    driveType: "All-Wheel Drive (AWD)",
    fuelEconomy: "20 mpg city / 27 mpg highway",
    description:
      "The 2020 Subaru Ascent Touring 7-Passenger is a versatile and family-friendly mid-size SUV designed to provide a comfortable and capable ride for large families. Powered by a 2.4L turbocharged engine, it offers a strong 260 horsepower and 277 lb-ft of torque, making it capable of towing up to 5,000 lbs, ideal for outdoor adventures or road trips.",
    features: [
      "Leather Upholstery",
      "Apple CarPlay and Android Auto",
      "Panoramic Sunroof",
      "Harman Kardon Sound System",
      "EyeSight Driver Assist Technology",
      "Power-Adjustable Front Seats",
      "Tri-Zone Automatic Climate Control",
    ],
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHi05SmPQ6C_nnl_1VocM09D3NDCg142ajCA&s", // Main image
      "https://vehicle-images.dealerinspire.com/3ce5-110009783/4S4WMAPD6S3404687/454b78433f02b188798af2d68b912012.jpg",
      "https://vehicle-images.dealerinspire.com/6c2c-110009783/4S4WMAPD6S3404687/09d24ddd108ea5827ed4c2762446d193.jpg",
      "https://vehicle-images.dealerinspire.com/2c7a-110009783/4S4WMAPD6S3404687/2c61e13abc1cc044210de9286ee616bc.jpg",
      "https://vehicle-images.dealerinspire.com/2f25-110009783/4S4WMAPD6S3404687/538d7f008dd0eeb4a5aabd1848f19875.jpg",
      "https://vehicle-images.dealerinspire.com/d3e0-110009783/4S4WMAPD6S3404687/fb5ba031721be18f618b42bf6ed9df36.jpg",

      // Thumbnail image
    ],
  },
];

const SubaruDetails = () => {
  return (
    <div>
      {SubaruData.map((car, index) => (
        <div key={index}>
          <CarDetails car={car} />
        </div>
      ))}
    </div>
  );
};

export default SubaruDetails;
