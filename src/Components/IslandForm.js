import React from "react";

export default function IslandForm({ island, onBooking }) {
  const handleBooking = () => {
    if (window.confirm(`Confirm booking for ${island.name}?`)) {
      onBooking(island.id);
    }
  };

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input placeholder="Type Full Name" />
      <input placeholder="Type Phone Number" />
      <button className="book" onClick={handleBooking}>
        Book for today!
      </button>
    </div>
  );
}
