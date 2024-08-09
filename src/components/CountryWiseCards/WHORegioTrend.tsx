import { CountryData } from "../../Types/types";

const WHORegionTrendsCard: React.FC<{ countries: CountryData[] }> = ({
    countries,
  }) => {
    const regionTrends = countries?.reduce((acc, country) => {
      if (!acc[country.continent]) {
        acc[country.continent] = { cases: 0 };
      }
      acc[country.continent].cases += country.cases;
      return acc;
    }, {} as Record<string, { cases: number }>);
    return (
      <div className="border rounded-md shadow-md">
        <div className="p-3 border-b last:border-b-0">
          <h2 className="text-base font-bold text-gray-700">
            WHO Region Trends
          </h2>
        </div>
        <div className="max-h-[265px] overflow-y-auto flex flex-col gap-1">
          {Object.entries(regionTrends)
            .filter(([region, data]) => region && data.cases > 0)
            .map(([region, data]) => (
              <div
                key={region}
                className="flex justify-between border-b p-2 w-full"
              >
                <div>
                  <span className="text-gray-700 font-medium">{region !== "" && region}</span>
                </div>
                <div className="flex gap-5">
                  <span className="text-gray-700 font-medium">
                    {region !== "" && data.cases.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };


  export default WHORegionTrendsCard;