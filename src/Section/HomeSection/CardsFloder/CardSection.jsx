import React, { useRef } from "react";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { cards } from "../../../Constants"; // Assuming you have card data

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const CardSection = () => {
  // Create a ref for the Slider component
  const sliderRef = useRef(null);

  // Go to previous slide
  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Go to next slide
  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: false, // Disable dots navigation
    infinite: true, // Enable infinite loop (loop back to the first slide)
    speed: 500, // Transition speed in ms
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time between slide transitions in ms
    pauseOnHover: true, // Pause autoplay when hovered
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 slides on medium screens
          arrows: false, // Show arrows on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets
          arrows: false, // Show arrows on tablets
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          arrows: false, // Hide arrows on small screens
        },
      },
    ],
  };

  return (
    <section className="mt-140 sm:mt-120 md:mt-25 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-md  md:text-3xl sm:text-3xl lg:text-4xl font-semibold text-gray-800">
            Special Offers
          </h1>
          <div className="flex items-center gap-4">
            {/* Custom Previous Button */}
            <button
              onClick={goToPrev}
              className="text-gray-600 hover:text-green-600 transition p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              <IoIosArrowBack className="text-lg" />
            </button>

            {/* Custom Next Button */}
            <button
              onClick={goToNext}
              className="text-gray-600 hover:text-green-600 transition p-2 rounded-full border border-gray-300 hover:bg-gray-100"
            >
              <IoIosArrowForward className="text-lg" />
            </button>

            <button className="flex items-center gap-2 text-gray-600 px-4 py-2">
              See All
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <Slider ref={sliderRef} {...settings}>
          {cards.map((card, index) => (
            <div className="p-4" key={index}>
              <a href={`${card.id}`}>
                <div className="bg-white rounded-xl p-6 shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
                  {/* Image with consistent height */}
                  <img
                    src={card.Image}
                    alt={card.model}
                    className="w-full h-48 object-cover rounded-t-lg" // Same height for images
                  />{" "}
                  <button className="text-blue-600 hover:underline mb-4 my-2 bg-amber-100 px-4 rounded-md font-bold">
                    Details
                  </button>
                  {/* Card Content */}
                  <div className=" h-28 flex flex-col justify-between">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 capitalize overflow-hidden text-ellipsis whitespace-nowrap">
                      {card.model}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                      {card.used}
                    </p>
                    <p className="text-lg font-bold text-green-500">
                      {card.price}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CardSection;
