import React from 'react';

const FAQ = () => {
  return (
    <section className="py-8" id='faq'>
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked <span className="text-blue-600">Questions</span>
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 p-4 bg-blue-100 rounded-md">
          <h3 className="text-lg font-semibold">What should I prepare for the first pickup?</h3>
          <p className="text-gray-700">
            We aim to collect your clothes, clean them to a professional standard, and get them
            back to you all within 48 hours.
          </p>
        </div>
        <div className="mb-4 p-4 bg-blue-100 rounded-md">
          <h3 className="text-lg font-semibold">Can I add extra items to my order?</h3>
          <p className="text-gray-700">Yes, just let us know when you place your order.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;