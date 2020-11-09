import React from "react";
import { Map, TileLayer } from "react-leaflet";

function MapContainer() {
  return (
    <div className="map">
      <Map>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </div>
  );
}

export default MapContainer;
