import React from 'react';
import review from '../assets/review.jpeg'

const Reviews = () => {
  return (
    <section className="bg-gray-100 py-8" id='review'>
      <h2 className="text-2xl font-bold text-center mb-4">
        Most Loved <span className="text-blue-600">Customer Reviews</span>
      </h2>
             
      <div className="bg-white shadow-md rounded-md p-4 mx-auto max-w-5xl text-center">
          <div className='flex flex-row'>
            <div><img className='w-[100px] h-[98px]  rounded-full m-10' src={review} alt="review image" /></div>

            <div className='flex flex-col justify-center m-0'>
                <div className='text-lg font-bold'><h1>Leon Zhang</h1></div>
                <div><p>Google Reviews </p></div>
            </div>
          </div>
        <p className="text-gray-700 mb-4">
          "The wonderful team at Wash Mate did a great job dry cleaning my two-piece suit, which was in quite a state when I gave it to them. Stains were removed and now looks good as new. Plus they were able to do the job in one day over the weekend. I dropped my suit off on Saturday and picked it up on Sunday. It is very hard to find a dry cleaner in Sydney that can provide this level of service."
        </p>
        <button className="px-4 py-2 bg-white text-blue-600  hover:bg-blue-200 border border-blue-600 rounded-full transition">
          See All Reviews
        </button>
      </div>
    </section>
  );
};

export default Reviews;