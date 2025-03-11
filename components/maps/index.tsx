import { useMemo } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
} from "react-leaflet";
import { Icon, LatLngLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";

type MapLocation = LatLngLiteral;
type MapProps = { center: LatLngLiteral; locations: MapLocation[] };

export default function Map({ center, locations }: MapProps) {
  const mapMarkIcon = useMemo(
    () =>
      new Icon({
        iconUrl: "map-marker.png",
        iconSize: [37, 37],
      }),
    []
  );

  return (
    <div className="container h-[28rem] bg-green overflow-hidden">
      <MapContainer
        center={center}
        zoom={15}
        minZoom={5}
        zoomControl={false}
        attributionControl={false}
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        touchZoom={false}
        keyboard={false}
        style={{ width: "100%", height: "100%", borderRadius: ".75rem" }}
      >
        <TileLayer url="http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}" />
        {locations.map((location, i) => (
          <Marker
            key={i}
            icon={mapMarkIcon}
            position={{ lat: location.lat, lng: location.lng }}
          />
        ))}
      </MapContainer>
    </div>
  );
}
