import 'leaflet/dist/leaflet.css';
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import 'leaflet/dist/leaflet.css';
import "./Map.scss";
import Pin from "../pin/Pin";

const Map = ({item}) => {
  const position = [51.505, -0.09];
  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        item.map(item=>(
            <Pin key={item.id} item={item}/>
        ))
      }
    </MapContainer>
  );
};

export default Map;
