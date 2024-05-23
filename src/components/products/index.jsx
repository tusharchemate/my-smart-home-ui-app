import React from "react";
import "./index.css";

const Products = () => {
  // Example product data
  const products = [
    {
      id: 1,
      name: "Smart Light Bulb",
      description: "Energy-efficient LED bulb with Wi-Fi connectivity.",
      price: "$20",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
    {
      id: 2,
      name: "Smart Thermostat",
      description: "Adjust your home temperature from your phone.",
      price: "$120",
    },
    {
      id: 3,
      name: "Smart Security Camera",
      description: "Keep an eye on your home with real-time video.",
      price: "$80",
    },
  ];

  return (
    <div className="products-container">
      <h2>Smart Home Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
