import { useState } from "react";
import islands from "../data/islands";
import Island from "./Island";

export default function IslandList({ setIsland }) {
  const [query, setQuery] = useState("");

  const handleIslandClick = (island) => {
    setIsland(island);
  };

  let islandsArray = islands
    .filter((island) => island.name.toLowerCase().includes(query.toLowerCase()))
    .map((island) => (
      <Island key={island.id} island={island} onClick={handleIslandClick} />
    ));

  return (
    <div>
      <input
        className="search"
        placeholder="Search for an island"
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="islandList">{islandsArray}</div>
    </div>
  );
}
