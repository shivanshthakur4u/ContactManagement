import api from "../../services/api";

export const fetchWorldwideData = () => {
  return api({
    method: "GET",
    url: "/covid-19/all",
  });
};

export const fetchCountryData = () => {
  return api({
    method: "GET",
    url: "/covid-19/countries",
  });
};

export const fetchHistoricalData = () => {
  return api({
    method: "GET",
    url: "/covid-19/historical/all?lastdays=all",
  });
};
