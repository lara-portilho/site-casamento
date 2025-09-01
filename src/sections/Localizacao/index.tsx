import { SectionTitle } from "@components/SectionTitle";
import type { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

export function Localizacao() {
  const coordenadas: LatLngExpression = [51.505, -0.09];

  return (
    <section id="localizacao" className="text-center">
      <SectionTitle>Localização</SectionTitle>
      <div className="flex-row-reverse items-center justify-center gap-5 md:flex">
        <div>
          <p>
            A cerimônia ocorrerá na <b>Chácara N'Cantos</b>
          </p>
          <p>Endereço: lorem</p>
          <p>Abrir no Google Maps</p>
        </div>
        <MapContainer
          center={coordenadas}
          zoom={13}
          scrollWheelZoom={true}
          style={{ minHeight: "18rem", width: "100%", maxWidth: "26rem" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={coordenadas}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}
