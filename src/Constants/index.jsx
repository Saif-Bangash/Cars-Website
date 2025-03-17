/* eslint-disable react-refresh/only-export-components */
import { AiFillFund, AiFillGift } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { SiThreema } from "react-icons/si";

import { FaBriefcaseMedical } from "react-icons/fa";
import { SiUblockorigin } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";

// Importing images correctly
import Image from "../assets/cards-img.png";
import Image2 from "../assets/card-img2.webp";
import Image3 from "../assets/card-img3.png";
import Image4 from "../assets/card-img4.png";
import Image5 from "../assets/card-img5.png";

// cars logo img...// cars logo img...// Importing images correctly
import carlogo1 from "../assets/ford.png";
import carlogo2 from "../assets/volkswagen.png"; // Fixed here, removed extra space
import carlogo3 from "../assets/volvo.jpg";
import carlogo4 from "../assets/Tesla.png";
import carlogo5 from "../assets/Land-Rover.jpg";
import carlogo6 from "../assets/Lexus.png";
import Imagestar from "../assets/group-start.webp";

// client img ....

import clinetImage1 from "../assets/Ellipse 1.png";
import clinetImage2 from "../assets/Ellipse 2.png";
import clinetImage3 from "../assets/Ellipse 3.png";
import clinetImage4 from "../assets/Ellipse 4.png";

// Read blogs img...
import img1 from "../assets/Rectangle 2.png";
import img2 from "../assets/Rectangle 3.png";
import img3 from "../assets/Rectangle 4.png";

// Blogs & News images....

import Blogimg1 from "../assets/Desktop/BlogsImg.png";
import Blogimg2 from "../assets/Desktop/BlogsImg2.png";
import Blogimg3 from "../assets/Desktop/BlogsImg3.png";
import Blogimg4 from "../assets/Desktop/BlogsImg4.png";
import Blogimg5 from "../assets/Desktop/BlogsImg5.png";
import Blogimg6 from "../assets/Desktop/BlogsImg6.png";
import Blogimg7 from "../assets/Desktop/BlogsImg7.png";
import Blogimg8 from "../assets/Desktop/BlogsImg8.png";

// featured post new images...

import Newsimg1 from "../assets/Desktop/Newsimg.png";
import Newsimg2 from "../assets/Desktop/Newsimg2.png";
import Newsimg3 from "../assets/Desktop/Newsimg3.png";
import Newsimg4 from "../assets/Desktop/Newsimg4.png";
import Newsimg5 from "../assets/Desktop/Newsimg5.png";
import Newsimg6 from "../assets/Desktop/Newsimg6.png";

// Menu items for navigation
const menu = [
  {
    name: "All Cars",
    icon: FaChevronDown,
    path: "/", // Path for All Cars
  },
  {
    name: "About Us",
    icon: FaChevronDown,
    path: "/about-us", // Path for About Us
  },
  {
    name: "Blogs",
    icon: FaChevronDown,
    path: "/blogs", // Path for Blogs
  },
  {
    name: "Contacts",
    icon: FaChevronDown,
    path: "/contacts", // Path for Contacts
  },
];

