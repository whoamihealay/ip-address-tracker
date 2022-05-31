import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { ApiLocation } from "../interfaces";

interface IProps {
  location: ApiLocation;
}

const Map = ({ location }: IProps) => {
  const position = [location.lat, location.lng] as LatLngExpression;

  return (
    <MapContainer
      id="map"
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "65vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{location.city}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
