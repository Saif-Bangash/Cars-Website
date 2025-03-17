import React from "react";
import CarDetails from "../CardsFloder/CarDetails "; // Ensure this is the correct path to the CarDetails component

// Audi Car Data
const audiCarData = [
  {
    model: "2019 Audi Q7 55 TFSI",
    type: "Luxury SUV",
    engine: "3.0L V6 Turbocharged",
    power: "335 hp",
    torque: "369 lb-ft",
    transmission: "8-Speed Automatic",
    driveType: "AWD",
    fuelEconomy: "19 MPG City / 25 MPG Hwy",
    description:
      "The 2021 Audi Q7 is an elegant and powerful luxury SUV with a spacious cabin and cutting-edge technology features...",
    features: [
      "Quattro All-Wheel Drive",
      "Panoramic Sunroof",
      "Virtual Cockpit",
      "Advanced Safety Features",
      "Massage Seating",
      "Bose Sound System",
    ],
    images: [
      "https://www.topgear.com/sites/default/files/2024/09/35964-AUDIQ72024DEANSMITH10.jpg?w=1784&h=1004",
      "https://www.topgear.com/sites/default/files/2024/09/35954-AUDIQ72024DEANSMITH20.jpg?w=1784&h=1004",
      "https://www.topgear.com/sites/default/files/2024/09/35948-AUDIQ72024DEANSMITH26.jpg?w=1784&h=1004",
      "https://www.topgear.com/sites/default/files/2024/09/35971-AUDIQ72024DEANSMITH45.jpg?w=1784&h=1004",
      "https://www.topgear.com/sites/default/files/2024/09/35929-AUDIQ72024DEANSMITH49.jpg?w=1784&h=1004",
      "https://www.topgear.com/sites/default/files/2024/09/35898-AUDIQ72024DEANSMITH80.jpg?w=1784&h=1004",
    ],
  },
];

const AudiList = () => {
  return (
    <div>
      {
        // Iterate through audiCarData and pass each car as a prop to CarDetails
        audiCarData.map((car, index) => (
          <CarDetails key={index} car={car} /> // Pass each car data to CarDetails
        ))
      }
    </div>
  );
};

export default AudiList;
