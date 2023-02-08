import { useQuery } from "@tanstack/react-query";

async function fetchData(lati: string, longi: string) {
  const URL = `https://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${longi}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;
  const result = await fetch(URL);
  const json = await result.json();
  return json;
}

export function useWeather(lati: string, longi: string) {
  return useQuery(["weather"], () => fetchData(lati, longi);
}
