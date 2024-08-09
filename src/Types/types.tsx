export interface CountryData {
    country: string;
    countryInfo: {
      flag: string;
    };
    cases: number;
    deaths: number;
    recovered: number;
    tests: number;
    continent: string;
  }

  export interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    status: string;
    email: string;
    phone: string;
  }
  