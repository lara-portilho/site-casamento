import { Section } from "@components/Section";
import { SectionTitle } from "@components/SectionTitle";
import type { LatLngExpression } from "leaflet";
import { Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export function Localizacao() {
  const coordenadas: LatLngExpression = [-16.7677597361215, -49.21735717377529];

  return (
    <Section id="localizacao">
      <SectionTitle>Localização</SectionTitle>
      <div className="flex flex-col items-center justify-center gap-5 md:mt-5 md:flex-row-reverse md:gap-10">
        <div>
          <p className="text-xl font-bold">19 de setembro 2026, às 16h</p>
          <p className="text-xl font-bold">Casarão Esmeralda</p>
          <p className="mt-5 md:max-w-64">
            Alameda Pedro de Sá - Chácara São Pedro, Aparecida de Goiânia - GO,
            74923-250
          </p>
          <p className="mb-5 text-red-500 md:max-w-64">
            Evite a Av. Sibipiruna, é a estrada de acesso às pedreiras da
            região. Prefira o acesso pela Alameda Pedro de Sá.
          </p>
          <a
            href="https://maps.app.goo.gl/j5Rf8Btj7EjQ6Jv16"
            className="text-midnight underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir no Google Maps
          </a>
        </div>
        <MapContainer
          center={coordenadas}
          zoom={12}
          scrollWheelZoom={true}
          style={{
            minHeight: "18rem",
            width: "100%",
            maxWidth: "26rem",
          }}
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
              <div className="text-center">
                <b>Casarão Esmeralda</b>
                <br />
                Alameda Pedro de Sá - Chácara São Pedro
                <br />
                Aparecida de Goiânia - GO, 74923-250
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </Section>
  );
}
