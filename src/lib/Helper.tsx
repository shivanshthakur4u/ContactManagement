import { CountryData } from "../Types/types";

  // Helper function to sort and slice data
  export const getTopCountries = (
    countries: CountryData[],
    key: keyof CountryData
  ) => {
    return [...countries]
      .sort((a, b) => (b[key] as number) - (a[key] as number))
      .slice(0);
  };