// Card data for features
const cardData = [
  {
    icon: <SiThreema />,
    title: "Professional approach to clients",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
  {
    icon: <AiFillGift />,
    title: "Protect all payments",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
  {
    icon: <AiFillFund />,
    title: "Real reviews from clients",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
];

// Cards data for cars, now the images are set correctly
const cards = [
  {
    id: "genesis",
    Image: Image,
    model: "2021 Genesis GV80 2.5T",
    used: "Used • 27,057 mi • Petrol",
    price: "$45,995",
  },
  {
    id: "audiList",
    Image: Image2,
    model: "2019 Mitsubishi Outlander Sport 2.0 SE",
    used: "Used • 27,057 mi • Petrol",
    price: "$45,995",
  },
  {
    id: "bmwlist",
    Image: Image3,
    model: "2019 BMW 640 Gran Turismo i xDrive",
    used: "Used • 27,057 mi • Petrol",
    price: "$45,995",
  },
  {
    id: "Subaru",
    Image: Image4,
    model: "2020 Subaru Ascent Touring 7-Passenger",
    used: "Used • 27,057 mi • Petrol",
    price: "$45,995",
  },
  {
    id: "Subaru",
    Image: Image5,
    model: "2020 Subaru Ascent Touring 7-Passenger",
    used: "Used • 27,057 mi • Petrol",
    price: "$45,995",
  },
];

const carlogo = [
  {
    image: carlogo1,
    logo: "Ford",
  },
  {
    image: carlogo2,
    logo: "Volkswagen",
  },
  {
    image: carlogo3,
    logo: "Volvo",
  },
  {
    image: carlogo4,
    logo: "Tesla",
  },
  {
    image: carlogo5,
    logo: "Lexus",
  },
  {
    image: carlogo6,
    logo: "Land Rover",
  },
];

const Featurecards = [
  {
    number: "1",
    title: "Find a car",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
  {
    number: "2",
    title: "Extensive inspection",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
  {
    number: "3",
    title: "Safe Buying",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
  {
    number: "4",
    title: "Delivery and support",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
];
const aboutDetails = [
  {
    headline: "Some Headline 1",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
  {
    headline: "Some Headline 2",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
  {
    headline: "Some Headline 3",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
];

const clientOverview = [
  {
    clientimg: clinetImage1,
    name: "Robert Fox",
    starimg: Imagestar,
    title: "BMW M850",
    description:
      "“Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies lacus. Nisi porta lorem mollis aliquam ut porttitor leo. Venenatis cras sed felis eget. Duis ultricies lacus sed turpis tincidunt. Interdum varius sit amet mattis. Libero justo laoreet sit amet cursus sit amet dictum sit. Consequat interdum varius sit amet mattis vulputate enim nulla.”",
  },
  {
    clientimg: clinetImage2,
    name: "Cody Fisher",
    starimg: Imagestar,
    title: "Mercedes-Benz AMG",
    description:
      "“Id ornare arcu odio ut sem nulla. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Velit dignissim sodales ut eu sem integer vitae justo. A erat nam at lectus urna duis convallis convallis. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Risus ultricies tristique nulla aliquet enim tortor. Consectetur a erat nam at.”",
  },
  {
    clientimg: clinetImage3,
    name: "Wade Warren",
    starimg: Imagestar,
    title: "Lexus LS 460",
    description:
      "“Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse interdum consectetur. Accumsan lacus vel facilisis volutpat est velit egestas dui id.“",
  },
  {
    clientimg: clinetImage4,
    name: "Robert Fox",
    starimg: Imagestar,
    title: "BMW M850",
    description:
      "“Adipiscing at in tellus integer. Pellentesque massa placerat duis ultricies lacus. Nisi porta lorem mollis aliquam ut porttitor leo. Venenatis cras sed felis eget. Duis ultricies lacus sed turpis tincidunt. Interdum varius sit amet mattis. Libero justo laoreet sit amet cursus sit amet dictum sit. Consequat interdum varius sit amet mattis vulputate enim nulla.”",
  },
];

const ReadBlogdata = [
  {
    id: "fuelscost",
    Readimg: img1,
    button: "Guides",
    title: "The rising cost of fuel in the UAE and how to avoid it",
    text: "Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse interdum consectetur.",
  },
  {
    id: "pickup",
    Readimg: img2,
    button: "News",
    title: "These new EV pick up trucks are about to be all the rage",
    text: "Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse interdum consectetur.",
  },
  {
    id: "carbuying",
    Readimg: img3,
    button: "Guides",
    title: "7 tips when buying a new car in UAEt",
    text: "Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse interdum consectetur.",
  },
];
const benefitsData = [
  {
    icon: <FaBriefcaseMedical />,
    title: "Professional approach to clients",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
  {
    icon: <SiUblockorigin />,
    title: "Security and Trust",
    description:
      "Rhoncus aenean vel elit scelerisque mauris pellentesque. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi.",
  },
  {
    icon: <TbBrandYoutubeKids />,
    title: "Creative and Innovative Solutions",
    description:
      "Consequat id porta nibh venenatis cras sed. Pellentesque habitant morbi tristique senectus et.",
  },
];
const BlogNewsData = [
  {
    Image: Blogimg1,
    button: "Guide",
    title: "7 tips when buying a new car in UAE",
    description:
      "Platea dictumst quisque sagittis purus sit amet volutpat consequat. Porta nibh venenatis cras sed felis eget.",
  },
  {
    Image: Blogimg2,
    button: "Guide",
    title: "The rising cost of fuel in the UAE and how to avoid it",
    description:
      "Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse .",
  },
  {
    Image: Blogimg3,
    button: "News",
    title: "Kia is operating eco-friendly vehicles at the World Cup",
    description:
      "Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse .",
  },
  {
    Image: Blogimg4,
    button: "News",
    title: "The UAE’s Big Push Into Electric Vehicles Continues",
    description:
      "Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse .",
  },
  {
    Image: Blogimg5,
    button: "Guide",
    title: "How to take the best shots of your car to get a sale",
    description:
      "Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse .",
  },
  {
    Image: Blogimg6,
    button: "News",
    title:
      "Michelin launches construction on its first tire recycling plant in the world",
    description:
      "Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse .",
  },
  {
    Image: Blogimg7,
    button: "Review",
    title: "2021 Lexus LC500; a daily sports car",
    description:
      "Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse .",
  },
  {
    Image: Blogimg8,
    button: "Guide",
    title: "How to test drive a used car in UAE",
    description:
      "Accumsan sit amet nulla facilisi morbi tempus iaculis. Nisl nunc mi ipsum faucibus. Pulvinar neque laoreet suspendisse  .",
  },
];

const postNewsData = [
  {
    Image: Newsimg1,
    button: "Guides",
    title: "What is a VIN (Vehicle Identification Number)?",
  },
  {
    Image: Newsimg2,
    button: "News",
    title: "Will the flying car from GITEX become a reality?",
  },
  {
    Image: Newsimg3,
    button: "Guide",
    title: "Indicate! It could save your life and your bank account",
  },
  {
    Image: Newsimg4,
    button: "Guide",
    title: "GCC Specs a Comparison with Imported Specs Cars",
  },
  {
    Image: Newsimg5,
    button: "News",
    title:
      "How Dubai is emerging as a key leader in the international sustainability movement",
  },
  {
    Image: Newsimg6,
    button: "Reviews",
    title: "2021 Volvo S60; an underrated executive sedan",
  },
];

export {
  menu,
  cardData,
  cards,
  carlogo,
  Featurecards,
  aboutDetails,
  clientOverview,
  ReadBlogdata,
  benefitsData,
  BlogNewsData,
  postNewsData,
};
