import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";

const MapComponent = () => {
  const AnyReactComponent = () => (
    <div>
      <Image
        width={40}
        height={40}
        src={Logo}
        alt="کلینیک درمان ناخن بهار پودولوژی"
      />
    </div>
  );
  return (
    <MapContainer
      style={{ width: "100%", height: "100%", borderRadius: 30 }}
      center={[36.270701307908205, 50.01019921670566]}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[36.270701307908205, 50.01019921670566]}
        children={AnyReactComponent}
      />
      {/* <AnyReactComponent /> */}
    </MapContainer>
  );
};
export default MapComponent;
