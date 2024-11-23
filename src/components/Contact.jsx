import React from 'react';
import bgImage from '../assets/bg.jpeg';

const Contact = () => {
  const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <section className="relative" style={backgroundStyle} id='contact'>
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Get in Touch
        </h2>
        <form className="max-w-lg w-full bg-white p-6 shadow-md rounded-md">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter Email ID"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Enter Message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
