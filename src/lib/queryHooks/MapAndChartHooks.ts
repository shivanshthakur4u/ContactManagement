import { useQuery } from "@tanstack/react-query"
import { fetchCountryData, fetchHistoricalData, fetchWorldwideData } from "../queries/MapAndChartQuery"



export const useGetWorldwideData =()=>{
    return useQuery({
        queryKey:["worldwideData"],
        queryFn: async()=>await fetchWorldwideData(),
        select:(data)=>data?.data,
    })
}

export const useGetCountryData =()=>{
    return useQuery({
        queryKey:["countryData"],
        queryFn: async()=>await fetchCountryData(),
        select:(data)=>data?.data,
    })
}

export const useGetHistoricalData =()=>{
    return useQuery({
        queryKey:["historicalData"],
        queryFn: async()=>await fetchHistoricalData(),
        select:(data)=>data?.data,
    })
}