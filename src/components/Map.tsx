import { LatLngExpression } from "leaflet";
import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { ApiLocation } from "../interfaces";

interface IProps {
  location?: ApiLocation;
}

const Map = ({ location }: IProps) => {
  const [position, setPosition] = useState<LatLngExpression>([0, 0]);

  const LocationMarker = () => {
    const map = useMap();

    useEffect(() => {
      map.flyTo(position);
    }, [position]);

    return position === null ? null : <Marker position={position} />;
  };

  useEffect(() => {
    location && setPosition([location.lat, location.lng]);
  }, [location]);

  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "65vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </>
  );
};

export default Map;
