import React from 'react';

const MenuItem = ({ title, price, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
    <div className="flex justify-between items-start">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-red-500 font-bold text-lg ml-4">${price}</p>
    </div>
    {description && <p className="text-gray-600 mt-2">{description}</p>}
  </div>
);

const Menu = () => {
  const meats = [
    {
      title: "Brisket",
      price: "20",
      description: "Slow-smoked for 12+ hours, our signature brisket is tender and flavorful"
    },
    {
      title: "Ribs",
      price: "20",
      description: "Fall-off-the-bone tender ribs with our special dry rub"
    },
    {
      title: "Turkey Legs",
      price: "13",
      description: "Giant smoked turkey legs, perfectly seasoned"
    }
  ];

  const specialties = [
    {
      title: "Loaded Mac & Cheese",
      price: "15",
      description: "Creamy mac & cheese topped with your choice of meat"
    },
    {
      title: "Loaded Nachos",
      price: "15",
      description: "Topped with your choice of meat, cheese, and fixings"
    }
  ];

  const sides = [
    {
      title: "Mac & Cheese",
      price: "3"
    },
    {
      title: "Baked Beans",
      price: "3"
    },
    {
      title: "Potato Salad",
      price: "3"
    },
    {
      title: "Coleslaw",
      price: "3"
    }
  ];

  const drinks = [
    { title: "Root Beer", price: "1" },
    { title: "Orange", price: "1" },
    { title: "7-Up", price: "1" },
    { title: "Pepsi", price: "1" },
    { title: "Dr. Pepper", price: "1" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <div className="h-1 w-24 bg-red-500 mx-auto"></div>
        </div>
        
        {/* Meat Plates */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-bbq-brown">Meat Plates</h2>
          <div className="space-y-4">
            {meats.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
          <div className="mt-6 bg-white rounded-lg p-6 shadow-lg border-t-4 border-red-500">
            <h3 className="text-xl font-bold mb-4">Plate Pricing</h3>
            <div className="space-y-2 text-gray-700">
              <p>1 Meat: $20 | 2 Meats: $15 | 3 Meats: $21</p>
              <p>By the pound: $29</p>
              <p className="text-red-500 font-semibold">All plates include 2 sides</p>
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-bbq-brown">Specialties</h2>
          <div className="space-y-4">
            {specialties.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Sides */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-bbq-brown">Sides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sides.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
        </section>

        {/* Drinks */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-bbq-brown">Drinks</h2>
          <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-red-500">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {drinks.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-red-500">${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu; 