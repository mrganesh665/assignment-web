import React from "react";
import wave from "../assets/wave.png";
import man from "../assets/man.svg";

const Hero = () => {
  const backgroundStyle = {
    backgroundImage: `url(${wave})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <section
      style={backgroundStyle}
      className="relative text-white px-6 flex flex-col md:flex-row md:justify-between"
      id="hero"
    >
     
      <div className="max-w-lg text-center py-20 ml-28 md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-2xl lg:text-3xl font-bold mb-4 ">
          We are Full-Service Laundry and Dry Cleaning Professionals
        </h1>
        <p className="text-md md:text-lg lg:text-xl mb-6">
          Our speciality is to make your beloved clothes ready for your
          wardrobe, the way you like and fits in your robe. We understand your
          requirements, aim to deliver the same day or next day service and
          always strive to provide the best service.
        </p>
        <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-full hover:bg-blue-500 hover:text-white">
          Book Now
        </button>
      </div>

 
      <div className="w-4/5 md:w-2/5 lg:w-1/2 hidden md:block">
        <img
          src={man}
          alt="Man illustration"
          className="w-auto] h-[70vh] object-contain "
        />
      </div>
    </section>
  );
};

export default Hero;
