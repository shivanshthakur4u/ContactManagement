import React from "react";
import { useGetCountryData } from "../lib/queryHooks/MapAndChartHooks";
import TotalTestsCard from "./CountryWiseCards/TotalTestscard";
import TopAffectedCountriesCard from "./CountryWiseCards/TopAffectedCountries";
import WHORegionTrendsCard from "./CountryWiseCards/WHORegioTrend";

const CountryWiseDataCards: React.FC = () => {
  const { data: countries } = useGetCountryData();
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
      {countries && <TopAffectedCountriesCard countries={countries} />}
      {countries && <WHORegionTrendsCard countries={countries} />}
      {countries && <TotalTestsCard countries={countries} />}
    </div>
  );
};

export default CountryWiseDataCards;
