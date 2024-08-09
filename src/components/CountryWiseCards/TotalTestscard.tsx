import { getTopCountries } from "../../lib/Helper";
import { CountryData } from "../../Types/types";

const TotalTestsCard: React.FC<{ countries: CountryData[] }> = ({
    countries,
  }) => {
    const topTestCountries = getTopCountries(countries, "tests");
    return (
      <div className="border rounded-md shadow-md">
        <div className="p-3 border-b">
          <h2 className="text-base font-bold text-gray-700">
            Total Tests by Country
          </h2>
        </div>
        <ul className="max-h-[265px] overflow-y-auto flex flex-col gap-1">
          {topTestCountries.map((country) => (
            <li
              key={country.country}
              className="flex justify-between last:border-b-0 border-b p-2"
            >
              <div className="flex items-center">
                <img
                  src={country.countryInfo.flag}
                  alt={country.country}
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-full"
                />
                <span className="ml-2 text-gray-700 font-medium">
                  {country.country}
                </span>
              </div>
              <span className="text-gray-700 font-medium">
                {country.tests.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default TotalTestsCard;