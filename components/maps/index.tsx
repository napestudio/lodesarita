import { memo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  ZoomControl,
  Popup,
} from "react-leaflet";
import { Icon, LatLngLiteral } from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import { useGlobal } from "@/lib/store";

type MapType = "roadmap" | "satellite" | "hybrid" | "terrain";

type MapLocation = LatLngLiteral & { id: string };

type MapProps = { center: LatLngLiteral; locations: MapLocation[] };

const SelectedLocation = ({ center }: { center: LatLngLiteral }) => {
  const map = useMap();
  map.panTo(center, { animate: true });
  return null;
};

export const Map: React.FC<MapProps> = memo(({ center, locations }) => {
  const { openModalWithSelection } = useGlobal();
  const [mapType, setMapType] = useState<MapType>("terrain");
  const [selectedLocation, setSelectedLocation] = useState<
    MapLocation | undefined
  >();

  const getUrl = () => {
    const mapTypeUrls: Record<MapType, string> = {
      roadmap: "http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}",
      satellite: "http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}",
      hybrid: "http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}",
      terrain: "http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}",
    };
    return mapTypeUrls[mapType];
  };

  const mapMarkIcon = new Icon({
    iconUrl: "map-marker.png",
    iconSize: [37, 50],
  });
  const mapMarkActiveIcon = new Icon({
    iconUrl: "active-map-marker.png",
    iconSize: [57, 65],
  });

  const renderMarks = () => {
    return locations.map((location) => (
      <div key={location.id}>
        <Marker
          icon={
            location.id === selectedLocation?.id
              ? mapMarkActiveIcon
              : mapMarkIcon
          }
          position={{ lat: location.lat, lng: location.lng }}          
        >
          
        </Marker>
      </div>
    ));
  };

  return (
    <div className="container h-[20rem] bg-green overflow-hidden">
      <MapContainer
        center={center}
        zoom={15}
        minZoom={5}
        zoomControl={false}
        attributionControl={false}
        style={{ width: "100%", height: "100%", borderRadius: ".75rem" }}
      >
        <TileLayer url={getUrl()} />
        {selectedLocation && <SelectedLocation center={selectedLocation} />}
        {renderMarks()}
        <ZoomControl position="topright" />
      </MapContainer>
    </div>
  );
});
