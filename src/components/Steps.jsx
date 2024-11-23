import React from 'react'

const Steps = () => {
    const steps = [
        {
          icon: "📱", // Use an emoji or an actual icon from a library like FontAwesome
          title: "Place Your Order",
          description: "Choose a convenient time and book an appointment.",
        },
        {
          icon: "🚚",
          title: "We Collect",
          description: "We collect your laundry and dry cleaning bags.",
        },
        {
          icon: "💳",
          title: "Pay",
          description: "Pay online easily and securely.",
        },
        {
          icon: "🏠",
          title: "Delivery",
          description: "Garment will be delivered right to your doorstep.",
        },
      ];
      
  return (
  <section className="py-16 bg-blue-500 text-white" id='steps'>
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-10">Simple Steps to Book Your Next Pickup</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="text-5xl mb-4">{step.icon}</div>
          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
          <p>{step.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}

export default Steps