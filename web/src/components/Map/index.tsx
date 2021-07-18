import React from "react";
import {
  Map as LeafletMap,
  MapProps as LeafletMapProps,
  TileLayer,
} from "react-leaflet";

interface MapProps extends LeafletMapProps {
  interactive?: boolean;
  children: React.ReactNode;
}

export default function Map({
  children,
  interactive = true,
  ...props
}: MapProps) {
  return (
    <LeafletMap
      center={[-28.6909404, -49.3766397]}
      zoom={15}
      style={{ width: "100%", height: "100%" }}
      dragging={interactive}
      touchZoom={interactive}
      zoomControl={interactive}
      scrollWheelZoom={interactive}
      doubleClickZoom={interactive}
      {...props}
    >
      <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* 
      <TileLayer 
            url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{u}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}  
      />  */}
      {children}
    </LeafletMap>
  );
}
