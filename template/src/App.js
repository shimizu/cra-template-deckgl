import React, { useEffect, useState } from "react";
import DeckGL, { MapController } from "deck.gl";
import { renderLayers } from "./components/RenderLayers";

const App = () => {

  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    longitude: -3.2943888952729092,
    latitude: 53.63605986631115,
    zoom: 6,
    maxZoom: 16,
    pitch: 65,
    bearing: 0
  });

  //resize
  useEffect(() => {
    const handleResize = () => {
      setViewport((v) => {
        return {
          ...v,
          width: window.innerWidth,
          height: window.innerHeight
        };
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (

    <div className="App">
      <DeckGL
        layers={renderLayers({
          tileURL: "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
        })}
        controller={{ type: MapController, dragRotate: false }}
        initialViewState={viewport}
      />
      <div className="attribution">
        <a href="http://www.openstreetmap.org/about/" target="_blank" rel="noopener noreferrer">
          © OpenStreetMap
        </a>
      </div>
    </div>
  );
};

export default App;
