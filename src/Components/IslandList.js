import { useState } from "react";
import Island from "./Island";

export default function IslandList({ islands, onIslandClick }) {
  const [query, setQuery] = useState("");

  const filteredIslands = islands
    .filter((island) => island.name.toLowerCase().includes(query.toLowerCase()))
    .map((island) => (
      <Island key={island.id} island={island} onClick={onIslandClick} />
    ));

  return (
    <div>
      <input
        className="search"
        placeholder="Search for an island"
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="islandList">{filteredIslands}</div>
    </div>
  );
}
