import React from "react";

export default function Island({ island, onClick }) {
  const handleIslandClick = () => {
    onClick(island);
  };

  return (
    <div className="Island" onClick={handleIslandClick}>
      <h3>{island.name}</h3>
      <p>Visitors: {island.visitors}</p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}
