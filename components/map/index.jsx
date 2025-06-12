import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { MdLocationOn } from "react-icons/md";
import { CONFIG } from "@/constant/config";

const MapComponent = () => {
  return (
    <MapContainer
      style={{ width: "100%", height: "100%", borderRadius: 30 }}
      center={[35.960392, 50.72068]}
      zoom={9}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[35.758352, 51.457945]}>
        <MdLocationOn color="red" style={{ color: "red", fontSize: 40 }} />
      </Marker>
      <Marker position={[36.289594, 50.014944]}>
        <MdLocationOn color="red" style={{ color: "red", fontSize: 40 }} />
      </Marker>
    </MapContainer>
  );
};
export default MapComponent;
