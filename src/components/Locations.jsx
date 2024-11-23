import React from 'react';
import map from '../assets/map.png'
import wash from '../assets/wash.png'
const Locations = () => {
  return (
    <section className="bg-blue-100 py-8" id='locations'>
      <h2 className="text-2xl font-bold text-center mb-6">
        Your Preferred <span className="text-blue-600">Wash Mate Locations</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-white shadow-md rounded-md p-4 text-center">
        <img src={wash} alt="wash image" />
          <h3 className="text-lg font-semibold mb-2">Surry Hills - Laundry and Dry Cleaning</h3>
          <p className="text-gray-600">326 Crown Street, Surry Hills NSW 2010</p>
          <p className="text-gray-600">+61 403861744</p>
          <button className="mt-4 px-4 py-2 bg-white text-blue-600  hover:bg-blue-200 border border-blue-600 rounded-full transition">
            View Location
          </button>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 text-center">
         <img src={map} alt="map-image" />
          <h3 className="text-lg font-semibold mb-2">Norton Plaza - Leichhardt</h3>
          <p className="text-gray-600">Shop 1026, 55 Norton Street, Leichhardt NSW 2040</p>
          <p className="text-gray-600">+61 403861744</p>
          <button className=" px-4 py-2 mt-8 bg-white text-blue-600 hover:bg-blue-200 border border-blue-600 rounded-full transition">
            View Location
          </button>
        </div>
      </div>
    </section>
  );
};

export default Locations;