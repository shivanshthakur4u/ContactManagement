import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import MarkerImage from "../Assets/Marker.png";
import { useGetCountryData } from "../lib/queryHooks/MapAndChartHooks";

interface CountryData {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
    flag: string;
  };
  active: number;
  recovered: number;
  deaths: number;
  continent: string;
}


// Creating a custom icon using leaflet's Icon class
const customIcon = new Icon({
  iconUrl: MarkerImage,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapChart: React.FC = () => {
  const [selectedContinent, setSelectedContinent] = useState<string>("All");
  const { data: countryData } = useGetCountryData();
  const defaultPosition: LatLngExpression = [0, 0];

  // Filter countries by selected continent
  const filteredCountries =
    selectedContinent === "All"
      ? countryData
      : countryData.filter(
          (country: CountryData) => country.continent === selectedContinent
        );

  // handle option change
  const handleContinentChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedContinent(event.target.value);
  };

  return (
    <div className="border rounded-md shadow-md">
      <div className="flex sm:justify-between sm:flex-row flex-col max-sm:gap-3 mb-1 border-b p-2 items-center">
        <div className="font-bold text-base">Global Trends (World Map)</div>
        <div
          className="border-gray-300 border p-1 px-2 rounded-full focus-within:border
         focus-within:border-gray-600 focus-within:duration-400"
        >
          <select
            value={selectedContinent}
            onChange={handleContinentChange}
            className="focus:outline-none group"
          >
            <option value="All">All Continents</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="North America">North America</option>
            <option value="South America">South America</option>
            <option value="Australia-Oceania">Australia-Oceania</option>
          </select>
        </div>
      </div>

      <MapContainer
        center={defaultPosition}
        zoom={2}
        style={{ height: "300px", width: "100%", zIndex:0 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredCountries?.map((country: CountryData) => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={customIcon}
          >
            <Popup>
              <div>
                <h3 className="flex  gap-4 text-base font-bold">
                  {country.country}{" "}
                  <img
                    src={country?.countryInfo?.flag}
                    alt={country.country}
                    width={24}
                    height={24}
                  />
                </h3>
                <p className="text-base text-gray-600">
                  Active cases:{" "}
                  <span className="text-black font-semibold">
                    {country.active}
                  </span>
                </p>
                <p className="text-base text-gray-600">
                  {" "}
                  Recovered:{" "}
                  <span className="text-black font-semibold">
                    {country.recovered}
                  </span>
                </p>
                <p className="text-base text-gray-600">
                  Deaths:{" "}
                  <span className="text-black font-semibold">
                    {country.deaths}
                  </span>
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapChart;
