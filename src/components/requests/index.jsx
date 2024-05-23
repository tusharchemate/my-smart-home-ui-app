import React from "react";
import "./index.css";

const Requests = () => {
  const requests = [
    {
      id: 1,
      name: "Smart Light Bulb",
      description: "Energy-efficient LED bulb with Wi-Fi connectivity.",
      price: "$20",
    },
  ];

  return (
    <div className="Requests-container">
      <h2>My Requests</h2>
      <div className="request-list">
        {requests.map((request) => (
          <div key={request.id} className="request-card">
            <h3>{request.name}</h3>
            <p>{request.description}</p>
            <p className="price">{request.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Requests;
