import React from 'react';
import stains from '../assets/Stains.png'
import pet from '../assets/pet.png'
import luxury from '../assets/luxury jacket.png'
import pressed from '../assets/Pressed.png'

const Blog = () => {
  return (
    <section className="py-8" id='blog'>
      <h2 className="text-2xl font-bold text-center mb-6">
        Our <span className="text-blue-600">Blog</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="bg-white shadow-md rounded-md p-4 text-center">
        <img src={stains} alt="img" />
          <h3 className="text-lg font-semibold mb-2">Expert Stain Removal</h3>
          <p className="text-gray-600">Say goodbye to tough stains!</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 text-center">
        <img src={pressed} alt="img" />
          <h3 className="text-lg font-semibold mb-2">Expert Shirt Pressing</h3>
          <p className="text-gray-600">Perfect your formal look!</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 text-center">
        <img src={luxury} alt="img" />
          <h3 className="text-lg font-semibold mb-2">Expert Fur Jacket Care</h3>
          <p className="text-gray-600">Preserve your luxurious garments.</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4 text-center">
        <img src={pet} alt="img" />
          <h3 className="text-lg font-semibold mb-2">Pet Bedding Cleaning</h3>
          <p className="text-gray-600">Keep your pet's space clean and cozy!</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;