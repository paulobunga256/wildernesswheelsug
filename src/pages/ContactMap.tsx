import { useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPin } from "lucide-react";

const ContactMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 0.3476,
    longitude: 32.5825,
    zoom: 12,
    width: "100%",
    height: "100%",
  });

  return (
    <div className="h-64 bg-slate-200 rounded-xl overflow-hidden">
      <Map
        initialViewState={viewport}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken="pk.eyJ1IjoicGF1bG9idW5nYSIsImEiOiJjbDNvYjBzc3QwMWV1MmtzZmtteDBlMzU5In0.7PvZp41vMybUUOdpCzhyaA"
        onMove={(evt) => setViewport({ ...evt.viewState, width: "100%", height: "100%" })}
      >
        <Marker latitude={0.3476} longitude={32.5825} anchor="bottom">
          <MapPin className="w-6 h-6 text-red-600" />
        </Marker>
      </Map>
    </div>
  );
};

export default ContactMap;
