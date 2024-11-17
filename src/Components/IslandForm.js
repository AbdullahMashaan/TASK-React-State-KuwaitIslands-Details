import React from "react";

export default function IslandForm({ island, clickFunction }) {
  return (
    <div className="form" onClick={clickFunction}>
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input placeholder="Type Full Name" />
      <input placeholder="Type Phone Number" />
      <button className="book" onClick={() => {}}>
        Book for today!
      </button>
    </div>
  );
}
