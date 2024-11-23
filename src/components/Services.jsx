import React from "react";
const Services = () => {
    const services = [
  {
    icon: "🧺", // Again, you can replace emojis with proper icons
    title: "Laundry",
    description: "Regular Household Clothes Clean Up, Folded, Ready to go into your Wardrobe for use",
  },
  {
    icon: "🧥",
    title: "Dry Cleaning",
    description: "Professional fabric care for your delicate garments including",
  },
  {
    icon: "🧹",
    title: "Shirt Ironing",
    description: "Perfectly pressed shirts for a polished look including Business Shirts, Silk Blouses and many more",
  },
  {
    icon: "👞",
    title: "Shoe Cleaning",
    description: "Revitalize your footwear with professional care including Jordons, Sneakers and Leather bots",
  },
  {
    icon: "🛏️",
    title: "Doona/Beddings",
    description: "Regular Household Clothes Clean Up, Folded, Ready to go into your Wardrobe for use",
  },
  {
    icon: "👗",
    title: "Designer Wear",
    description: "Professional fabric care for your delicate garments including",
  },
  {
    icon: "👗",
    title: "Leatherand Suede",
    description: "Perfectly pressed shirts for a polished look including Business Shirts, Silk Blouses and many more",
  },
  {
    icon: "👗",
    title: "Wash and Iron",
    description: "Revitalize your footwear with professional care including Jordons, Sneakers and Leather bots",
  },
];

  return (
    <section className="py-16 bg-gray-100" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Professional Care and Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 px-9">{service.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
