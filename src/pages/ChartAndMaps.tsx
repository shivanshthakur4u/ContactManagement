import React from "react";
import LineGraph from "../components/LineGraph";
import MapChart from "../components/MapChart";
import { useGetWorldwideData } from "../lib/queryHooks/MapAndChartHooks";
import CovidDataCard from "../components/CovidDataCard";
import { FaFaceSmile, FaSkull, FaVirusCovid } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import CountryWiseDataCards from "../components/CountryCardData";

const ChartAndMaps: React.FC = () => {
  const { data: worldwideData } = useGetWorldwideData();

  const worldwideDataList = [
    {
      title: "Confirmed Cases",
      number: worldwideData?.cases,
      icon: FaVirusCovid,
      todayNumber: worldwideData?.todayCases,
      bgColor: "#EEF7FF",
      iconColor: "#0E46A3",
    },
    {
      title: "Confirmed Deaths",
      number: worldwideData?.deaths,
      icon: FaSkull,
      todayNumber: worldwideData?.todayDeaths,
      bgColor: "#FFEADD",
      iconColor: "#FF0000",
    },
    {
      title: "Confirmed Recovery",
      number: worldwideData?.recovered,
      icon: FaFaceSmile,
      todayNumber: worldwideData?.todayRecovered,
      bgColor: "#DEF9C4",
      iconColor: "#06D001",
    },
    {
      title: "Affected Countries",
      number: worldwideData?.affectedCountries,
      icon: GiWorld,
      todayNumber: worldwideData?.todayCases,
      bgColor: "#D1E9F6",
      iconColor: "#03346E",
    },
  ];

  return (
    <div className="w-full p-4 flex flex-col gap-4">
      {worldwideData && (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 w-full">
          {worldwideDataList.map((data, index) => (
            <CovidDataCard
              key={index}
              title={data.title}
              number={data.number}
              icon={data.icon}
              todayNumber={data.todayNumber}
              bgColor={data.bgColor}
              iconColor={data.iconColor}
            />
          ))}
        </div>
      )}

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <LineGraph />
        <MapChart />
      </div>
      <CountryWiseDataCards />
    </div>
  );
};

export default ChartAndMaps;
