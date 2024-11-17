import './App.css';
import Header from './Components/Header';
import IslandForm from './Components/IslandForm';
import IslandList from './Components/IslandList';
import { useState } from 'react';
import islandsData from './data/islands';

function App() {
  const [islands, setIslands] = useState(islandsData);
  const [selectedIsland, setSelectedIsland] = useState(islandsData[1]); // Initial island: Boubyan

  const handleIslandClick = (island) => {
    setSelectedIsland(island);
  };

  const handleBooking = (islandId) => {
    const updatedIslands = islands.map(island => {
      if (island.id === islandId) {
        return Object.assign({}, island, { visitors: island.visitors + 1 });
      }
      return island;
    });
    setIslands(updatedIslands);
    setSelectedIsland(updatedIslands.find(island => island.id === islandId));
  };

  return (
    <div>
      <Header />
      <div className="homePage">
        <IslandList islands={islands} onIslandClick={handleIslandClick} />
        <IslandForm island={selectedIsland} onBooking={handleBooking} />
      </div>
    </div>
  );
}

export default App;
