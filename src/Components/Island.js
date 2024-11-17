import React from "react";

export default function Island({ island, onClick }) {
  return (
    <div className="Island" onClick={() => onClick(island)}>
      <h3>{island.name}</h3>
      <p>Visitors {island.visitors}</p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}
