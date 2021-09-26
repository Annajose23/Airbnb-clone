import ReactMapGL from "react-map-gl";
import { useState } from "react";

function Map() {
    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      });
    
      return (
        <ReactMapGL
        mapStyle="mapbox://styles/joann23july/cku13h7sl113017mprlyzkoep"
        mapboxApiAccessToken={process.env.ACCESS_TOKEN}
          {...viewport}
          
        />
      );
}

export default Map;
